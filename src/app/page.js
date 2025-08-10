import Link from "next/link"
import { QrCode, Download, Palette, Zap, Shield, Users, ArrowRight, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50 overflow-hidden flex items-center">
        {/* Spacer for fixed header */}
        <div className="absolute top-0 w-full h-40"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-black rounded-2xl rotate-12"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 border-2 border-gray-400 rounded-2xl -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-yellow-400 rounded-full"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-yellow-200">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 10,000+ users worldwide</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                    Generate QR Codes
                  </span>
                  <span className="block bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                    in Seconds
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Create professional QR codes instantly. Perfect for <Link href="/learning-center#use-cases" className="text-black hover:underline font-medium">businesses, events, and personal use</Link>. 
                  Simple, fast, and completely <Link href="/pricing" className="text-black hover:underline font-medium">free to start</Link>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-0">
                  <Link
                    href="/generator"
                    className="group relative bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-2xl shadow-black/25 hover:shadow-black/40 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center">
                      Start Creating Free
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link
                    href="/learning-center"
                    className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-black hover:text-black hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Content - QR Code Preview */}
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <div className="group bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500">
                  {/* QR Code */}
                  <div className="relative mb-8">
                    <div className="w-56 h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-black to-gray-800 rounded-2xl mx-auto p-4 shadow-2xl shadow-black/20 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full bg-white rounded-xl p-4 flex items-center justify-center">
                        <div className="grid grid-cols-12 gap-0.5">
                          {Array.from({ length: 144 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-sm ${
                                Math.random() > 0.65 ? 'bg-black' : 'bg-white'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner markers for authenticity */}
                    <div className="absolute top-6 left-6 w-8 h-8 border-4 border-black rounded"></div>
                    <div className="absolute top-6 right-6 w-8 h-8 border-4 border-black rounded"></div>
                    <div className="absolute bottom-6 left-6 w-8 h-8 border-4 border-black rounded"></div>
                  </div>

                  {/* Description */}
                  <div className="text-center px-4">
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Live Preview</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Sample QR Code</p>
                    <p className="text-sm text-gray-500">Scans to zendzqr.com</p>
                  </div>
                </div>

                {/* Floating decorations */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl animate-bounce shadow-xl shadow-yellow-400/25 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl animate-pulse shadow-lg flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-8 -left-8 w-6 h-6 bg-gray-300 rounded-full animate-float opacity-60"></div>
                <div className="absolute bottom-8 -right-8 w-8 h-8 bg-yellow-200 rounded-full animate-float-delayed opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gray-200 rounded-full opacity-40 animate-float-delayed"></div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-yellow-50 via-white to-gray-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block bg-gradient-to-r from-yellow-100 to-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
              ✨ Features that matter
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight px-4">
              Why Choose <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ZendzQR</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to create, customize, and manage your QR codes 
              with <Link href="/about" className="text-black hover:underline font-medium">professional results</Link> every time. 
              <Link href="/learning-center" className="text-black hover:underline font-medium">Learn more about best practices</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            <div className="group bg-white/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">Lightning Fast</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Generate QR codes instantly with our optimized engine. No waiting, no delays.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">Full Customization</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Customize colors, add logos, and style your QR codes to match your brand.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">Multiple Formats</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Download in PNG, SVG, or PDF formats. Perfect for print and digital use.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">Secure & Private</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Your data stays private. We don't store your QR code content or track usage.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">High Quality</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Vector-based QR codes that scale perfectly from business cards to billboards.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="relative mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">Team Friendly</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Collaborate with your team and manage QR codes across multiple projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-yellow-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-200 rounded-full opacity-30"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>10,000+ QR codes created this month</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-black">
              Ready to Get
              <span className="block bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Started?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses and individuals who trust ZendzQR 
              for their QR code needs. Start creating professional QR codes today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/generator"
                className="group relative bg-black text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-2xl hover:shadow-black/40 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  Create Your First QR Code
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href="/pricing"
                className="group border-2 border-gray-300 text-gray-700 px-12 py-6 rounded-2xl text-xl font-bold hover:border-black hover:text-black hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  View Pricing
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">10,000+</div>
                <div className="text-gray-600 font-medium">Active Users</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Uptime</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-8 h-8 border-2 border-yellow-400 rounded rotate-45 animate-spin-slow opacity-60"></div>
        <div className="absolute top-10 right-10 w-6 h-6 bg-gray-400 rounded-full animate-pulse opacity-40"></div>
      </section>

      {/* FAQ Section with Structured Data */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about QR code generation
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  How do I create a QR code for my business?
                </h3>
                <p className="text-gray-600">
                  Simply visit our <Link href="/generator" className="text-black hover:underline font-medium">QR code generator</Link>, 
                  enter your business information (URL, contact details, etc.), customize the design, and download. 
                  <Link href="/learning-center" className="text-black hover:underline font-medium">Learn more</Link> about business QR codes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Are ZendzQR QR codes free forever?
                </h3>
                <p className="text-gray-600">
                  Yes! Our basic QR code generation is completely free. For advanced features like analytics and custom branding, 
                  check out our <Link href="/pricing" className="text-black hover:underline font-medium">Pro plans</Link>.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Can I customize the appearance of my QR codes?
                </h3>
                <p className="text-gray-600">
                  Absolutely! You can change colors, add logos, and adjust the design. Our 
                  <Link href="/learning-center#customization" className="text-black hover:underline font-medium">customization guide</Link> 
                  shows you everything possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I create a QR code for my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply visit our QR code generator, enter your business information (URL, contact details, etc.), customize the design, and download. Learn more about business QR codes in our learning center."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Are ZendzQR QR codes free forever?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our basic QR code generation is completely free. For advanced features like analytics and custom branding, check out our Pro plans."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I customize the appearance of my QR codes?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Absolutely! You can change colors, add logos, and adjust the design. Our customization guide shows you everything possible."
                  }
                }
              ]
            })
          }}
        />
      </section>
    </>
  )
}
