import FraudRiskManagementAndPrevention from "@/components/CorporateInvestigations/FraudRiskManagementAndPrevention/index";
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
    title: "Fraud Risk Management and Prevention Services | Venovox",
    description: "Protect your business with Venovox fraud risk management services—detect, prevent, and respond to financial crimes with effective investigative strategies.",
    alternates: {
        canonical: "https://venovox.com/corporate-investigations/fraud-risk-management-and-prevention"
    }
};

export default function FraudRiskManagementAndPreventionPage() {
    const faqs = [
        {
            id: "1",
            question: "How long does a fraud risk assessment take?",
            answer: "Scope and size matter, but many organizations can complete a focused assessment in a few weeks."
        },
        {
            id: "2",
            question: "Do we need new software for monitoring?",
            answer: "Not always. We often start with light analytics using your current systems and scale if needed."
        },
        {
            id: "3",
            question: "Can you train our managers and teams?",
            answer: "Yes. We provide practical sessions with real examples and simple job aids."
        },
        {
            id: "4",
            question: "How do we measure success?",
            answer: "Lower losses, faster detection, fewer repeat issues, and positive audit and regulator feedback."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
        { name: "Fraud Risk Management and Prevention", url: "/corporate-investigations/fraud-risk-management-and-prevention" },
    ];

    return (
        <>
        <PageBanner />
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <WebPageSchema
                name="Fraud Risk Management and Prevention"
                description="Protect your business with Venovox fraud risk management services—detect, prevent, and respond to financial crimes with effective investigative strategies."
                url="/corporate-investigations/fraud-risk-management-and-prevention"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Fraud Risk Management and Prevention"
                description="Protect your business with Venovox fraud risk management services—detect, prevent, and respond to financial crimes with effective investigative strategies."
                url="/corporate-investigations/fraud-risk-management-and-prevention"
                serviceType="Corporate Investigation Service"
                areaServed="Global"
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <FraudRiskManagementAndPrevention />
        </>
    );
}