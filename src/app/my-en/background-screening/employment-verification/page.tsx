import type { Metadata } from 'next';
import EmploymentVerificationClient from "./EmploymentVerificationClient";
import services from '@/data/our-services.json';

const service = services.services.find(s => s.id === 'employment-verification');

if (!service) {
  throw new Error("Employment Verification service not found in our-services.json");
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

export default function EmploymentVerification() {
  return <EmploymentVerificationClient />;
}