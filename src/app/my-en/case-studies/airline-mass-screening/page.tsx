import AirlineMassScreening from "@/components/CaseStudies/AirlineMassScreening";
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
    title: "Mass Employee Screening for Airlines in Malaysia | Venovox",
    description: "Mass employee screening for airlines in Malaysia, covering identity verification, compliance checks, workforce risk management, and aviation safety requirements.",
    alternates: {
        canonical: "https://venovox.com/case-studies/airline-mass-screening"
    }
};

export default function AirlineMassScreeningPage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Airline Mass Screening", url: "/case-studies/airline-mass-screening" },
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
                name="Mass Employee Screening for Airlines in Malaysia | Venovox"
                description="Venovox Malaysia supported a national airline with large-scale employee background screening, ensuring full compliance and risk management during its recruitment drive."
                url="/case-studies/airline-mass-screening"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Mass Employee Screening for Airlines"
                description="Venovox Malaysia supported a national airline with large-scale employee background screening, ensuring full compliance and risk management during its recruitment drive."
                url="/case-studies/airline-mass-screening"
                provider={{
                    name: "Venovox",
                    url: BASE_URL,
                }}
                areaServed="MY"
                serviceType="Mass Employee Background Screening Services"
                baseUrl={BASE_URL}
            />
            <AirlineMassScreening />
        </>
    );
}

