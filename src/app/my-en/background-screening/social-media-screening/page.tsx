import type { Metadata } from 'next';
import SocialMediaScreeningClient from './SocialMediaScreeningClient';
import services from '@/data/our-services.json';

const service = services.services.find(s => s.id === 'social-media-screening');

if (!service) {
  throw new Error("Social Media Screening service not found in our-services.json");
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

export default function SocialMediaScreening() {
  return <SocialMediaScreeningClient />;
}