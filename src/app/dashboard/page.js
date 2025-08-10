'use client'

import { useState, useEffect } from 'react'
import { useUser } from '../contexts/UserContext'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { 
  QrCode, 
  Plus, 
  Download, 
  Edit3, 
  Trash2, 
  BarChart3, 
  Calendar,
  Crown,
  Users,
  Settings,
  LogOut,
  Search,
  Filter,
  Grid3X3,
  List,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Eye
} from 'lucide-react'

export default function Dashboard() {
  const { userType, isSignedIn, qrCodesGenerated, getQRLimit, signOut } = useUser()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isWelcome = searchParams.get('welcome') === 'true'

  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [copiedId, setCopiedId] = useState(null)
  const [showWelcomeModal, setShowWelcomeModal] = useState(isWelcome)

  // Mock QR codes data - in real app, this would come from API
  const [qrCodes, setQrCodes] = useState([
    {
      id: 1,
      name: 'Company Website',
      type: 'url',
      content: 'https://zendzqr.com',
      scans: 1247,
      created: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Contact Info',
      type: 'vcard',
      content: 'BEGIN:VCARD...',
      scans: 89,
      created: '2024-01-10',
      status: 'active'
    },
    {
      id: 3,
      name: 'WiFi Password',
      type: 'wifi',
      content: 'WIFI:T:WPA;S:MyNetwork;P:password;;',
      scans: 45,
      created: '2024-01-08',
      status: 'paused'
    }
  ])

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/auth/login')
    }
  }, [isSignedIn, router])

  const filteredQRCodes = qrCodes.filter(qr => {
    const matchesSearch = qr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         qr.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || qr.type === filterType
    return matchesSearch && matchesFilter
  })

  const handleCopy = (content, id) => {
    navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDeleteQR = (id) => {
    setQrCodes(prev => prev.filter(qr => qr.id !== id))
  }

  if (!isSignedIn) {
    return null // Prevent flash before redirect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <QrCode className="w-8 h-8 text-black" />
                <span className="text-xl font-bold text-black">ZendzQR</span>
              </Link>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                <span>/</span>
                <span>Dashboard</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  userType === 'pro' 
                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                    : 'bg-green-100 text-green-800 border border-green-200'
                }`}>
                  {userType === 'pro' ? (
                    <><Crown className="w-4 h-4 inline mr-1" />Pro</>
                  ) : (
                    <><Users className="w-4 h-4 inline mr-1" />Free</>
                  )}
                </div>
                <span className="text-sm text-gray-600">
                  {userType === 'pro' ? 'Unlimited' : `${qrCodesGenerated}/${getQRLimit()}`} QR codes
                </span>
              </div>

              {/* Logout Button */}
              <button
                onClick={() => {
                  signOut()
                  router.push('/')
                }}
                className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-32 pb-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-black">{qrCodes.length}</div>
                <div className="text-sm text-gray-600">Total QR Codes</div>
              </div>
              <QrCode className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-black">
                  {qrCodes.reduce((sum, qr) => sum + qr.scans, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Scans</div>
              </div>
              <BarChart3 className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-black">
                  {qrCodes.filter(qr => qr.status === 'active').length}
                </div>
                <div className="text-sm text-gray-600">Active Codes</div>
              </div>
              <Eye className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-black">This Month</div>
                <div className="text-sm text-gray-600">Created</div>
              </div>
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-black">My QR Codes</h1>
            {userType !== 'pro' && (
              <Link
                href="/pricing"
                className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Crown className="w-4 h-4" />
                Upgrade
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search QR codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors bg-white"
              />
            </div>

            {/* Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors bg-white"
            >
              <option value="all">All Types</option>
              <option value="url">URL</option>
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="wifi">WiFi</option>
              <option value="vcard">vCard</option>
              <option value="sms">SMS</option>
            </select>

            {/* View Mode */}
            <div className="flex rounded-xl border border-gray-300 bg-white overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Create New */}
            <Link
              href="/generator"
              className="bg-black text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New QR Code
            </Link>
          </div>
        </div>

        {/* QR Codes Grid/List */}
        {filteredQRCodes.length === 0 ? (
          <div className="text-center py-16 bg-white/50 rounded-2xl">
            <QrCode className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {qrCodes.length === 0 ? 'No QR codes yet' : 'No matching QR codes'}
            </h3>
            <p className="text-gray-500 mb-6">
              {qrCodes.length === 0 
                ? 'Create your first QR code to get started' 
                : 'Try adjusting your search or filter'}
            </p>
            <Link
              href="/generator"
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Create QR Code
            </Link>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQRCodes.map((qr) => (
              <div key={qr.id} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-black mb-1">{qr.name}</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {qr.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleCopy(qr.content, qr.id)}
                      className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                      title="Copy Content"
                    >
                      {copiedId === qr.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteQR(qr.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-4 mb-4">
                  {/* Mock QR Code Visualization */}
                  <div className="w-full h-32 bg-white rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 ${Math.random() > 0.7 ? 'bg-black' : 'bg-white'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scans</span>
                    <span className="font-medium">{qr.scans}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Created</span>
                    <span className="font-medium">{qr.created}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className={`font-medium ${qr.status === 'active' ? 'text-green-600' : 'text-orange-600'}`}>
                      {qr.status}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-gray-100 text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="flex-1 bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Analytics
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50">
              <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-gray-700">
                <div>Name</div>
                <div>Type</div>
                <div>Scans</div>
                <div>Created</div>
                <div>Actions</div>
              </div>
            </div>
            {filteredQRCodes.map((qr) => (
              <div key={qr.id} className="px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                <div className="grid grid-cols-5 gap-4 items-center">
                  <div>
                    <div className="font-medium text-black">{qr.name}</div>
                    <div className="text-xs text-gray-500 truncate">{qr.content.substring(0, 40)}...</div>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {qr.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="font-medium">{qr.scans}</div>
                  <div className="text-gray-600">{qr.created}</div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopy(qr.content, qr.id)}
                      className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {copiedId === qr.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteQR(qr.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">
                Welcome to ZendzQR!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Your account has been created successfully. You're ready to start creating professional QR codes!
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowWelcomeModal(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Explore Dashboard
                </button>
                
                <Link
                  href="/generator"
                  className="flex-1 py-3 px-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-center"
                >
                  Create First QR
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}