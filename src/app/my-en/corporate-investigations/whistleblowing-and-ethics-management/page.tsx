import WhistleblowingAndEthicsManagement from "@/components/CorporateInvestigations/WhistleblowingAndEthicsManagement/index";
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
    title: "Whistleblowing and Ethics Management Services | Venovox",
    description: "Whistleblowing and ethics management services that support secure reporting ethical conduct internal investigations and strong corporate governance frameworks.",
    alternates: {
        canonical: "https://venovox.com/corporate-investigations/whistleblowing-and-ethics-management"
    }
};

export default function WhistleblowingAndEthicsManagementPage() {
    const faqs = [
        {
            id: "1",
            question: "Can reporters stay anonymous?",
            answer: "In many places yes. Where names are required by law, we limit access and protect confidentiality."
        },
        {
            id: "2",
            question: "How fast do you acknowledge a report?",
            answer: "Promptly, often within one business day, with a clear outline of next steps."
        },
        {
            id: "3",
            question: "Who can see a report?",
            answer: "Only the core intake and investigation team and legal where needed, following least privilege."
        },
        {
            id: "4",
            question: "How do you prevent retaliation?",
            answer: "We set clear rules, brief managers, monitor for signs of harm, and act quickly if issues arise."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
        { name: "Whistleblowing and Ethics Management", url: "/corporate-investigations/whistleblowing-and-ethics-management" },
    ];

    return (
        <>
        <PageBanner />
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <WebPageSchema
                name="Whistleblowing and Ethics Management"
                description="Venovox empowers organizations with whistleblowing and ethics management systems to report misconduct, protect employees, and promote transparency."
                url="/corporate-investigations/whistleblowing-and-ethics-management"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Whistleblowing and Ethics Management"
                description="Venovox empowers organizations with whistleblowing and ethics management systems to report misconduct, protect employees, and promote transparency."
                url="/corporate-investigations/whistleblowing-and-ethics-management"
                serviceType="Corporate Investigation Service"
                areaServed="Global"
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <WhistleblowingAndEthicsManagement />
        </>
    );
}