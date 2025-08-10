'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Zap, Users, Settings } from 'lucide-react'

const contentSections = {
  generator: {
    title: "Learn More About QR Codes",
    links: [
      {
        href: "/learning-center",
        title: "QR Code Best Practices",
        description: "Learn how to create effective QR codes",
        icon: BookOpen
      },
      {
        href: "/about", 
        title: "About ZendzQR",
        description: "Discover our story and mission",
        icon: Users
      },
      {
        href: "/pricing",
        title: "Pro Features",
        description: "Unlock advanced customization options",
        icon: Zap
      }
    ]
  },
  about: {
    title: "Get Started with ZendzQR",
    links: [
      {
        href: "/generator",
        title: "Create Your First QR Code",
        description: "Start generating QR codes instantly",
        icon: Zap
      },
      {
        href: "/learning-center",
        title: "Learning Center",
        description: "Master QR code creation and usage",
        icon: BookOpen
      },
      {
        href: "/support",
        title: "Need Help?",
        description: "Get support from our team",
        icon: Settings
      }
    ]
  },
  pricing: {
    title: "Helpful Resources",
    links: [
      {
        href: "/generator",
        title: "Try ZendzQR Free",
        description: "Start creating QR codes right now",
        icon: Zap
      },
      {
        href: "/learning-center",
        title: "QR Code Guides",
        description: "Learn advanced techniques",
        icon: BookOpen
      },
      {
        href: "/about",
        title: "Why Choose ZendzQR",
        description: "Learn about our platform",
        icon: Users
      }
    ]
  },
  support: {
    title: "Popular Resources",
    links: [
      {
        href: "/learning-center",
        title: "Learning Center",
        description: "Find detailed guides and tutorials",
        icon: BookOpen
      },
      {
        href: "/generator",
        title: "QR Generator",
        description: "Create QR codes instantly",
        icon: Zap
      },
      {
        href: "/pricing", 
        title: "Pricing Plans",
        description: "Choose the right plan for you",
        icon: Settings
      }
    ]
  },
  'learning-center': {
    title: "Ready to Create?",
    links: [
      {
        href: "/generator",
        title: "Start Creating",
        description: "Put your knowledge into practice",
        icon: Zap
      },
      {
        href: "/pricing",
        title: "Pro Features",
        description: "Unlock advanced capabilities",
        icon: Settings
      },
      {
        href: "/support",
        title: "Get Help",
        description: "Contact our support team",
        icon: Users
      }
    ]
  }
}

export default function RelatedContent({ section = 'generator' }) {
  const content = contentSections[section]
  
  if (!content) return null
  
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            {content.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.links.map((link, index) => {
              const IconComponent = link.icon
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {link.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-black transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}