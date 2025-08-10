'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Check, Star, Zap, Toggle } from 'lucide-react'
import RelatedContent from '../components/RelatedContent'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "10 QR codes per month",
        "Static QR codes only",
        "PNG downloads",
        "Basic customization",
        "Community support"
      ],
      cta: "Get Started Free",
      href: "/auth/register",
      popular: false
    },
    {
      name: "Pro",
      price: isAnnual ? "$79" : "$9",
      period: isAnnual ? "per year" : "per month",
      originalPrice: isAnnual ? "$108" : null,
      savings: isAnnual ? "Save $29" : null,
      description: "Best for businesses and professionals",
      features: [
        "Unlimited QR codes",
        "Dynamic QR codes",
        "All download formats (PNG, SVG, PDF)",
        "Advanced customization",
        "Analytics & tracking",
        "Logo uploads",
        "Custom colors & styles",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      cta: "Start Pro Trial",
      href: "/auth/register",
      popular: true
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50 py-32">
      {/* Spacer for fixed header */}
      <div className="h-40"></div>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-200">
              <Star className="w-4 h-4" />
              <span>Simple, transparent pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Start free and scale as you grow. No hidden fees, cancel anytime.
            </p>

            {/* Annual/Monthly Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-black' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                  isAnnual ? 'bg-black' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-black' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Save 27%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border ${
                  plan.popular
                    ? 'border-black shadow-2xl ring-4 ring-black/10'
                    : 'border-gray-200 shadow-xl hover:shadow-2xl'
                } transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-black mb-4">{plan.name}</h3>
                  
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-2xl text-gray-400 line-through">{plan.originalPrice}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          {plan.savings}
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline justify-center">
                      <span className="text-6xl font-bold text-black">{plan.price}</span>
                      <span className="text-gray-600 ml-2 text-lg">/{plan.period.split(' ')[1]}</span>
                    </div>
                    {isAnnual && plan.name === 'Pro' && (
                      <p className="text-sm text-gray-500 mt-2">That's just $6.58/month</p>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-lg">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full text-center py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-black hover:bg-gray-200 border-2 border-gray-200 hover:border-black hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 text-center">
            <h2 className="text-4xl font-bold text-black mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto text-left space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Can I switch between monthly and annual billing?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, you can change your billing cycle at any time. When switching to annual billing, you'll be credited for your remaining monthly subscription time.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-3">
                  What happens to my QR codes if I downgrade?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your existing QR codes will continue to work perfectly. However, you'll be limited to the features of your new plan for creating new QR codes.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Do you offer refunds?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment in full.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Is there a free trial for Pro?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! You get a 14-day free trial of Pro features when you sign up. No credit card required to start your trial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RelatedContent section="pricing" />
    </section>
  )
}

