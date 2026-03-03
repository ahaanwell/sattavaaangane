import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrochureDownload from "@/components/BrochureDownload";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <BrochureDownload topPosition={"top-80"} frmName={"Broucher"}/>
        {/* <BrochureDownload topPosition={"top-110"} frmName={"Costsheet"}/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
