import RegulatoryAndComplianceInvestigations from "@/components/CorporateInvestigations/RegulatoryAndComplianceInvestigations/index";
import { Metadata } from "next";
import PageBanner from "@/components/common/pagebanner";
import {
    OrganizationSchema,
    BreadcrumbSchema,
    FAQSchema,
    WebPageSchema,
    ServiceSchema,
} from "@/components/schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Regulatory and Compliance Investigations | Venovox",
    description: "Regulatory and compliance investigation services supporting organisations with internal reviews regulatory adherence, risk assessments, and governance controls.",
    alternates: {
        canonical: "https://venovox.com/corporate-investigations/regulatory-and-compliance-investigations"
    }
};

export default function RegulatoryAndComplianceInvestigationsPage() {
    const faqs = [
        {
            id: "1",
            question: "Do you help with voluntary disclosures?",
            answer: "Yes. We align with counsel to plan timing, scope, and messaging for constructive regulator engagement."
        },
        {
            id: "2",
            question: "How do you select transactions for testing?",
            answer: "We use risk based sampling that focuses on high risk markets, channels, counterparties, and red flag patterns."
        },
        {
            id: "3",
            question: "Can you support a dawn raid response?",
            answer: "Yes. We provide playbooks, on call guidance, evidence logging, and post event stabilization and review."
        },
        {
            id: "4",
            question: "What outcomes should we expect?",
            answer: "Clear answers to regulator questions, evidence that stands up to review, and a practical remediation roadmap."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
        { name: "Regulatory and Compliance Investigations", url: "/corporate-investigations/regulatory-and-compliance-investigations" },
    ];

    return (
        <>
        <PageBanner />
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <WebPageSchema
                name="Regulatory and Compliance Investigations"
                description="Ensure your business meets global standards with Venovox regulatory and compliance investigations, helping you detect breaches and maintain corporate transparency."
                url="/corporate-investigations/regulatory-and-compliance-investigations"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Regulatory and Compliance Investigations"
                description="Ensure your business meets global standards with Venovox regulatory and compliance investigations, helping you detect breaches and maintain corporate transparency."
                url="/corporate-investigations/regulatory-and-compliance-investigations"
                serviceType="Corporate Investigation Service"
                areaServed="Global"
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <RegulatoryAndComplianceInvestigations />
        </>
    );
}