import PricePage from "./PricePage";

export const metadata = {
  title: "Sattva Aangane Price | Apartment Price List & Cost Details",
  description:
    "Check the latest Sattva Aangane price list in Bangalore. Explore detailed pricing for premium apartments with modern amenities, floor plans, and payment plans.",

  keywords: [
    "Sattva Aangane price",
    "Sattva Aangane Bangalore price",
    "Sattva Aangane apartment cost",
    "Sattva Aangane price list",
    "Sattva Aangane Bangalore pricing",
    "Sattva Aangane flats price",
    "Sattva Aangane payment plan",
    "Sattva Aangane apartment price Bangalore"
  ],

  metadataBase: new URL("https://www.sattavaaangane.com"),

  alternates: {
    canonical: "/price",
  },

  openGraph: {
    title: "Sattva Aangane Price | Apartment Price List & Cost Details",
    description:
      "Discover the latest Sattva Aangane apartment prices in Bangalore. Get complete price details, payment plans, and unit configurations.",
    url: "https://www.sattavaaangane.com/price",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattavaaangane.com/images/price-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Price Details",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sattva Aangane Price | Apartment Price List",
    description:
      "View the latest Sattva Aangane apartment price list and payment plans in Bangalore.",
    images: ["https://www.sattavaaangane.com/images/price-banner.webp"],
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

export default function Page() {
  return <PricePage />;
}