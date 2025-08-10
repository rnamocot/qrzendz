import { BookOpen, Video, FileText, ExternalLink, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Learning Center - QR Code Guides & Tutorials | ZendzQR",
  description: "Master QR codes with our comprehensive guides and tutorials. Learn best practices, use cases, and advanced techniques for QR code generation.",
  keywords: "QR code guides, QR code tutorials, QR code best practices, QR code tips, how to use QR codes",
  robots: "index, follow",
  openGraph: {
    title: "Learning Center - QR Code Guides & Tutorials | ZendzQR",
    description: "Master QR codes with our comprehensive guides and tutorials. Learn best practices and advanced techniques.",
    type: "website",
  },
}

export default function LearningCenter() {
  const guides = [
    {
      title: "Getting Started with QR Codes",
      description: "Learn the basics of QR codes, how they work, and why they're useful for your business or personal projects.",
      category: "Beginner",
      readTime: "5 min",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "QR Code Best Practices",
      description: "Discover the do's and don'ts of QR code design, placement, and implementation for maximum effectiveness.",
      category: "Best Practices",
      readTime: "8 min",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Advanced Customization Tips",
      description: "Master advanced techniques for customizing your QR codes with colors, logos, and branding elements.",
      category: "Advanced",
      readTime: "10 min",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "QR Codes for Marketing",
      description: "Learn how to leverage QR codes in your marketing campaigns to bridge offline and online experiences.",
      category: "Marketing",
      readTime: "7 min",
      icon: <ExternalLink className="w-6 h-6" />
    },
    {
      title: "Print Quality Guidelines",
      description: "Ensure your QR codes scan perfectly in print materials with our comprehensive printing guidelines.",
      category: "Technical",
      readTime: "6 min",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "QR Code Security",
      description: "Understand security considerations when using QR codes and how to protect users from malicious codes.",
      category: "Security",
      readTime: "9 min",
      icon: <BookOpen className="w-6 h-6" />
    }
  ]

  const useCases = [
    {
      title: "Restaurant Menus",
      description: "Create contactless dining experiences with QR code menus",
      image: "🍽️"
    },
    {
      title: "Business Cards",
      description: "Share contact information instantly with digital business cards",
      image: "💼"
    },
    {
      title: "Event Registration",
      description: "Streamline event check-ins and registration processes",
      image: "🎫"
    },
    {
      title: "WiFi Sharing",
      description: "Let guests connect to your WiFi network effortlessly",
      image: "📶"
    },
    {
      title: "Product Information",
      description: "Link physical products to digital content and reviews",
      image: "📦"
    },
    {
      title: "Social Media",
      description: "Grow your social media following with QR code links",
      image: "📱"
    }
  ]

  return (
    <>
      <section className="bg-white py-20">
        {/* Spacer for fixed header */}
        <div className="h-40"></div>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-black mb-6">
              Learning Center
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master the art of QR codes with our comprehensive guides, tutorials, 
              and best practices. From basics to advanced techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white transition-colors duration-200">
                    {guide.icon}
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {guide.readTime} read
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">
                Popular Use Cases
              </h2>
              <p className="text-xl text-gray-600">
                Discover how businesses and individuals are using QR codes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-200">
                  <div className="text-4xl mb-4">{useCase.image}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Put Knowledge into Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Now that you know the basics, it's time to create your first professional QR code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/auth/register"
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Start Creating QR Codes
              </a>
              <a
                href="/support"
                className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:border-white transition-colors duration-200"
              >
                Need Help? Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}