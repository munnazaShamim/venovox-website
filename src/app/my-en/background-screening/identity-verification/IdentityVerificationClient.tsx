// IdentityVerificationClient.tsx
"use client";

import { motion } from 'framer-motion';
import { Check, IdCard, ShieldAlert, FileCheck, Globe, Clock, Award, Users, Calendar, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const identityVerificationFAQs = [
    {
        id: "faq-1",
        question: "What is identity verification for employment in Malaysia?",
        answer: "It is a screening step that confirms a candidate's identity details match their government-issued ID, so the employer can proceed with background checks accurately."
    },
    {
        id: "faq-2",
        question: "What documents are used for identity verification in Malaysia?",
        answer: "For Malaysian citizens, MyKad is commonly used. For foreign nationals, a passport is typically used, and additional immigration documents may be required depending on eligibility needs."
    },
    {
        id: "faq-3",
        question: "Is identity verification required before a background check?",
        answer: "It is not always legally 'required' in a single rule, but it is widely treated as a best-practice starting point because it makes all later checks more accurate."
    },
    {
        id: "faq-4",
        question: "How does PDPA affect identity verification in Malaysia?",
        answer: "PDPA requires written notice and sets expectations around consent, purpose limitation, and handling personal data appropriately during processing."
    },
    {
        id: "faq-5",
        question: "Can identity verification be done remotely?",
        answer: "Yes. Many verification workflows use a document upload plus a selfie or face match step to support remote verification in a controlled way."
    },
    {
        id: "faq-6",
        question: "Can you verify foreign workers for Malaysian hiring?",
        answer: "Yes. Identity verification can be done for foreign nationals, and it is commonly paired with right-to-work or immigration eligibility checks depending on the role and employer requirements."
    },
    {
        id: "faq-7",
        question: "What if the candidate's details do not match their ID?",
        answer: "We flag the mismatch clearly so HR can request clarification or supporting documents before proceeding. This helps prevent onboarding delays and misfiled screening records."
    },
    {
        id: "faq-8",
        question: "Is identity verification the same as e-KYC?",
        answer: "They are related concepts. e-KYC is typically designed for regulated onboarding (like financial services) using digital identity proofing and sometimes biometric checks. Employment identity verification focuses on confirming the candidate's identity for hiring and screening accuracy."
    }
];

export default function IdentityVerificationClient() {
    return (
        <main className="bg-white text-black">
            {/* Hero Banner */}
            <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-white">Identity Verification Malaysia</span>
                    </h1>
                    <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
                        Confirm identity. Protect your screening. Hire with confidence.
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
                            ID Verification for Employment & Candidate Authentication
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            Before you check qualifications, employment history, or criminal records, you need one thing to be true. That the person you are screening is the person you are hiring.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            Venovox provides identity verification in Malaysia so HR teams can confirm candidate identity early, reduce impersonation risk, and keep the rest of the background screening process accurate and defensible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/my-en/contact-us/">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-transform"
                                >
                                    Request a Quote
                                </motion.button>
                            </Link>
                            <motion.button
                                onClick={openWhatsApp}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-black border-2 border-red-600 font-semibold px-8 py-3 rounded-full transition-transform"
                            >
                                Talk to a Screening Specialist
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Image Section 1 - Identity Verification Definition */}
            <ImageTextSection
                title={<>What is Identity Verification?</>}
                paragraphs={[
                    "Identity verification (also called ID verification or an identity check for employment) is the process of confirming that a candidate's identity details match their government-issued ID and supporting information.",
                    "It is widely considered a foundational step because it helps prevent errors and false matches in later checks. Many screening workflows explicitly recommend verifying identity before running other background checks."
                ]}
                imageSrc="/Identity Check Verfication/cfirst-verification.jpg"
                imageAlt="Identity verification process definition and importance"
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
                            We keep it practical and hiring-focused. No fluff, no vague scoring.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: IdCard,
                                    title: "ID Document Validation",
                                    description: "Review provided ID documents (MyKad, passport) to confirm consistency, completeness, and readability of critical fields."
                                },
                                {
                                    icon: FileCheck,
                                    title: "Personal Details Match",
                                    description: "Check whether candidate's submitted details align with the ID for name spelling, date of birth, and basic identifiers."
                                },
                                {
                                    icon: Users,
                                    title: "Photo & Person Match",
                                    description: "For remote hiring, include selfie or face comparison to confirm ID holder is the applicant (common in regulated digital flows)."
                                },
                                {
                                    icon: ShieldAlert,
                                    title: "Identity Risk Red Flags",
                                    description: "Flag issues like mismatched name formats, unclear ID images, or conflicting personal details that require clarification."
                                },
                                {
                                    icon: Globe,
                                    title: "MyKad Verification",
                                    description: "Specific verification for Malaysian citizens using MyKad as the primary identity document for HR administration."
                                },
                                {
                                    icon: Award,
                                    title: "Foreign Worker ID Checks",
                                    description: "Identity verification for foreign nationals centered on passport details and relevant immigration documents."
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

            {/* Image Section 2 - Why Identity Verification Matters */}
            <ImageTextSection
                title={<>Why Identity Verification Matters for Hiring in Malaysia</>}
                paragraphs={[
                    "Identity issues are rarely obvious in interviews. They show up later, when something breaks. Identity verification helps you reduce impersonation and identity fraud risk during hiring, avoid background checks being run against the wrong person, confirm key identifiers before other checks, and keep screening consistent across departments.",
                    "Malaysia employers commonly rely on NRIC and other ID details for HR processes, so getting identity right at the start protects everything downstream."
                ]}
                imageSrc="/Identity Check Verfication/identity verification malaysia .jpeg"
                imageAlt="Importance of identity verification for Malaysian employers"
                bgColor="white"
                imageFirst={true}
            />

            {/* Malaysia-Specific ID Verification Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Malaysia-Specific Identity Verification
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            {/* Malaysian Citizens */}
                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                                        <IdCard className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Malaysian Citizens
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Check className="text-green-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700">MyKad as primary identity document</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Check className="text-green-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700">NRIC details tied to HR administration and fraud prevention</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Check className="text-green-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700">Standard practice to verify at the start of screening</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Foreign Nationals */}
                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                                        <Globe className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Foreign Nationals Working in Malaysia
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Check className="text-blue-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700">Passport details as primary identification</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Check className="text-blue-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700">Relevant immigration documents for employment eligibility</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Check className="text-blue-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700">Alignment with right-to-work verification and compliance</p>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-gray-700 italic">
                                        Financial institutions in Malaysia commonly require documents like a valid employment pass or visa for foreign individuals as part of identity verification.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Identity vs Right-to-Work Comparison */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold mb-6 text-center">
                                Identity Verification vs Right-to-Work Check
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="text-center p-6 bg-red-50 rounded-lg">
                                    <div className="bg-red-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <IdCard className="text-white w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-3">Identity Verification</h4>
                                    <p className="text-gray-700">
                                        Confirms <strong>who the person is</strong> (identity and matching details)
                                    </p>
                                </div>
                                <div className="text-center p-6 bg-green-50 rounded-lg">
                                    <div className="bg-green-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <FileCheck className="text-white w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-3">Right-to-Work Check</h4>
                                    <p className="text-gray-700">
                                        Confirms <strong>whether the person is authorized</strong> to work in Malaysia
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-lg text-gray-700 font-semibold">
                                    For the best hiring coverage, most teams run identity verification first, then proceed to right-to-work and the rest of the screening package.
                                </p>
                                <img src="/Identity Check Verfication/identity verification malaysia 1.jpg" alt="Identity vs Right-to-Work Comparison" className="mx-auto mt-6 rounded-lg shadow-md" width={600} height={400} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Identity Verification Process */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Our Identity Verification Process
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    number: "1",
                                    title: "Scope Selection",
                                    description: "Choose identity verification as standalone or part of broader screening package"
                                },
                                {
                                    number: "2",
                                    title: "Consent & Data Notice",
                                    description: "Obtain consent and follow PDPA notice expectations before processing"
                                },
                                {
                                    number: "3",
                                    title: "Document Collection",
                                    description: "Candidate provides required ID documents, with selfie evidence for remote workflows"
                                },
                                {
                                    number: "4",
                                    title: "Verification & Reporting",
                                    description: "Validate, match details, and document outcomes clearly"
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
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

            {/* What You Receive Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            What You Receive
                        </h2>

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
                                            Clear Verification Report
                                        </h3>
                                    </div>

                                    <p className="text-gray-700 mb-6 text-justify [text-justify:inter-word] hyphens-none">
                                        We validate, match details, and document outcomes clearly so you can make informed hiring decisions.
                                    </p>

                                    <div className="mb-8">
                                        <p className="text-gray-600 font-medium mb-4">Report includes:</p>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "ID Document Validation Status",
                                                    description: "Confirmation of document authenticity and completeness"
                                                },
                                                {
                                                    title: "Personal Details Match Results",
                                                    description: "Clear indication of matched or mismatched information"
                                                },
                                                {
                                                    title: "Identity Verification Outcome",
                                                    description: "Verified / Requires Clarification / Unable to Verify status"
                                                },
                                                {
                                                    title: "Risk Flags & Recommendations",
                                                    description: "Documented issues and suggested next steps"
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

                            {/* Right Column - PDPA Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative h-full"
                            >
                                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                    <div className="bg-red-50 border-1 border-red-600 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <ShieldAlert className="text-blue-600 w-6 h-6 mr-3" />
                                            <h3 className="text-2xl font-bold text-gray-800">PDPA-Friendly by Design</h3>
                                        </div>
                                        <p className="text-gray-700 mb-4">
                                            Malaysia's PDPA sets expectations around how personal data is collected and processed.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-2 rounded mr-3">
                                                    <Check className="text-blue-600 w-4 h-4" />
                                                </div>
                                                <p className="text-gray-700">Written notice requirements to candidates</p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-2 rounded mr-3">
                                                    <Check className="text-blue-600 w-4 h-4" />
                                                </div>
                                                <p className="text-gray-700">Privacy notices in Bahasa Malaysia and English</p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-2 rounded mr-3">
                                                    <Check className="text-blue-600 w-4 h-4" />
                                                </div>
                                                <p className="text-gray-700">Purpose limitation and relevance principles</p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-2 rounded mr-3">
                                                    <Check className="text-blue-600 w-4 h-4" />
                                                </div>
                                                <p className="text-gray-700">Secure handling practices throughout</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <p className="text-gray-700 italic">
                                                Venovox keeps identity verification aligned with PDPA requirements so employers can screen confidently without collecting unnecessary data.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Requirements & When to Use */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Requirements */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                    What You Need to Provide
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Candidate full name and basic identifiers",
                                        "Clear copy/photo of required ID document (MyKad or passport)",
                                        "For foreign nationals: relevant immigration or employment pass documentation",
                                        "Candidate consent and your PDPA notice process"
                                    ].map((requirement, index) => (
                                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-3 flex-shrink-0">
                                                <span className="font-semibold">{index + 1}</span>
                                            </div>
                                            <span className="text-gray-700">{requirement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* When to Use */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                    When to Run Identity Verification
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Early in the hiring funnel, before deeper checks",
                                        "Immediately after shortlisted candidates submit documents",
                                        "Before onboarding setup, payroll, and access provisioning",
                                        "For all regulated sector hiring (finance, healthcare, etc.)",
                                        "When hiring remote or overseas candidates",
                                        "For roles with access to sensitive information or assets"
                                    ].map((timing, index) => (
                                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                            <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{timing}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-gray-700 italic">
                                        Many candidate-facing hiring guides also mention that background checks may verify identity and credentials, so setting expectations early reduces friction.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                            Related Screening Services
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Right-to-Work Check",
                                    description: "Verify work authorization and immigration compliance in Malaysia",
                                    icon: FileCheck,
                                    link: "/my-en/background-screening"
                                },
                                {
                                    title: "Employment Verification",
                                    description: "Confirm past employment history, job titles and tenure",
                                    icon: Briefcase,
                                    link: "/my-en/employment-verification"
                                },
                                {
                                    title: "Criminal Record Check",
                                    description: "Local & international criminal history verification",
                                    icon: ShieldAlert,
                                    link: "/my-en/criminal-background-check"
                                },
                                {
                                    title: "Education Verification",
                                    description: "Degree, diploma and academic credential validation",
                                    icon: GraduationCap,
                                    link: "/my-en/education-verification"
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
                        faqs={identityVerificationFAQs}
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
                            Ready to Run Identity Verification in Malaysia?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            If you want a clean, PDPA-aware identity verification service in Malaysia that fits real HR workflows, Venovox can help you verify candidates fast and report results clearly. Verify a candidate's identity in Malaysia with a PDPA-aware process that validates MyKad or passport details, matches personal information, and flags identity risks before you hire.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/my-en/contact-us/">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-transform"
                                >
                                    Request a Quote
                                </motion.button>
                            </Link>
                            <motion.button
                                onClick={openWhatsApp}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-black border-2 border-red-600 font-semibold px-8 py-3 rounded-full transition-transform"
                            >
                                Talk to a Screening Specialist
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}