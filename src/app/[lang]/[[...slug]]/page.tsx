import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import HomeClient from '@/app/HomeClient';
import AboutUs from '@/components/about/AboutUs';
import ContactUs from '@/components/ContactUs/contact-us';
import OurServicesClient from '@/app/my-en/our-services/OurServicesClient';
import BackgroundScreeningMalaysiaClient from '@/components/BackgroundscreeningMalaysia';
import ServicePageClient from '@/app/my-en/background-screening/[slug]/ServicePageClient';
import VenovoxCredibilitySection from '@/components/Career/credibilitysection';
import FunTeamSection from '@/components/Career/FunTeamSection';
import GrowWithUsSection from '@/components/Career/GrowWithUsSection';
import VenovoxHero from '@/components/Career/top-section';
import Form from '@/components/Career/submit-form';
import servicesData from '@/data/our-services.json';
import { blogData } from '@/data/blogsData';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://venovox.com';

// Map language codes to their URL prefixes
const languageMap: Record<string, string> = {
  'my-en': 'my-en',
  'ms': 'ms',
  'zh': 'zh',
  'ar': 'ar',
  'de': 'de',
  'fr': 'fr',
};

interface PageProps {
  params: Promise<{
    lang: string;
    slug?: string[];
  }>;
}

// Case study slugs
const caseStudySlugs = [
  'airline-mass-screening',
  'international-bank-fit-and-proper-test',
  'international-school-malaysia',
  'logistics-driver-screening',
  'pharma-employee-verification',
  'venture-capital-due-diligence',
];

// Corporate investigation slugs
const corporateInvestigationSlugs = [
  'workplace-misconduct-investigations',
  'asset-tracing-and-recovery',
  'regulatory-and-compliance-investigations',
  'digital-forensics-and-incident-investigations',
  'whistleblowing-and-ethics-management',
  'brand-and-ip-investigations',
  'fraud-risk-management-and-prevention',
];

export async function generateStaticParams() {
  const languages = ['my-en', 'ms', 'zh', 'ar', 'de', 'fr'];
  const params: Array<{ lang: string; slug?: string[] }> = [];

  // Generate params for root/home pages
  languages.forEach(lang => {
    // For optional catch-all [[...slug]], use undefined for root path, not empty array
    params.push({ lang, slug: undefined });

    // Generate params for main pages
    params.push({ lang, slug: ['about'] });
    params.push({ lang, slug: ['contact-us'] });
    params.push({ lang, slug: ['career'] });
    params.push({ lang, slug: ['our-services'] });
    params.push({ lang, slug: ['background-screening'] });
    params.push({ lang, slug: ['case-studies'] });
    params.push({ lang, slug: ['corporate-investigations'] });

    // Generate params for our-services subpages
    servicesData.services.forEach(service => {
      params.push({ lang, slug: ['our-services', service.id] });
    });

    // Generate params for background-screening subpages
    servicesData.services.forEach(service => {
      params.push({ lang, slug: ['background-screening', service.id] });
    });


    // Generate params for case study pages
    caseStudySlugs.forEach(slug => {
      params.push({ lang, slug: ['case-studies', slug] });
    });

    // Generate params for corporate investigation pages
    corporateInvestigationSlugs.forEach(slug => {
      params.push({ lang, slug: ['corporate-investigations', slug] });
    });

    // Generate params for privacy pages (will show 404 as they don't exist for language routes)
    params.push({ lang, slug: ['privacy', 'terms-and-conditions'] });
    params.push({ lang, slug: ['privacy', 'privacy-policy'] });
    params.push({ lang, slug: ['privacy', 'security-policy'] });
    params.push({ lang, slug: ['privacy', 'whistleblowing-policy'] });
  });

  return params;
}

