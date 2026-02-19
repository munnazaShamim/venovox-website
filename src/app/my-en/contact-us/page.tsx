import ContactUs from "@/components/ContactUs/contact-us"
import React from "react"
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Contact VENOVOX | Get in Touch with Our Risk Consultancy Experts",
  description:
    "Reach out to VENOVOX for tailored risk management, security advisory, and intelligence solutions. Our team is ready to assist you across APAC and globally.",
  alternates: {
    canonical: "https://venovox.com/my-en/contact-us",
  },

};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://venovox.com/my-en/contact-us" />
      </Head>
      <ContactUs />
    </>
  )
}
