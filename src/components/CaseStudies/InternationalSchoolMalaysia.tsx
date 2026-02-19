"use client";

import CaseStudyLayout from "./CaseStudyLayout";

export default function InternationalSchoolMalaysia() {
    const data = {
        title: "Pre Employment Screening for International School in Kuala Lumpur",
        heroImage: "/case-studies/international-school-screening-01.png",
        heroImageAlt: "Safeguarding Student Safety Through Responsible Hiring",
        introduction: "A leading international school in Kuala Lumpur approached Venovox to ensure that every aspect of its campus reflected safety, trust, and excellence. The school's management was in the process of hiring a new security guard, a position that demanded complete reliability and integrity. With the safety of hundreds of students at stake, the school sought Venovox's expertise to conduct a thorough pre employment screening before proceeding with the hire.",
        situation: {
            heading: "The Situation",
            paragraphs: [
                "The international school had a strong reputation for maintaining the highest standards of education and child protection. When a vacancy opened for a security guard, the management decided not to rely solely on interviews or references. They wanted to ensure the candidate's background aligned with the institution's values of safety and responsibility. The challenge was to verify this efficiently, without compromising the confidentiality or speed of the hiring process."
            ]
        },
        approach: {
            heading: "Venovox's Approach",
            paragraphs: [
                '<a href="/" class="text-red-600 hover:underline">Venovox</a> designed a detailed pre employment screening tailored for the school\'s requirements. The process included criminal record verification, identity confirmation, and a review of personal conduct history. The goal was to uncover any red flags that might indicate potential risk in a role involving direct contact with children and campus security.',
                "During the screening, Venovox discovered that the candidate had a prior sexual offense record. This finding was immediately reported to the school management. The transparency, accuracy, and timeliness of the report allowed the school to make an informed decision before finalizing the hire."
            ]
        },
        result: {
            heading: "The Result",
            paragraphs: [
                "The school decided not to proceed with the candidate's employment. This decision safeguarded the wellbeing of the students and reinforced the school's reputation as a trusted international institution. The management appreciated Venovox's role in providing reliable information that directly contributed to a secure and compliant hiring decision.",
                "Following this experience, the school implemented a new policy that required all future hires, including administrative and support staff, to undergo background screening before onboarding. This created a stronger culture of safety and accountability across the organization."
            ],
            image: "/case-studies/international-school-screening-02.png",
            imageAlt: "The Result"
        },
        conclusion: {
            heading: "Conclusion",
            paragraphs: [
                'Through this case, Venovox demonstrated the importance of proactive <a href="/" class="underline"> employment screening</a> background screening in maintaining the highest standards of safety and trust in the education sector. The partnership helped the international school make a critical hiring decision with confidence. By prioritizing pre employment verification, the school not only protected its students but also strengthened its standing as a responsible and forward thinking educational institution.'
            ]
        }
    };

    return <CaseStudyLayout data={data} />;
}
