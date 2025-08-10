export const metadata = {
  title: "Terms of Service - ZendzQR | Legal Terms",
  description: "Read ZendzQR's Terms of Service to understand your rights and responsibilities when using our professional QR code generator platform.",
  keywords: ["ZendzQR terms", "terms of service", "QR code generator terms", "user agreement", "legal terms"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - ZendzQR",
    description: "Read ZendzQR's Terms of Service to understand your rights and responsibilities.",
    type: "website",
  },
}

export default function Terms() {
  return (
    <section className="bg-white py-20">
      {/* Spacer for fixed header */}
      <div className="h-40"></div>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using ZendzQR ("the Service"), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              ZendzQR provides a web-based QR code generation service that allows users to create, customize, 
              and download QR codes for various purposes. The service includes both free and premium features.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-600 mb-4">
              To access certain features of the Service, you may be required to create an account. You agree to:
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">You agree not to use the Service to:</p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Create QR codes that link to illegal, harmful, or malicious content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Distribute spam, malware, or other harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The Service and its original content, features, and functionality are and will remain the exclusive 
              property of ZendzQR and its licensors. The QR codes you generate are yours to use as you see fit, 
              subject to these terms.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Subscription and Payments</h2>
            <p className="text-gray-600 mb-6">
              Premium features require a paid subscription. Subscriptions automatically renew unless cancelled. 
              Refunds are provided according to our refund policy. We reserve the right to change pricing with notice.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">7. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain high service availability but do not guarantee uninterrupted access. 
              We may temporarily suspend service for maintenance or updates with reasonable notice when possible.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              ZendzQR shall not be liable for any indirect, incidental, special, or consequential damages 
              resulting from your use of the service. Our total liability shall not exceed the amount 
              paid by you for the service in the preceding 12 months.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-6">
              We may terminate or suspend your account and access to the service immediately, without prior notice, 
              if you breach these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of significant 
              changes via email or through the service. Continued use after changes constitutes acceptance.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">11. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be interpreted and governed in accordance with the laws of [Your Jurisdiction], 
              without regard to conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">12. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at 
              <a href="mailto:legal@zendzqr.com" className="text-black hover:underline ml-1">legal@zendzqr.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}