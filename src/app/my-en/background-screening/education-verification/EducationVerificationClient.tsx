// EducationVerificationClient.tsx
"use client";

import { motion } from 'framer-motion';
import { Check, GraduationCap, ShieldAlert, FileCheck, Globe, Clock, Award, Users, Calendar, BookOpen, Briefcase, IdCard } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const educationVerificationFAQs = [
    {
        id: "faq-1",
        question: "How do employers verify education in Malaysia?",
        answer: "Employers usually verify education by confirming details directly with the institution or through an authorised verification process. The check typically confirms attendance/completion and the awarded qualification details."
    },
    {
        id: "faq-2",
        question: "How long does education verification take?",
        answer: "Common turnaround can be a few business days, but timing depends on the institution's responsiveness and whether the qualification is local or international. Some checks may take longer when manual confirmation is needed."
    },
    {
        id: "faq-3",
        question: "What documents are needed for an education verification check?",
        answer: "Usually, you'll need candidate identifiers plus the education details being claimed (institution, programme, year). In some cases, copies of certificates or transcripts may help prevent delays—especially for older records or overseas qualifications."
    },
    {
        id: "faq-4",
        question: "Can you verify overseas degrees and international qualifications?",
        answer: "Yes. Education verification can be done for international candidates and overseas credentials, though timelines can vary depending on the country and institution."
    },
    {
        id: "faq-5",
        question: "Are education background checks legal in Malaysia?",
        answer: "Background screening is generally allowed, but it should be handled with candidate consent and in line with PDPA requirements for personal data processing."
    },
    {
        id: "faq-6",
        question: "What happens if a candidate's education details don't match?",
        answer: "A mismatch doesn't automatically mean fraud—sometimes it's an admin issue, name variation, or incomplete studies. The key is that you'll see the discrepancy clearly, so you can request clarification or make a documented hiring decision."
    }
];

