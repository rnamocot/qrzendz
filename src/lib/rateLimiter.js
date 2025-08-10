class RateLimiter {
  constructor(maxAttempts = 5, windowMs = 60000) {
    this.maxAttempts = maxAttempts
    this.windowMs = windowMs
    this.attempts = new Map()
  }

  isRateLimited(key) {
    const now = Date.now()
    const userAttempts = this.attempts.get(key) || []
    
    // Remove expired attempts
    const validAttempts = userAttempts.filter(
      timestamp => now - timestamp < this.windowMs
    )
    
    // Update the attempts map
    this.attempts.set(key, validAttempts)
    
    // Check if rate limited
    return validAttempts.length >= this.maxAttempts
  }

  recordAttempt(key) {
    const now = Date.now()
    const userAttempts = this.attempts.get(key) || []
    userAttempts.push(now)
    this.attempts.set(key, userAttempts)
  }

  getRemainingTime(key) {
    const now = Date.now()
    const userAttempts = this.attempts.get(key) || []
    
    if (userAttempts.length === 0) return 0
    
    const oldestAttempt = Math.min(...userAttempts)
    const timeUntilReset = this.windowMs - (now - oldestAttempt)
    
    return Math.max(0, Math.ceil(timeUntilReset / 1000))
  }

  reset(key) {
    this.attempts.delete(key)
  }
}

// Create rate limiter instances for different actions
export const authRateLimiter = new RateLimiter(5, 60000) // 5 attempts per minute
export const signupRateLimiter = new RateLimiter(3, 300000) // 3 attempts per 5 minutes

// Helper function to get client identifier
export const getClientIdentifier = () => {
  // Use combination of IP-like identifier and user agent for client-side rate limiting
  if (typeof window !== 'undefined') {
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width,
      screen.height,
      new Date().getTimezoneOffset()
    ].join('|')
    
    // Create a simple hash of the fingerprint
    let hash = 0
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32-bit integer
    }
    
    return `client_${Math.abs(hash)}`
  }
  
  return 'unknown_client'
}