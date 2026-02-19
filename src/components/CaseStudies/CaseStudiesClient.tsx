"use client";

import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import { FAQSection } from "../common/faq-section";
import { ActionSection } from "../common/action";
import { CaseStudyCard } from "../common/case-study-card";

interface CaseStudyCardData {
  title: string;
  description: string;
  industry: string;
  url: string;
  imageUrl: string;
}

export default function CaseStudiesClient() {
  const caseStudies: CaseStudyCardData[] = [
    {
      title: "International School in Malaysia — Protecting Student Safety",
      description: "A pre-employment screening flagged a sexual‑offense record for a security guard candidate, enabling the school to protect students and uphold its standards.",
      industry: "Education",
      url: "/case-studies/international-school-malaysia",
      imageUrl: "/case-studies/international-school-screening-01.png",
    },
    {
      title: "International Bank — Meeting the 'Fit & Proper' Standard",
      description: "Comprehensive checks aligned to Bank Negara guidance identified three high‑risk candidates before hiring—safeguarding data, compliance, and trust.",
      industry: "Banking",
      url: "/case-studies/international-bank-fit-and-proper-test",
      imageUrl: "/case-studies/banking-fit-and-proper-screening-01.png",
    },
    {
      title: "Logistics Firm — Trusted Drivers for High‑Value Cargo",
      description: "Targeted screening across civil litigation, reputation, and driving history reduced operational risk; annual re‑checks institutionalized ongoing assurance.",
      industry: "Logistics",
      url: "/case-studies/logistics-driver-screening",
      imageUrl: "/case-studies/logistics-driver-background-check-01.png",
    },
    {
      title: "Venture Capital — Red Flags Before an Acquisition",
      description: "Full‑scope due diligence on a target and its directors surfaced financial and reputational issues—informing a disciplined decision not to proceed.",
      industry: "Investment",
      url: "/case-studies/venture-capital-due-diligence",
      imageUrl: "/case-studies/venture-capital-due-diligence-malaysia-01.png",
    },
    {
      title: "Airline — 400 Candidates Screened in Two Working Days",
      description: "An accelerated screening programme across identity, financial health, and legal records enabled rapid, confident hiring at scale.",
      industry: "Aviation",
      url: "/case-studies/airline-mass-screening",
      imageUrl: "/case-studies/airlines-mass-background-screening-01.png",
    },
    {
      title: "Pharmaceutical Company — Credentials Verified for Senior Hires",
      description: "Education and employment verification uncovered falsified claims, delivering a shortlist that management could trust.",
      industry: "Healthcare",
      url: "/case-studies/pharma-employee-verification",
      imageUrl: "/case-studies/pharma-executive-background-screening-01.png",
    },
  ];

  const faqs = [
    {
      id: "1",
      question: "Which industries does Venovox serve?",
      answer: "We support clients across banking and finance, logistics and transportation, education, aviation, healthcare, private equity, and corporate services.",
    },
    {
      id: "2",
      question: "How fast can a screening be completed?",
      answer: "Standard checks complete within 2–3 working days, subject to scope and jurisdiction. Accelerated timelines are available for high‑volume needs.",
    },
    {
      id: "3",
      question: "Are Venovox screenings compliant in Malaysia?",
      answer: "Yes. Our processes align with Malaysian legal, privacy, and employment guidelines, and can be configured to your governance framework.",
    },
    {
      id: "4",
      question: "Can we customise the scope?",
      answer: "Absolutely. Each engagement is tailored—whether you need pre‑employment checks, executive vetting, or transaction‑grade due diligence.",
    },
    {
      id: "5",
      question: "How do we get started?",
      answer: "Contact us to discuss objectives and risk thresholds. We will recommend an approach and provide a clear timeline and deliverables.",
    },
  ];

  const actionSection = [
    {
      title: "Your Partner in Intelligent Risk Decisions",
      description: "Whether you are hiring, investing, or protecting your operations, Venovox delivers clarity with discretion. Speak with our team to shape a screening or due diligence programme that fits your risk profile.",
      primaryButton: {
        text: "Get in Touch",
        link: "/my-en/contact-us",
        icon: MailIcon,
      },
    },
  ];

  return (
    <div>
      <section className="relative w-full py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-12"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-full max-w-md" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center space-y-8"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed px-4 text-gray-800">
                Real Proof. Refined Precision.
              </p>
              
              <div className="relative py-8 px-6 sm:px-12">
                <p className="text-base sm:text-lg md:text-xl text-center leading-relaxed text-gray-700">
                  Where discretion meets excellence. At Venovox, every engagement is treated with the care, rigour, and confidentiality expected by leading institutions. This curated portfolio showcases how our background screening and corporate intelligence help clients in Malaysia—and beyond—make safer, smarter decisions with absolute confidence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-full max-w-md" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 text-center">
              Why Venovox
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Venovox is a Kuala Lumpur–based background screening and corporate due diligence partner for organizations that demand clarity without compromise. Our method pairs advanced data analysis with human expertise to surface what truly matters: integrity, compliance, and reputation protection. From pre-employment checks to investment due diligence, we deliver results with quiet efficiency and impeccable standards.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                Case Studies That Show Real Progress
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Explore a selection of recent engagements across education, banking, logistics, investment, aviation, and healthcare. Each card represents a verified outcome—distilled for clarity, written for decision‑makers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyCard
                  key={index}
                  title={caseStudy.title}
                  description={caseStudy.description}
                  industry={caseStudy.industry}
                  url={caseStudy.url}
                  imageUrl={caseStudy.imageUrl}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto space-y-24 relative py-12">
        {actionSection.map((action, index) => (
          <ActionSection
            key={index}
            title={action.title}
            description={action.description}
            primaryButton={action.primaryButton}
          />
        ))}
      </div>

      <FAQSection faqs={faqs} heading="FAQs" />
    </div>
  );
}

