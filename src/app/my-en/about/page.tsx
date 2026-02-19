import AboutUs from "@/components/about/AboutUs"
import React from "react"
import Head from "next/head";
export const metadata = {
  title: "About VENOVOX | Risk Management Consultancy Since 1999",
  description:
    "Learn about our journey from Texas headquarters to becoming APAC's premier risk consultancy offering security advisory and intelligence analysis.",
  alternates: {
    canonical: "https://venovox.com/my-en/about",
  },
};
export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://venovox.com/my-en/about" />
      </Head>
      <AboutUs />

    </>
  )
}