export default function EducationVerificationClient() {
    return (
        <main className="bg-white text-black">
            {/* Hero Banner */}
            <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-white">Education Verification Malaysia</span>
                    </h1>
                    <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
                        Confirm qualifications. Protect your hire. Move faster with confidence.
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
                            Degree Verification & Academic Credential Checks
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            A CV can look perfect. One false qualification can still slip through. Venovox helps employers verify education and academic qualifications so you can hire with clarity—not assumptions. We confirm whether a candidate's claimed degree, diploma, certificate, or professional training is real, and whether the details match what was declared.
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

            {/* Image Section 1 - Education Verification Definition */}
            <ImageTextSection
                title={<>What is Education Verification?</>}
                paragraphs={[
                    "Education verification is a key part of pre-employment screening. It checks that a candidate actually studied where they said they studied, completed the qualification they claimed, and the timelines make sense.",
                    "It's simple. You're not 'digging for dirt.' You're verifying facts that affect performance, safety, and compliance."
                ]}
                imageSrc="/education-verification/Education-verfication-check.png"
                imageAlt="Education verification process definition and importance"
                bgColor="white"
                imageFirst={false}
            />

            {/* What We Verify Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            What We Verify
                        </h2>
                        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                            Our education verification service can cover:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: GraduationCap,
                                    title: "University Degree Verification",
                                    description: "Verify local & overseas university degrees, confirming institution, programme, and award level authenticity."
                                },
                                {
                                    icon: Award,
                                    title: "Diploma & Certificate Review",
                                    description: "Authenticity review of diplomas, certificates and professional training credentials from recognized institutions."
                                },
                                {
                                    icon: Calendar,
                                    title: "Attendance & Completion Dates",
                                    description: "Confirm enrolment dates, graduation/completion dates, and study timelines match candidate claims."
                                },
                                {
                                    icon: BookOpen,
                                    title: "Field of Study & Major",
                                    description: "Verify the specific field of study, major, or specialization where institutional records provide this information."
                                },
                                {
                                    icon: FileCheck,
                                    title: "Professional Certifications",
                                    description: "Validate professional certifications and training credentials relevant to the candidate's role requirements."
                                },
                                {
                                    icon: Users,
                                    title: "Current Student Status",
                                    description: "For graduate hiring, confirm current enrolment status and expected completion dates for ongoing studies."
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
                        <div className="mt-12 text-center text-gray-600 italic max-w-4xl mx-auto">
                            <p>For candidates who are still studying, verification can confirm their current status and expected completion (useful for graduate hiring pipelines). Many providers structure results in "current student vs graduate" formats because employers need different proof for each.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Image Section 2 - Benefits of Education Checks */}
            <ImageTextSection
                title={<>Why Malaysian Employers Run Education Checks</>}
                paragraphs={[
                    "Because it saves you from the expensive kind of mistake. Education checks help you reduce resume fraud risk, protect regulated hiring standards, confirm minimum role requirements fast, and avoid internal escalation later ('Why didn't we check this?').",
                    "This matters even more for roles in finance, healthcare, education, technology, government supply chains, and any job tied to licensing or safety."
                ]}
                imageSrc="/education-verification/education-verification-check.jpeg"
                imageAlt="Benefits of education verification for Malaysian employers"
                bgColor="white"
                imageFirst={true}
            />
            {/* What You Receive Section with Image */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                            What You Receive
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Clear, actionable reports designed for confident hiring decisions
                        </p>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-600 p-3 rounded-lg mr-4">
                                            <FileCheck className="text-white w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Clear, Employer-Friendly Reporting
                                        </h3>
                                    </div>

                                    <p className="text-gray-700 mb-6 text-justify [text-justify:inter-word] hyphens-none">
                                        You get a clear, employer-friendly outcome—written for decision-making, not paperwork.
                                    </p>

                                    <div className="mb-8">
                                        <p className="text-gray-600 font-medium mb-4">Typical reporting includes:</p>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "Verified / Unable to verify / Discrepancy found",
                                                    description: "Clear status indicators for quick assessment"
                                                },
                                                {
                                                    title: "Verified institution + qualification details",
                                                    description: "Complete information on the educational institution"
                                                },
                                                {
                                                    title: "Relevant dates (attendance / completion)",
                                                    description: "Accurate timeline verification"
                                                },
                                                {
                                                    title: "Notes on mismatches",
                                                    description: "Detailed explanations for any discrepancies found"
                                                }
                                            ].map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <div className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-3 flex-shrink-0">
                                                        <Check className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                                        <p className="text-sm text-gray-600">{item.description}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column - Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative h-full"
                            >
                                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                    <div className="bg-white p-6">
                                        {/* Image caption */}
                                        <div className="mt-6 text-center">
                                            <p className="text-sm text-gray-600 italic">
                                                Sample of our clear, actionable education verification report format
                                            </p>
                                            <img
                                                src="/education-verification/authortiy-review.jpg"
                                                alt="Sample education verification report showing verified qualifications"
                                                className="rounded-xl shadow-lg w-full"
                                            />
                                        </div>
                                        <div className="bg-blue-50 border-1 border-blue-500 p-6 rounded-r mt-6">
                                            <p className="text-gray-700 italic">
                                                <span className="font-semibold">Fair & Documented:</span> If something doesn't match, we don't sensationalise it. We show the exact discrepancy so you can take a fair, documented next step.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-20"></div>
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
                            </motion.div>
                        </div>

                        {/* Additional Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-12 max-w-4xl mx-auto"
                        >
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: <FileCheck className="w-5 h-5" />,
                                        title: "Decision-Ready Format",
                                        description: "Reports structured for quick HR and hiring manager review"
                                    },
                                    {
                                        icon: <ShieldAlert className="w-5 h-5" />,
                                        title: "Compliance Ready",
                                        description: "All reports follow PDPA and data protection standards"
                                    },
                                    {
                                        icon: <Clock className="w-5 h-5" />,
                                        title: "Quick Turnaround",
                                        description: "Receive reports within 3-8 business days typically"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="text-center p-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-3">
                                            {feature.icon}
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {/* Turnaround Time & PDPA Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-red-50 border-1 border-red-600 p-6 rounded-lg h-full">
                                <div className="flex items-center mb-4">
                                    <Clock className="text-yellow-600 w-6 h-6 mr-3" />
                                    <h3 className="text-2xl font-bold text-gray-800">Turnaround Time</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Education verification timing can vary based on how quickly the institution responds and whether the credential is local or international.
                                </p>
                                <p className="text-gray-700 font-semibold">
                                    In the market, many education checks are often completed in around <span className="text-red-600">3–8 business days</span>, but some cases can take longer—especially when manual confirmation is required.
                                </p>
                                <p className="text-gray-700 mt-4">
                                    If you need faster outcomes for urgent hiring, we can advise on the best route based on the credential type.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-red-50 border-1 border-red-600 p-6 rounded-lg h-full">
                                <div className="flex items-center mb-4">
                                    <ShieldAlert className="text-blue-600 w-6 h-6 mr-3" />
                                    <h3 className="text-2xl font-bold text-gray-800">PDPA-Compliant & Consent-Led</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Education verification involves personal data. In Malaysia, background screening is generally permitted, but employers should obtain candidate consent and handle data under PDPA principles.
                                </p>
                                <p className="text-gray-700">
                                    Venovox follows secure handling practices and keeps the screening process professional, respectful, and role-relevant.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How the Process Works */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            How the Education Verification Process Works
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    number: "1",
                                    title: "Share Candidate Details (Securely)",
                                    description: "You submit candidate info via a secure workflow. We guide you on what's needed to avoid delays."
                                },
                                {
                                    number: "2",
                                    title: "Verification Starts",
                                    description: "We verify with relevant institutions, authorised records, or accepted validation pathways depending on the credential type."
                                },
                                {
                                    number: "3",
                                    title: "Receive a Clear Report",
                                    description: "Results are delivered in an easy-to-read format so HR and hiring managers can act quickly."
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

            {/* When to Use Education Verification */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            When to Use Education Verification
                        </h2>
                        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                            Education checks are especially useful when:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                "The role requires a specific qualification (degree, diploma, certification)",
                                "You're hiring fresh graduates or entry-level positions",
                                "You're hiring for regulated / compliance-heavy positions",
                                "The candidate studied overseas and you need clarity",
                                "Your hiring team wants consistent standards across departments",
                                "The position involves professional licensing requirements"
                            ].map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 p-6 rounded-lg flex items-start"
                                    whileHover={{ scale: 1.02 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{useCase}</span>
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
                                    title: "Criminal Record Check",
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
                                    title: "Employment Verification",
                                    description: "Past employment history and role validation",
                                    icon: Briefcase,
                                    link: "/my-en/background-screening"
                                },
                                {
                                    title: "Identity Verification",
                                    description: "Right to work and identity authenticity checks",
                                    icon: IdCard,
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
                        faqs={educationVerificationFAQs}
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
                            Ready to Verify Education with Confidence?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            If you're hiring for roles where qualifications matter, don't leave it to guesswork. Venovox delivers accurate, PDPA-compliant education verification in Malaysia for local and international hires.
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