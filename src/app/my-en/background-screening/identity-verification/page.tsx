import type { Metadata } from 'next';
import IdentityVerificationClient from './IdentityVerificationClient';
import services from '@/data/our-services.json';

const service = services.services.find(s => s.id === 'identity-verification');

if (!service) {
  throw new Error("Identity Verification service not found in our-services.json");
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

export default function IdentityVerification() {
  return <IdentityVerificationClient />;
}