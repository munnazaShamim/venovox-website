import AssetTracingAndRecovery from "@/components/CorporateInvestigations/AssetTracingAndRecovery/index";
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
    title: "Asset Tracing and Recovery Investigations | Venovox",
    description: "Asset tracing and recovery investigation services focused on identifying hidden assets supporting legal action and recovering funds lost to fraud or misconduct.",
    alternates: {
        canonical: "https://venovox.com/corporate-investigations/asset-tracing-and-recovery"
    }
};

export default function AssetTracingAndRecoveryPage() {
    const faqs = [
        {
            id: "1",
            question: "Can you trace crypto assets?",
            answer: "We investigate wallets and transaction flows using open sources and specialized tools, then align findings with legal strategy."
        },
        {
            id: "2",
            question: "How far back can you look?",
            answer: "We follow evidence and available records. Many traces review several years, subject to law and data retention."
        },
        {
            id: "3",
            question: "Will your findings support freezing orders?",
            answer: "Yes. We document sources and methods so counsel can use them in freezing, disclosure, or enforcement steps."
        },
        {
            id: "4",
            question: "What if assets are in another country?",
            answer: "We coordinate with local partners to obtain records and act lawfully while keeping a single master view."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
        { name: "Asset Tracing and Recovery", url: "/corporate-investigations/asset-tracing-and-recovery" },
    ];

    return (
        <>
        <PageBanner />
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <WebPageSchema
                name="Asset Tracing and Recovery"
                description="Venovox helps trace, recover, and protect assets lost to fraud or misappropriation through expert investigations that enhance financial security and accountability."
                url="/corporate-investigations/asset-tracing-and-recovery"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Asset Tracing and Recovery"
                description="Venovox helps trace, recover, and protect assets lost to fraud or misappropriation through expert investigations that enhance financial security and accountability."
                url="/corporate-investigations/asset-tracing-and-recovery"
                serviceType="Corporate Investigation Service"
                areaServed="Global"
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <AssetTracingAndRecovery />
        </>
    );
}