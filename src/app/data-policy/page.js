export const metadata = {
  title: "Data Policy - ZendzQR | Data Processing",
  description: "Understand how ZendzQR collects, processes, and protects your data when using our QR code generation platform. Transparent data handling.",
  keywords: ["ZendzQR data policy", "data processing", "data collection", "data security", "data retention", "QR code data"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Data Policy - ZendzQR",
    description: "Understand how ZendzQR collects, processes, and protects your data.",
    type: "website",
  },
}

export default function DataPolicy() {
  return (
    <section className="bg-white py-20">
      {/* Spacer for fixed header */}
      <div className="h-40"></div>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Data Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              This Data Policy explains how ZendzQR collects, uses, stores, and protects your data 
              when you use our QR code generation platform.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Data Collection Practices</h2>
            <h3 className="text-xl font-medium text-black mt-6 mb-3">Account Data</h3>
            <ul className="text-gray-600 mb-4 list-disc pl-6">
              <li>Name and email address for account creation</li>
              <li>Encrypted password for account security</li>
              <li>Account preferences and settings</li>
            </ul>

            <h3 className="text-xl font-medium text-black mt-6 mb-3">QR Code Data</h3>
            <ul className="text-gray-600 mb-4 list-disc pl-6">
              <li><strong>Static QR Codes:</strong> Content is processed client-side and not stored on our servers</li>
              <li><strong>Dynamic QR Codes:</strong> Destination URLs and metadata stored for editing capabilities</li>
              <li>Customization preferences (colors, logos, styling)</li>
            </ul>

            <h3 className="text-xl font-medium text-black mt-6 mb-3">Usage Analytics</h3>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Feature usage patterns and frequency</li>
              <li>Performance metrics and error reports</li>
              <li>Device and browser information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Data Processing Purposes</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium text-black mb-3">Primary Purposes</h3>
              <ul className="text-gray-600 list-disc pl-6">
                <li>Provide QR code generation and customization services</li>
                <li>Maintain user accounts and preferences</li>
                <li>Process payments for premium subscriptions</li>
                <li>Deliver customer support</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium text-black mb-3">Secondary Purposes</h3>
              <ul className="text-gray-600 list-disc pl-6">
                <li>Improve service quality and user experience</li>
                <li>Develop new features and capabilities</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Data Storage and Security</h2>
            <h3 className="text-xl font-medium text-black mt-6 mb-3">Storage Infrastructure</h3>
            <ul className="text-gray-600 mb-4 list-disc pl-6">
              <li>Data stored on secure, encrypted cloud servers</li>
              <li>Regular backups with encryption at rest</li>
              <li>Geographic redundancy for data protection</li>
            </ul>

            <h3 className="text-xl font-medium text-black mt-6 mb-3">Security Measures</h3>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>End-to-end encryption for sensitive data</li>
              <li>Multi-factor authentication for admin access</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Staff access controls and monitoring</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Data Sharing and Third Parties</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-gray-700">
                <strong>We do not sell, rent, or trade your personal data to third parties for marketing purposes.</strong>
              </p>
            </div>

            <h3 className="text-xl font-medium text-black mt-6 mb-3">Limited Sharing Scenarios</h3>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li><strong>Service Providers:</strong> Hosting, payment processing, and analytics services</li>
              <li><strong>Legal Requirements:</strong> When required by law or legal process</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
              <li><strong>User Consent:</strong> When you explicitly authorize sharing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Data Retention</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left text-black">Data Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-black">Retention Period</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-black">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Account Data</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Until account deletion</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Service provision</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">QR Code Content</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Static: Not stored<br />Dynamic: Until deletion</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Feature functionality</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Usage Analytics</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">24 months (aggregated)</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Service improvement</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Support Communications</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">3 years</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Quality assurance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Your Data Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-black mb-2">Access & Portability</h3>
                <p className="text-gray-600 text-sm">Request a copy of your data in a machine-readable format</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-black mb-2">Correction</h3>
                <p className="text-gray-600 text-sm">Update or correct inaccurate personal information</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-black mb-2">Deletion</h3>
                <p className="text-gray-600 text-sm">Request deletion of your account and associated data</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-black mb-2">Processing Limits</h3>
                <p className="text-gray-600 text-sm">Object to or restrict certain data processing activities</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">7. International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your data may be processed in countries with different data protection laws. We ensure 
              appropriate safeguards through standard contractual clauses and adequacy decisions 
              where applicable.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">8. Data Breach Response</h2>
            <p className="text-gray-600 mb-4">In the event of a data breach, we will:</p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Notify authorities within 72 hours where required</li>
              <li>Inform affected users without undue delay</li>
              <li>Take immediate steps to contain and remedy the breach</li>
              <li>Conduct a thorough investigation and implement improvements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">9. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-600 mb-4">
                For any questions about this Data Policy or to exercise your data rights, contact us:
              </p>
              <ul className="text-gray-600 list-none space-y-2">
                <li><strong>Email:</strong> <a href="mailto:privacy@zendzqr.com" className="text-black hover:underline">privacy@zendzqr.com</a></li>
                <li><strong>Data Protection Officer:</strong> <a href="mailto:dpo@zendzqr.com" className="text-black hover:underline">dpo@zendzqr.com</a></li>
                <li><strong>Response Time:</strong> Within 30 days of verified requests</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">10. Policy Updates</h2>
            <p className="text-gray-600 mb-6">
              We review this Data Policy regularly and will notify users of material changes through 
              email or prominent notices within our service. The date of the latest revision appears 
              at the top of this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}