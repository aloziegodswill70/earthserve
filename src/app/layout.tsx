
import type { Metadata, Viewport } from "next";
import { Montserrat, Roboto_Condensed } from "next/font/google";

import "./globals.css";

import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://earthservefoundation.org"),
  title: {
    default: "EarthServe Foundation International",
    template: "%s | EarthServe Foundation",
  },
  description:
    "Building a cleaner earth and creating lasting impact through material recycling, sustainable farming, renewable energy, innovation, and the empowerment of youth and women.",
  applicationName: "EarthServe Foundation International",
  keywords: [
    "EarthServe Foundation",
    "material recycling",
    "waste management",
    "sustainable farming",
    "renewable energy",
    "youth empowerment",
    "women empowerment",
    "environmental sustainability",
    "volunteering",
  ],
  openGraph: {
    title: "EarthServe Foundation International",
    description:
      "Building a cleaner earth and creating lasting impact through sustainability, innovation, and community empowerment.",
    type: "website",
    siteName: "EarthServe Foundation International",
    locale: "en",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#075B2A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${robotoCondensed.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <Topbar />
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
        <BottomNav />
        <FloatingContact />
      </body>
    </html>
  );
}
