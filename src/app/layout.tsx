import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/header";
import StickyPromoBar from "@/components/common/cta-section";
import FloatingWhatsApp from "@/components/common/floatingWhatsApp";
import ClientLayoutWrapper from "@/components/common/client-layout-wrapper";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
});

export const metadata: Metadata = {
  title: "Trusted Background Screening & Company Search | Venovox",
  description: "Venovox helps businesses in Malaysia with secure background checks, CTOS & SSM reports, company profile verification, and anti-money laundering services. ISO 27001 certified risk management solutions.",
  keywords: [
    "company name search malaysia",
    "ctos score report",
    "new company registration number malaysia",
    "malaysia company registration number search",
    "ssm search malaysia, Anti-money laundering services",
    "malaysia company search",
    "Background check agency Kuala Lumpur",
    "ssm report",
    "ctos report for company",
    "company profile malaysia",
    "Background screening Malaysia"
  ],
  openGraph: {
    title: "Trusted Background Screening & Company Search | Venovox",
    description: "Venovox helps businesses in Malaysia with secure background checks, CTOS & SSM reports, company profile verification, and anti-money laundering services.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="vyNUm6TmmkE39TRFt230yA"
          strategy="afterInteractive"
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased hyphens-none`}
      >
        <ClientLayoutWrapper>
          <Navbar />
          <StickyPromoBar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
