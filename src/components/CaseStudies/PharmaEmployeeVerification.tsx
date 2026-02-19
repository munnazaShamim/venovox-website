"use client";

import CaseStudyLayout from "./CaseStudyLayout";

export default function PharmaEmployeeVerification() {
    const data = {
        title: "Executive Background Screening for Healthcare Company in Malaysia",
        heroImage: "/case-studies/pharma-executive-background-screening-01.png",
        heroImageAlt: "Strengthening Leadership Integrity Through Executive Screening in Malaysia",
        introduction: "A leading pharmaceutical company in Malaysia partnered with Venovox Malaysia to ensure that every senior-level hire represented the highest standards of integrity and professionalism. As the company prepared to launch a new business division, its leadership team recognized that the success of the project depended on the quality and credibility of its executives. Venovox was brought on board to conduct comprehensive background screening to support informed and compliant hiring decisions.",
        situation: {
            heading: "The Situation",
            paragraphs: [
                "The company was expanding into a new therapeutic area, requiring the recruitment of senior professionals with specialized expertise. These were leadership roles with access to sensitive research, financial data, and confidential business strategies. The management wanted to guarantee that all shortlisted candidates were transparent in their qualifications, employment history, and professional achievements.",
                'During internal review, minor inconsistencies appeared in the information provided by some applicants. To verify authenticity and maintain trust in the hiring process, the organization decided to engage Venovox Malaysia for advanced screening support under its <a href="/my-en/background-screening/hr-services/" class="text-red-600 hover:underline">HR Services</a> framework.'
            ]
        },
        approach: {
            heading: "Venovox's Approach",
            paragraphs: [
                'Venovox designed a focused background screening plan that combined education verification, employment history review, and reference validation. The process was confidential, structured, and fully aligned with <a href="/my-en/background-screening/compliance/" class="text-red-600 hover:underline">Compliance Malaysia</a> standards for data privacy and fair recruitment practices.',
                "Each candidate's records were verified through official sources to confirm academic credentials and employment timelines. Professional references were contacted discreetly to evaluate the candidate's leadership qualities, ethical standards, and management style.",
                "The screening revealed that two candidates had falsified certain details, including altered certificates and inaccurate employment timelines. These findings were reported to the company's senior management, allowing them to take decisive action before final selection."
            ]
        },
        result: {
            heading: "The Result",
            paragraphs: [
                "With Venovox Malaysia's accurate and timely reporting, the pharmaceutical company avoided the risk of onboarding unqualified candidates for high-responsibility roles. The management successfully refined its hiring pool, focusing only on verified professionals with authentic records.",
                "The project strengthened the organization's recruitment process, leading to the introduction of a new internal policy requiring screening for all senior appointments. The HR team also integrated Venovox's services into its broader HR Services strategy for ongoing workforce monitoring."
            ],
            image: "/case-studies/pharma-executive-background-screening-02.png",
            imageAlt: "The Result"
        },
        conclusion: {
            heading: "Conclusion",
            paragraphs: [
                "This case highlights how Venovox Malaysia supports healthcare organizations in maintaining recruitment integrity and regulatory compliance Malaysia standards. Through detailed verification and transparent communication, Venovox helped the client build a leadership team rooted in authenticity and trust.",
                "By integrating background screening into its HR structure, the pharmaceutical company established a sustainable hiring model that protects its reputation and ensures ethical consistency across all executive levels. Venovox continues to assist organizations in Malaysia that value people, precision, and compliance in every stage of employment."
            ]
        }
    };

    return <CaseStudyLayout data={data} />;
}
