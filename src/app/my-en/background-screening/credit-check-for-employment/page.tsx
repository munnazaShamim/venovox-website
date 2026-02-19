import type { Metadata } from 'next';
import CreditCheckForEmploymentClient from './CreditCheckForEmploymentClient';
import services from '@/data/our-services.json';
const service = services.services.find(s => s.id === 'credit-check-for-employment');

if (!service) {
  throw new Error("Credit Check for Employment service not found in our-services.json");
}
export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keyWords,
  alternates: { canonical: service.url },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: 'website',
  },
};

export default function CreditCheckForEmployment() {
  return <CreditCheckForEmploymentClient />;
}