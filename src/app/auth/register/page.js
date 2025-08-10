'use client'

import { useState, useEffect } from 'react'
import { useUser } from '../../contexts/UserContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, User, UserPlus, ArrowRight, Sparkles, AlertCircle, Check, Crown, Clock } from 'lucide-react'
import { signupRateLimiter, getClientIdentifier } from '../../../lib/rateLimiter'

export default function SignUp() {
  const { signUp } = useUser()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('free')
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 QR codes/month', 'Basic customization', 'PNG downloads'],
      icon: Sparkles,
      color: 'green'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$9',
      period: 'per month',
      features: ['Unlimited QR codes', 'Advanced customization', 'All formats', 'Analytics'],
      icon: Crown,
      color: 'yellow'
    }
  ]

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Please enter your name'
    }
    if (!formData.email.trim()) {
      return 'Please enter your email'
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return 'Please enter a valid email address'
    }
    if (formData.password.length < 6) {
      return 'Password must be at least 6 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match'
    }
    return null
  }

  const checkRateLimit = () => {
    const clientId = getClientIdentifier()
    const rateLimited = signupRateLimiter.isRateLimited(clientId)
    
    if (rateLimited) {
      const remaining = signupRateLimiter.getRemainingTime(clientId)
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

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    // Check rate limit before proceeding
    if (checkRateLimit()) {
      setError(`Too many sign-up attempts. Please wait ${Math.ceil(remainingTime / 60)} minutes before trying again.`)
      return
    }

    setIsLoading(true)
    const clientId = getClientIdentifier()

    try {
      // Record the attempt
      signupRateLimiter.recordAttempt(clientId)
      
      const result = await signUp(formData.email, formData.password, {
        name: formData.name,
        type: selectedPlan
      })
      
      if (result.success) {
        // Reset rate limiter on successful sign up
        signupRateLimiter.reset(clientId)
        router.push('/dashboard?welcome=true')
      } else {
        setError(result.error || 'Failed to create account')
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
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200">
            <UserPlus className="w-4 h-4" />
            <span>Join ZendzQR</span>
          </div>
          
          <h1 className="text-3xl font-bold text-black mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600">
            Start creating professional QR codes in minutes
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
          {/* Plan Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">Choose Your Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plans.map((plan) => {
                const Icon = plan.icon
                const isSelected = selectedPlan === plan.id
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`text-left p-4 rounded-2xl border-2 transition-all duration-300 ${
                      isSelected
                        ? plan.color === 'green' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${
                          plan.color === 'green' ? 'text-green-600' : 'text-yellow-600'
                        }`} />
                        <span className="font-semibold text-black">{plan.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-black">{plan.price}</div>
                        <div className="text-xs text-gray-500">{plan.period}</div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300 bg-white"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

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

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder="Create password"
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

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-black mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300 bg-white"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2 mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link href="/terms" className="text-black hover:underline font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-black hover:underline font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isRateLimited}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                isLoading || isRateLimited
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : selectedPlan === 'free'
                  ? 'bg-green-500 text-white hover:bg-green-600 hover:scale-105 shadow-lg hover:shadow-xl'
                  : 'bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : isRateLimited ? (
                <>
                  <Clock className="w-5 h-5" />
                  Please wait {Math.ceil(remainingTime / 60)}m {remainingTime % 60}s
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  Create {selectedPlan === 'pro' ? 'Pro' : 'Free'} Account
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-black font-semibold hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}