"use client";

import { motion } from 'framer-motion';
import { Check, IdCard, ShieldAlert, Briefcase, GraduationCap, Users, Globe, CreditCard, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const backgroundScreeningFAQs = [
  {
    id: "faq-1",
    question: "How long do background checks take ?",
    answer: "The timeline depends on the type of verification. Most checks take between 2 to 7 working days, while international verifications may require more time."
  },
  {
    id: "faq-2",
    question: "Are background checks legal in Malaysia ?",
    answer: "Yes. As long as candidate consent is obtained and the process follows PDPA guidelines, background screening is fully legal and widely used by Malaysian employers."
  },
  {
    id: "faq-3",
    question: "Do you screen foreign candidates ?",
    answer: "Yes. We provide international criminal checks, employment verification, education confirmation and global sanctions screening."
  },
  {
    id: "faq-4",
    question: "What does a background check show ?",
    answer: "It may reveal identity information, work history, academic qualifications, criminal records, reference insights and compliance-related results depending on the checks selected."
  },
  {
    id: "faq-5",
    question: "Can I customise checks for different job roles ?",
    answer: "Absolutely. We create tailored screening packages for entry level, mid level and senior or high security roles."
  },
  {
    id: "faq-6",
    question: "Is your process fully online ?",
    answer: "Yes. Our platform allows employers and candidates to complete the entire screening process digitally, ensuring speed, accuracy and convenience."
  }
];

export default function BackgroundScreeningMalaysia() {
  return (
    <main className="bg-white text-black">
            <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-white">Background Screening Malaysia</span>
                        </h1>
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
              Background Screening Malaysia - Hire With Confidence
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              Our background screening services give Malaysian employers verified, accurate information to make secure hiring decisions at every level.
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

      {/* Image Section 1 - Professional Team Collaboration */}
      <ImageTextSection
        title={<>Trusted Background Screening for Malaysian Employers</>}
        paragraphs={[
          "Every hiring decision impacts your business. Venovox provides advanced pre employment screening solutions that help you verify candidates quickly and reliably, reducing risk and improving the quality of your workforce.",
          "Our screening services cover Malaysian and international candidates across all industries including finance, technology, logistics, professional services, education, healthcare, manufacturing and more.",
          "We follow strict PDPA data protection standards, ensuring every screening process is handled securely and responsibly."
        ]}
        imageSrc="/background-screening-malaysia/background-screening-team-collaboration.webp"
        imageAlt="Professional team collaboration for background screening"
        bgColor="white"
        imageFirst={false}
      />

      {/* Comprehensive Background Checks Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Comprehensive Background Checks for Malaysia
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: IdCard,
                  title: "Identity and Right to Work Verification",
                  description: (
                    <>
                      Confirm a candidate's identity and legal eligibility before you hire. Our process helps employers validate documents and work authorization early, reducing compliance risks through{" "}
                      <Link href="/my-en/background-screening/right-to-work-check" className="font-bold">
                        identity and right to work verification in Malaysia
                      </Link>.
                    </>
                  )
                },
                {
                  icon: ShieldAlert,
                  title: "Criminal Record Check (Local & International)",
                  description: (
                    <>
                      Identify criminal history that may be relevant to the role and level of responsibility. We support hiring decisions with verified insights through{" "}
                      <Link href="/my-en/background-screening/criminal-background-check" className="font-bold">
                        criminal background checks in Malaysia
                      </Link>{" "}
                      for local and international candidates.
                    </>
                  )
                },
                {
                  icon: Briefcase,
                  title: "Employment History Verification",
                  description: (
                    <>
                      Ensure a candidate's work experience aligns with what they claim on their CV. Our checks confirm job titles, employers, and tenure using structured{" "}
                      <Link href="/my-en/background-screening/employment-verification" className="font-bold">
                        employment verification in Malaysia
                      </Link>.
                    </>
                  )
                },
                {
                  icon: GraduationCap,
                  title: "Education & Academic Qualification Check",
                  description: (
                    <>
                      Verify academic credentials and professional certifications with confidence. This service helps employers confirm degrees and qualifications through trusted{" "}
                      <Link href="/my-en/background-screening/education-verification" className="font-bold">
                        education verification services in Malaysia
                      </Link>.
                    </>
                  )
                },
                {
                  icon: Users,
                  title: "Reference Check",
                  description: (
                    <>
                      Gain practical insight into a candidate's performance, work ethic, and reliability. We conduct structured interviews as part of our{" "}
                      <Link href="/my-en/background-screening/reference-check" className="font-bold">
                        professional reference checks in Malaysia
                      </Link>{" "}
                      for informed hiring decisions.
                    </>
                  )
                },
                {
                  icon: Globe,
                  title: "Global Sanctions & Watchlist Screening",
                  description: "Reduce regulatory and reputational risk by screening candidates against international databases. This includes PEPs and restricted entities covered under global sanctions and watchlist screening."
                },
                {
                  icon: CreditCard,
                  title: "Credit Check (Role Dependent)",
                  description: (
                    <>
                      For roles involving financial responsibility or access to sensitive assets, credit checks provide additional risk context. Employers use{" "}
                      <Link href="/my-en/background-screening/credit-check-for-employment" className="font-bold">
                        employment credit checks in Malaysia
                      </Link>{" "}
                      where legally appropriate and role relevant.
                    </>
                  )
                }
              ].map((check, index) => {
                const IconComponent = check.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="bg-red-600 p-3 rounded-lg w-fit mb-4">
                      <IconComponent className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {check.title}
                    </h3>
                    <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                      {check.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section 2 - Background Check Process */}
      <ImageTextSection
        title={<>Accurate and Compliant Background Verification</>}
        paragraphs={[
          "Our comprehensive screening process ensures every check is conducted with precision and in full compliance with Malaysian regulations. We leverage advanced technology and local expertise to deliver reliable results.",
          "From criminal record checks to employment verification, our team handles each step with meticulous attention to detail, providing you with the information you need to make confident hiring decisions."
        ]}
        imageSrc="/background-screening-malaysia/background-screening-process.webp"
        imageAlt="Background screening process and verification"
        bgColor="white"
        imageFirst={true}
      />

      {/* Why Malaysian Companies Choose Venovox */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Malaysian Companies Choose Venovox
            </h2>
            <div className="overflow-x-auto border-2 border-red-600 rounded-xl">
           <table className="w-full border-collapse bg-white   overflow-hidden">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Benefit</th>
                      <th className="px-6 py-4 font-semibold text-center">Details</th>
                    </tr>
                  </thead>
                <tbody>
                  <tr className="border-b border-gray-200 ">
                    <td className="px-6 py-4 font-semibold text-gray-900">Verified Accuracy</td>
                    <td className="px-6 py-4 text-gray-700 text-center hyphens-none">
                      Every result is validated through trusted local and international data sources.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 ">
                    <td className="px-6 py-4 font-semibold text-gray-900">Advanced Technology</td>
                    <td className="px-6 py-4 text-gray-700 text-center hyphens-none">
                      Streamlined automation and digital verification reduce delays and improve efficiency.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 ">
                    <td className="px-6 py-4 font-semibold text-gray-900">Fast Turnaround Time</td>
                    <td className="px-6 py-4 text-gray-700 text-center hyphens-none">
                      We deliver clear, actionable reports quickly so you can make hiring decisions without slowing down your recruitment process.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 ">
                    <td className="px-6 py-4 font-semibold text-gray-900">Complete PDPA Compliance</td>
                    <td className="px-6 py-4 text-gray-700 text-center hyphens-none">
                      Our processes follow Malaysia's Personal Data Protection Act and best practices in secure data management.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 ">
                    <td className="px-6 py-4 font-semibold text-gray-900">Custom Screening Packages</td>
                    <td className="px-6 py-4 text-gray-700 text-center hyphens-none">
                      Choose individual checks or build tailored screening bundles for different job levels.
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-6 py-4 font-semibold text-gray-900">Local and Regional Support</td>
                    <td className="px-6 py-4 text-gray-700 text-center hyphens-none">
                      A dedicated support team for employers and candidates, ensuring a smooth screening experience from start to finish.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section 3 - Professional Office Work */}
      <ImageTextSection
        title={<>Expert Screening Services for Malaysian Businesses</>}
        paragraphs={[
          "Our experienced team combines local knowledge with international best practices to deliver comprehensive background screening solutions. We understand the unique requirements of Malaysian employers and the importance of compliance with local regulations.",
          "With dedicated support and streamlined processes, we make background screening simple and efficient, allowing you to focus on building your team with confidence."
        ]}
        imageSrc="/background-screening-malaysia/background-screening-professional-work.webp"
        imageAlt="Professional background screening services"
        bgColor="white"
        imageFirst={false}
      />

      {/* How Our Background Screening Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How Our Background Screening Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Choose Your Checks</h3>
                <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                  Select the background checks your role requires and submit your candidate information through our secure portal.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Verification Begins</h3>
                <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                  We conduct accurate, compliant verification with relevant institutions, employers and authorities.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Receive Your Report</h3>
                <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                  Detailed, easy to read results delivered online to support confident hiring decisions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section 4 - Team Collaboration */}
      <ImageTextSection
        title={<>Partnering with Malaysian Employers for Success</>}
        paragraphs={[
          "We work closely with HR teams and hiring managers across Malaysia to understand their unique screening needs. Our collaborative approach ensures that our services align perfectly with your recruitment process and organizational requirements.",
          "Whether you're screening for entry-level positions or executive roles, our flexible solutions adapt to your needs, providing the right level of verification at the right time."
        ]}
        imageSrc="/background-screening-malaysia/background-screening-team-partnership.webp"
        imageAlt="Team collaboration for background screening"
        bgColor="white"
        imageFirst={true}
      />

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Industries We Serve in Malaysia
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Our background screening solutions are trusted by organisations in:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
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
                  <Check className="text-red-600 w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <FAQSection
            faqs={backgroundScreeningFAQs}
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
              Strengthen Every Hiring Decision
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
              Make smarter, safer and more confident hiring choices with Venovox background screening services in Malaysia.
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
