import FloorPlanPage from "./FloorPlanPage";

export const metadata = {
  title: "Sattva Aangane Floor Plan | Apartment Layout & Unit Plans",
  description:
    "Explore the detailed floor plans of Sattva Aangane in Bangalore. View spacious apartment layouts, smart unit designs, and well-planned living spaces for modern lifestyles.",

  keywords: [
    "Sattva Aangane floor plan",
    "Sattva Aangane Bangalore floor plan",
    "Sattva Aangane apartment layout",
    "Sattva Aangane unit plans",
    "Sattva Aangane 2 BHK floor plan",
    "Sattva Aangane 3 BHK floor plan",
    "Sattva Aangane flat layout",
    "Sattva Aangane apartment design Bangalore"
  ],

  metadataBase: new URL("https://www.sattavaaangane.com"),

  alternates: {
    canonical: "/floor-plan",
  },

  openGraph: {
    title: "Sattva Aangane Floor Plan | Apartment Layout & Unit Plans",
    description:
      "Discover detailed floor plans and apartment layouts at Sattva Aangane Bangalore. Designed for comfort, space, and modern living.",
    url: "https://www.sattavaaangane.com/floor-plan",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattavaaangane.com/images/floor-plan-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Floor Plan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sattva Aangane Floor Plan | Apartment Layout",
    description:
      "View the spacious floor plans and apartment layouts of Sattva Aangane Bangalore.",
    images: ["https://www.sattavaaangane.com/images/floor-plan-banner.webp"],
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
    return <FloorPlanPage/>
};

export default page;