import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BrochureWrapper from "@/components/BrochureWrapper";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default:
      "Sattva Aangane Bangalore | Price, Floor Plan, Brochure | 2, 3 & 4 BHK Apartments Budigere Cross",
    template: "%s | Sattva Aangane Bangalore",
  },

  description:
    "Sattva Aangane is a premium residential apartment project located on Old Madras Main Road, Budigere Cross, Bangalore. Spread across 10+ acres with 4 towers and G+35 floors offering luxury 2, 3 and 4 BHK apartments with modern amenities and excellent connectivity.",

  keywords: [
    "Sattva Aangane",
    "Sattva Aangane Bangalore",
    "Sattva Aangane Budigere Cross",
    "Sattva Aangane Old Madras Road",
    "Sattva Aangane price",
    "Sattva Aangane brochure",
    "Sattva Aangane floor plan",
    "apartments in Budigere Cross",
    "luxury apartments Bangalore",
    "new launch apartments Bangalore",
    "Sattva Group projects Bangalore",
    "2 BHK apartments Budigere Cross",
    "3 BHK apartments Budigere Cross",
    "4 BHK apartments Budigere Cross",
  ],

  metadataBase: new URL("https://www.sattvaaangane.co"),

  alternates: {
    canonical: "https://www.sattvaaangane.co/",
  },

  openGraph: {
    title:
      "Sattva Aangane Bangalore | Luxury Apartments at Budigere Cross",
    description:
      "Discover luxury apartments at Sattva Aangane located at Budigere Cross, Old Madras Main Road, Bangalore with premium amenities and modern lifestyle.",
    url: "https://www.sattvaaangane.co/",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattvaaangane.co/images/sattvaaangane.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Luxury Apartments Budigere Cross Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Aangane Bangalore | Luxury Apartments Budigere Cross",
    description:
      "Explore Sattva Aangane apartments in Budigere Cross Bangalore offering premium 2, 3 and 4 BHK homes with world class amenities.",
    images: [
      "https://www.sattvaaangane.co/images/sattvaaangane.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  authors: [
    {
      name: "Sattva Aangane",
      url: "https://www.sattvaaangane.co/",
    },
  ],

  creator: "Sattva Aangane",
  publisher: "Sattva Aangane",

  category: "Real Estate",

  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Sattva Aangane",
        url: "https://www.sattvaaangane.co/",
        logo: "https://www.sattvaaangane.co/images/sattvaaangane.webp",
      },
      {
        "@type": "ApartmentComplex",
        name: "Sattva Aangane",
        description:
          "Sattva Aangane is a luxury residential gated community located on Old Madras Main Road, Budigere Cross, Bangalore offering premium 2, 3 and 4 BHK apartments.",
        url: "https://www.sattvaaangane.co/",
        image:
          "https://www.sattvaaangane.co/images/sattvaaangane.webp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN",
        },
        numberOfAccommodationUnits: "600+",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming Pool",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Gym",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Clubhouse",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Children Play Area",
            value: true,
          },
        ],
        offers: {
          "@type": "Offer",
          price: "12000000",
          priceCurrency: "INR",
          availability: "https://schema.org/PreSale",
          url: "https://www.sattvaaangane.co/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Sattva Aangane located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Aangane is located on Old Madras Main Road at Budigere Cross in East Bangalore.",
            },
          },
          {
            "@type": "Question",
            name: "What is the starting price of Sattva Aangane apartments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The starting price of apartments at Sattva Aangane is approximately ₹1.2 Crore.",
            },
          },
          {
            "@type": "Question",
            name: "What apartment types are available in Sattva Aangane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project offers spacious 2 BHK, 3 BHK and 4 BHK luxury apartments.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        <BrochureWrapper/>
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}