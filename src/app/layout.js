import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import { UserProvider } from "./contexts/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://zendzqr.com'),
  title: {
    default: "ZendzQR - Free QR Code Generator | Create Custom QR Codes",
    template: "%s | ZendzQR - QR Code Generator"
  },
  description: "Generate, customize, and download QR codes instantly. Free QR code generator with customization options for business cards, URLs, WiFi, and more. Trusted by 10,000+ users worldwide.",
  keywords: [
    "QR code generator",
    "free QR codes", 
    "custom QR codes",
    "QR code maker",
    "business QR codes",
    "dynamic QR codes",
    "QR code with logo",
    "bulk QR code generator",
    "professional QR codes",
    "QR code analytics"
  ],
  authors: [{ name: "ZendzQR Team" }],
  creator: "ZendzQR",
  publisher: "ZendzQR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zendzqr.com",
    siteName: "ZendzQR - QR Code Generator",
    title: "ZendzQR - Free QR Code Generator | Create Custom QR Codes",
    description: "Generate, customize, and download QR codes instantly. Free QR code generator with Pro features for businesses and professionals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZendzQR - Professional QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZendzQR - Free QR Code Generator",
    description: "Generate, customize, and download QR codes instantly. Free QR code generator with Pro features.",
    images: ["/twitter-image.png"],
    creator: "@ZendzQRApp",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://zendzqr.com",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://zendzqr.com/#website",
        "url": "https://zendzqr.com",
        "name": "ZendzQR - QR Code Generator",
        "description": "Professional QR code generator with customization options",
        "publisher": {
          "@id": "https://zendzqr.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://zendzqr.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://zendzqr.com/#organization",
        "name": "ZendzQR",
        "url": "https://zendzqr.com",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://zendzqr.com/#/schema/logo/image/",
          "url": "https://zendzqr.com/logo.png",
          "contentUrl": "https://zendzqr.com/logo.png",
          "width": 512,
          "height": 512,
          "caption": "ZendzQR"
        },
        "image": {
          "@id": "https://zendzqr.com/#/schema/logo/image/"
        },
        "description": "ZendzQR is a professional QR code generator platform trusted by thousands worldwide",
        "foundingDate": "2024",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-QRGEN",
          "contactType": "customer service",
          "email": "support@zendzqr.com",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://twitter.com/ZendzQRApp",
          "https://facebook.com/ZendzQRApp",
          "https://linkedin.com/company/qrgen"
        ]
      },
      {
        "@type": "WebApplication",
        "name": "ZendzQR QR Code Generator",
        "url": "https://zendzqr.com/generator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "description": "Free online QR code generator with customization options",
        "offers": [
          {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "description": "Free QR Code Generation"
          },
          {
            "@type": "Offer",
            "price": "9",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "description": "Pro QR Code Features",
            "priceValidUntil": "2025-12-31"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1247",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://zendzqr.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <Navigation />
          <Breadcrumbs />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
