'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useUser } from '../contexts/UserContext'
import { Menu, X, Sparkles, ChevronDown, ArrowRight, QrCode, Zap, User, LogOut } from 'lucide-react'

export default function Navigation() {
  const { isSignedIn, userType, signOut } = useUser()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    { 
      href: '/', 
      label: 'Home',
      description: 'Back to homepage'
    },
    { 
      href: '/generator', 
      label: 'QR Generator',
      description: 'Create QR codes'
    },
    { 
      href: '/learning-center', 
      label: 'Learning Center',
      description: 'Guides & tutorials'
    },
    { 
      href: '/pricing', 
      label: 'Pricing',
      description: 'Simple plans'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-xl shadow-black/5' 
        : 'bg-white/80 backdrop-blur-lg'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-black via-gray-800 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl shadow-black/20">
                <QrCode className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center animate-pulse">
                <Sparkles className="w-3 h-3 text-black" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                ZendzQR
              </span>
              <div className="text-xs text-gray-500 font-medium -mt-1">
                QR Code Generator
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <button
                    className="group flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium"
                  >
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/60 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        href={dropdownItem.href}
                        className="group flex items-center gap-4 px-6 py-3 hover:bg-gray-50/80 transition-all duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
                          <Zap className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover:text-black transition-colors">
                            {dropdownItem.label}
                          </div>
                          <div className="text-sm text-gray-500">
                            {dropdownItem.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="px-6 py-3 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
                <button
                  onClick={signOut}
                  className="px-6 py-3 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="px-6 py-3 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="group relative bg-gradient-to-r from-black via-gray-800 to-black text-white px-8 py-3 rounded-2xl font-bold hover:shadow-2xl hover:shadow-black/25 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-black to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden group p-3 rounded-2xl hover:bg-gray-100/80 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${
                isOpen ? 'top-3 rotate-45' : 'top-1'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'top-3'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${
                isOpen ? 'top-3 -rotate-45' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200/60 bg-white/98 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-8 space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-between px-6 py-4 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <div>
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
              
              <div className="pt-6 mt-6 border-t border-gray-200/60 space-y-3">
                {isSignedIn ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-6 py-4 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="w-5 h-5" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        signOut()
                        setIsOpen(false)
                      }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium"
                    >
                      <LogOut className="w-5 h-5" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className="block px-6 py-4 text-gray-700 hover:text-black hover:bg-gray-100/80 rounded-2xl transition-all duration-300 font-medium text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/register"
                      className="block px-6 py-4 bg-gradient-to-r from-black via-gray-800 to-black text-white rounded-2xl text-center font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started Free
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}