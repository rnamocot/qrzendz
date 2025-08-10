export const metadata = {
  title: "Privacy Policy - ZendzQR | Data Protection",
  description: "Learn how ZendzQR protects your privacy and handles your personal data when using our QR code generator service. GDPR compliant.",
  keywords: ["ZendzQR privacy", "privacy policy", "data protection", "GDPR", "personal data", "QR code privacy"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - ZendzQR",
    description: "Learn how ZendzQR protects your privacy and handles your personal data.",
    type: "website",
  },
}

export default function Privacy() {
  return (
    <section className="bg-white py-20">
      {/* Spacer for fixed header */}
      <div className="h-40"></div>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information you provide directly to us, such as:</p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Account information (name, email address, password)</li>
              <li>QR code content and customization preferences</li>
              <li>Payment information for premium subscriptions</li>
              <li>Support communications and feedback</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Automatically Collected Information</h2>
            <p className="text-gray-600 mb-4">We automatically collect certain information, including:</p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Device information (browser type, operating system)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>IP address and general location information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information to:</p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Provide and maintain our QR code generation service</li>
              <li>Process payments and manage your account</li>
              <li>Send important service notifications and updates</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our service and develop new features</li>
              <li>Prevent fraud and ensure service security</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Information Sharing</h2>
            <p className="text-gray-600 mb-4">We do not sell or rent your personal information. We may share information in these situations:</p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>With service providers who help us operate our platform</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. QR Code Content</h2>
            <p className="text-gray-600 mb-6">
              For static QR codes, we do not store the content you encode. For dynamic QR codes (premium feature), 
              we store the destination URLs to enable editing and analytics features. You maintain full ownership 
              of your QR code content.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, no 
              internet transmission is completely secure.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as your account is active or as needed to provide 
              our services. We will delete your information when you close your account, except as required 
              for legal compliance.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">8. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Object to certain processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">9. Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar technologies to enhance your experience, remember your preferences, 
              and analyze usage patterns. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">10. Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              Our service may contain links to third-party websites or services. We are not responsible for 
              the privacy practices of these external services. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">11. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our service is not directed to children under 13. We do not knowingly collect personal information 
              from children under 13. If we become aware of such collection, we will delete the information immediately.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">12. International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be processed in countries other than your own. We ensure appropriate 
              safeguards are in place to protect your information during such transfers.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">13. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of any material changes 
              by email or through our service. Your continued use after changes indicates acceptance.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">14. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this privacy policy or our privacy practices, please contact us at 
              <a href="mailto:privacy@zendzqr.com" className="text-black hover:underline ml-1">privacy@zendzqr.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}