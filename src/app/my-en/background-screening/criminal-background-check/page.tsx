import type { Metadata } from 'next';
import CriminalBackgroundCheckClient from './CriminalBackgroundCheckClient';
import services from '@/data/our-services.json';

const service = services.services.find(s => s.id === 'criminal-background-check');

if (!service) {
  throw new Error("Criminal Background Check service not found in our-services.json");
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

export default function CriminalBackgroundCheck() {
  return <CriminalBackgroundCheckClient />;
}