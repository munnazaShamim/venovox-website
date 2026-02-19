import WorkplaceMisconductInvestigations from "@/components/CorporateInvestigations/WorkplaceMisconductInvestigations/index";
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
    title: "Workplace Misconduct and Ethics Investigations | Venovox",
    description: "Venovox conducts confidential workplace misconduct investigations to address ethical breaches, harassment, and compliance violations with precision and care.",
    alternates: {
        canonical: "https://venovox.com/corporate-investigations/workplace-misconduct-investigations"
    }
};

export default function WorkplaceMisconductInvestigationsPage() {
    const faqs = [
        {
            id: "1",
            question: "Will participants be protected from retaliation?",
            answer: "Yes. We set clear safeguards, remind managers of duties, and monitor for subtle harms such as isolation or lost opportunities."
        },
        {
            id: "2",
            question: "How are interviews conducted?",
            answer: "We use fair, trauma informed interviews with clear consent, simple ground rules, and respectful language."
        },
        {
            id: "3",
            question: "Can reports be anonymous?",
            answer: "In many locations yes. Where names are required, we limit access to the core team and protect privacy."
        },
        {
            id: "4",
            question: "How long does a typical case take?",
            answer: "It depends on scope and evidence. Many matters resolve within a few weeks after intake, preservation, and interviews."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
        { name: "Workplace Misconduct Investigations", url: "/corporate-investigations/workplace-misconduct-investigations" },
    ];

    return (
        <>
        <PageBanner />
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <WebPageSchema
                name="Workplace Misconduct Investigations"
                description="Venovox conducts confidential workplace misconduct investigations to address ethical breaches, harassment, and compliance violations with precision and care."
                url="/corporate-investigations/workplace-misconduct-investigations"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Workplace Misconduct Investigations"
                description="Venovox conducts confidential workplace misconduct investigations to address ethical breaches, harassment, and compliance violations with precision and care."
                url="/corporate-investigations/workplace-misconduct-investigations"
                serviceType="Corporate Investigation Service"
                areaServed="Global"
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <WorkplaceMisconductInvestigations />
        </>
    );
}