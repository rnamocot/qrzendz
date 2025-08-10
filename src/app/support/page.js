'use client'

import { useState } from "react"
import { Mail, MessageSquare, Clock, CheckCircle, ArrowRight, Send } from "lucide-react"

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const faqs = [
    {
      question: "How do I create my first QR code?",
      answer: "Simply sign up for a free account, enter the content you want to encode (URL, text, etc.), customize the design if desired, and download your QR code in your preferred format."
    },
    {
      question: "What formats can I download QR codes in?",
      answer: "We support PNG, SVG, and PDF formats. PNG is great for web use, SVG for scalable graphics, and PDF for high-quality printing."
    },
    {
      question: "Is there a limit to how many QR codes I can create?",
      answer: "Free users can create up to 10 QR codes per month. Premium plans offer unlimited QR code generation with additional customization options."
    },
    {
      question: "Can I customize the appearance of my QR codes?",
      answer: "Yes! You can change colors, add logos, adjust corner styles, and more. Premium users have access to advanced customization features."
    },
    {
      question: "Are the QR codes I create permanent?",
      answer: "Static QR codes (free) are permanent and will work forever. Dynamic QR codes (premium) can be edited after creation and include analytics."
    },
    {
      question: "How do I ensure my QR code scans properly?",
      answer: "Follow our printing guidelines: maintain good contrast, don't make it too small (minimum 2cm x 2cm), and test scanning before final use."
    }
  ]

  return (
    <>
      <section className="bg-white py-20">
        {/* Spacer for fixed header */}
        <div className="h-40"></div>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-black mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get the help you need. We're here to support you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-yellow-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-6">
                  Get instant help from our support team during business hours.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  Start Chat
                </button>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Email Support</h3>
                <p className="text-gray-600 mb-6">
                  Send us a detailed message and we'll get back to you within 24 hours.
                </p>
                <a 
                  href="mailto:support@zendzqr.com"
                  className="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 inline-block"
                >
                  Email Us
                </a>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Response Time</h3>
                <p className="text-gray-600 mb-6">
                  We typically respond within 2-4 hours during business days.
                </p>
                <div className="flex items-center justify-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Average: 3 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-gray-400" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Can't find what you're looking for? We'd love to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Please describe your question or issue in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

