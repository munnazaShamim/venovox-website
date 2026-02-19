import InternationalSchoolMalaysia from "@/components/CaseStudies/InternationalSchoolMalaysia";
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
    title: "Pre Employment Screening for International School KL|Venovox",
    description: "Pre employment screening for international schools in Kuala Lumpur, supporting staff verification, child safety, regulatory compliance, and institutional trust.",
    alternates: {
        canonical: "https://venovox.com/case-studies/international-school-malaysia"
    }
};

export default function InternationalSchoolMalaysiaPage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "International School Malaysia", url: "/case-studies/international-school-malaysia" },
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
                name="Pre Employment Screening for International School in Kuala Lumpur"
                description="How Venovox helped a leading international school in Kuala Lumpur prevent a potential safety risk through pre employment screening and secure a trusted learning environment."
                url="/case-studies/international-school-malaysia"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Pre Employment Screening for Educational Institutions"
                description="How Venovox helped a leading international school in Kuala Lumpur prevent a potential safety risk through pre employment screening and secure a trusted learning environment."
                url="/case-studies/international-school-malaysia"
                provider={{
                    name: "Venovox",
                    url: BASE_URL,
                }}
                areaServed="MY"
                serviceType="Pre Employment Background Screening Services"
                baseUrl={BASE_URL}
            />
            <InternationalSchoolMalaysia />
        </>
    );
}

