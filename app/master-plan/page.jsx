import MasterPlanPage from "./MasterPlanPage";

export const metadata = {
  title: "Sattva Aangane Master Plan | Project Layout & Township Plan",
  description:
    "Explore the master plan of Sattva Aangane in Bangalore. Discover the thoughtfully designed project layout featuring residential towers, green spaces, amenities, and well-planned infrastructure.",

  keywords: [
    "Sattva Aangane master plan",
    "Sattva Aangane Bangalore master plan",
    "Sattva Aangane site plan",
    "Sattva Aangane project layout",
    "Sattva Aangane township plan",
    "Sattva Aangane apartment layout plan",
    "Sattva Aangane residential layout Bangalore"
  ],

  metadataBase: new URL("https://www.sattvaaangane.co"),

  alternates: {
    canonical: "/master-plan",
  },

  openGraph: {
    title: "Sattva Aangane Master Plan | Project Layout & Township Plan",
    description:
      "View the detailed master plan of Sattva Aangane Bangalore featuring residential towers, open green areas, modern amenities, and smart infrastructure.",
    url: "https://www.sattvaaangane.co/master-plan",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattvaaangane.co/images/master-plan-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Master Plan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sattva Aangane Master Plan | Project Layout",
    description:
      "Discover the master layout plan of Sattva Aangane Bangalore with modern amenities and well-planned spaces.",
    images: ["https://www.sattvaaangane.co/images/master-plan-banner.webp"],
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
    return <MasterPlanPage/>
};

export default page;