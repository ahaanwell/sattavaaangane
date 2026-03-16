import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";

export const metadata = {
  title: {
    default:
      "Sattva Aangane Location | Old Madras Road Budigere Cross Bangalore Connectivity",
    template: "%s | Sattva Aangane Location",
  },

  description:
    "Discover the prime location of Sattva Aangane at Budigere Cross on Old Madras Main Road, East Bangalore. Enjoy excellent connectivity to Whitefield, KR Puram, ITPL, Kempegowda International Airport, schools, hospitals, and shopping malls.",

  keywords: [
    "Sattva Aangane location",
    "Sattva Aangane Budigere Cross location",
    "Sattva Aangane Old Madras Road",
    "Sattva Aangane Bangalore location",
    "Sattva Aangane connectivity",
    "apartments near Budigere Cross",
    "Budigere Cross residential projects",
    "Sattva Aangane Whitefield connectivity",
    "Sattva Aangane airport connectivity",
    "Sattva Aangane nearby IT parks"
  ],

  metadataBase: new URL("https://www.sattvaaangane.co"),

  alternates: {
    canonical: "https://www.sattvaaangane.co/location",
  },

  openGraph: {
    title:
      "Sattva Aangane Location | Budigere Cross Old Madras Road Bangalore",
    description:
      "Explore the strategic location of Sattva Aangane in East Bangalore with excellent connectivity to Whitefield, KR Puram, IT hubs, schools, hospitals and Kempegowda International Airport.",
    url: "https://www.sattvaaangane.co/location",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattvaaangane.co/images/location-banner.png",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Location Map Budigere Cross",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Aangane Location | Budigere Cross Connectivity",
    description:
      "View the location map and connectivity advantages of Sattva Aangane Bangalore near Whitefield and Old Madras Road.",
    images: ["https://www.sattvaaangane.co/images/location-banner.png"],
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
            name: "Location",
            item: "https://www.sattvaaangane.co/location"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",
        name: "Sattva Aangane",
        description:
          "Sattva Aangane is a premium residential apartment project located on Old Madras Main Road near Budigere Cross in East Bangalore with excellent connectivity to Whitefield, KR Puram and Kempegowda International Airport.",
        url: "https://www.sattvaaangane.co/location",
        image: "https://www.sattvaaangane.co/images/location-banner.png",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN"
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: "13.0685",
          longitude: "77.7440"
        }
      },

      {
        "@type": "Place",
        name: "Whitefield IT Hub",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Whitefield",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Sattva Aangane located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Aangane is located on Old Madras Main Road near Budigere Cross in East Bangalore with excellent connectivity to Whitefield, KR Puram and the airport."
            }
          },
          {
            "@type": "Question",
            name: "How far is Whitefield from Sattva Aangane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Whitefield IT hub is approximately 10–12 km from the Sattva Aangane project location at Budigere Cross."
            }
          },
          {
            "@type": "Question",
            name: "How far is Kempegowda International Airport from Sattva Aangane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kempegowda International Airport is approximately 27–30 km from Sattva Aangane and can be reached in around 40–50 minutes depending on traffic."
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}