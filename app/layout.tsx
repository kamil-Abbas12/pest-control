
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "Pest Control | Connect With Local Exterminators";
const defaultDescription =
  "Connect with local pest control professionals for help with rodents, insects, termites, wasps and other common pest problems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.brand}`,
  },

  description: defaultDescription,

  applicationName: siteConfig.brand,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // og:image / twitter:image are generated from app/opengraph-image.tsx
  // (Next.js file convention) and injected into <head> automatically.
  openGraph: {
    title: defaultTitle,
    description:
      "Connect with local pest control professionals for help with common pest problems.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Connect with local pest control professionals for help with common pest problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#F7F8F4]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

