"use client";

import CaseStudyLayout from "./CaseStudyLayout";

export default function AirlineMassScreening() {
    const data = {
        title: "Mass Employee Screening for Airlines in Malaysia",
        heroImage: "/case-studies/airlines-mass-background-screening-01.png",
        heroImageAlt: "Enhancing Recruitment Integrity Through Risk and Compliance Screening in Malaysia",
        introduction: "When one of Malaysia's well-known airlines launched a large-scale hiring campaign, it required a partner capable of handling hundreds of background checks quickly and accurately. The airline's goal was to onboard new staff for multiple departments within a week without compromising on quality or compliance. Venovox Malaysia was selected to manage the process through its advanced background screening and risk management expertise.",
        situation: {
            heading: "The Situation",
            paragraphs: [
                "The airline planned to hire more than 400 employees across operational, administrative, and technical departments. Given the critical nature of aviation operations, every position required thorough verification before employment approval.",
                'The management team was aware that incomplete screening could lead to potential risks involving data access, safety procedures, or regulatory breaches. They needed a solution that met both <a href="/my-en/background-screening/risk-audit/" class="text-red-600 hover:underline">Risk & Audit</a> and <a href="/my-en/background-screening/compliance/" class="text-red-600 hover:underline">Compliance</a> standards while maintaining the efficiency necessary for mass recruitment.',
                "Venovox Malaysia was engaged to deliver a full-scale background screening solution that could ensure integrity, accuracy, and speed."
            ]
        },
        approach: {
            heading: "Venovox's Approach",
            paragraphs: [
                "Venovox designed a specialized screening workflow for large-volume recruitment. The process included identity authentication, financial health checks, criminal record verification, and employment history validation.",
                "In addition to standard pre-employment checks, Venovox introduced a Risk & Audit component to identify patterns of potential concern among high-responsibility candidates. The screening data was analyzed for discrepancies, ensuring that all hires met both internal and regulatory Compliance criteria.",
                "Venovox's dedicated screening team operated with extended turnaround hours, completing all reports within two working days. The results were presented in structured summaries, allowing the airline's HR department to finalize its hiring decisions efficiently and confidently."
            ]
        },
        result: {
            heading: "The Result",
            paragraphs: [
                "The airline completed its entire hiring process within one week, supported by Venovox's fast and precise reporting. The company's leadership commended the smooth coordination between internal HR and Venovox Malaysia's screening experts.",
                "By implementing this structured verification process, the airline strengthened its compliance framework and reduced hiring risks across all departments. The success of the project led the airline to extend Venovox's background screening Malaysia services to periodic audits for existing employees to maintain consistent integrity standards."
            ],
            image: "/case-studies/airlines-mass-background-screening-02.png",
            imageAlt: "The Result"
        },
        conclusion: {
            heading: "Conclusion",
            paragraphs: [
                "This case demonstrates how Venovox Malaysia combines large-scale background screening with comprehensive Risk & Audit and Compliance practices to meet complex organizational needs.",
                "By integrating screening intelligence into its hiring strategy, the airline was able to protect operational safety, maintain regulatory alignment, and build a workforce based on verified trust.",
                "Venovox continues to support clients in Malaysia across aviation, finance, and logistics sectors, offering scalable solutions that connect risk assessment with real-world recruitment efficiency."
            ]
        }
    };

    return <CaseStudyLayout data={data} />;
}
