import type { Metadata } from 'next';
import BackgroundScreeningMalaysiaClient from '@/components/BackgroundscreeningMalaysia';

export const metadata: Metadata = {
  title: "Background Screening Malaysia | Trusted Pre Employment Checks",
  description: "Fast, accurate background screening services in Malaysia. Verify criminal records, employment history, education, identity and more. PDPA compliant. Get a quote.",
  keywords: [
    "background screening malaysia",
    "background check malaysia",
    "employment verification malaysia",
    "criminal record check malaysia",
    "PDPA compliant screening",
    "background check agency kuala lumpur",
    "employee verification malaysia",
    "pre-employment screening malaysia"
  ],
  alternates: {
    canonical: "https://venovox.com/my-en/background-screening-malaysia",
  },
  openGraph: {
    title: "Background Screening Malaysia | Trusted Pre Employment Checks",
    description: "Fast, accurate background screening services in Malaysia. Verify criminal records, employment history, education, identity and more. PDPA compliant. Get a quote.",
    type: "website",
  },
};
// import { generatePageMetadata, getPageKeyFromPath } from '@/lib/metadata-utils';
// 
// export async function generateMetadata(): Promise<Metadata> {
//   return generatePageMetadata("background-screening", "my-en", "background-screening");
// }
export default function BackgroundScreeningMalaysia() {
  return <BackgroundScreeningMalaysiaClient />;
}