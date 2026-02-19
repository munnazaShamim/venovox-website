import type { Metadata } from 'next';
import CivilLitigationCheckClient from './CivilLitigationCheckClient';
import services from '@/data/our-services.json';

const service = services.services.find(s => s.id === 'civil-litigation-check');

if (!service) {
  throw new Error("Civil Litigation Check service not found in our-services.json");
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


export default function CivilLitigationCheck() {
  return <CivilLitigationCheckClient />;
}