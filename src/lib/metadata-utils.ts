/**
 * Utility functions for generating metadata consistently across all pages
 */

import type { Metadata } from 'next';
import metadataData from '@/data/metadata.json';
import { translateTextServer } from './server-translation';

const BASE_URL = 'https://venovox.com';

type Language = 'my-en' | 'ms' | 'zh' | 'ar' | 'de' | 'fr';

interface PageMetadata {
  title: string;
  description: string;
}

/**
 * Get metadata for a specific page and language
 * Falls back to English if translation is not available
 */
export async function getPageMetadata(
  pageKey: string,
  language: string
): Promise<PageMetadata> {
  // Get English metadata as base
  const englishMetadata = (metadataData as any)[pageKey]?.en;
  
  if (!englishMetadata) {
    // Fallback to home page metadata
    const homeMetadata = (metadataData as any).home?.en || {
      title: "Trusted Background Screening & Company Search | Venovox",
      description: "Venovox helps businesses in Malaysia with secure background checks, CTOS & SSM reports, company profile verification, and anti-money laundering services. ISO 27001 certified risk management solutions."
    };
    return homeMetadata;
  }

  // If English, return as-is
  if (language === 'my-en' || language === 'en') {
    return englishMetadata;
  }

  // Translate for other languages
  try {
    const [translatedTitle, translatedDescription] = await Promise.all([
      translateTextServer(englishMetadata.title, language),
      translateTextServer(englishMetadata.description, language)
    ]);

    return {
      title: translatedTitle,
      description: translatedDescription
    };
  } catch (error) {
    console.error(`Error translating metadata for ${pageKey} in ${language}:`, error);
    // Return English metadata on error
    return englishMetadata;
  }
}

/**
 * Generate Next.js Metadata object for a page
 */
export async function generatePageMetadata(
  pageKey: string,
  language: string,
  path: string
): Promise<Metadata> {
  const metadata = await getPageMetadata(pageKey, language);
  const canonicalUrl = `${BASE_URL}/${language}${path ? `/${path}` : ''}`;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Get page key from path
 */
export function getPageKeyFromPath(path: string): string {
  if (path === '') return 'home';
  
  // Handle nested paths
  if (path.startsWith('background-screening/')) {
    return 'background-screening';
  }
  if (path.startsWith('blogs/')) {
    return 'blogs';
  }
  if (path.startsWith('case-studies/')) {
    return 'case-studies';
  }
  if (path.startsWith('corporate-investigations/')) {
    return 'corporate-investigations';
  }

  // Direct page matches
  const pageKey = path.split('/')[0];
  return pageKey;
}

