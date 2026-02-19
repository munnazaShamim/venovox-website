"use client";

import { motion } from 'framer-motion';
import { Check, ShieldAlert, FileCheck, Globe, Clock, Users, Scale, Building, Briefcase, Search, FileText, Landmark, AlertCircle, CheckCircle, CreditCard, Banknote, Shield, Lock, PieChart, TrendingDown } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const creditCheckFAQs = [
  {
    id: "faq-1",
    question: "Can an employer do a credit check in Malaysia for hiring?",
    answer: "Employers commonly perform credit checks for roles with financial responsibility, but they should do it transparently and with candidate consent, and handle the data responsibly under Malaysia's personal data protection framework."
  },
  {
    id: "faq-2",
    question: "Do employers need consent to run a CTOS or credit report check?",
    answer: "In general practice, employers should obtain written consent before running a pre employment credit check. Credit reporting guidance published in Malaysia also states that consent must be obtained before a credit reporting agency discloses a credit report to subscribers."
  },
  {
    id: "faq-3",
    question: "What is CCRIS and what does it show?",
    answer: "CCRIS is a system managed by Bank Negara Malaysia. The CCRIS report lists financing and repayment history over the past 12 months as reported by participating financial institutions."
  },
  {
    id: "faq-4",
    question: "Is a bad credit record an automatic reason to reject a candidate?",
    answer: "Not necessarily. Many employers look at context, severity, recency, and whether the role involves money or trust. The credit check should support decision making, not replace it."
  },
  {
    id: "faq-5",
    question: "Does an employment credit check affect a candidate's credit score?",
    answer: "Employment credit screening is typically a review of existing credit information. It is not the same as applying for new financing, and it is usually positioned as a background screening step rather than a new credit application."
  },
  {
    id: "faq-6",
    question: "Which jobs usually require a credit check?",
    answer: "Most often: finance, payroll, procurement, credit control, cash handling, senior leadership with signing authority, and roles managing client funds or sensitive financial systems."
  },
  {
    id: "faq-7",
    question: "How far back does the check go?",
    answer: "It depends on the report type and the scope selected. For example, CCRIS is described by Bank Negara Malaysia as covering financing and repayment history over the past 12 months."
  },
  {
    id: "faq-8",
    question: "What if a candidate says the report has errors?",
    answer: "That happens. A good screening workflow allows the candidate to clarify issues and correct inaccuracies through the relevant channels, especially before a final hiring decision is made."
  }
];

