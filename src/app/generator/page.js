import QRGenerator from '../components/QRGenerator'
import RelatedContent from '../components/RelatedContent'
import UserDemo from '../components/UserDemo'
import { Sparkles, Zap, Crown, Check, X, Users, Download, Palette, BarChart, Lock } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "QR Code Generator - ZendzQR | Create Custom QR Codes",
  description: "Generate professional QR codes with customization options. Free tool with Pro features for advanced customization, logo uploads, and multiple download formats.",
  keywords: "QR code generator, create QR codes, custom QR codes, QR code maker, professional QR codes",
  robots: "index, follow",
}

export default function GeneratorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50 pt-32 pb-16">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-200">
            <Sparkles className="w-4 h-4" />
            <span>Free QR Code Generator</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Create Your QR Code
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl mt-2">
              In Seconds
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Generate professional QR codes for your business, events, or personal use. 
            Start free with basic features, upgrade to Pro for advanced customization.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Zap className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Instant Generation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Crown className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Pro Customization</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">High Quality</span>
            </div>
          </div>
        </div>

        {/* QR Generator Component */}
        <QRGenerator isPro={false} />

        {/* Features Comparison Section */}
        <div className="mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free with essential features or upgrade to Pro for unlimited access and advanced customization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Guest Plan */}
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  <Zap className="w-4 h-4" />
                  <span>No Account</span>
                </div>
                <div className="text-3xl font-bold text-black mb-2">Free</div>
                <div className="text-gray-600 text-sm">No signup required</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm"><strong>2 basic QR codes</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Static QR codes only</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">PNG downloads</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Customization</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Support</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-gray-500 text-sm font-medium py-3">
                  No signup needed
                </div>
              </div>
            </div>

            {/* Free Plan */}
            <div className="bg-white rounded-3xl p-6 border-2 border-green-200 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  <Users className="w-4 h-4" />
                  <span>Free Account</span>
                </div>
                <div className="text-3xl font-bold text-black mb-2">$0</div>
                <div className="text-gray-600 text-sm">Forever free</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm"><strong>5 QR codes per month</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Static QR codes only</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">PNG downloads</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Basic customization</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Community support</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Logo uploads</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">SVG & PDF downloads</span>
                </div>
              </div>

              <Link
                href="/auth/register"
                className="w-full bg-green-500 text-white py-3 rounded-2xl font-semibold text-center hover:bg-green-600 transition-colors duration-200 block text-sm"
              >
                Sign Up Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-black to-gray-800 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mb-3">
                    <Crown className="w-4 h-4" />
                    <span>Pro Plan</span>
                  </div>
                  <div className="text-3xl font-bold mb-2">$9</div>
                  <div className="text-gray-300 text-sm">per month</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm"><strong>Unlimited QR codes</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">Static & Dynamic QR codes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">All formats (PNG, SVG, PDF)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">Advanced customization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">Logo uploads & branding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">Analytics & tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">API access</span>
                  </div>
                </div>

                <Link
                  href="/auth/register"
                  className="w-full bg-yellow-400 text-black py-3 rounded-2xl font-bold text-center hover:bg-yellow-300 transition-colors duration-200 block text-sm"
                >
                  Start Pro Trial
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Upgrade CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-black via-gray-800 to-black rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-10"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Crown className="w-4 h-4" />
                <span>Pro Features</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unlock Advanced Customization
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get custom colors, logo uploads, advanced QR types, SVG/PDF downloads, and more with ZendzQR Pro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  Upgrade to Pro
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RelatedContent section="generator" />
      <UserDemo />
    </main>
  )
}