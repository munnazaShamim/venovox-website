import type { Metadata } from 'next';
import RightToWorkCheckClient from './RightToWorkCheckClient';
import services from '@/data/our-services.json';

const service = services.services.find(s => s.id === 'right-to-work-check');

if (!service) {
  throw new Error("Right to Work Check service not found in our-services.json");
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

export default function RightToWorkCheck() {
  return <RightToWorkCheckClient />;
}