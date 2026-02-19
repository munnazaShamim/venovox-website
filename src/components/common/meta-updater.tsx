'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * MetaUpdater - Minimal component that only handles canonical URL for English routes
 *
 * IMPORTANT: This component no longer modifies title or description tags.
 * All meta tags are now handled server-side via generateMetadata in page components.
 *
 * For language routes (/ms, /zh, /ar, /de, /fr, /my-en), this component does nothing
 * because those routes have proper server-side metadata via generateMetadata.
 */

const BASE_URL = 'https://venovox.com';

// Language route prefixes that have server-side metadata
const LANGUAGE_PREFIXES = ['/ms', '/zh', '/ar', '/de', '/fr', '/my-en'];

export default function MetaUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip all meta updates for language routes - they have server-side metadata
    const isLanguageRoute = LANGUAGE_PREFIXES.some(prefix =>
      pathname === prefix || pathname.startsWith(`${prefix}/`)
    );

    if (isLanguageRoute) {
      // Don't touch anything - server-rendered metadata is correct
      return;
    }

    // For non-language routes (English), just ensure canonical URL is set
    // but don't modify if it already exists
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (!existingCanonical) {
      const canonicalUrl = `${BASE_URL}${pathname}`;
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      document.head.appendChild(link);
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}