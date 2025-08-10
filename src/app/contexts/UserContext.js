'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  // User states
  const [userType, setUserType] = useState('guest')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Usage tracking
  const [qrCodesGenerated, setQrCodesGenerated] = useState(0)
  const [lastResetDate, setLastResetDate] = useState(new Date().toDateString())

  // Initialize auth state
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        handleUserSession(session.user)
      } else {
        handleNoSession()
      }
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        handleUserSession(session.user)
      } else {
        handleNoSession()
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Load usage tracking data when user signs in
  useEffect(() => {
    if (isSignedIn && userId) {
      loadUsageData()
    }
  }, [isSignedIn, userId])

  const handleUserSession = async (supabaseUser) => {
    setUser(supabaseUser)
    setUserId(supabaseUser.id)
    setIsSignedIn(true)

    // Get or create user profile
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', supabaseUser.id)
      .single()

    if (error && error.code === 'PGRST116') {
      // Profile doesn't exist, create one
      const newProfile = {
        id: supabaseUser.id,
        email: supabaseUser.email,
        user_type: 'free',
        created_at: new Date().toISOString()
      }

      const { data: createdProfile, error: createError } = await supabase
        .from('profiles')
        .insert([newProfile])
        .select()
        .single()

      if (createError) {
        console.error('Error creating profile:', createError)
        setUserType('free') // fallback
      } else {
        setUserType(createdProfile.user_type || 'free')
      }
    } else if (profile) {
      setUserType(profile.user_type || 'free')
    } else {
      console.error('Error fetching profile:', error)
      setUserType('free') // fallback
    }
  }

  const handleNoSession = () => {
    setUser(null)
    setUserId(null)
    setIsSignedIn(false)
    setUserType('guest')
    // Clear usage data when signing out
    setQrCodesGenerated(0)
    setLastResetDate(new Date().toDateString())
  }

  const loadUsageData = () => {
    if (!userId) return

    const savedQrCount = parseInt(localStorage.getItem(`qrCodesGenerated_${userId}`) || '0')
    const savedLastReset = localStorage.getItem(`lastResetDate_${userId}`) || new Date().toDateString()

    // Check if we need to reset monthly count
    const today = new Date().toDateString()
    if (savedLastReset !== today && shouldResetMonthly(savedLastReset)) {
      setQrCodesGenerated(0)
      setLastResetDate(today)
      localStorage.setItem(`qrCodesGenerated_${userId}`, '0')
      localStorage.setItem(`lastResetDate_${userId}`, today)
    } else {
      setQrCodesGenerated(savedQrCount)
      setLastResetDate(savedLastReset)
    }
  }

  const shouldResetMonthly = (lastResetDate) => {
    const lastReset = new Date(lastResetDate)
    const now = new Date()
    
    // Reset if it's been more than 30 days or if it's a new month
    const daysDiff = (now - lastReset) / (1000 * 60 * 60 * 24)
    return daysDiff >= 30 || now.getMonth() !== lastReset.getMonth()
  }

  // Auth functions
  const signUp = async (email, password, userData = {}) => {
    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: userData.name,
            user_type: userData.type || 'free'
          }
        }
      })

      if (error) throw error

      // If signup successful and user is confirmed, create profile
      if (data.user && !data.user.email_confirmation_sent_at) {
        await handleUserSession(data.user)
      }

      return { success: true, data }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email, password) => {
    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      return { success: true, data }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      // Clear local usage data
      if (userId) {
        localStorage.removeItem(`qrCodesGenerated_${userId}`)
        localStorage.removeItem(`lastResetDate_${userId}`)
      }
      
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const upgradeToPro = async () => {
    if (!userId) return { success: false, error: 'Not signed in' }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ user_type: 'pro' })
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error

      setUserType('pro')
      return { success: true, data }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const incrementQRCount = () => {
    if (!userId) return

    const newCount = qrCodesGenerated + 1
    setQrCodesGenerated(newCount)
    localStorage.setItem(`qrCodesGenerated_${userId}`, newCount.toString())
  }

  const getQRLimit = () => {
    switch (userType) {
      case 'guest': return 2
      case 'free': return 5
      case 'pro': return Infinity
      default: return 2
    }
  }

  const getRemainingQRs = () => {
    const limit = getQRLimit()
    if (limit === Infinity) return Infinity
    return Math.max(0, limit - qrCodesGenerated)
  }

  const canGenerateQR = () => {
    return userType === 'pro' || qrCodesGenerated < getQRLimit()
  }

  const hasFeatureAccess = (feature) => {
    switch (feature) {
      case 'customization':
        return userType === 'free' || userType === 'pro'
      case 'logo_upload':
      case 'advanced_formats':
      case 'analytics':
      case 'dynamic_qr':
        return userType === 'pro'
      case 'basic_generation':
        return true
      default:
        return false
    }
  }

  const value = {
    // State
    userType,
    isSignedIn,
    userId,
    user,
    loading,
    qrCodesGenerated,
    
    // Auth functions
    signUp,
    signIn,
    signOut,
    upgradeToPro,
    
    // Usage functions
    incrementQRCount,
    getQRLimit,
    getRemainingQRs,
    canGenerateQR,
    hasFeatureAccess
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}