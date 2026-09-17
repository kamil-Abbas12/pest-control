
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pestcontrol.topdoglead.com"),

  title: {
    default: "Pest Control | Connect With Local Exterminators",
    template: "%s | Pest Control",
  },

  description:
    "Connect with local pest control professionals for help with rodents, insects, termites, wasps and other common pest problems.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Pest Control | Connect With Local Exterminators",
    description:
      "Connect with local pest control professionals for help with common pest problems.",
    type: "website",
    url: "https://pestcontrol.topdoglead.com",
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

