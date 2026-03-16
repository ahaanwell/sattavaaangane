import PricePage from "./PricePage";

export const metadata = {
  title: {
    default:
      "Sattva Aangane Price | 2, 3 & 4 BHK Apartment Price List Budigere Cross Bangalore",
    template: "%s | Sattva Aangane Price",
  },

  description:
    "Check the latest Sattva Aangane price list for premium 2, 3 and 4 BHK apartments at Budigere Cross, Old Madras Main Road Bangalore. View detailed pricing, unit configurations, and flexible payment plans.",

  keywords: [
    "Sattva Aangane price",
    "Sattva Aangane Bangalore price",
    "Sattva Aangane apartment price",
    "Sattva Aangane Budigere Cross price",
    "Sattva Aangane price list",
    "Sattva Aangane 2 BHK price",
    "Sattva Aangane 3 BHK price",
    "Sattva Aangane 4 BHK price",
    "Sattva Aangane cost",
    "Sattva Aangane payment plan",
    "apartments price Budigere Cross",
    "luxury apartment price Bangalore"
  ],

  metadataBase: new URL("https://www.sattvaaangane.co"),

  alternates: {
    canonical: "https://www.sattvaaangane.co/price",
  },

  openGraph: {
    title:
      "Sattva Aangane Price | 2, 3 & 4 BHK Apartment Price List Bangalore",
    description:
      "Explore the latest price list of Sattva Aangane apartments in Budigere Cross Bangalore including configuration wise pricing and payment plans.",
    url: "https://www.sattvaaangane.co/price",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattvaaangane.co/images/sattvaaangane.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Apartment Price List",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Aangane Price | Apartment Price List Budigere Cross",
    description:
      "View the latest price list of Sattva Aangane Bangalore including 2, 3 and 4 BHK apartment pricing and payment plans.",
    images: ["https://www.sattvaaangane.co/images/sattvaaangane.webp"],
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

export default function Page() {

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
            name: "Price",
            item: "https://www.sattvaaangane.co/price"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",
        name: "Sattva Aangane",
        description:
          "Sattva Aangane is a premium residential apartment project located at Budigere Cross, Old Madras Main Road Bangalore offering luxury 2, 3 and 4 BHK apartments with modern amenities.",
        url: "https://www.sattvaaangane.co/price",
        image: "https://www.sattvaaangane.co/images/sattvaaangane.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "On Request",
          availability: "https://schema.org/PreOrder",
          url: "https://www.sattvaaangane.co/price"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the starting price of Sattva Aangane apartments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The starting price of Sattva Aangane apartments depends on the configuration such as 2 BHK, 3 BHK and 4 BHK units. For the latest price list and offers you can request the updated pricing details."
            }
          },
          {
            "@type": "Question",
            name: "Where is Sattva Aangane located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Aangane is located at Budigere Cross on Old Madras Main Road in East Bangalore."
            }
          },
          {
            "@type": "Question",
            name: "Does Sattva Aangane offer payment plans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sattva Aangane offers flexible payment plans for home buyers including construction linked plans and bank loan options."
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
      <PricePage />
    </>
  );
}