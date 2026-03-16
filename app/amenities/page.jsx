import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";

export const metadata = {
  title: {
    default:
      "Sattva Aangane Amenities | Clubhouse, Swimming Pool & Lifestyle Facilities",
    template: "%s | Sattva Aangane Amenities",
  },

  description:
    "Explore the premium amenities at Sattva Aangane in Budigere Cross, Old Madras Road Bangalore including clubhouse, swimming pool, gym, landscaped gardens, sports courts, kids play area and modern lifestyle facilities.",

  keywords: [
    "Sattva Aangane amenities",
    "Sattva Aangane Bangalore amenities",
    "Sattva Aangane clubhouse",
    "Sattva Aangane lifestyle amenities",
    "Sattva Aangane sports facilities",
    "Sattva Aangane swimming pool",
    "Sattva Aangane gym",
    "Sattva Aangane kids play area",
    "Budigere Cross apartment amenities",
    "luxury apartment amenities Bangalore"
  ],

  metadataBase: new URL("https://www.sattvaaangane.co"),

  alternates: {
    canonical: "https://www.sattvaaangane.co/amenities",
  },

  openGraph: {
    title:
      "Sattva Aangane Amenities | Premium Lifestyle Facilities in Bangalore",
    description:
      "Discover modern lifestyle amenities at Sattva Aangane including clubhouse, fitness center, swimming pool, landscaped gardens and sports courts.",
    url: "https://www.sattvaaangane.co/amenities",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattvaaangane.co/images/amenities.jpeg",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Amenities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Aangane Amenities | Luxury Lifestyle Facilities",
    description:
      "Explore modern amenities at Sattva Aangane including clubhouse, gym, sports courts and landscaped gardens.",
    images: [
      "https://www.sattvaaangane.co/images/amenities.jpeg"
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Real Estate",
};

export default function page() {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.sattvaaangane.co/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Amenities",
            item: "https://www.sattvaaangane.co/amenities"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",
        name: "Sattva Aangane",
        description:
          "Sattva Aangane offers modern lifestyle amenities including clubhouse, swimming pool, landscaped gardens, fitness center, sports courts and kids play area in East Bangalore.",
        url: "https://www.sattvaaangane.co/amenities",
        image: "https://www.sattvaaangane.co/images/amenities.jpeg",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN"
        },

        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Clubhouse",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming Pool",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Gymnasium",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Jogging Track",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Children Play Area",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Basketball Court",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Badminton Court",
            value: true
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What amenities are available at Sattva Aangane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Aangane offers modern amenities including a clubhouse, swimming pool, gymnasium, sports courts, landscaped gardens, jogging tracks and children's play areas."
            }
          },
          {
            "@type": "Question",
            name: "Does Sattva Aangane have a clubhouse?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sattva Aangane features a modern clubhouse with indoor games, lounge areas, multipurpose halls and community spaces."
            }
          },
          {
            "@type": "Question",
            name: "Are there sports facilities at Sattva Aangane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the project includes badminton courts, basketball courts, cricket practice areas, skating rink and other sports amenities."
            }
          }
        ]
      }

    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}