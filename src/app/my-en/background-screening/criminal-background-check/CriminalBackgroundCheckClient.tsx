// src/app/my-en/criminal-background-check/CriminalBackgroundCheckClient.tsx
"use client";

import { motion } from 'framer-motion';
import { Check, ShieldAlert, FileCheck, Globe, Clock, Users, Scale, Building, Lock, Search } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const criminalBackgroundCheckFAQs = [
  {
    id: "faq-1",
    question: "Are criminal background checks legal in Malaysia?",
    answer: "Employers commonly run background checks in Malaysia, but reputable guidance emphasises doing it transparently, with candidate consent and PDPA-aligned handling of personal data."
  },
  {
    id: "faq-2",
    question: "Can an employer check criminal records without consent?",
    answer: "Some commentary suggests it may be possible in certain situations, but it's widely discouraged; PDPA-aligned practice is to obtain informed consent and be clear about what you're screening for."
  },
  {
    id: "faq-3",
    question: "How long does a criminal record check take in Malaysia?",
    answer: "In real hiring workflows, local criminal checks are often described as taking around 1–2 weeks, depending on the method and responsiveness of relevant channels."
  },
  {
    id: "faq-4",
    question: "Do you screen foreign candidates or overseas criminal history?",
    answer: "Yes. International screening is available, but timelines vary by country and record availability. Some international checks can take longer than domestic screening depending on the destination and institutions involved."
  },
  {
    id: "faq-5",
    question: "What is a Certificate of Good Conduct (CGC) and do I need it?",
    answer: "The CGC is a formal police clearance-style document used in certain contexts. Official guidance indicates processing can take 30–90 working days, so it's best to start early if your hiring or compliance process requires it."
  },
  {
    id: "faq-6",
    question: "What does a criminal background check show?",
    answer: "It aims to identify potential criminal history signals relevant to employment risk. The exact scope depends on what you choose to screen and what is legally accessible for verification in the candidate's jurisdiction."
  },
  {
    id: "faq-7",
    question: "How far back do criminal background checks go?",
    answer: "This varies by jurisdiction, record type, and what is permissible and available. The best approach is to screen based on role relevance (e.g., finance roles vs. general roles) instead of using a one-rule-fits-all timeframe."
  },
  {
    id: "faq-8",
    question: "What if there's a match or a discrepancy?",
    answer: "A match isn't always a conviction, and a discrepancy isn't always fraud. Names can be similar, records can be incomplete, or details can be entered differently. That's why good screening focuses on identity matching, clear reporting, and allowing candidates a fair chance to clarify."
  }
];

