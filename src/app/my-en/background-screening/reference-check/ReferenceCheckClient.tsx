"use client";

import { motion } from 'framer-motion';
import { Check, Users, FileCheck, Clock, Scale, MessageSquare, Award, Phone, ShieldAlert, Briefcase } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const referenceCheckFAQs = [
  {
    id: "faq-1",
    question: "What is a reference check for employment?",
    answer: "It's when an employer contacts a candidate's professional referees to confirm job-related details and gather feedback about performance, behaviour, and fit."
  },
  {
    id: "faq-2",
    question: "How long do reference checks take?",
    answer: "Often a few business days, but it depends on referee responsiveness. Some providers state averages around three business days, while others note wider ranges (e.g., 3–7 business days) depending on process and availability."
  },
  {
    id: "faq-3",
    question: "Do employers really call references?",
    answer: "Yes—especially for roles with higher trust, client exposure, compliance requirements, or leadership responsibilities. A call often reveals details that a CV won't."
  },
  {
    id: "faq-4",
    question: "What questions do employers ask during a reference check?",
    answer: "Usually questions around relationship, responsibilities, strengths, improvement areas, reliability, teamwork, and whether the referee would rehire the person."
  },
  {
    id: "faq-5",
    question: "Will you contact the candidate's current employer?",
    answer: "Only if it's appropriate and aligned with the agreed process. Many employers prefer references from past managers to avoid risking the candidate's current job."
  },
  {
    id: "faq-6",
    question: "Can a candidate fail a reference check?",
    answer: "A 'fail' usually means the reference feedback raises concerns that are relevant to the role—like reliability issues, serious conduct problems, or major inconsistencies. Sometimes it's not a red flag—it's simply unclear or incomplete information that needs clarification."
  },
  {
    id: "faq-7",
    question: "How many references should I request?",
    answer: "Many employers request 2–3 professional references so they can compare feedback and reduce bias."
  },
  {
    id: "faq-8",
    question: "Are reference checks legal in Malaysia?",
    answer: "Employers commonly run reference checks as part of hiring, but the safest approach is a consent-led, privacy-aware process with role-relevant questions and secure handling. Workflows that request employer references often require signed consent forms."
  }
];

