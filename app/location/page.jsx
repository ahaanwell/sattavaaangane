import LocationPage from "./LocationPage";


export const metadata = {
  title: "Sattva Aangane Location | Connectivity & Nearby Landmarks",
  description:
    "Explore the prime location of Sattva Aangane in Bangalore. Discover excellent connectivity to major IT hubs, schools, hospitals, shopping centers, and key landmarks.",

  keywords: [
    "Sattva Aangane location",
    "Sattva Aangane Bangalore location",
    "Sattva Aangane connectivity",
    "Sattva Aangane address",
    "Sattva Aangane nearby landmarks",
    "Sattva Aangane Bangalore map",
    "Sattva Aangane project location",
    "Sattva Aangane connectivity Bangalore"
  ],

  metadataBase: new URL("https://www.sattavaaangane.com"),

  alternates: {
    canonical: "/location",
  },

  openGraph: {
    title: "Sattva Aangane Location | Connectivity & Nearby Landmarks",
    description:
      "Discover the strategic location of Sattva Aangane Bangalore with excellent connectivity to IT parks, schools, hospitals, and major roads.",
    url: "https://www.sattavaaangane.com/location",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattavaaangane.com/images/location-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Location Map",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sattva Aangane Location | Connectivity & Map",
    description:
      "View the location and connectivity of Sattva Aangane Bangalore with nearby landmarks and transport access.",
    images: ["https://www.sattavaaangane.com/images/location-banner.webp"],
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
    return <LocationPage/>
};

export default page;