// Generate metadata for language routes
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug = [] } = await params;

  // Validate language
  if (!languageMap[lang]) {
    return {};
  }

  const path = slug.join('/');
  const canonicalUrl = `${BASE_URL}/${lang}${path ? `/${path}` : ''}`;

  // Default metadata for homepage
  const defaultMeta = {
    title: "Trusted Background Screening & Company Search | Venovox",
    description: "Venovox helps businesses in Malaysia with secure background checks, CTOS & SSM reports, company profile verification, and anti-money laundering services. ISO 27001 certified risk management solutions.",
  };

  // Handle homepage
  if (path === '') {
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: defaultMeta.title,
        description: defaultMeta.description,
        url: canonicalUrl,
        type: 'website',
      },
    };
  }



  // Handle service pages - get metadata from services data
  if (path.startsWith('our-services/') || path.startsWith('background-screening/')) {
    const serviceSlug = path.replace('our-services/', '').replace('background-screening/', '');
    const service = servicesData.services.find(s => s.id === serviceSlug);
    if (service) {
      return {
        title: service.metaTitle || `${service.title} | Venovox`,
        description: service.metaDescription,
        keywords: service.keyWords?.join(', '),
        alternates: {
          canonical: canonicalUrl
        },
        openGraph: {
          title: service.metaTitle || `${service.title} | Venovox`,
          description: service.metaDescription,
          url: canonicalUrl,
          type: 'website',
        },
      };
    }
  }

  // Handle about page
  if (path === 'about') {
    return {
      title: "About VENOVOX | Risk Management Consultancy Since 1999",
      description: "Learn about our journey from Texas headquarters to becoming APAC's premier risk consultancy offering security advisory and intelligence analysis.",
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: "About VENOVOX | Risk Management Consultancy Since 1999",
        description: "Learn about our journey from Texas headquarters to becoming APAC's premier risk consultancy offering security advisory and intelligence analysis.",
        url: canonicalUrl,
        type: 'website',
      },
    };
  }

  // Handle contact page
  if (path === 'contact-us') {
    return {
      title: "Contact VENOVOX | Get in Touch with Our Risk Consultancy Experts",
      description:"Reach out to VENOVOX for tailored risk management, security advisory, and intelligence solutions. Our team is ready to assist you across APAC and globally.",

      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: "Contact VENOVOX | Get in Touch with Our Risk Consultancy Experts",
        description:"Reach out to VENOVOX for tailored risk management, security advisory, and intelligence solutions. Our team is ready to assist you across APAC and globally.",
        url: canonicalUrl,
        type: 'website',
      },
    };
  }

  // Handle career page
  if (path === 'career') {
    return {
      title: "Careers | Join Venovox Team",
      description: "Explore career opportunities at Venovox. Join our team of background screening and corporate investigation professionals.",
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: "Careers | Venovox",
        description: "Explore career opportunities at Venovox.",
        url: canonicalUrl,
        type: 'website',
      },
    };
  }

  // Handle our-services page
  if (path === 'our-services') {
    return {
      title: "Our Services | Venovox Background Screening Solutions",
      description: "Comprehensive background screening services including employment verification, criminal checks, education verification, and more.",
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: "Our Services | Venovox",
        description: "Comprehensive background screening services for businesses in Malaysia.",
        url: canonicalUrl,
        type: 'website',
      },
    };
  }

  // Handle background-screening page
  if (path === 'background-screening') {
    return {
      title: "Background Screening Malaysia | Trusted Pre Employment Checks",
      description: "Fast, accurate background screening services in Malaysia. Verify criminal records, employment history, education, identity and more. PDPA compliant. Get a quote.",
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: "Background Screening Malaysia | Venovox",
        description: "Professional background screening services in Malaysia.",
        url: canonicalUrl,
        type: 'website',
      },
    };
  }



  // Handle case-studies page
  if (path === 'case-studies') {
    return {
      title: "Corporate Investigation Case Studies & Insights | Venovox",
      description: "Corporate investigation case studies highlighting verified risk scenarios, investigative methods, and insights that support governance and decision-making.",
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: "Corporate Investigation Case Studies & Insights | Venovox",
        description: "Corporate investigation case studies highlighting verified risk scenarios, investigative methods, and insights that support governance and decision-making.",
        url: canonicalUrl,
        type: 'website',
      },
    };
  }

  // Handle corporate-investigations page
  if (path === 'corporate-investigations') {
    return {
      title: "Corporate Investigations & Business Intelligence | Venovox",
      description: "Corporate investigations and business intelligence services delivering accurate insights, background checks, and risk analysis for confident decisions.",
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: "Corporate Investigations & Business Intelligence | Venovox",
        description: "Corporate investigations and business intelligence services delivering accurate insights, background checks, and risk analysis for confident decisions.",
        url: canonicalUrl,
        type: 'website',
      },
    };
  }

  // Handle case study sub-pages
  if (path.startsWith('case-studies/')) {
    const caseStudySlug = path.replace('case-studies/', '');
    const caseStudyMeta: Record<string, { title: string; description: string }> = {
      'airline-mass-screening': {
        title: "Mass Employee Screening for Airlines in Malaysia | Venovox",
        description: "Venovox Malaysia supported a national airline with large-scale employee background screening, ensuring full compliance and risk management during its recruitment drive."
      },
      'international-bank-fit-and-proper-test': {
        title: "Fit and Proper Test for International Banks | Venovox",
        description: "Learn how Venovox helped an international bank comply with fit and proper requirements through comprehensive background screening."
      },
      'international-school-malaysia': {
        title: "Background Screening for International Schools | Venovox",
        description: "Discover how Venovox provides comprehensive background screening for international schools in Malaysia."
      },
      'logistics-driver-screening': {
        title: "Driver Screening for Logistics Companies | Venovox",
        description: "Learn how Venovox helps logistics companies screen drivers for safety and compliance."
      },
      'pharma-employee-verification': {
        title: "Employee Verification for Pharmaceutical Companies | Venovox",
        description: "Discover how Venovox provides employee verification services for pharmaceutical companies."
      },
      'venture-capital-due-diligence': {
        title: "Due Diligence for Venture Capital | Venovox",
        description: "Learn how Venovox helps venture capital firms conduct thorough due diligence investigations."
      },
    };
    const meta = caseStudyMeta[caseStudySlug];
    if (meta) {
      return {
        title: meta.title,
        description: meta.description,
        alternates: {
          canonical: canonicalUrl
        },
        openGraph: {
          title: meta.title,
          description: meta.description,
          url: canonicalUrl,
          type: 'article',
        },
      };
    }
  }

  // Handle corporate investigation sub-pages
  if (path.startsWith('corporate-investigations/')) {
    const corpSlug = path.replace('corporate-investigations/', '');
    const corpMeta: Record<string, { title: string; description: string }> = {
      'workplace-misconduct-investigations': {
        title: "Workplace Misconduct Investigations | Venovox",
        description: "Professional workplace misconduct investigation services to help organizations address employee misconduct issues."
      },
      'asset-tracing-and-recovery': {
        title: "Asset Tracing and Recovery | Venovox",
        description: "Expert asset tracing and recovery services to help locate and recover misappropriated assets."
      },
      'regulatory-and-compliance-investigations': {
        title: "Regulatory and Compliance Investigations | Venovox",
        description: "Comprehensive regulatory and compliance investigation services for businesses."
      },
      'digital-forensics-and-incident-investigations': {
        title: "Digital Forensics and Incident Investigations | Venovox",
        description: "Expert digital forensics and cyber incident investigation services."
      },
      'whistleblowing-and-ethics-management': {
        title: "Whistleblowing and Ethics Management | Venovox",
        description: "Comprehensive whistleblowing and ethics management solutions for organizations."
      },
      'brand-and-ip-investigations': {
        title: "Brand and IP Investigations | Venovox",
        description: "Protect your brand and intellectual property with our investigation services."
      },
      'fraud-risk-management-and-prevention': {
        title: "Fraud Risk Management and Prevention | Venovox",
        description: "Professional fraud risk management and prevention services for businesses."
      },
    };
    const meta = corpMeta[corpSlug];
    if (meta) {
      return {
        title: meta.title,
        description: meta.description,
        alternates: {
          canonical: canonicalUrl
        },
        openGraph: {
          title: meta.title,
          description: meta.description,
          url: canonicalUrl,
          type: 'article',
        },
      };
    }
  }

  // Default metadata for other pages
  return {
    title: defaultMeta.title,
    description: defaultMeta.description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: defaultMeta.title,
      description: defaultMeta.description,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function LanguagePage({ params }: PageProps) {
  const { lang, slug = [] } = await params;

  // Validate language
  if (!languageMap[lang]) {
    notFound();
  }

  const path = slug.join('/');

  // Handle root/home page
  if (path === '') {
    return <HomeClient />;
  }

  // Handle about page
  if (path === 'about') {
    return <AboutUs />;
  }

  // Handle contact-us page
  if (path === 'contact-us') {
    return <ContactUs />;
  }

  // Handle Career page
  if (path === 'career') {
    return (
      <>
        <VenovoxHero />
        <VenovoxCredibilitySection />
        <GrowWithUsSection />
        <FunTeamSection />
        <Form />
      </>
    );
  }

  // Handle our-services page
  if (path === 'our-services') {
    return <OurServicesClient />;
  }

  // Handle our-services/[slug] pages
  if (path.startsWith('our-services/')) {
    const serviceSlug = path.replace('our-services/', '');
    const serviceExists = servicesData.services.some(s => s.id === serviceSlug);
    if (serviceExists) {
      return <ServicePageClient slug={serviceSlug} />;
    }
  }

  // Handle background-screening main page
  if (path === 'background-screening') {
    return <BackgroundScreeningMalaysiaClient />;
  }

  // Handle background-screening/[slug] pages
  if (path.startsWith('background-screening/')) {
    const serviceSlug = path.replace('background-screening/', '');
    const serviceExists = servicesData.services.some(s => s.id === serviceSlug);
    if (serviceExists) {
      // return <ServicePageClient slug={serviceSlug} />;
        try {
            const Page = await import(`@/app/my-en/background-screening/${serviceSlug}/page`).then(m => m.default);
            return <Page />;
        } catch {
            // fallback to generic ServicePageClient
            return <ServicePageClient slug={serviceSlug} />;
        }
    }
  }




  // Handle case-studies page
  if (path === 'case-studies') {
    const CaseStudiesPage = (await import('@/app/my-en/case-studies/page')).default;
    return <CaseStudiesPage />;
  }

  // Handle case-studies/[slug] pages
  if (path.startsWith('case-studies/')) {
    const caseStudySlug = path.replace('case-studies/', '');
    if (caseStudySlugs.includes(caseStudySlug)) {
      try {
        const CaseStudyPage = (await import(`@/app/my-en/case-studies/${caseStudySlug}/page`)).default;
        return <CaseStudyPage />;
      } catch {
        notFound();
      }
    }
  }

  // Handle corporate-investigations page
  if (path === 'corporate-investigations') {
    const CorporateInvestigationsPage = (await import('@/app/my-en/corporate-investigations/page')).default;
    return <CorporateInvestigationsPage />;
  }

  // Handle corporate-investigations/[slug] pages
  if (path.startsWith('corporate-investigations/')) {
    const corporateSlug = path.replace('corporate-investigations/', '');
    if (corporateInvestigationSlugs.includes(corporateSlug)) {
      try {
        const CorporatePage = (await import(`@/app/my-en/corporate-investigations/${corporateSlug}/page`)).default;
        return <CorporatePage />;
      } catch {
        notFound();
      }
    }
  }

  // If no matching page found, return 404
  notFound();
}