export default function ReferenceCheckClient() {
  return (
    <main className="bg-white text-black">
      {/* Hero Banner */}
      <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Reference Check Malaysia</span>
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Feel confident about the person behind the CV.
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
              Professional Reference Verification & Candidate Screening
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              Interviews show how someone talks. A reference check shows how someone worked. 
              Venovox provides professional reference check services in Malaysia—so you can validate performance, reliability, and workplace behaviour before you make the offer final.
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

      {/* Image Section 1 - What is Reference Check */}
      <ImageTextSection
        title={<>What is a reference check?</>}
        paragraphs={[
          "A reference check is when an employer (or screening partner) contacts a candidate's professional referees—often past managers or supervisors—to confirm work history and gather honest feedback on performance and conduct.",
          "It's not about 'catching someone out.' It's about avoiding a hire that looks great on paper… but struggles in the real world."
        ]}
        imageSrc="/reference-check/refernce check.jpg"
        imageAlt="Understanding professional reference checks and their importance"
        bgColor="white"
        imageFirst={false}
      />

      {/* What We Do Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Venovox Does (and why it works)
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                      <MessageSquare className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Structured Reference Interviews
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    We run structured reference interviews. That means we don't just ask one question and call it a day. We use a consistent approach designed to uncover what matters for hiring.
                  </p>
                  <div className="space-y-4">
                    {[
                      "How the candidate handled responsibilities",
                      "How they worked with people",
                      "How they responded under pressure",
                      "Whether they were dependable",
                      "Whether there were concerns that would impact your role"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="text-red-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border-1 border-red-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">The Result You Get</h3>
                <p className="text-gray-700 mb-6">
                  You get feedback you can actually use—clear, role-relevant, and easy to compare across candidates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white rounded-lg">
                    <Award className="text-green-600 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Actionable performance insights</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg">
                    <FileCheck className="text-blue-600 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Verified work history details</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg">
                    <Users className="text-purple-600 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Teamwork and collaboration feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What We Cover in a Professional Reference Check
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Depending on your role and screening package, our candidate reference screening can include:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileCheck,
                  title: "Core Verification",
                  points: [
                    "Relationship of referee to candidate (manager / colleague / HR)",
                    "Confirmation of job title and employment timeline (where available)",
                    "Role scope and responsibilities"
                  ]
                },
                {
                  icon: Award,
                  title: "Performance & Behaviour Insights",
                  points: [
                    "Strengths and areas to improve",
                    "Work quality and consistency",
                    "Communication style and teamwork",
                    "Reliability, punctuality, and accountability",
                    "Ability to handle deadlines, pressure, and change",
                    "Leadership (for senior roles)"
                  ]
                },
                {
                  icon: ShieldAlert,
                  title: "Risk & Suitability Signals",
                  points: [
                    "Reason for leaving (where a referee can share)",
                    "Rehire eligibility (when answerable)",
                    "Any role-relevant concerns that affect trust and safety"
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-red-600 p-3 rounded-lg w-fit mb-6">
                    <section.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start">
                        <Check className="text-red-600 w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-50 border-1 border-blue-500 p-6 rounded-r max-w-4xl mx-auto">
              <p className="text-gray-700">
                If you're in a regulated industry, reference checks may be a key expectation in your hiring workflow. Some employers in Malaysia explicitly request employment references with signed consent as part of structured screening requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sample Questions Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <MessageSquare className="text-white w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  "What questions do you ask in a reference check?"
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    We keep it human. We keep it focused. We respect the referee's time.
                  </p>
                  <p className="text-gray-700">
                    Examples of the kind of questions commonly used in effective reference checks include questions around the candidate's working relationship, strengths, growth areas, and overall fit.
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">Our Approach:</h4>
                  <p className="text-gray-700">
                    We tailor the questions to your role (sales, finance, operations, leadership, etc.) so the feedback is relevant—no fluff.
                  </p>
                </div>
              </div>
            </div>
            <div className='h-full'>
                <img 
                src="/reference-check/a reference check .jpg" 
                alt="Sample Questions in Reference Checks" 
                className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section 2 - Why Reference Checks Matter */}
      <ImageTextSection
        title={<>Why Reference Checks Matter (more than people admit)</>}
        paragraphs={[
          "Because bad hires don't always fail loudly. Sometimes they create team friction, damage client trust, miss deadlines repeatedly, or turn over fast (and cost you months).",
          "Reference checks help you make a decision with more certainty—especially for client-facing, leadership, and trust-based roles."
        ]}
        imageSrc="/reference-check/_reference-check_.jpeg"
        imageAlt="Importance of reference checks for quality hiring"
        bgColor="white"
        imageFirst={true}
      />

      {/* Turnaround & PDPA Section */}
      <section className="py-20 px-6 bg-white">
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
                    Turnaround Time
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Reference checks depend on one real thing: referee availability.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700">
                    In many screening workflows, reference checks often complete in a few business days, and can be faster when referees respond quickly.
                  </p>
                  <p className="text-gray-700 mt-3 font-semibold">
                    For Malaysia-based providers, typical timelines are commonly described in the <span className="text-red-600">5–7 working day</span> range for local candidates (and longer for international profiles), depending on scope and responsiveness.
                  </p>
                </div>
                <p className="text-gray-700">
                  If you're hiring urgently, we'll advise the best way to structure the check to reduce delays.
                </p>
              </div>
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
                    Consent-Led & PDPA-Aware
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Reference checks involve personal data, so the process must be handled professionally. A consent-led approach is commonly required in employer reference workflows, including cases where employers request references from current or former employers and attach a signed consent form.
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    "Clear and documented process",
                    "Respectful to candidates and referees",
                    "Focused on role relevance (not gossip)",
                    "Managed securely and confidentially"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700">
                  With Venovox, the process ensures compliance while providing meaningful insights for your hiring decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Our Reference Check Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How Our Reference Check Process Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  number: "1",
                  title: "Choose Your Reference Check Level",
                  description: "Tell us the role and seniority. We'll recommend a screening level that fits."
                },
                {
                  number: "2",
                  title: "We Contact Referees Professionally",
                  description: "We conduct structured calls or questionnaires (based on your chosen method) and capture consistent answers."
                },
                {
                  number: "3",
                  title: "You Receive an Employer-Ready Report",
                  description: "You'll get a clear summary with key takeaways—so hiring managers can decide fast."
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

      {/* Industries Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Who Uses Venovox Reference Checks in Malaysia?
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Reference checks are commonly used across these industries:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Finance and banking",
                "Technology and startups",
                "Logistics and supply chain",
                "Professional services",
                "Healthcare and pharmaceuticals",
                "Manufacturing",
                "Education",
                "HR and recruitment agencies",
                "Retail and hospitality",
                "Government suppliers and contract firms"
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Briefcase className="text-red-600 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{industry}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center text-gray-600 italic max-w-3xl mx-auto">
              <p>
                (Especially when the role includes access to money, data, vulnerable groups, client relationships, or leadership decisions.)
              </p>
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
                  description: "Local & international criminal history verification",
                  icon: ShieldAlert,
                  link: "/my-en/criminal-background-check"
                },
                {
                  title: "Education Verification",
                  description: "Degree, diploma and certificate authenticity checks",
                  icon: FileCheck,
                  link: "/my-en/education-verification"
                },
                {
                  title: "Employment Verification",
                  description: "Past employment history and role validation",
                  icon: Briefcase,
                  link: "/my-en/background-screening"
                },
                {
                  title: "Identity Verification",
                  description: "Right to work and identity authenticity checks",
                  icon: Users,
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
            faqs={referenceCheckFAQs}
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
              Ready to Run Reference Checks That Actually Help You Hire Better?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              If you want more than a tick-box process—Venovox can help you get real, usable insight.
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