"use client";

import { motion } from 'framer-motion';
import { Check, ShieldAlert, FileCheck, Clock, Scale, Users, Globe, Briefcase, Calendar, Search, Fingerprint, Building } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const rightToWorkFAQs = [
  {
    id: "faq-1",
    question: "What is a right to work check in Malaysia?",
    answer: "A right to work check confirms that a person is legally allowed to work in Malaysia based on their status and documents. It also checks that the documents are consistent and valid for the time period of employment. This reduces compliance risk and prevents onboarding delays."
  },
  {
    id: "faq-2",
    question: "What documents prove the right to work in Malaysia?",
    answer: "For Malaysian citizens, MyKad is commonly used. For permanent residents, MyPR is commonly used. For foreign hires, employers usually review a passport plus valid work authorisation documents connected to Malaysia employment."
  },
  {
    id: "faq-3",
    question: "Do Malaysian citizens need a right to work check?",
    answer: "Many employers still confirm identity and status for every hire, especially in regulated industries. For citizens, the check is typically simple and fast, focused on identity consistency and hiring file readiness."
  },
  {
    id: "faq-4",
    question: "How do employers verify an Employment Pass in Malaysia?",
    answer: "An Employment Pass is a work permit that enables an expatriate to work with an organisation in Malaysia. Employers typically verify that the candidate's pass evidence is valid, matches the individual, and aligns with the employment period and job context."
  },
  {
    id: "faq-5",
    question: "Can Venovox screen foreign candidates?",
    answer: "Yes. Venovox supports screening for Malaysian and international candidates. For foreign hires, we focus on identity consistency, status evidence, and validity windows so HR teams can onboard with confidence."
  },
  {
    id: "faq-6",
    question: "How long does a right to work check take?",
    answer: "Timing depends on how complete the documents are and how complex the case is. The fastest cases are those with clean, complete documents. If something is missing or unclear, we tell you exactly what is needed so you can resolve it quickly."
  },
  {
    id: "faq-7",
    question: "Is right to work verification legal in Malaysia under PDPA?",
    answer: "Employers can perform screening when it is relevant to hiring, handled responsibly, and supported by proper consent and data protection practices. Venovox is built around secure handling of sensitive candidate information and PDPA aligned processes."
  },
  {
    id: "faq-8",
    question: "What happens if a candidate's documents are expired or not valid?",
    answer: "We will flag the issue clearly in the report, explain what is missing or inconsistent, and recommend the next step. This helps HR avoid starting someone on the wrong status or creating future legal and operational risk."
  },
  {
    id: "faq-9",
    question: "Can you re-check right to work status after renewal?",
    answer: "Yes, many employers schedule follow ups for roles where work permission has an expiry date. Venovox can support repeat checks when a pass is renewed or when employment terms change."
  },
  {
    id: "faq-10",
    question: "What will I see in the final report?",
    answer: "You will receive an easy to read result with a clear outcome and notes for HR. The report is designed to support practical decisions and to fit smoothly into your hiring records."
  }
];

