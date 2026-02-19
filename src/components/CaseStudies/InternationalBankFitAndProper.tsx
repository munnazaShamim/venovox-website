"use client";

import CaseStudyLayout from "./CaseStudyLayout";

export default function InternationalBankFitAndProper() {
    const data = {
        title: "Employee Background Screening for International Bank in Malaysia",
        heroImage: "/case-studies/banking-fit-and-proper-screening-01.png",
        heroImageAlt: "Ensuring Regulatory Compliance Through Comprehensive Employee Screening",
        introduction: 'A leading international bank expanding its operations in Malaysia partnered with Venovox to strengthen its employee screening process. As the bank prepared to open a new branch, the management wanted to ensure that every individual joining the organization met the regulatory requirements set by Bank Negara Malaysia. Venovox was engaged to design a thorough and compliant screening process that would help the bank build a secure and trustworthy team.',
        situation: {
            heading: "The Situation",
            paragraphs: [
                'The bank had initiated recruitment for several key roles to support the launch of its new branch in Kuala Lumpur. While the internal team had a standard background check procedure in place, they wanted an enhanced screening approach that fully aligned with Bank Negara\'s "fit and proper" test.',
                "This test determines the integrity and financial responsibility of individuals employed in financial institutions. Employees with civil litigation or bankruptcy history can be considered high risk, which may affect their eligibility to work in sensitive financial roles. To address these concerns, the bank turned to Venovox for guidance and implementation support."
            ]
        },
        approach: {
            heading: "Venovox's Approach",
            paragraphs: [
                '<a href="/" class="text-red-600 hover:underline">Venovox</a> proposed a tailored background screening process that went beyond the standard checks. In addition to identity verification and criminal record searches, Venovox recommended including civil litigation and bankruptcy record reviews as part of the scope.',
                "This enhancement ensured that each candidate's financial and legal standing was verified in accordance with Bank Negara's expectations. The team at Venovox worked closely with the bank's compliance department to streamline the verification process and ensure that all findings were handled with confidentiality and precision.",
                'Through this process, three candidates were identified as not meeting the "fit and proper" criteria due to existing records. This early identification allowed the bank to make informed hiring decisions while maintaining its compliance obligations.'
            ]
        },
        result: {
            heading: "The Result",
            paragraphs: [
                "By following Venovox's recommendations, the bank successfully completed the hiring process without regulatory concerns. The inclusion of civil and bankruptcy checks strengthened the organization's risk management framework and built confidence among senior management and regulators.",
                "The process also established a clear screening standard for future recruitment across all branches. Venovox's transparent reporting and fast turnaround time helped the bank accelerate onboarding without compromising on quality or compliance."
            ],
            image: "/case-studies/banking-fit-and-proper-screening-02.png",
            imageAlt: "The Result"
        },
        conclusion: {
            heading: "Conclusion",
            paragraphs: [
                "This collaboration demonstrated how strategic background screening supports both compliance and operational excellence in the banking industry. Venovox's approach ensured that the international bank in Malaysia met the highest ethical and regulatory benchmarks while safeguarding its financial and reputational interests.",
                "By integrating comprehensive checks into the recruitment process, the bank not only complied with Bank Negara's fit and proper requirements but also reinforced a culture of trust and accountability within its organization."
            ]
        }
    };

    return <CaseStudyLayout data={data} />;
}
