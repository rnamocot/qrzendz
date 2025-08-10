import Link from 'next/link'
import { Twitter, Github, Linkedin, Mail, Heart, Sparkles, ArrowRight, QrCode } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { href: '/generator', label: 'QR Generator', description: 'Create QR codes instantly' },
    { href: '/pricing', label: 'Pricing', description: 'Simple, transparent plans' },
    { href: '/learning-center', label: 'Learning Center', description: 'Guides & tutorials' },
    { href: '/dashboard', label: 'Dashboard', description: 'Manage your codes' },
  ]

  const companyLinks = [
    { href: '/about', label: 'About Us', description: 'Our story & mission' },
    { href: '/support', label: 'Support', description: 'Get help anytime' },
    { href: '/auth/login', label: 'Sign In', description: 'Access your account' },
    { href: '/auth/register', label: 'Sign Up', description: 'Create free account' },
  ]

  const legalLinks = [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/data-policy', label: 'Data Policy' },
  ]

  const stats = [
    { number: '10K+', label: 'Users' },
    { number: '100K+', label: 'QR Codes Created' },
    { number: '99.9%', label: 'Uptime' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-yellow-50 text-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-200 rounded-full opacity-30"></div>
      </div>

      <div className="container relative z-10">
        {/* Stats Section */}
        <div className="py-16 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="group flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-black/10">
                    <QrCode className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-3 h-3 text-black m-0.5" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                  ZendzQR
                </span>
              </Link>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-sm">
                The simplest way to generate, customize, and download professional QR codes for your business.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="group w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Twitter className="w-5 h-5 text-gray-700 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Github className="w-5 h-5 text-gray-700 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-700 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-xl font-bold text-black mb-8">Product</h3>
              <ul className="space-y-4">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="group block">
                      <div className="text-gray-700 hover:text-black font-medium transition-colors duration-300 flex items-center">
                        {link.label}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                        {link.description}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold text-black mb-8">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="group block">
                      <div className="text-gray-700 hover:text-black font-medium transition-colors duration-300 flex items-center">
                        {link.label}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                        {link.description}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold text-black mb-8">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Get the latest updates on new features and QR code tips.
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white border border-gray-300 rounded-l-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                  />
                  <button className="bg-black text-white px-6 py-3 rounded-r-xl font-semibold hover:bg-gray-800 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <span>© {currentYear} ZendzQR. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for QR code enthusiasts.</span>
            </div>
            
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-8 h-8 border-2 border-yellow-400 rounded rotate-45 animate-spin-slow opacity-60"></div>
      <div className="absolute top-10 right-10 w-6 h-6 bg-gray-400 rounded-full animate-pulse opacity-40"></div>
    </footer>
  )
}