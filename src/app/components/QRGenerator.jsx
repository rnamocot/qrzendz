'use client'

import { useState, useRef, useEffect } from 'react'
import QRCode from 'qrcode'
import { HexColorPicker } from 'react-colorful'
import { useUser } from '../contexts/UserContext'
import Link from 'next/link'
import { 
  Download, 
  Palette, 
  Upload, 
  Settings, 
  Eye, 
  Copy, 
  Check,
  RefreshCw,
  Sparkles,
  Crown,
  Lock,
  AlertTriangle,
  Users
} from 'lucide-react'

export default function QRGenerator({ isPro = false }) {
  const { 
    userType, 
    isSignedIn, 
    qrCodesGenerated, 
    canGenerateQR, 
    getRemainingQRs, 
    getQRLimit,
    hasFeatureAccess, 
    incrementQRCount,
    signIn 
  } = useUser()

  const [input, setInput] = useState('https://zendzqr.com')
  const [qrData, setQrData] = useState('')
  const [foregroundColor, setForegroundColor] = useState('#000000')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [size, setSize] = useState(256)
  const [logo, setLogo] = useState(null)
  const [showColorPicker, setShowColorPicker] = useState(null)
  const [copied, setCopied] = useState(false)
  const [showLimitModal, setShowLimitModal] = useState(false)
  
  // Specific inputs for different QR types
  const [wifiData, setWifiData] = useState({ ssid: '', password: '', security: 'WPA' })
  const [vcardData, setVcardData] = useState({ name: '', phone: '', email: '', organization: '' })
  const [smsData, setSmsData] = useState({ phone: '', message: '' })
  
  const canvasRef = useRef(null)
  const logoInputRef = useRef(null)

  const qrTypes = [
    { value: 'url', label: 'Website URL', placeholder: 'https://example.com' },
    { value: 'text', label: 'Plain Text', placeholder: 'Enter any text' },
    { value: 'email', label: 'Email', placeholder: 'hello@example.com' },
    { value: 'phone', label: 'Phone', placeholder: '+1234567890' },
    { value: 'wifi', label: 'WiFi', placeholder: 'Network Name', pro: true },
    { value: 'vcard', label: 'Contact Card', placeholder: 'Contact Info', pro: true },
    { value: 'sms', label: 'SMS', placeholder: 'Phone:Message', pro: true },
  ]

  const [selectedType, setSelectedType] = useState('url')

  useEffect(() => {
    generateQR()
  }, [input, foregroundColor, backgroundColor, size, logo, selectedType, wifiData, vcardData, smsData])

  const generateQR = async (shouldCount = false) => {
    const formattedInput = formatInput(selectedType)
    if (!formattedInput) return

    // Check if user can generate QR codes
    if (shouldCount && !canGenerateQR()) {
      setShowLimitModal(true)
      return
    }

    try {
      const canvas = canvasRef.current
      const options = {
        width: size,
        margin: 2,
        color: {
          dark: hasFeatureAccess('customization') ? foregroundColor : '#000000',
          light: hasFeatureAccess('customization') ? backgroundColor : '#ffffff'
        }
      }

      await QRCode.toCanvas(canvas, formattedInput, options)

      // Add logo if uploaded and user has access (Pro feature)
      if (logo && hasFeatureAccess('logo_upload')) {
        const ctx = canvas.getContext('2d')
        const logoImg = new Image()
        logoImg.onload = () => {
          const logoSize = size * 0.2
          const x = (size - logoSize) / 2
          const y = (size - logoSize) / 2
          
          // Create white background for logo
          ctx.fillStyle = backgroundColor
          ctx.fillRect(x - 5, y - 5, logoSize + 10, logoSize + 10)
          
          ctx.drawImage(logoImg, x, y, logoSize, logoSize)
        }
        logoImg.src = logo
      }

      // Convert to base64 for preview
      setQrData(canvas.toDataURL())

      // Count this generation if requested
      if (shouldCount) {
        incrementQRCount()
      }
    } catch (error) {
      console.error('Error generating QR code:', error)
    }
  }

  const downloadQR = (format = 'png') => {
    const canvas = canvasRef.current
    const link = document.createElement('a')
    
    if (format === 'png') {
      link.download = 'qrcode.png'
      link.href = canvas.toDataURL()
    } else if (format === 'jpg') {
      link.download = 'qrcode.jpg'
      link.href = canvas.toDataURL('image/jpeg')
    }
    
    link.click()
  }

  const copyToClipboard = async () => {
    try {
      const canvas = canvasRef.current
      canvas.toBlob(async (blob) => {
        const item = new ClipboardItem({ 'image/png': blob })
        await navigator.clipboard.write([item])
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const handleLogoUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogo(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const formatInput = (type) => {
    switch (type) {
      case 'email':
        return input.includes('@') ? `mailto:${input}` : input
      case 'phone':
        return input.startsWith('tel:') ? input : `tel:${input}`
      case 'wifi':
        return `WIFI:T:${wifiData.security};S:${wifiData.ssid};P:${wifiData.password};;`
      case 'vcard':
        return `BEGIN:VCARD
VERSION:3.0
FN:${vcardData.name}
ORG:${vcardData.organization}
TEL:${vcardData.phone}
EMAIL:${vcardData.email}
END:VCARD`
      case 'sms':
        return `sms:${smsData.phone}:${smsData.message}`
      case 'url':
      case 'text':
      default:
        return input
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* User Status Bar */}
      <div className="mb-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              userType === 'pro' 
                ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                : userType === 'free' 
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-gray-100 text-gray-800 border border-gray-200'
            }`}>
              {userType === 'pro' && <><Crown className="w-4 h-4 inline mr-1" />Pro User</>}
              {userType === 'free' && <><Users className="w-4 h-4 inline mr-1" />Free Account</>}
              {userType === 'guest' && 'Guest User'}
            </div>
            <div className="text-sm text-gray-600">
              {userType === 'pro' ? (
                <div>
                  <div>Unlimited QR codes</div>
                  <div className="text-xs">Customization: {hasFeatureAccess('customization') ? '✅' : '❌'}</div>
                </div>
              ) : (
                `${qrCodesGenerated}/${getQRLimit()} QR codes used ${userType === 'free' ? 'this month' : ''}`
              )}
            </div>
          </div>
          
          {userType !== 'pro' && (
            <div className="flex items-center gap-2">
              {getRemainingQRs() <= 1 && getRemainingQRs() > 0 && (
                <div className="text-orange-600 text-sm font-medium flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  {getRemainingQRs()} remaining
                </div>
              )}
              {userType === 'guest' && (
                <Link 
                  href="/auth/register"
                  className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
                >
                  Sign Up for More
                </Link>
              )}
              <Link 
                href="/pricing"
                className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Upgrade to Pro
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Controls Panel */}
        <div className="space-y-8">
          {/* QR Type Selection */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6" />
              QR Code Type
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {qrTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => !type.pro || hasFeatureAccess('dynamic_qr') ? setSelectedType(type.value) : null}
                  disabled={type.pro && !hasFeatureAccess('dynamic_qr')}
                  className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selectedType === type.value
                      ? 'border-black bg-black text-white'
                      : type.pro && !hasFeatureAccess('dynamic_qr')
                      ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-semibold text-sm">{type.label}</div>
                  {type.pro && (
                    <div className="absolute top-2 right-2">
                      {hasFeatureAccess('dynamic_qr') ? (
                        <Crown className="w-4 h-4 text-yellow-500" />
                      ) : (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Input Field */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6" />
              Content
            </h3>
            <div className="space-y-4">
              {/* Dynamic Input Based on QR Type */}
              {selectedType === 'wifi' ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={wifiData.ssid}
                    onChange={(e) => setWifiData({ ...wifiData, ssid: e.target.value })}
                    placeholder="Network Name (SSID)"
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300"
                  />
                  <input
                    type="password"
                    value={wifiData.password}
                    onChange={(e) => setWifiData({ ...wifiData, password: e.target.value })}
                    placeholder="Password"
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300"
                  />
                  <select
                    value={wifiData.security}
                    onChange={(e) => setWifiData({ ...wifiData, security: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300"
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">No Password</option>
                  </select>
                </div>
              ) : selectedType === 'vcard' ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={vcardData.name}
                    onChange={(e) => setVcardData({ ...vcardData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300"
                  />
                  <input
                    type="tel"
                    value={vcardData.phone}
                    onChange={(e) => setVcardData({ ...vcardData, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300"
                  />
                  <input
                    type="email"
                    value={vcardData.email}
                    onChange={(e) => setVcardData({ ...vcardData, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300"
                  />
                  <input
                    type="text"
                    value={vcardData.organization}
                    onChange={(e) => setVcardData({ ...vcardData, organization: e.target.value })}
                    placeholder="Company/Organization"
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300"
                  />
                </div>
              ) : selectedType === 'sms' ? (
                <div className="space-y-4">
                  <input
                    type="tel"
                    value={smsData.phone}
                    onChange={(e) => setSmsData({ ...smsData, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300"
                  />
                  <textarea
                    value={smsData.message}
                    onChange={(e) => setSmsData({ ...smsData, message: e.target.value })}
                    placeholder="Message Text"
                    rows="3"
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                  />
                </div>
              ) : (
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={qrTypes.find(t => t.value === selectedType)?.placeholder}
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors duration-300 resize-none bg-white"
                  rows="4"
                />
              )}
              
              <button
                onClick={() => {
                  setInput('')
                  setWifiData({ ssid: '', password: '', security: 'WPA' })
                  setVcardData({ name: '', phone: '', email: '', organization: '' })
                  setSmsData({ phone: '', message: '' })
                }}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <RefreshCw className="w-4 h-4" />
                Clear
              </button>
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
              <Palette className="w-6 h-6" />
              Customization
              {!hasFeatureAccess('customization') && <Lock className="w-5 h-5 text-gray-400" />}
            </h3>
            
            <div className="space-y-6">
              {/* Colors */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Foreground Color
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => hasFeatureAccess('customization') && setShowColorPicker(showColorPicker === 'fg' ? null : 'fg')}
                        disabled={!hasFeatureAccess('customization')}
                        className={`w-12 h-12 rounded-xl border-2 ${hasFeatureAccess('customization') ? 'border-gray-300 hover:border-black cursor-pointer' : 'border-gray-200 cursor-not-allowed opacity-50'} transition-colors duration-300`}
                        style={{ backgroundColor: foregroundColor }}
                      />
                      <input
                        type="text"
                        value={foregroundColor}
                        onChange={(e) => hasFeatureAccess('customization') && setForegroundColor(e.target.value)}
                        disabled={!hasFeatureAccess('customization')}
                        className={`flex-1 p-2 border border-gray-300 rounded-xl focus:outline-none ${hasFeatureAccess('customization') ? 'focus:border-black' : 'bg-gray-100 cursor-not-allowed'} transition-colors duration-300 text-sm font-mono`}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Background Color
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => hasFeatureAccess('customization') && setShowColorPicker(showColorPicker === 'bg' ? null : 'bg')}
                        disabled={!hasFeatureAccess('customization')}
                        className={`w-12 h-12 rounded-xl border-2 ${hasFeatureAccess('customization') ? 'border-gray-300 hover:border-black cursor-pointer' : 'border-gray-200 cursor-not-allowed opacity-50'} transition-colors duration-300`}
                        style={{ backgroundColor: backgroundColor }}
                      />
                      <input
                        type="text"
                        value={backgroundColor}
                        onChange={(e) => isPro && setBackgroundColor(e.target.value)}
                        disabled={!isPro}
                        className={`flex-1 p-2 border border-gray-300 rounded-xl focus:outline-none ${isPro ? 'focus:border-black' : 'bg-gray-100 cursor-not-allowed'} transition-colors duration-300 text-sm font-mono`}
                      />
                    </div>
                  </div>
                </div>

                {/* Color Picker */}
                {showColorPicker && isPro && (
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200">
                      <HexColorPicker
                        color={showColorPicker === 'fg' ? foregroundColor : backgroundColor}
                        onChange={(color) => {
                          if (showColorPicker === 'fg') {
                            setForegroundColor(color)
                          } else {
                            setBackgroundColor(color)
                          }
                        }}
                      />
                      <button
                        onClick={() => setShowColorPicker(null)}
                        className="mt-3 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition-colors duration-300"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Size: {size}px
                </label>
                <input
                  type="range"
                  min="128"
                  max="512"
                  step="32"
                  value={size}
                  onChange={(e) => isPro && setSize(parseInt(e.target.value))}
                  disabled={!isPro}
                  className={`w-full ${isPro ? '' : 'opacity-50 cursor-not-allowed'}`}
                />
              </div>

              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Logo Upload (Pro)
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => isPro && logoInputRef.current?.click()}
                    disabled={!isPro}
                    className={`flex items-center gap-2 px-4 py-3 border-2 border-dashed rounded-2xl transition-all duration-300 ${
                      isPro 
                        ? 'border-gray-300 hover:border-black hover:bg-gray-50' 
                        : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Upload className="w-5 h-5" />
                    {logo ? 'Change Logo' : 'Upload Logo'}
                  </button>
                  {logo && isPro && (
                    <button
                      onClick={() => setLogo(null)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-300"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Pro Upgrade Notice */}
            {!isPro && (
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-gray-50 border border-yellow-200 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-gray-800">Unlock Pro Features</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Get custom colors, sizes, logo uploads, and more advanced QR types with Pro.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors duration-300 text-sm font-medium">
                  Upgrade to Pro
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Preview and Download Panel */}
        <div className="space-y-8">
          {/* Preview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6" />
              Preview
            </h3>
            
            <div className="flex justify-center mb-8">
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  className="border border-gray-300 rounded-2xl shadow-lg max-w-full h-auto"
                  style={{ maxWidth: '300px' }}
                />
                {/* Loading state could be added here */}
              </div>
            </div>

            {/* Download Options */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-black">Download Options</h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadQR('png')}
                  className="flex items-center gap-2 justify-center p-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  PNG
                </button>
                <button
                  onClick={() => downloadQR('jpg')}
                  className="flex items-center gap-2 justify-center p-4 bg-gray-700 text-white rounded-2xl hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  JPG
                </button>
              </div>
              
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center gap-2 justify-center p-4 border-2 border-gray-300 text-gray-700 rounded-2xl hover:border-black hover:text-black transition-all duration-300"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>

              {/* Pro features notice */}
              {!isPro && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">Pro Features</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    SVG, PDF downloads, and batch generation available with Pro.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Generate Button */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
            <button
              onClick={() => generateQR(true)}
              disabled={!canGenerateQR()}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                canGenerateQR()
                  ? 'bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {canGenerateQR() ? (
                <>
                  <Download className="w-5 h-5 inline mr-2" />
                  Generate QR Code
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5 inline mr-2" />
                  Limit Reached
                </>
              )}
            </button>
            
            {!canGenerateQR() && (
              <p className="text-center text-sm text-gray-600 mt-3">
                {userType === 'guest' ? 'Sign up for more QR codes' : 'Upgrade to Pro for unlimited access'}
              </p>
            )}
          </div>

          {/* Recent QR Codes */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6">Recent QR Codes</h3>
            <div className="text-center text-gray-500 py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm">Your recent QR codes will appear here</p>
              <p className="text-xs text-gray-400 mt-2">Sign up to save and manage your QR codes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Limit Reached Modal */}
      {showLimitModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">
                QR Code Limit Reached
              </h3>
              
              <p className="text-gray-600 mb-6">
                {userType === 'guest' 
                  ? `You've used all ${getQRLimit()} of your free QR codes. Sign up for a free account to get ${5} QR codes per month!`
                  : `You've used all ${getQRLimit()} QR codes for this month. Upgrade to Pro for unlimited access!`
                }
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLimitModal(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                
                {userType === 'guest' ? (
                  <Link
                    href="/auth/register"
                    className="flex-1 py-3 px-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-center"
                  >
                    Sign Up Free
                  </Link>
                ) : (
                  <Link
                    href="/pricing"
                    className="flex-1 py-3 px-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-center"
                  >
                    Upgrade to Pro
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}