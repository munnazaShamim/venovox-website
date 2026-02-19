import VentureCapitalDueDiligence from "@/components/CaseStudies/VentureCapitalDueDiligence";
import { Metadata } from "next";
import {
    OrganizationSchema,
    WebPageSchema,
    BreadcrumbSchema,
    LocalBusinessSchema,
    WebSiteSchema,
    ServiceSchema,
} from "@/components/schema";

const BASE_URL = "https://venovox.com";

export const metadata: Metadata = {
    title: "Venture Capital Due Diligence Case Study Analysis|Venovox",
    description: "Venovox Malaysia conducted an in-depth due diligence and corporate investigation in Malaysia to help a venture capital firm make an informed M&A decision.",
    alternates: {
        canonical: "https://venovox.com/case-studies/venture-capital-due-diligence"
    }
};

export default function VentureCapitalDueDiligencePage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Venture Capital Due Diligence", url: "/case-studies/venture-capital-due-diligence" },
    ];

    return (
        <>
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
                name="Corporate Due Diligence and Investigation for Venture Capital in Malaysia"
                description="Venovox Malaysia conducted an in-depth due diligence and corporate investigation in Malaysia to help a venture capital firm make an informed M&A decision."
                url="/case-studies/venture-capital-due-diligence"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Corporate Due Diligence and Investigation"
                description="Venovox Malaysia conducted an in-depth due diligence and corporate investigation in Malaysia to help a venture capital firm make an informed M&A decision."
                url="/case-studies/venture-capital-due-diligence"
                provider={{
                    name: "Venovox",
                    url: BASE_URL,
                }}
                areaServed="MY"
                serviceType="Corporate Due Diligence and Investigation Services"
                baseUrl={BASE_URL}
            />
            <VentureCapitalDueDiligence />
        </>
    );
}

