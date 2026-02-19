import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { homeFAQs } from '@/data/homeFAQs';
import {
  OrganizationSchema,
  WebSiteSchema,
  LocalBusinessSchema,
  WebPageSchema,
  FAQSchema,
} from '@/components/schema';

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://venovox.com/',
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema
        department={{
          name: "Venovox Sdn Bhd",
          address: {
            streetAddress: "E-7-03, Block E, Oasis Square, No 2, Jalan PJU 1A/7",
            addressLocality: "Ara Damansara",
            addressRegion: "Selangor",
            postalCode: "47301",
            addressCountry: "MY",
          },
          contactPoint: {
            telephone: "+603 7800 0088",
            contactType: "Customer Service",
            areaServed: "MY",
            availableLanguage: "English",
          },
        }}
      />
      <WebPageSchema
        name="Venovox - Trusted Background Screening & Company Search"
        description="Venovox is a premier risk management and background screening consultancy offering specialised services in due diligence, security advisory, background checks, and intelligence analysis across Malaysia, the Asia-Pacific regions, and globally."
        url="/"
        baseUrl={BASE_URL}
      />
      <FAQSchema faqs={homeFAQs} />
      <HomeClient />
    </>
  );
}