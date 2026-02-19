import InternationalBankFitAndProper from "@/components/CaseStudies/InternationalBankFitAndProper";
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
    title: "International Bank Fit and Proper Test Case Study|Venovox",
    description: "Learn how Venovox helped a global bank in Malaysia ensure compliance with Bank Negara's fit and proper test through enhanced employee background screening.",
    alternates: {
        canonical: "https://venovox.com/case-studies/international-bank-fit-and-proper-test"
    }
};

export default function InternationalBankFitAndProperPage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "International Bank Fit and Proper Test", url: "/case-studies/international-bank-fit-and-proper-test" },
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
                name="Employee Background Screening for International Bank in Malaysia"
                description="Learn how Venovox helped a global bank in Malaysia ensure compliance with Bank Negara's fit and proper test through enhanced employee background screening."
                url="/case-studies/international-bank-fit-and-proper-test"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Bank Fit and Proper Test Background Screening"
                description="Learn how Venovox helped a global bank in Malaysia ensure compliance with Bank Negara's fit and proper test through enhanced employee background screening."
                url="/case-studies/international-bank-fit-and-proper-test"
                provider={{
                    name: "Venovox",
                    url: BASE_URL,
                }}
                areaServed="MY"
                serviceType="Banking Compliance and Fit & Proper Test Screening Services"
                baseUrl={BASE_URL}
            />
            <InternationalBankFitAndProper />
        </>
    );
}

