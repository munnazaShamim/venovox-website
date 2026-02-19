import { blogData } from '@/data/blogsData';

const BASE_URL = 'https://venovox.com';

const corporateInvestigationPages = [
  '/corporate-investigations',
  '/corporate-investigations/workplace-misconduct-investigations',
  '/corporate-investigations/asset-tracing-and-recovery',
  '/corporate-investigations/regulatory-and-compliance-investigations',
  '/corporate-investigations/digital-forensics-and-incident-investigations',
  '/corporate-investigations/whistleblowing-and-ethics-management',
  '/corporate-investigations/brand-and-ip-investigations',
  '/corporate-investigations/fraud-risk-management-and-prevention',
];

const staticPages = [
  {
    url: '/',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/our-services',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/risk-intelligence',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/due-diligence',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/risk-audit',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/compliance',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/intellectual-property',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/counter-measures',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/financial-crime',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/hr-services',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/background-screening/cyber-security',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/contact-us',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/career',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/my-en/about',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/blogs',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/privacy/privacy-policy',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/privacy/security-policy',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/privacy/terms-and-conditions',
    lastmod: '2025-01-14T10:43:49+00:00'
  },
  {
    url: '/privacy/whistleblowing-policy',
    lastmod: '2025-01-14T10:43:49+00:00'
  }
];

export interface SitemapPage {
  url: string;
  lastmod: string;
}

// Helper function to ensure URLs end with trailing slash (except root)
function normalizeUrl(url: string): string {
  // Root URL stays as is
  if (url === '/') {
    return url;
  }
  // Add trailing slash if not present
  return url.endsWith('/') ? url : `${url}/`;
}

export function generateSitemapData(): SitemapPage[] {
  const currentDate = new Date().toISOString();
  
  const blogUrls: SitemapPage[] = blogData.map(blog => ({
    url: normalizeUrl(`/blogs/${blog.slug}`),
    lastmod: blog.publishDate ? new Date(blog.publishDate).toISOString() : currentDate
  }));
  
  const corporateUrls: SitemapPage[] = corporateInvestigationPages.map(page => ({
    url: normalizeUrl(page),
    lastmod: currentDate
  }));
  
  // Normalize static pages URLs
  const normalizedStaticPages = staticPages.map(page => ({
    ...page,
    url: normalizeUrl(page.url)
  }));
  
  return [...normalizedStaticPages, ...corporateUrls, ...blogUrls];
}

export function generateSitemapXML(): string {
  const allPages = generateSitemapData();
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- Generated dynamically on ${currentDate} -->`;

  allPages.forEach(page => {
    sitemap += `
<url>
  <loc>${BASE_URL}${page.url}</loc>
  <lastmod>${page.lastmod}</lastmod>
</url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

export function getSitemapStats() {
  const allPages = generateSitemapData();
  const blogPages = allPages.filter(page => page.url.startsWith('/blogs/'));
  const corporatePages = allPages.filter(page => page.url.startsWith('/corporate-investigations'));
  
  return {
    totalPages: allPages.length,
    blogPages: blogPages.length,
    corporatePages: corporatePages.length,
    staticPages: allPages.length - blogPages.length - corporatePages.length
  };
}
