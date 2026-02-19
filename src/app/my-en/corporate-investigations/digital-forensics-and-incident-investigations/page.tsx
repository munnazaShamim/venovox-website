import DigitalForensicsAndIncidentInvestigations from "@/components/CorporateInvestigations/DigitalForensicsAndIncidentInvestigations/index";
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
    title: "Digital Forensics and Incident Investigations | Venovox",
    description: "Venovox delivers digital forensics and cyber incident investigations to uncover evidence, identify threats, and support your organization's digital resilience.",
    alternates: {
        canonical: "https://venovox.com/corporate-investigations/digital-forensics-and-incident-investigations"
    }
};

export default function DigitalForensicsAndIncidentInvestigationsPage() {
    const faqs = [
        {
            id: "1",
            question: "Can staff keep working while you collect evidence?",
            answer: "Often yes. We plan safe containment and target collections to reduce disruption while protecting data."
        },
        {
            id: "2",
            question: "What cloud sources can you examine?",
            answer: "We collect logs and artifacts from suites like Microsoft 365, Google Workspace, common EDR and SIEM tools, and major cloud platforms."
        },
        {
            id: "3",
            question: "Do you handle ransomware negotiations?",
            answer: "We focus on investigation and recovery and can coordinate with counsel and specialist negotiators where appropriate."
        },
        {
            id: "4",
            question: "How long do you retain forensic images?",
            answer: "Retention follows your policy and legal guidance. We store evidence securely and control access."
        },
    ];

    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/corporate-investigations" },
        { name: "Corporate Investigations", url: "/corporate-investigations" },
        { name: "Digital Forensics and Incident Investigations", url: "/corporate-investigations/digital-forensics-and-incident-investigations" },
    ];

    return (
        <>
        <PageBanner />
            <OrganizationSchema />
            <BreadcrumbSchema items={breadcrumbItems} baseUrl={BASE_URL} />
            <WebPageSchema
                name="Digital Forensics and Incident Investigations"
                description="Venovox delivers digital forensics and cyber incident investigations to uncover evidence, identify threats, and support your organization’s digital resilience."
                url="/corporate-investigations/digital-forensics-and-incident-investigations"
                baseUrl={BASE_URL}
            />
            <ServiceSchema
                name="Digital Forensics and Incident Investigations"
                description="Venovox delivers digital forensics and cyber incident investigations to uncover evidence, identify threats, and support your organization’s digital resilience."
                url="/corporate-investigations/digital-forensics-and-incident-investigations"
                serviceType="Corporate Investigation Service"
                areaServed="Global"
                baseUrl={BASE_URL}
            />
            <FAQSchema faqs={faqs} />
            <DigitalForensicsAndIncidentInvestigations />
        </>
    );
}