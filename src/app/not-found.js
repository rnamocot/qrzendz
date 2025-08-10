'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'Sorry, the page you are looking for could not be found. Return to ZendzQR to continue creating QR codes.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-gray-50 via-white to-yellow-50 py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-yellow-200/50">
                <span className="text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">404</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-400 rounded-full animate-pulse delay-75"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Sorry, we couldn't find the page you're looking for. 
              <br className="hidden sm:block" />
              The page might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="group bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-2xl shadow-black/25 hover:shadow-black/40 hover:scale-105"
            >
              <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-black hover:text-black hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Go Back
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-xl">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Looking for something specific?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/about"
                className="group p-4 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-2 group-hover:bg-gray-200 transition-colors duration-300"></div>
                <span className="text-sm font-medium">About Us</span>
              </Link>
              <Link
                href="/learning-center"
                className="group p-4 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-2 group-hover:bg-gray-200 transition-colors duration-300"></div>
                <span className="text-sm font-medium">Learning</span>
              </Link>
              <Link
                href="/support"
                className="group p-4 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-2 group-hover:bg-gray-200 transition-colors duration-300"></div>
                <span className="text-sm font-medium">Support</span>
              </Link>
              <Link
                href="/pricing"
                className="group p-4 rounded-xl text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-2 group-hover:bg-gray-200 transition-colors duration-300"></div>
                <span className="text-sm font-medium">Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}