const { default: AmenitiesPage } = require("./AmenitiesPage");


export const metadata = {
  title: "Sattva Aangane Amenities | Modern Lifestyle & Premium Facilities",
  description:
    "Discover the world-class amenities at Sattva Aangane Bangalore including clubhouse, swimming pool, landscaped gardens, fitness center, kids play area, and many more modern lifestyle facilities.",

  keywords: [
    "Sattva Aangane amenities",
    "Sattva Aangane Bangalore amenities",
    "Sattva Aangane facilities",
    "Sattva Aangane clubhouse",
    "Sattva Aangane lifestyle amenities",
    "Sattva Aangane modern amenities",
    "Sattva Aangane apartment amenities Bangalore"
  ],

  metadataBase: new URL("https://www.sattvaaangane.co"),

  alternates: {
    canonical: "/amenities",
  },

  openGraph: {
    title: "Sattva Aangane Amenities | Modern Lifestyle & Premium Facilities",
    description:
      "Explore the premium amenities at Sattva Aangane Bangalore including clubhouse, swimming pool, gym, landscaped gardens, and more for a luxurious lifestyle.",
    url: "https://www.sattvaaangane.co/amenities",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattvaaangane.co/images/amenities-banner.webp",
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
    title: "Sattva Aangane Amenities | Premium Lifestyle Facilities",
    description:
      "View the premium amenities and lifestyle facilities available at Sattva Aangane Bangalore.",
    images: ["https://www.sattvaaangane.co/images/sattvaaangane.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "real estate",
};

function page(){
    return <AmenitiesPage/>
};

export default page;