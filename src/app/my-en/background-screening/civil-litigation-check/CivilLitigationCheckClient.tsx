"use client";

import { motion } from 'framer-motion';
import { Check, ShieldAlert, FileCheck, Globe, Clock, Users, Scale, Building, Briefcase, Search, FileText, Landmark, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const civilLitigationCheckFAQs = [
  {
    id: "faq-1",
    question: "What is a civil litigation check?",
    answer: "A civil litigation check looks for evidence that a person or business has been involved in non-criminal legal disputes such as claims, lawsuits, or judgments. It's used to understand risk before hiring or entering a business relationship."
  },
  {
    id: "faq-2",
    question: "What shows up on a civil litigation check?",
    answer: "Results can include records or indicators of civil disputes such as contract claims, debt claims, commercial disputes, or other civil matters. What appears depends on available sources and match confidence for the subject."
  },
  {
    id: "faq-3",
    question: "Is a civil lawsuit an automatic red flag for employment?",
    answer: "No. A lawsuit can happen for many normal reasons. Employers usually look at patterns, recency, severity, and whether the dispute relates to the role. Venovox reports help evaluate relevance, not push automatic decisions."
  },
  {
    id: "faq-4",
    question: "How is a civil litigation check different from a criminal background check?",
    answer: "A criminal check focuses on criminal offences. A civil litigation check focuses on non-criminal disputes, such as claims between parties. They measure different kinds of risk and are often used together for higher trust roles."
  },
  {
    id: "faq-5",
    question: "How far back does a civil litigation check go?",
    answer: "The lookback depends on record availability and screening scope. Many employers focus on recent years plus any serious patterns that indicate ongoing risk."
  },
  {
    id: "faq-6",
    question: "Can employers do civil litigation checks in Malaysia?",
    answer: "Employers commonly include civil litigation checks as part of background screening when relevant to the role, handled responsibly with proper data protection practices. Venovox aligns with secure handling and consent-based workflows."
  },
  {
    id: "faq-7",
    question: "Does a civil litigation check include Industrial Court matters?",
    answer: "Industrial Court matters are separate employment-related disputes. If you need that scope, we can include the right check type for Malaysia based on your hiring risk."
  },
  {
    id: "faq-8",
    question: "Can Venovox run a civil litigation check on a company or director?",
    answer: "Yes. Civil litigation screening supports vendor due diligence and leadership checks when assessing commercial risk and reputation exposure."
  }
];

export default function CivilLitigationCheckClient() {
  return (
    <main className="bg-white text-black">
      {/* Hero Banner */}
      <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Civil Litigation Check in Malaysia</span>
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Catch civil legal disputes before they become your business problem.
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
              Civil Court Records Search & Legal Dispute History
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              Sometimes a CV looks perfect, references are clean, and the interview goes great. Then a problem appears after onboarding. A contract dispute. A pattern of unpaid claims. A history of lawsuits that should have been spotted earlier.
              Venovox provides a Civil Litigation Check in Malaysia that looks for signs a person or business has been involved in civil legal disputes, using available record sources and structured review.
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

      {/* Image Section 1 - What is Civil Litigation Check */}
      <ImageTextSection
        title={<>What is a Civil Litigation Check?</>}
        paragraphs={[
          "A civil litigation check is a search focused on non-criminal legal disputes. It looks for involvement in civil court actions such as claims, suits, judgments, and similar outcomes.",
          "This is often used in pre-employment screening, and also in due diligence for vendors, contractors, and key leadership hires. Civil cases are not criminal cases. But they still tell a story about contract discipline, financial responsibility, and business conduct."
        ]}
        imageSrc="/civil-litigation-check/_civil-litigation-check_.jpg"
        imageAlt="Understanding civil litigation checks and their importance"
        bgColor="white"
        imageFirst={false}
      />

      {/* Why Civil Litigation Checks Matter Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Civil Litigation Checks Matter for Employers
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              A person can be involved in civil disputes for many reasons. Some are normal. Some are red flags. What matters is context, pattern, and relevance to the role.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "Protect Company Finances",
                  description: "Identify individuals with patterns of contract disputes, unpaid claims, or financial litigation before they handle company funds or vendor relationships.",
                  points: [
                    "Contract dispute patterns",
                    "Financial responsibility signals",
                    "Vendor risk assessment"
                  ]
                },
                {
                  icon: ShieldAlert,
                  title: "Safeguard Reputation",
                  description: "Prevent hiring individuals with problematic litigation histories that could damage client trust or expose your brand to legal risks.",
                  points: [
                    "Client trust protection",
                    "Brand reputation security",
                    "Legal risk mitigation"
                  ]
                },
                {
                  icon: Users,
                  title: "Secure Senior Roles",
                  description: "Ensure leadership positions are filled by individuals with clean litigation histories, especially for roles with decision-making power and signing authority.",
                  points: [
                    "Leadership due diligence",
                    "Decision-making authority",
                    "Signing power verification"
                  ]
                }
              ].map((check, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-red-600 p-3 rounded-lg w-fit mb-4">
                    <check.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {check.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-justify [text-justify:inter-word] hyphens-none">
                    {check.description}
                  </p>
                  <div className="space-y-2">
                    {check.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center">
                        <Check className="text-red-600 w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section 2 - What Venovox Checks */}
      <ImageTextSection
        title={<>What Venovox Checks</>}
        paragraphs={[
          "We keep the check practical and focused on what employers actually need. Our process starts with identity and matching validation to ensure reliable results.",
          "We look for evidence indicating civil dispute involvement, including contract disputes, debt claims, professional negligence, business partner disputes, and breaches of agreement. Then we analyze patterns and relevance to provide context for decision-making."
        ]}
        imageSrc="/civil-litigation-check/_civil-litigation-check_ 3.avif"
        imageAlt="Civil litigation check process and verification"
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
              Our Comprehensive Check Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Search,
                  title: "Identity & Matching Validation",
                  description: "We start with the basics. If identity details don't match properly, results are unreliable. We review full name variants, known identifiers, and consistency across screening documents.",
                  points: [
                    "Full name variant verification",
                    "Identifier consistency check",
                    "Document cross-validation"
                  ]
                },
                {
                  icon: FileText,
                  title: "Civil Litigation Signals",
                  description: "We search for evidence of civil dispute involvement including contract disputes, debt claims, professional negligence, business partner conflicts, and breaches of agreement.",
                  points: [
                    "Contract dispute detection",
                    "Financial claim review",
                    "Commercial conflict analysis"
                  ]
                },
                {
                  icon: Landmark,
                  title: "Pattern & Relevance Analysis",
                  description: "A single old case may mean little. Multiple cases, recent disputes, or financial behavior patterns mean more. We analyze timing, frequency, and role relevance.",
                  points: [
                    "Dispute frequency analysis",
                    "Timing relevance assessment",
                    "Role-specific risk evaluation"
                  ]
                },
                {
                  icon: CheckCircle,
                  title: "HR-Ready Reporting",
                  description: "You get clear outcome summaries: Supported, Not Supported, or More Information Needed. Plain language notes guide your team's next steps.",
                  points: [
                    "Clear decision summaries",
                    "Actionable HR guidance",
                    "Follow-up question suggestions"
                  ]
                }
              ].map((check, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-red-600 p-3 rounded-lg w-fit mb-4">
                    <check.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {check.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-justify [text-justify:inter-word] hyphens-none">
                    {check.description}
                  </p>
                  <div className="space-y-2">
                    {check.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center">
                        <Check className="text-red-600 w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Should Use This Check */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Who Should Use a Civil Litigation Check?
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              This check is essential for roles and relationships where trust, contracts, and financial responsibility matter:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Hiring Decisions",
                  roles: [
                    "Finance, payroll, procurement roles",
                    "Leadership & management positions",
                    "Sales handling high-value contracts",
                    "Roles with signing authority",
                    "Regulated industry positions"
                  ]
                },
                {
                  category: "Business Relationships",
                  roles: [
                    "Vendor & supplier due diligence",
                    "Contractor long-term projects",
                    "Business partnership assessments",
                    "Agency representation checks",
                    "Commercial relationship reviews"
                  ]
                },
                {
                  category: "Risk-Sensitive Industries",
                  roles: [
                    "Banking & financial services",
                    "Legal & professional services",
                    "Healthcare & pharmaceuticals",
                    "Technology & SaaS companies",
                    "Manufacturing & supply chain"
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                      <AlertCircle className="text-red-600 w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-start">
                        <Check className="text-green-600 w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Turnaround & Compliance Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Turnaround Time */}
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
                    <Clock className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    How long does a civil litigation check take?
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Turnaround depends on completeness of details and search complexity. Many cases complete within <span className="font-semibold">a few working days</span> after receiving complete information.
                </p>
                <p className="text-gray-700 mb-4">
                  If you're hiring against a tight start date, tell us upfront. We'll align check scope to your timeline without cutting corners.
                </p>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Proactive Timeline Management</h4>
                  <p className="text-gray-700">
                    Complex cases or unclear identity matches may take longer. We'll communicate what's needed to proceed and keep you updated throughout the process.
                  </p>
                </div>
                  <img
                    src="/civil-litigation-check/_civil-litigation-check_.jpeg"
                    alt="Compliance and legal standards for civil litigation checks"
                    className="rounded-xl shadow-lg w-full h-48 object-cover mb-6"
                    />
              </div>
            </motion.div>

            {/* Right Column - Compliance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <img
                  src="/civil-litigation-check/_civil-litigation-check_.webp"
                  alt="Compliance and legal standards for civil litigation checks"
                  className="rounded-xl shadow-lg w-full h-48 object-cover mb-6"
                />
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-lg mr-4">
                    <Scale className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Responsible & Compliant Screening
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  A civil dispute can happen to good people and good businesses. The goal is risk clarity, not unfair judgement. We follow responsible screening practices aligned with data protection standards.
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    "Consent-based approach with clear communication",
                    "Relevant scope screening (not blanket checking)",
                    "Minimal data collection principle",
                    "Secure data handling and storage",
                    "Transparent reporting methodology"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Our Process Works */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How the Venovox Process Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  number: "1",
                  title: "Collect Consent & Details",
                  description: "Share candidate or subject details through secure process and confirm consent for screening scope."
                },
                {
                  number: "2",
                  title: "Search & Review",
                  description: "We perform civil litigation review using available sources, structured checks, and validate match confidence."
                },
                {
                  number: "3",
                  title: "Report & Next Steps",
                  description: "Receive clear report with findings summary, match confidence notes, and practical HR next steps."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section 3 - When It Makes a Difference */}
      <ImageTextSection
        title={<>When This Check Makes the Biggest Difference</>}
        paragraphs={[
          "A civil litigation check is most valuable when the role controls payments, purchasing, or contracts; when the hire represents your company externally; or when the person will manage client funds or sensitive data.",
          "This check feels optional until the day it saves you from a problematic hire or business relationship. It's especially crucial for senior talent onboarding and when you need stronger due diligence."
        ]}
        imageSrc="/civil-litigation-check/_civil-litigation-check_ 1.webp"
        imageAlt="Risk assessment and due diligence importance"
        imageFirst={false}
      />

      {/* Recommended Screening Bundles */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Recommended Screening Bundles
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Civil litigation checks work best when paired with other practical verifications:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldAlert,
                  title: "Identity Verification",
                  description: "Right to work and identity authenticity checks",
                  color: "bg-red-600"
                },
                {
                  icon: Briefcase,
                  title: "Employment Verification",
                  description: "Past employment history and role validation",
                  color: "bg-red-600"
                },
                {
                  icon: FileText,
                  title: "Education Verification",
                  description: "Degree, diploma and certificate authenticity",
                  color: "bg-green-600"
                },
                {
                  icon: Search,
                  title: "Adverse Financial History",
                  description: "For roles handling money and finances",
                  color: "bg-purple-600"
                }
              ].map((bundle, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`${bundle.color} p-3 rounded-lg w-fit mb-4`}>
                    <bundle.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {bundle.title}
                  </h3>
                  <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                    {bundle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Related Background Screening Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Criminal Background Check",
                  description: "Criminal record screening and police clearance verification",
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
                  title: "Adverse Financial History",
                  description: "Financial risk screening for money-handling roles",
                  icon: FileText,
                  link: "/my-en/adverse-financial-check"
                },
                {
                  title: "Employment Verification",
                  description: "Past employment history and role validation",
                  icon: Briefcase,
                  link: "/my-en/background-screening"
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link href={service.link} key={index}>
                    <motion.div
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                      whileHover={{ y: -5 }}
                    >
                      <div className="bg-red-600 p-3 rounded-lg w-fit mb-4">
                        <IconComponent className="text-white w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                        {service.description}
                      </p>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <FAQSection
            faqs={civilLitigationCheckFAQs}
            heading="Frequently Asked Questions"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Reduce Risk Before You Commit?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              If you're hiring for trust-sensitive roles or starting a new vendor relationship, a civil litigation check can add real clarity. Venovox makes it simple, secure, and easy to act on.
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