import FloorPlanPage from "./FloorPlanPage";

export const metadata = {
  title: {
    default:
      "Sattva Aangane Floor Plan | 2, 3 & 4 BHK Apartment Layouts Budigere Cross Bangalore",
    template: "%s | Sattva Aangane Floor Plan",
  },

  description:
    "Explore the detailed floor plans of Sattva Aangane located on Old Madras Main Road, Budigere Cross, Bangalore. View well-designed 2 BHK, 3 BHK and 4 BHK apartment layouts with spacious rooms, modern architecture, and efficient living spaces.",

  keywords: [
    "Sattva Aangane floor plan",
    "Sattva Aangane Bangalore floor plan",
    "Sattva Aangane Budigere Cross floor plan",
    "Sattva Aangane apartment layout",
    "Sattva Aangane unit plan",
    "Sattva Aangane 2 BHK floor plan",
    "Sattva Aangane 3 BHK floor plan",
    "Sattva Aangane 4 BHK floor plan",
    "Sattva Aangane flat layout",
    "Sattva Aangane apartment design",
    "Budigere Cross apartment floor plan",
    "apartments floor plan Bangalore",
  ],

  metadataBase: new URL("https://www.sattvaaangane.co"),

  alternates: {
    canonical: "https://www.sattvaaangane.co/floor-plan",
  },

  openGraph: {
    title:
      "Sattva Aangane Floor Plan | 2, 3 & 4 BHK Apartment Layouts",
    description:
      "View the spacious floor plans and apartment layouts of Sattva Aangane Bangalore featuring modern architecture and smart living spaces.",
    url: "https://www.sattvaaangane.co/floor-plan",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattvaaangane.co/images/floor-plan-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Floor Plan Layout",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Aangane Floor Plan | 2, 3 & 4 BHK Apartment Layout",
    description:
      "Discover spacious and modern floor plans at Sattva Aangane Bangalore. View detailed apartment layouts for 2 BHK, 3 BHK and 4 BHK homes.",
    images: [
      "https://www.sattvaaangane.co/images/floor-plan-banner.jpeg",
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
            name: "Floor Plan",
            item: "https://www.sattvaaangane.co/floor-plan",
          },
        ],
      },

      {
        "@type": "Apartment",
        name: "Sattva Aangane Floor Plan",
        description:
          "Detailed floor plans of Sattva Aangane apartments located in Budigere Cross Bangalore including 2 BHK, 3 BHK and 4 BHK layouts.",
        url: "https://www.sattvaaangane.co/floor-plan",
        image:
          "https://www.sattvaaangane.co/images/floor-plan-banner.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },

        numberOfRooms: "2,3,4",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Spacious Living Rooms",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Modern Kitchen Layout",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Balcony Design",
            value: true,
          },
        ],
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What apartment types are available in Sattva Aangane floor plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Aangane offers 2 BHK, 3 BHK and 4 BHK apartment floor plans designed for spacious and modern living.",
            },
          },
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
            name: "Are the floor plans of Sattva Aangane spacious?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the floor plans are designed with spacious living areas, modern kitchens, balconies and efficient layouts for comfortable living.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FloorPlanPage />
    </>
  );
}