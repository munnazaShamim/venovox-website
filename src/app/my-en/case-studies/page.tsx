import CaseStudiesClient from "@/components/CaseStudies/CaseStudiesClient";
import { Metadata } from "next";
import PageBanner from "@/components/common/pagebanner";
import {
    OrganizationSchema,
    BreadcrumbSchema,
    FAQSchema,
    CollectionPageSchema,
    ItemListSchema,
    LocalBusinessSchema,
    WebSiteSchema,
    WebPageSchema,
    ServiceSchema,
} from "@/components/schema";

const BASE_URL = "https://venovox.com/";

export const metadata: Metadata = {
    title: "Corporate Investigation Case Studies & Insights | Venovox",
    description: "Corporate investigation case studies highlighting verified risk scenarios, investigative methods, and insights that support governance and decision-making.",
    alternates: {
        canonical: "https://venovox.com/my-en/case-studies"
    },
    openGraph: {
        title: "Corporate Investigation Case Studies & Insights | Venovox",
        description: "Corporate investigation case studies highlighting verified risk scenarios, investigative methods, and insights that support governance and decision-making.",
        type: 'website',
    },
};

export default function CaseStudiesPage() {
    const faqs = [
        {
            id: "1",
            question: "Which industries does Venovox serve?",
            answer: "We support clients across banking and finance, logistics and transportation, education, aviation, healthcare, private equity, and corporate services.",
        },
        {
            id: "2",
            question: "How fast can a screening be completed?",
            answer: "Standard checks complete within 2–3 working days, subject to scope and jurisdiction. Accelerated timelines are available for high‑volume needs.",
        },
        {
            id: "3",
            question: "Are Venovox screenings compliant in Malaysia?",
            answer: "Yes. Our processes align with Malaysian legal, privacy, and employment guidelines, and can be configured to your governance framework.",
        },
        {
            id: "4",
            question: "Can we customise the scope?",
            answer: "Absolutely. Each engagement is tailored—whether you need pre‑employment checks, executive vetting, or transaction‑grade due diligence.",
        },
        {
            id: "5",
            question: "How do we get started?",
            answer: "Contact us to discuss objectives and risk thresholds. We will recommend an approach and provide a clear timeline and deliverables.",
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
    ];

    const caseStudies = [
        {
            name: "International School in Malaysia — Protecting Student Safety",
            url: "/case-studies/international-school-malaysia",
        },
        {
            name: "International Bank — Meeting the 'Fit & Proper' Standard",
            url: "/case-studies/international-bank-fit-and-proper-test",
        },
        {
            name: "Logistics Firm — Trusted Drivers for High‑Value Cargo",
            url: "/case-studies/logistics-driver-screening",
        },
        {
            name: "Venture Capital — Red Flags Before an Acquisition",
            url: "/case-studies/venture-capital-due-diligence",
        },
        {
            name: "Airline — 400 Candidates Screened in Two Working Days",
            url: "/case-studies/airline-mass-screening",
        },
        {
            name: "Pharmaceutical Company — Credentials Verified for Senior Hires",
            url: "/case-studies/pharma-employee-verification",
        },
    ];

    return (
        <>
            <PageBanner />
            <OrganizationSchema />
            <LocalBusinessSchema
                department={{
                    name: "Venovox Sdn Bhd",
                    address: {
                        streetAddress: "E-7-03, Block E, Oasis Square, No 2, Jalan PJU 1A/7",
                        addressLocality: "Ara Damansara",
                        addressRegion: "Selangor",
                        postalCode: "47301",
                        addressCountry: "MY",
                    },
                    contactPoint: {
                        telephone: "+603 7800 0088",
                        contactType: "Customer Service",
                        areaServed: "MY",
                        availableLanguage: "English",
                    },
                }}
            />
            <WebSiteSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <WebPageSchema
                name="Case Studies"
                description="Where discretion meets excellence. At Venovox, every engagement is treated with the care, rigour, and confidentiality expected by leading institutions. This curated portfolio showcases how our background screening and corporate intelligence help clients in Malaysia—and beyond—make safer, smarter decisions with absolute confidence."
                url="/case-studies"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Case Studies - Background Screening & Corporate Intelligence"
                description="Real proof. Refined precision. Case studies showcasing Venovox's background screening and corporate intelligence services for leading institutions across various industries."
                url="/case-studies"
                provider={{
                    name: "Venovox",
                    url: BASE_URL,
                }}
                areaServed="MY"
                serviceType="Background Screening and Corporate Intelligence Services"
                baseUrl={BASE_URL}
            />
            <CollectionPageSchema
                name="Case Studies"
                description="Where discretion meets excellence. At Venovox, every engagement is treated with the care, rigour, and confidentiality expected by leading institutions."
                url="/case-studies"
                baseUrl={BASE_URL}
            />
            <ItemListSchema
                name="Case Studies"
                description="Real proof. Refined precision. Case studies showcasing Venovox's background screening and corporate intelligence services."
                items={caseStudies}
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <CaseStudiesClient />
        </>
    );
}
