'use client'

import { useState, useEffect } from 'react'
import { useUser } from '../../contexts/UserContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, LogIn, ArrowRight, Sparkles, AlertCircle, Clock } from 'lucide-react'
import { authRateLimiter, getClientIdentifier } from '../../../lib/rateLimiter'

export default function SignIn() {
  const { signIn } = useUser()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)

  const checkRateLimit = () => {
    const clientId = getClientIdentifier()
    const rateLimited = authRateLimiter.isRateLimited(clientId)
    
    if (rateLimited) {
      const remaining = authRateLimiter.getRemainingTime(clientId)
      setIsRateLimited(true)
      setRemainingTime(remaining)
      return true
    }
    
    setIsRateLimited(false)
    setRemainingTime(0)
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Check rate limit before proceeding
    if (checkRateLimit()) {
      setError(`Too many sign-in attempts. Please wait ${remainingTime} seconds before trying again.`)
      return
    }

    setIsLoading(true)
    const clientId = getClientIdentifier()

    try {
      // Record the attempt
      authRateLimiter.recordAttempt(clientId)
      
      const result = await signIn(formData.email, formData.password)
      
      if (result.success) {
        // Reset rate limiter on successful sign in
        authRateLimiter.reset(clientId)
        router.push('/dashboard')
      } else {
        setError(result.error || 'Failed to sign in')
        // Check if we're now rate limited after this failed attempt
        checkRateLimit()
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
      checkRateLimit()
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (error) setError('') // Clear error when user starts typing
  }

  // Countdown timer for rate limiting
  useEffect(() => {
    let interval
    if (isRateLimited && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            setIsRateLimited(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRateLimited, remainingTime])

  // Check rate limit on component mount
  useEffect(() => {
    checkRateLimit()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-200">
            <LogIn className="w-4 h-4" />
            <span>Welcome Back</span>
          </div>
          
          <h1 className="text-3xl font-bold text-black mb-2">
            Sign In to ZendzQR
          </h1>
          <p className="text-gray-600">
            Access your QR codes and continue creating
          </p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300 bg-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-black mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300 bg-white"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-black hover:underline font-medium">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isRateLimited}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                isLoading || isRateLimited
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </>
              ) : isRateLimited ? (
                <>
                  <Clock className="w-5 h-5" />
                  Please wait {remainingTime}s
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
            <div className="text-sm font-medium text-blue-800 mb-2">Demo Accounts:</div>
            <div className="space-y-1 text-sm text-blue-700">
              <div><strong>Free:</strong> free@example.com / password123</div>
              <div><strong>Pro:</strong> pro@example.com / password123</div>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-black font-semibold hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
            <Sparkles className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-black">Free Account</div>
            <div className="text-xs text-gray-600">5 QR codes/month</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
            <Sparkles className="w-8 h-8 text-black mx-auto mb-2" />
            <div className="text-sm font-semibold text-black">Pro Features</div>
            <div className="text-xs text-gray-600">Unlimited QR codes</div>
          </div>
        </div>
      </div>
    </div>
  )
}