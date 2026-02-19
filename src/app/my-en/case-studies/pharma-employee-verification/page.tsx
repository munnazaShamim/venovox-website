import PharmaEmployeeVerification from "@/components/CaseStudies/PharmaEmployeeVerification";
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
    title: "Pharma Employee Background Verification Case Study|Venovox",
    description: "Pharma employee background verification case study focusing on regulatory compliance, credential checks, risk mitigation, and maintaining workforce integrity.",
    alternates: {
        canonical: "https://venovox.com/case-studies/pharma-employee-verification"
    }
};

export default function PharmaEmployeeVerificationPage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Pharma Employee Verification", url: "/case-studies/pharma-employee-verification" },
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
                name="Executive Background Screening for Healthcare Company in Malaysia | Venovox"
                description="Venovox Malaysia helped a pharmaceutical company strengthen compliance and HR services through executive background screening and verification."
                url="/case-studies/pharma-employee-verification"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Executive Background Screening for Healthcare"
                description="Venovox Malaysia helped a pharmaceutical company strengthen compliance and HR services through executive background screening and verification."
                url="/case-studies/pharma-employee-verification"
                provider={{
                    name: "Venovox",
                    url: BASE_URL,
                }}
                areaServed="MY"
                serviceType="Executive Background Screening and Verification Services"
                baseUrl={BASE_URL}
            />
            <PharmaEmployeeVerification />
        </>
    );
}

