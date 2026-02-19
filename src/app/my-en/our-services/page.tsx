import type { Metadata } from "next"
import OurServicesClient from "./OurServicesClient"
// 
// export const metadata: Metadata = {
//   alternates: {
//     canonical: "https://venovox.com/my-en/our-services",
//   },
// }
export const metadata: Metadata = {
  title: "Our Services | Venovox Background Screening Solutions",
  description: "Comprehensive background screening services including employment verification, criminal checks, education verification, and more.",
  keywords: [
  ],
  alternates: {
    canonical: "https://venovox.com/my-en/our-services",
  },
  openGraph: {
  title: "Our Services | Venovox Background Screening Solutions",
    description: "Comprehensive background screening services including employment verification, criminal checks, education verification, and more.",
    type: "website",
  },
};
export default function Page() {
  return <OurServicesClient />
}