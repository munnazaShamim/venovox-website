import BrandAndIpInvestigations from "@/components/CorporateInvestigations/BrandAndIpInvestigations/index";
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
    title: "Brand and Intellectual Property Investigations | Venovox",
    description: "Venovox investigates counterfeit and grey market activity. We run test buys, trace supply chains, and support online takedowns and court actions with clear evidence.",
    keywords: "brand and IP investigations, counterfeit investigations, grey market investigations, supply chain leak tracing, test buys, online takedowns, marketplace removals, domain disputes, trade secret investigations, customs recordation, brand protection program",
    alternates: {
        canonical: "https://venovox.com/corporate-investigations/brand-and-ip-investigations"
    }
};

export default function BrandAndIpInvestigationsPage() {
    const faqs = [
        {
            id: "1",
            question: "Do you run covert test buys?",
            answer: "Yes. We keep receipts, photos, and chain of custody so samples can be used as evidence."
        },
        {
            id: "2",
            question: "Can you help with customs recordation?",
            answer: "Yes. We prepare filings and training to help border agents spot risky shipments."
        },
        {
            id: "3",
            question: "How quickly can listings be removed?",
            answer: "Timing varies by platform and evidence. Strong proofs often lead to removal within hours or days."
        },
        {
            id: "4",
            question: "Do you coordinate with law enforcement?",
            answer: "Where facts support it, we prepare referrals and assist with planning for seizures or raids."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
        { name: "Brand and IP Investigations", url: "/corporate-investigations/brand-and-ip-investigations" },
    ];

    return (
        <>
        <PageBanner />
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <WebPageSchema
                name="Brand and IP Investigations"
                description="Venovox investigates counterfeit and grey market activity. We run test buys, trace supply chains, and support online takedowns and court actions with clear evidence."
                url="/corporate-investigations/brand-and-ip-investigations"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Brand and IP Investigations"
                description="Venovox investigates counterfeit and grey market activity. We run test buys, trace supply chains, and support online takedowns and court actions with clear evidence."
                url="/corporate-investigations/brand-and-ip-investigations"
                serviceType="Corporate Investigation Service"
                areaServed="Global"
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <BrandAndIpInvestigations />
        </>
    );
}