export default function CriminalBackgroundCheckClient() {
  return (
    <main className="bg-white text-black">
      {/* Hero Banner */}
      <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Criminal Background Check in Malaysia</span>
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Safer hiring starts with one simple thing: knowing who you're bringing into the business.
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
              Criminal Record Screening & Police Clearance Verification
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              A resume can be polished. An interview can be convincing. But trust shouldn't be based on vibes.
              Venovox helps employers run a criminal background check to identify role-relevant risks early—so you can protect your team, your customers, and your brand without slowing down hiring.
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

      {/* Image Section 1 - What is Criminal Background Check */}
      <ImageTextSection
        title={<>What is a criminal background check?</>}
        paragraphs={[
          "A criminal background check (also called a criminal record check) is part of pre-employment screening that looks for criminal history that may be relevant to a job role—especially for positions involving money, sensitive data, public safety, vulnerable groups, or access to company assets.",
          "This isn't about judging people. It's about reducing avoidable business risk."
        ]}
        imageSrc="/criminal-background/backgroundcheck criminal.jpg"
        imageAlt="Understanding criminal background checks and their importance"
        bgColor="white"
        imageFirst={false}
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
              What We Check
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Your hiring needs aren't one-size-fits-all. That's why we run checks based on job level and exposure risk, not "blanket screening."
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building,
                  title: "Local Criminal Record Screening (Malaysia)",
                  description: "We screen using lawful, role-relevant methods and available verification channels commonly used in the Malaysia screening market. Some local checks are conducted through enquiries aligned with standard industry practices.",
                  points: [
                    "Role-relevant criminal history checks",
                    "Industry-standard verification channels",
                    "Malaysia-specific screening methods"
                  ]
                },
                {
                  icon: Globe,
                  title: "International Criminal Record Screening",
                  description: "If you hire internationally, risk can travel with the candidate. We support screening for overseas candidates using compliant, best-practice approaches, with scope and timing depending on the country and record availability.",
                  points: [
                    "Overseas candidate screening",
                    "Country-specific compliance",
                    "International best practices"
                  ]
                },
                {
                  icon: Search,
                  title: "Watchlists & Sanctions (Role Dependent)",
                  description: "For compliance-heavy roles, we can add global watchlist and sanctions screening as part of a broader risk review (especially relevant in finance, regulated industries, and cross-border work).",
                  points: [
                    "Global watchlist screening",
                    "Sanctions compliance",
                    "Regulatory risk review"
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

      {/* Image Section 2 - What You'll Receive */}
      <ImageTextSection
        title={<>What You'll Receive</>}
        paragraphs={[
          "You won't get a confusing file dump. You'll get a clear hiring-ready report, typically showing status indicators, summary of findings (if any) written for HR decision-making, notes on identity matching (to reduce false matches), and any discrepancies that require candidate clarification.",
          "If something appears, we flag it responsibly—without drama. Then you decide the next step."
        ]}
        imageSrc="/criminal-background/criminal records.jpeg"
        imageAlt="Criminal background check reporting and results"
        bgColor="white"
        imageFirst={true}
      />

      {/* Who Should Run Criminal Screening */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Who Should Run Criminal Screening?
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Criminal screening is especially valuable for roles that involve:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Cash handling, payments, finance access",
                "Customer-facing responsibility",
                "Work with children, patients, or vulnerable people",
                "Access to confidential data, systems, or premises",
                "Senior leadership and trust-based positions",
                "Security, logistics, transport, and regulated operations"
              ].map((role, index) => (
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
                      <ShieldAlert className="text-red-600 w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">High-Risk Role</h3>
                  </div>
                  <p className="text-gray-700">{role}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 italic max-w-4xl mx-auto">
                If your company has to answer "Did you do due diligence?" — this is one of the strongest steps you can take.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Turnaround Time Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Local Screening */}
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
                    How long does a criminal background check take in Malaysia?
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  It depends on what you choose to screen. In Malaysia, some local criminal screening processes commonly take around <span className="font-semibold">1–2 weeks</span> in real-world employer workflows.
                </p>
                <p className="text-gray-700 mb-4">
                  For broader background screening packages, many providers describe timelines that can extend to a couple of weeks depending on scope and institutions involved.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <img
                  src="/criminal-background/criminal-record-1.webp"
                  alt="Sample criminal background check report showing verified criminal history"
                  className="rounded-xl shadow-lg"
                />
                <div className="bg-yellow-50 border-1 border-yellow-500 p-4 rounded-r mt-6">
                  <h4 className="font-bold text-gray-800 mb-2">Important note for overseas police certificates (CGC)</h4>
                  <p className="text-gray-700">
                    If you specifically require the official Certificate of Good Conduct process routed via the Ministry of Foreign Affairs Malaysia, published guidance shows approvals can take about <span className="font-semibold">30–90 working days</span> in some cases. That's why many employers start this early for foreign hires when the job requires it.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Turnaround Time Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <img
                src="/criminal-background/criminal background check.webp"
                alt="Sample criminal background check report showing verified criminal history"
                className="rounded-xl shadow-lg h-full"
              />
            </motion.div>
            {/* Right Column - PDPA Compliance */}
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
                    <Scale className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    PDPA-Compliant Screening You Can Stand Behind
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Background screening should be done the right way. In Malaysia, strong industry guidance stresses transparency and candidate consent as part of PDPA-aligned hiring practices.
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    "Consent-led approach with clear candidate communication",
                    "Role-relevant screening (not overkill, not underdone)",
                    "Minimal data collection principle",
                    "Secure handling and storage standards",
                    "Transparent reporting and documentation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Lock className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700">
                  Venovox follows a consent-led approach and keeps screening role relevant and data minimal—so you can hire confidently and responsibly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Our Criminal Background Screening Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How Our Criminal Background Screening Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  number: "1",
                  title: "Choose the Check Scope",
                  description: "Tell us the role level and risk exposure. We'll recommend an appropriate screening level (not overkill, not underdone)."
                },
                {
                  number: "2",
                  title: "Verification Begins",
                  description: "We start screening using compliant methods and available verification channels based on candidate profile (local or international)."
                },
                {
                  number: "3",
                  title: "Receive Your Report",
                  description: "Results are delivered in an easy-to-read format so HR and hiring managers can make a decision quickly."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg"
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

      {/* Why Choose Venovox */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Employers Choose Venovox for Criminal Checks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Built for Hiring Speed",
                  description: "Without cutting corners—efficient processes that respect timelines"
                },
                {
                  icon: FileCheck,
                  title: "Clear Decision-Making Reports",
                  description: "Results presented for HR and hiring manager review, not confusion"
                },
                {
                  icon: ShieldAlert,
                  title: "Role-Based Screening",
                  description: "Screen what matters for the position, not unnecessary checks"
                },
                {
                  icon: Scale,
                  title: "PDPA-Aligned Process",
                  description: "Secure handling standards and transparent consent practices"
                },
                {
                  icon: Globe,
                  title: "Local + International Support",
                  description: "Expertise in screening mixed local and foreign workforces"
                },
                {
                  icon: Users,
                  title: "Candidate Experience Focus",
                  description: "Professional screening that respects candidate privacy and time"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="text-red-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">
                    {feature.description}
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
                  title: "Education Verification",
                  description: "Degree, diploma and certificate authenticity checks",
                  icon: Users, // Replace with GraduationCap if available
                  link: "/my-en/education-verification"
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
                  icon: FileCheck,
                  link: "/my-en/background-screening"
                },
                {
                  title: "Identity Verification",
                  description: "Right to work and identity authenticity checks",
                  icon: ShieldAlert,
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
            faqs={criminalBackgroundCheckFAQs}
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
              Stronger Hiring Decisions Start Here
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              If you're hiring in Malaysia and want a criminal background check process that's fast, professional, and defensible—Venovox is ready.
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