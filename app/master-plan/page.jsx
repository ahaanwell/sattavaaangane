import MasterPlanPage from "./MasterPlanPage";

export const metadata = {
  title: {
    default:
      "Sattva Aangane Master Plan | Township Layout & Project Site Plan Budigere Cross",
    template: "%s | Sattva Aangane Master Plan",
  },

  description:
    "Explore the master plan of Sattva Aangane located on Old Madras Main Road, Budigere Cross, Bangalore. Discover the well-planned township layout with residential towers, landscaped gardens, modern amenities, and open green spaces.",

  keywords: [
    "Sattva Aangane master plan",
    "Sattva Aangane Bangalore master plan",
    "Sattva Aangane Budigere Cross master plan",
    "Sattva Aangane township layout",
    "Sattva Aangane site plan",
    "Sattva Aangane project layout",
    "Sattva Aangane apartment township plan",
    "Budigere Cross apartment master plan",
    "Sattva Aangane tower layout",
    "Sattva Aangane residential layout Bangalore"
  ],

  metadataBase: new URL("https://www.sattvaaangane.co"),

  alternates: {
    canonical: "https://www.sattvaaangane.co/master-plan",
  },

  openGraph: {
    title:
      "Sattva Aangane Master Plan | Township Layout & Project Site Plan",
    description:
      "View the detailed master layout of Sattva Aangane Bangalore featuring residential towers, landscaped gardens, modern amenities, and open green spaces.",
    url: "https://www.sattvaaangane.co/master-plan",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattvaaangane.co/images/master-plan-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Master Plan Layout",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Aangane Master Plan | Township Layout Budigere Cross",
    description:
      "Discover the master plan layout of Sattva Aangane Bangalore including tower placement, amenities, green areas and project infrastructure.",
    images: [
      "https://www.sattvaaangane.co/images/master-plan-banner.jpeg",
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
            item: "https://www.sattvaaangane.co/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Master Plan",
            item: "https://www.sattvaaangane.co/master-plan",
          },
        ],
      },

      {
        "@type": "ApartmentComplex",
        name: "Sattva Aangane Master Plan",
        description:
          "Master plan of Sattva Aangane residential project in Budigere Cross Bangalore featuring 4 towers, landscaped gardens, modern amenities and planned open spaces.",
        url: "https://www.sattvaaangane.co/master-plan",
        image:
          "https://www.sattvaaangane.co/images/master-plan-banner.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        numberOfAccommodationUnits: "600+",

        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Landscaped Gardens",
            value: true
          },
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
            name: "Children Play Area",
            value: true
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does the Sattva Aangane master plan include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The master plan of Sattva Aangane includes residential towers, landscaped gardens, modern amenities, open green spaces and internal roads designed for comfortable living."
            }
          },
          {
            "@type": "Question",
            name: "How many towers are included in Sattva Aangane master plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The master plan of Sattva Aangane includes 4 residential towers with G+35 floors."
            }
          },
          {
            "@type": "Question",
            name: "Where is Sattva Aangane located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Aangane is located on Old Madras Main Road at Budigere Cross in East Bangalore."
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
      <MasterPlanPage />
    </>
  );
}