'use client'

import { useUser } from '../contexts/UserContext'

export default function UserDemo() {
  const { userType, signIn, signOut, upgradeToPro } = useUser()

  const handleTypeChange = (newType) => {
    if (newType === 'guest') {
      signOut()
    } else if (newType === 'free') {
      signIn('free', 'demo-user-free')
    } else if (newType === 'pro') {
      if (userType !== 'pro') {
        signIn('free', 'demo-user-free')
        setTimeout(() => upgradeToPro(), 100)
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border p-4 z-40">
      <div className="text-sm font-medium text-gray-700 mb-2">Demo Mode</div>
      <div className="flex gap-2">
        <button
          onClick={() => handleTypeChange('guest')}
          className={`px-3 py-1 text-xs rounded ${
            userType === 'guest' 
              ? 'bg-gray-200 text-gray-800' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Guest
        </button>
        <button
          onClick={() => handleTypeChange('free')}
          className={`px-3 py-1 text-xs rounded ${
            userType === 'free' 
              ? 'bg-green-200 text-green-800' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Free
        </button>
        <button
          onClick={() => handleTypeChange('pro')}
          className={`px-3 py-1 text-xs rounded ${
            userType === 'pro' 
              ? 'bg-yellow-200 text-yellow-800' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Pro
        </button>
      </div>
    </div>
  )
}