export default function RightToWorkCheckClient() {
  return (
    <main className="bg-white text-black">
      {/* Hero Banner */}
      <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Right to Work Check Malaysia</span>
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Hiring should feel simple. But one missing detail can turn into a compliance problem.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work Authorization Validation & Employment Eligibility Assessment
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              A Right to Work Check in Malaysia confirms that a candidate is legally allowed to work in the country, and that the documents used to prove it are genuine, consistent, and current. Venovox helps you verify this step quickly, clearly, and in a way that fits your hiring process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/my-en/contact-us/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-transform"
                >
                  Get a Quote
                </motion.button>
              </Link>
              <motion.button
                onClick={openWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black border-2 border-red-600 font-semibold px-8 py-3 rounded-full transition-transform"
              >
                Speak with a Screening Specialist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section 1 - What You Get */}
      <ImageTextSection
        title={<>What You Get with Venovox</>}
        paragraphs={[
          "Clear confirmation of work authorisation status based on the documents provided. Identity consistency checks (names, dates, document details). Expiry and validity review, so you are not surprised after onboarding.",
          "Practical notes for HR on what is missing, unclear, or high risk. A process designed to be PDPA aligned, with secure handling of candidate data."
        ]}
        imageSrc="/right-to-work-check/Right to work check 1.webp"
        imageAlt="Right to work verification process and benefits"
        bgColor="white"
        imageFirst={false}
      />

      {/* Why It Matters Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Right to Work Verification Matters in Malaysia
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Column - Workforce Types */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                      <Users className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Malaysia's Diverse Workforce
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Malaysia hiring often includes a mix of:
                  </p>
                  <div className="space-y-4">
                    {[
                      "Malaysian citizens",
                      "Permanent residents",
                      "Foreign hires on employment passes or other work related permissions"
                    ].map((type, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Check className="text-green-600 w-5 h-5 mr-3" />
                        <span className="text-gray-700">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Confidence Points */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                      <ShieldAlert className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Hiring with Confidence
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    When you bring someone on board, you need confidence that:
                  </p>
                  <div className="space-y-4">
                    {[
                      "They are who they claim to be",
                      "Their permission to work fits the role and time period",
                      "Your hiring file is clean if you are ever audited or questioned"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <Check className="text-blue-600 w-4 h-4" />
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 italic">
                      This is not about creating friction. It is about hiring with confidence and protecting your business from avoidable risk.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section 2 - Who Should Run Check */}
      <ImageTextSection
        title={<>Who Should Run a Right to Work Check</>}
        paragraphs={[
          "Most employers benefit from right to work verification when hiring foreign candidates or relocating talent into Malaysia, hiring for roles with client access, sensitive systems, or regulated work.",
          "Managing large volume hiring where small mistakes are easy to miss, onboarding fast and needing documents reviewed without slowing down the offer process, or when renewals are common and you want reminders before a pass expires."
        ]}
        imageSrc="/right-to-work-check/Right to work check 2.jpeg"
        imageAlt="Industries and scenarios needing right to work verification"
        bgColor="white"
        imageFirst={true}
      />

      {/* What We Check Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Venovox Checks in a Right to Work Review
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              A strong right to work check is not only "do they have a document." It is "does everything match and does it make sense."
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Fingerprint,
                  title: "Identity & Document Consistency",
                  checks: [
                    "Name spelling differences across documents",
                    "Inconsistent date of birth",
                    "Photos that do not align with identity record",
                    "Document details that look altered or incomplete"
                  ]
                },
                {
                  icon: Globe,
                  title: "Status Evidence",
                  checks: [
                    "Relevant immigration permission documents",
                    "Validity periods and employment context",
                    "Work authorization type and restrictions",
                    "Consistency with employment terms"
                  ]
                },
                {
                  icon: Calendar,
                  title: "Expiry & Validity",
                  checks: [
                    "Upcoming expiry windows flagged",
                    "Missing pages or key details",
                    "Unclear status needing clarification",
                    "Onboarding readiness assessment"
                  ]
                },
                {
                  icon: FileCheck,
                  title: "Practical HR Outcome",
                  checks: [
                    "Verified / Supported status",
                    "Not supported / Inconsistent flags",
                    "More information needed notes",
                    "Clear next steps for your team"
                  ]
                }
              ].map((check, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-red-600 p-3 rounded-lg w-fit mb-4">
                    <check.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {check.title}
                  </h3>
                  <div className="space-y-2">
                    {check.checks.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start text-sm">
                        <Check className="text-red-600 w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Documents for Right to Work in Malaysia
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              The exact document set depends on the candidate's status. If you are unsure what to request, Venovox can guide your HR team.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Malaysian Citizens",
                  icon: Users,
                  documents: [
                    "MyKad (commonly used to confirm identity and citizen status)",
                    "Valid identification with photo",
                    "Consistent personal details across records"
                  ],
                  color: "green"
                },
                {
                  title: "Permanent Residents",
                  icon: ShieldAlert,
                  documents: [
                    "MyPR (commonly used to confirm permanent resident status)",
                    "Valid residency documentation",
                    "Updated immigration records"
                  ],
                  color: "blue"
                },
                {
                  title: "Foreign Nationals",
                  icon: Globe,
                  documents: [
                    "Valid Passport",
                    "Relevant Malaysia work authorisation documents",
                    "Supporting details confirming validity and stay period"
                  ],
                  color: "purple"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-200"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`bg-${category.color}-600 p-3 rounded-lg w-fit mb-6`}>
                    <category.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-start">
                        <FileCheck className={`text-${category.color}-600 w-5 h-5 mr-3 mt-0.5`} />
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process & Turnaround Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-lg mr-4">
                    <Search className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    How the Venovox Process Works
                  </h3>
                </div>
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Share Candidate Details Securely",
                      description: "Send the candidate's basic details and the documents used to prove right to work."
                    },
                    {
                      step: "2",
                      title: "Review and Verification",
                      description: "Our team reviews authenticity signals, consistency, and validity windows. Where clarification is needed, we list exactly what is missing."
                    },
                    {
                      step: "3",
                      title: "Receive a Clear Report",
                      description: "You get an easy to read report you can file with your hiring records, plus a clear status outcome for decision making."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Turnaround & Issues */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-lg mr-4">
                    <Clock className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Turnaround Time & Common Issues
                  </h3>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-gray-800 mb-4">How long does a right to work check take?</h4>
                  <p className="text-gray-700 mb-4">
                    Turnaround depends on how complete the documents are and how complex the case is.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg border-1 border-yellow-500">
                    <p className="text-gray-700">
                      In many hiring workflows, checks can be completed quickly once complete documents are provided. For broader background screening, standard timelines are often measured in working days.
                    </p>
                    <p className="text-gray-700 mt-2 font-semibold">
                      If you are hiring against a tight start date, tell us early. We will set realistic expectations and keep your process moving.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Common Issues We Help Catch Early</h4>
                  <div className="space-y-3">
                    {[
                      "The candidate provides a document, but key pages are missing",
                      "Names do not match across passport, pass, and HR records",
                      "The pass validity period does not cover the planned start date",
                      "A document appears altered or inconsistent with standard formatting"
                    ].map((issue, index) => (
                      <div key={index} className="flex items-start">
                        <ShieldAlert className="text-red-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section 3 - Recommended Add-ons */}
      <ImageTextSection
        title={<>Recommended Add-ons for Stronger Hiring Decisions</>}
        paragraphs={[
          "Right to work verification is strongest when paired with Identity Verification for fraud prevention, Employment Verification to confirm experience, Education Verification for roles where qualifications matter, and Criminal Record Check where role risk requires it.",
          "Venovox can bundle checks based on role level, department, or industry requirement."
        ]}
        imageSrc="/right-to-work-check/Right to work check.webp"
        imageAlt="Additional verification services to complement right to work checks"
        bgColor="white"
        imageFirst={false}
      />

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Industries in Malaysia That Commonly Require Right to Work Checks
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Many Malaysian employers treat this as standard for risk control in these sectors:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Finance and banking",
                "Technology and startups",
                "Logistics and supply chain",
                "Healthcare and pharmaceuticals",
                "Manufacturing",
                "Education",
                "HR and recruitment agencies",
                "Government suppliers and contract firms"
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-center"
                  whileHover={{ y: -5 }}
                >
                  <Building className="text-red-600 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{industry}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 italic max-w-3xl mx-auto">
                If your hiring team handles foreign talent, contractors, or sensitive access roles, right to work verification should be part of your baseline screening.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Related Screening Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Criminal Background Check",
                  description: "Local & international criminal history verification",
                  icon: ShieldAlert,
                  link: "/my-en/criminal-background-check"
                },
                {
                  title: "Reference Check",
                  description: "Professional referee verification and interviews",
                  icon: Users,
                  link: "/my-en/reference-check"
                },
                {
                  title: "Education Verification",
                  description: "Degree, diploma and certificate checks",
                  icon: FileCheck,
                  link: "/my-en/education-verification"
                },
                {
                  title: "Employment Verification",
                  description: "Past employment history validation",
                  icon: Briefcase,
                  link: "/my-en/background-screening"
                }
              ].map((service, index) => (
                <Link href={service.link} key={index}>
                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-red-600 p-3 rounded-lg w-fit mb-4">
                      <service.icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                      {service.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <FAQSection
            faqs={rightToWorkFAQs}
            heading="FAQs about Right to Work Checks in Malaysia"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Verify Right to Work for Your Next Hire?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              Venovox helps Malaysian employers hire faster, reduce compliance risk, and keep onboarding clean. If you are hiring foreign talent or want a stronger screening baseline, speak with a Venovox screening specialist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/my-en/contact-us/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-transform"
                >
                  Get a Quote
                </motion.button>
              </Link>
              <motion.button
                onClick={openWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black border-2 border-red-600 font-semibold px-8 py-3 rounded-full transition-transform"
              >
                Speak with a Screening Specialist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}