export default function CreditCheckForEmploymentClient() {
  return (
    <main className="bg-white text-black">
      {/* Hero Banner */}
      <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Credit Check for Employment in Malaysia</span>
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Screen financial integrity for roles where money and trust matter.
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
              Pre Employment Credit Screening & Financial Risk Assessment
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              When a role involves money, approvals, procurement, client funds, or sensitive access, "skills" are only one part of the picture. You also need confidence that the person can handle financial responsibility without bringing avoidable risk into your business.
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

      {/* Image Section 1 - What is Employment Credit Check */}
      <ImageTextSection
        title={<>What is an Employment Credit Check?</>}
        paragraphs={[
          "An employment credit check is a screening step that reviews credit related information to identify risk indicators that may be relevant to a job. In Malaysia, credit information is commonly accessed through systems and reports used in the local credit ecosystem.",
          "One widely known component in Malaysia is CCRIS, managed by Bank Negara Malaysia, where the CCRIS report reflects financing and repayment history over the last 12 months as reported by participating financial institutions."
        ]}
        imageSrc="/credit-check-for-employment/_credit-check-for-employment_ 1.jpeg"
        imageAlt="Understanding employment credit checks and financial screening"
        bgColor="white"
        imageFirst={false}
      />

      {/* When to Use Credit Checks Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              When Employers in Malaysia Use Credit Checks
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              A credit check is most commonly used when the job has real financial impact:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Banknote,
                  title: "Finance & Accounting Roles",
                  description: "Finance, accounting, payroll, treasury, and credit control positions where financial integrity is paramount to business operations.",
                  points: [
                    "Payroll processing roles",
                    "Treasury management",
                    "Credit control positions",
                    "Financial reporting"
                  ]
                },
                {
                  icon: Briefcase,
                  title: "Procurement & Vendor Management",
                  description: "Roles handling purchasing, vendor contracts, and supplier relationships where financial responsibility directly impacts company spending.",
                  points: [
                    "Purchasing authority",
                    "Vendor contract management",
                    "Supplier relationship oversight",
                    "Budget management"
                  ]
                },
                {
                  icon: Shield,
                  title: "High-Trust Leadership",
                  description: "Senior leadership with signing authority, access to sensitive financial systems, or oversight of client funds and confidential data.",
                  points: [
                    "Senior management roles",
                    "Signing authority positions",
                    "Financial system access",
                    "Client fund management"
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
          "We focus on clarity and relevance. You get a result that supports decision making, not a confusing bundle of financial terms.",
          "Before any financial review is useful, we validate identity matching to ensure the report matches the right person. Then we look for adverse financial indicators like serious delinquencies, insolvency related indicators, or other risk flags relevant to the role."
        ]}
        imageSrc="/credit-check-for-employment/_civil-litigation-check_ 5.webp"
        imageAlt="Credit check process and financial review"
        bgColor="white"
        imageFirst={true}
      />

      {/* Our Check Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Comprehensive Financial Screening Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Search,
                  title: "Candidate Identity Matching",
                  description: "Before any financial review, we validate match signals including name variants, identification details, and consistency across the hiring file to ensure report accuracy.",
                  points: [
                    "Name variant verification",
                    "ID document validation",
                    "Hiring file consistency",
                    "Match confidence assessment"
                  ]
                },
                {
                  icon: PieChart,
                  title: "Adverse Financial Indicators",
                  description: "We screen for risk signals including serious delinquencies, insolvency indicators, and patterns that may matter for financial trust roles, referencing systems like CCRIS.",
                  points: [
                    "Delinquency pattern review",
                    "Insolvency status check",
                    "Repayment history analysis",
                    "Risk flag identification"
                  ]
                },
                {
                  icon: FileText,
                  title: "Practical HR Interpretation",
                  description: "Raw data isn't helpful unless you can act on it. We highlight one-off issues vs repeated patterns, recency of issues, and relevance to job scope.",
                  points: [
                    "Pattern vs isolated analysis",
                    "Recency assessment",
                    "Job relevance evaluation",
                    "Follow-up guidance"
                  ]
                },
                {
                  icon: CheckCircle,
                  title: "Clear Decision Support",
                  description: "You stay in control of the decision. We provide clarity, not judgement. Reports include outcome status and suggested HR next steps for informed hiring decisions.",
                  points: [
                    "Clear outcome summaries",
                    "Risk context provision",
                    "HR action guidance",
                    "Decision support framework"
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

      {/* What Credit Checks Should NOT Be Used For */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What a Credit Check Should NOT Be Used For
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              A credit check is not a replacement for good hiring practice, and it should never become a blanket filter:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: TrendingDown,
                  title: "Avoid These Practices",
                  points: [
                    "For roles with no financial responsibility",
                    "As the only reason to reject a candidate",
                    "Without transparency and consent",
                    "In ways that create unfair bias"
                  ]
                },
                {
                  icon: CheckCircle,
                  title: "Good Screening Policy",
                  points: [
                    "Consistent across similar roles",
                    "Role-based, not blanket screening",
                    "Well-documented process",
                    "Transparent with candidates"
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      {index === 0 ? (
                        <TrendingDown className="text-red-600 w-6 h-6" />
                      ) : (
                        <CheckCircle className="text-red-600 w-6 h-6" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        {index === 0 ? (
                          <div className="text-red-600 mr-3 mt-0.5">✗</div>
                        ) : (
                          <Check className="text-red-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                        )}
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 italic max-w-4xl mx-auto">
                A good screening policy is consistent, role-based, and documented. It's about reducing risk in appropriate positions, not creating unnecessary barriers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consent & Compliance Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Consent & Data Handling */}
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
                    <Lock className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Consent and Data Handling in Malaysia
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Credit related information is sensitive. Employers should treat it carefully and transparently. Venovox is built around a consent-first workflow and secure handling practices.
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      title: "Personal Data Protection Act 2010",
                      description: "Main framework for processing personal data in commercial transactions, emphasizing consent and withdrawal rights"
                    },
                    {
                      title: "Credit Reporting Agencies Act 2010",
                      description: "Guidance notes that consent must be obtained before credit report disclosure, with complaint paths for violations"
                    },
                    {
                      title: "Venovox Compliance Practice",
                      description: "Clear consent flow, written authorization collection, and transparent communication about check purpose"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Process & Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <img
                  src="/credit-check-for-employment/_credit-check-for-employment_ 4.jpeg"
                  alt="Consent process and data protection compliance"
                  className="rounded-xl shadow-lg w-full h-48 object-cover mb-6"
                />
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-lg mr-4">
                    <Clock className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    How the Venovox Process Works
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Choose the right scope aligned to role requirements",
                    "Collect candidate consent and details through clear workflow",
                    "Run credit screening and review results with match confidence",
                    "Receive clean HR-friendly report with actionable insights"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border-1 border-yellow-500 rounded-r">
                  <p className="text-gray-700">
                    <span className="font-semibold">Turnaround:</span> Most checks complete once candidate details and consent are received. If hiring against a fixed joining date, tell us early to align workflow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Better Candidate Experience */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              A Better Candidate Experience
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Candidates don't like surprises. The simplest way to keep trust is to be clear upfront about financial screening requirements.
                </p>
                <div className="space-y-4">
                  {[
                    "Explain why the check is relevant to the role",
                    "Ask for consent clearly and transparently",
                    "Keep the scope appropriate to the position",
                    "Allow candidates to clarify inaccuracies",
                    "Maintain professional communication throughout"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-red-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-600">
                  This approach improves acceptance rates and keeps your employer brand strong while ensuring necessary risk screening.
                </p>
              </div>
              <div>
                <img
                  src="/credit-check-for-employment/_credit-check-for-employment_.jpeg"
                  alt="Positive candidate experience during screening process"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended Bundles Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Recommended Bundles for Finance & Trust Roles
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              A credit check is most powerful when paired with complementary verifications:
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
                  title: "Employment History",
                  description: "Past employment validation and role verification",
                  color: "bg-blue-600"
                },
                {
                  icon: Scale,
                  title: "Criminal Record Check",
                  description: "Criminal background screening for trust roles",
                  color: "bg-purple-600"
                },
                {
                  icon: FileText,
                  title: "Education Verification",
                  description: "Degree and certification authenticity checks",
                  color: "bg-red-600"
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
            <div className="mt-12 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">
                Venovox can structure packages by role level so screening stays consistent across teams while being appropriately scoped for different positions.
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
              Related Background Screening Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Civil Litigation Check",
                  description: "Court records search and legal dispute history",
                  icon: Landmark,
                  link: "/my-en/civil-litigation-check"
                },
                {
                  title: "Criminal Background Check",
                  description: "Criminal record screening and police clearance",
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
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <FAQSection
            faqs={creditCheckFAQs}
            heading="Frequently Asked Questions"
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
              Ready to Screen Finance and Trust Roles with Confidence?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              If you're hiring for positions where financial integrity matters, Venovox can help you run a credit check for employment in Malaysia that is clear, respectful, and easy to act on.
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