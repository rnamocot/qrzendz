import { Target, Users, Zap, Heart } from "lucide-react"
import RelatedContent from "../components/RelatedContent"

export const metadata = {
  title: "About ZendzQR - Your Trusted QR Code Generator",
  description: "Learn about ZendzQR's mission to make QR code generation simple, fast, and accessible for everyone. Discover our story and values.",
  keywords: "about ZendzQR, QR code generator company, QR code mission, team",
  robots: "index, follow",
  openGraph: {
    title: "About ZendzQR - Your Trusted QR Code Generator",
    description: "Learn about ZendzQR's mission to make QR code generation simple, fast, and accessible for everyone.",
    type: "website",
  },
}

export default function About() {
  return (
    <>
      <section className="bg-white py-20">
        {/* Spacer for fixed header */}
        <div className="h-40"></div>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-black mb-6">
                About ZendzQR
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe QR codes should be simple to create, beautiful to look at, 
                and powerful enough for any use case. That's why we built ZendzQR.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  ZendzQR was born from a simple frustration: existing QR code generators 
                  were either too complicated, produced low-quality codes, or came with 
                  hidden costs and limitations.
                </p>
                <p className="text-gray-600 mb-6">
                  We set out to create the perfect QR code generator – one that combines 
                  simplicity with power, offering professional-grade customization 
                  without the complexity.
                </p>
                <p className="text-gray-600">
                  Today, ZendzQR serves thousands of users worldwide, from small business 
                  owners to large enterprises, helping them connect the physical and 
                  digital worlds effortlessly.
                </p>
              </div>
              <div className="bg-yellow-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-16 h-16 border-4 border-white rounded-xl"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    10,000+ QR Codes Generated
                  </h3>
                  <p className="text-gray-600">
                    Trusted by businesses and individuals worldwide
                  </p>
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
              <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Simplicity First</h3>
                <p className="text-gray-600">
                  We believe powerful tools don't have to be complicated. Our interface 
                  is designed to be intuitive for everyone, regardless of technical experience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Quality Excellence</h3>
                <p className="text-gray-600">
                  Every QR code we generate meets the highest standards. We use advanced 
                  algorithms to ensure perfect readability and professional appearance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">User-Centric</h3>
                <p className="text-gray-600">
                  Your needs drive our development. We listen to feedback and continuously 
                  improve our platform based on real user experiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees, no data collection, no surprises. We're upfront about 
                  our pricing and practices, building trust through transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Experience the difference of a QR code generator built with care, 
              designed for simplicity, and focused on quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/auth/register"
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Get Started Today
              </a>
              <a
                href="/support"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-black hover:text-black transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <RelatedContent section="about" />
    </>
  )
}