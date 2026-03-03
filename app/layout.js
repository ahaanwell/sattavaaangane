import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrochureDownload from "@/components/BrochureDownload";
import MobileBottomBar from "@/components/MobileBottomBar";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sattva Aangane | Premium Apartments in Bangalore",
  description:
    "Sattva Aangane offers premium residential apartments in Bangalore with modern amenities, spacious floor plans, excellent connectivity, and green surroundings.",

  keywords: [
    "Sattva Aangane",
    "Sattva Aangane Bangalore",
    "apartments in Bangalore",
    "luxury apartments Bangalore",
    "Sattva projects Bangalore",
    "new residential projects Bangalore",
  ],

  metadataBase: new URL("https://www.sattavaaangane.com"),

  alternates: {
    canonical: "https://www.sattavaaangane.com/",
  },

  openGraph: {
    title: "Sattva Aangane | Premium Apartments in Bangalore",
    description:
      "Discover premium apartments at Sattva Aangane in Bangalore with modern amenities and excellent connectivity.",
    url: "https://www.sattavaaangane.com/",
    siteName: "Sattva Aangane",
    images: [
      {
        url: "https://www.sattavaaangane.com/images/sattvaaranya.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Aangane Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sattva Aangane | Premium Apartments in Bangalore",
    description:
      "Explore Sattva Aangane apartments in Bangalore with modern amenities and premium living.",
    images: ["https://www.sattavaaangane.com/images/sattvaaranya.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Header/>
        <BrochureDownload topPosition={"top-80"} frmName={"Broucher"}/>
        {children}
        <Footer/>
        <MobileBottomBar/>
      </body>
    </html>
  );
}
