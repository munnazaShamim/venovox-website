import LogisticsDriverScreening from "@/components/CaseStudies/LogisticsDriverScreening";
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
    title: "Logistics Driver Background Screening Case Study | Venovox",
    description: "Driver background screening for a logistics company in Malaysia focusing on identity checks, driving history verification risk reduction and compliance support.",
    alternates: {
        canonical: "https://venovox.com/case-studies/logistics-driver-screening"
    }
};

export default function LogisticsDriverScreeningPage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Logistics Driver Screening", url: "/case-studies/logistics-driver-screening" },
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
                name="Driver Background Screening for Logistics Company in Malaysia"
                description="How Venovox Malaysia helped a logistics company improve safety and reliability through driver background screening and risk verification services."
                url="/case-studies/logistics-driver-screening"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Driver Background Screening for Logistics"
                description="How Venovox Malaysia helped a logistics company improve safety and reliability through driver background screening and risk verification services."
                url="/case-studies/logistics-driver-screening"
                provider={{
                    name: "Venovox",
                    url: BASE_URL,
                }}
                areaServed="MY"
                serviceType="Driver Background Screening and Risk Verification Services"
                baseUrl={BASE_URL}
            />
            <LogisticsDriverScreening />
        </>
    );
}

