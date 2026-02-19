import CorporateInvestigations from "@/components/CorporateInvestigations/corporate-investigations";
import { Metadata } from "next";
import {
    OrganizationSchema,
    BreadcrumbSchema,
    FAQSchema,
    CollectionPageSchema,
    ItemListSchema,
    LocalBusinessSchema,
    WebSiteSchema,
} from "@/components/schema";

import PageBanner from "@/components/common/pagebanner";
const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Venovox – Corporate Investigations and Risk Solutions",
    description: "Venovox offers global corporate investigation services to detect fraud, ensure compliance, and protect your organization's assets through professional due diligence.",
    alternates: {
        canonical: "https://venovox.com/my-en/corporate-investigations"
    }
};

export default function CorporateInvestigationsPage() {
    const faqs = [
        {
            id: "1",
            question: "What services does Venovox provide?",
            answer: "Venovox provides risk intelligence and background screening solutions, including due diligence, security advisory, background checks, and intelligence analysis across Malaysia, the Asia-Pacific regions, and globally."
        },
        {
            id: "2",
            question: "How does Venovox help businesses mitigate risks?",
            answer: "Venovox helps organizations identify, assess, authenticate, and mitigate risks to people, assets, operations, and reputations, enabling secure and confident operations in complex environments."
        },
        {
            id: "3",
            question: "Which industries does Venovox serve?",
            answer: "Venovox serves a wide range of industries, including HR and recruitment, manufacturing, retail, marketing, consulting, F&B, construction, education, IT, healthcare, financial services, advertising, production, property, logistics, insurance, engineering, medical, and transportation."
        },
        {
            id: "4",
            question: "Where are Venovox's offices located?",
            answer: "Venovox has offices in Malaysia (Petaling Jaya, Selangor), Singapore (Shaw Centre), UAE (Downtown Dubai), and US & Canada (Houston, Texas)."
        },
        {
            id: "5",
            question: "How can I contact Venovox for services or inquiries?",
            answer: "You can contact Venovox through their website's contact page, where you can submit a message and expect a response within 24 hours."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
    ];

    const services = [
        {
            name: "Workplace Misconduct Investigations",
            url: "/corporate-investigations/workplace-misconduct-investigations",
        },
        {
            name: "Asset Tracing and Recovery",
            url: "/corporate-investigations/asset-tracing-and-recovery",
        },
        {
            name: "Regulatory and Compliance Investigations",
            url: "/corporate-investigations/regulatory-and-compliance-investigations",
        },
        {
            name: "Digital Forensics and Incident Investigations",
            url: "/corporate-investigations/digital-forensics-and-incident-investigations",
        },
        {
            name: "Whistleblowing and Ethics Management",
            url: "/corporate-investigations/whistleblowing-and-ethics-management",
        },
        {
            name: "Brand and IP Investigations",
            url: "/corporate-investigations/brand-and-ip-investigations",
        },
        {
            name: "Fraud Risk Management and Prevention",
            url: "/corporate-investigations/fraud-risk-management-and-prevention",
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
            <CollectionPageSchema
                name="Corporate Investigations Services"
                description="Venovox offers global corporate investigation services to detect fraud, ensure compliance, and protect your organization’s assets through professional due diligence."
                url="/corporate-investigations"
                baseUrl={BASE_URL}
            />
            <ItemListSchema
                name="Corporate Investigations Services"
                description="Comprehensive range of corporate investigation services"
                items={services}
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <CorporateInvestigations />
        </>
    );
}