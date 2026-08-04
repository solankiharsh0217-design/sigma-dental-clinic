import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sigma Dental Clinic | Premium Dental Care in Chicago, IL",
  description:
    "Experience world-class dental care at Sigma Dental Clinic in Chicago, IL. Expert dentist Dr. Sepi Dashti provides compassionate, advanced treatments for the whole family. Call (773) 506-2033.",
  keywords: [
    "dentist Chicago",
    "dental clinic Chicago",
    "dentist near me",
    "emergency dentist",
    "dental implants",
    "teeth whitening",
    "Invisalign",
    "cosmetic dentistry",
  ],
  openGraph: {
    title: "Sigma Dental Clinic | Premium Dental Care in Chicago, IL",
    description:
      "World-class dental care with Dr. Sepi Dashti. Compassionate, advanced treatments for the whole family.",
    url: "https://sigmadentalclinic.com",
    siteName: "Sigma Dental Clinic",
    images: [
      {
        url: "https://sigmadentalclinic.com/wp-content/uploads/2025/02/Office-tour-pic2-1024x890.webp",
        width: 800,
        height: 695,
        alt: "Sigma Dental Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
