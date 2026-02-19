"use client";

import { motion } from 'framer-motion';
import { Check, Briefcase, ShieldAlert, FileCheck, Globe, Clock, Award, Users, Calendar, BookOpen, GraduationCap, IdCard } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const employmentVerificationFAQs = [
    {
        id: "faq-1",
        question: "How long does employment verification take in Malaysia?",
        answer: "A common range is 3 to 5 business days, but it can take longer if a previous employer is slow to respond or if multiple employers need to be contacted."
    },
    {
        id: "faq-2",
        question: "Is employment verification legal in Malaysia?",
        answer: "Employment verification is commonly used as part of hiring, but employers must comply with Malaysia's Personal Data Protection Act (PDPA) 2010 and follow notice and consent requirements."
    },
    {
        id: "faq-3",
        question: "Do we need candidate consent before running an employment check?",
        answer: "In practice, yes. PDPA principles include consent and written notice requirements, and many screening providers also treat a signed consent letter as mandatory before verification begins."
    },
    {
        id: "faq-4",
        question: "What details can a previous employer confirm?",
        answer: "It depends on the employer's policy. Many will confirm basic facts like job title and employment dates, and some may share additional details such as reason for leaving where appropriate."
    },
    {
        id: "faq-5",
        question: "What documents are usually required for employment verification?",
        answer: "Common documents include a candidate's ID details, CV, and supporting employment documents where needed, plus the signed consent. Requirements vary by package and employer response."
    },
    {
        id: "faq-6",
        question: "What is the difference between employment verification and a reference check?",
        answer: "Employment verification confirms factual employment history. Reference checks focus on performance and work behavior insights."
    },
    {
        id: "faq-7",
        question: "Can you verify employment for foreign candidates or overseas employers?",
        answer: "Yes. International employment verification is possible, but response times vary by country and employer availability. If speed matters, supporting documents can help validate details faster."
    },
    {
        id: "faq-8",
        question: "Can a background check fail because of employment history?",
        answer: "Employment history issues usually show up as mismatches, gaps, or unverifiable claims. A good hiring process allows candidates to clarify inconsistencies before decisions are made."
    },
    {
        id: "faq-9",
        question: "Do some industries require stricter employment verification?",
        answer: "Yes. In finance and insurance, employee screening and reference workflows may be more structured, including specific consent and reference template requirements in practice."
    }
];

export default function EmploymentVerificationClient() {
    return (
        <main className="bg-white text-black">
            {/* Hero Banner */}
            <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-white">Employment Verification Malaysia</span>
                    </h1>
                    <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
                        Confirm work history. Protect your hire. Move faster with confidence.
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
                            Employment History Check & Work Experience Verification
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            A CV can look perfect and still be wrong in the places that matter most: job title, tenure, and what the person actually did day to day. Venovox helps Malaysian employers validate employment history with a clear, structured employment verification process.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            We confirm the details that protect your hiring decisions, reduce onboarding surprises, and keep your recruitment moving without turning screening into a slow, messy side project. If you are hiring at scale, filling sensitive roles, or simply want peace of mind before you issue an offer, employment verification is one of the most practical checks you can run.
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
                                className="bg-white text-black border-1 border-red-600 font-semibold px-8 py-3 rounded-full transition-transform"
                            >
                                Speak with a Screening Specialist
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Image Section 1 - Employment Verification Definition */}
            <ImageTextSection
                title={<>What is Employment Verification?</>}
                paragraphs={[
                    "Employment verification (also called employment history verification or work experience verification) is the process of confirming a candidate's past employment details with relevant sources, typically a previous employer or authorized representative.",
                    "In Malaysia, this check is commonly used as part of broader pre-employment screening and often focuses on factual confirmation, such as company name and employment status, job title and role, employment dates and tenure, and reason for leaving (where available)."
                ]}
                imageSrc="/Employment Verification Malaysia/employment-verification-malaysia (1).jpg"
                imageAlt="Employment verification process definition and importance"
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
                            Every company replies differently, so we structure our employment verification to capture what matters and report it in a way HR can use immediately.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Briefcase,
                                    title: "Previous Employer Verification",
                                    description: "Confirm company name, business identity, and employment status (employed, resigned, terminated, contract ended)."
                                },
                                {
                                    icon: Award,
                                    title: "Job Title & Department",
                                    description: "Validate the exact job title, department, and role as recorded by the previous employer."
                                },
                                {
                                    icon: Calendar,
                                    title: "Employment Dates & Tenure",
                                    description: "Verify start date, end date, current employment status, and exact length of service."
                                },
                                {
                                    icon: BookOpen,
                                    title: "Employment Type",
                                    description: "Confirm whether the employment was full-time, part-time, contract, or temporary."
                                },
                                {
                                    icon: FileCheck,
                                    title: "Reason for Leaving",
                                    description: "Document the reason for departure where the employer is willing and permitted to share this information."
                                },
                                {
                                    icon: Users,
                                    title: "Reporting Line & Team Context",
                                    description: "Optional validation of reporting structure and team context for more detailed role verification."
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
                            <p>For certain roles, employers may request additional validation such as responsibilities summary or rehire eligibility notes. We keep the check focused and job-relevant. Under Malaysia's PDPA principles, data should be adequate and not excessive for the purpose.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Image Section 2 - Benefits of Employment Checks */}
            <ImageTextSection
                title={<>Why Malaysian Employers Use Employment Verification</>}
                paragraphs={[
                    "Employment verification is not about catching people out. It is about removing avoidable risk. Teams use it to validate core CV claims before final approval, reduce time lost on mismatched hires, support compliance hiring for regulated or high-trust roles, and create consistent screening standards across departments.",
                    "In some sectors, structured employee screening and reference processes are taken especially seriously. For example, banks and insurers may ask for employment references and related documentation as part of employee screening requirements."
                ]}
                imageSrc="/Employment Verification Malaysia/employment-verification-malaysia (1).avif"
                imageAlt="Benefits of employment verification for Malaysian employers"
                bgColor="white"
                imageFirst={true}
            />

            {/* Employment Verification vs Reference Checks vs COE */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Understanding the Differences
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: FileCheck,
                                    title: "Employment Verification",
                                    description: "Confirms factual employment details (dates, title, employer)",
                                    color: "bg-red-600"
                                },
                                {
                                    icon: Users,
                                    title: "Reference Check",
                                    description: "Seeks qualitative insight (work style, strengths, performance)",
                                    color: "bg-blue-600"
                                },
                                {
                                    icon: Briefcase,
                                    title: "Certificate of Employment (COE)",
                                    description: "Document employers issue to confirm employment facts for loans, rentals, or job moves",
                                    color: "bg-green-600"
                                }
                            ].map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.2 }}
                                    >
                                        <div className={`${item.color} p-4 rounded-lg w-fit mb-6`}>
                                            <IconComponent className="text-white w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                                            {item.description}
                                        </p>
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <p className="text-sm text-gray-600 italic">
                                                {index === 0 ? "Focus: Facts" : index === 1 ? "Focus: Insights" : "Focus: Documentation"}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="mt-12 text-center max-w-3xl mx-auto">
                            <p className="text-lg text-gray-700">
                                <span className="font-bold">Important:</span> If you want both facts and real-world insight, combine employment verification + reference checks for a complete picture.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

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
                                        You receive a concise report that is easy to read and easy to share internally, showing what was confirmed and what needs clarification.
                                    </p>

                                    <div className="mb-8">
                                        <p className="text-gray-600 font-medium mb-4">Typical reporting includes:</p>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "Verified employer & employment status",
                                                    description: "Clear confirmation of previous employment relationship"
                                                },
                                                {
                                                    title: "Validated job title & department",
                                                    description: "Role verification against employer records"
                                                },
                                                {
                                                    title: "Confirmed employment dates & tenure",
                                                    description: "Exact timeline validation"
                                                },
                                                {
                                                    title: "Documented discrepancies or unverifiable claims",
                                                    description: "Clear flags for any inconsistencies found"
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
                                                Sample of our clear, actionable employment verification report format
                                            </p>
                                            <img
                                                src="/Employment Verification Malaysia/employment-verification-malaysia (2).jpg"
                                                alt="Sample employment verification report showing verified work history"
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
                                        title: "PDPA Compliant",
                                        description: "All reports follow PDPA and data protection standards"
                                    },
                                    {
                                        icon: <Clock className="w-5 h-5" />,
                                        title: "Quick Turnaround",
                                        description: "Receive reports within 3-5 business days typically"
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

            {/* How the Process Works */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            How the Employment Verification Process Works
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    number: "1",
                                    title: "Choose Scope",
                                    description: "Pick employment verification as standalone or part of broader background screening package"
                                },
                                {
                                    number: "2",
                                    title: "Collect Consent & Details",
                                    description: "Start only after candidate provides appropriate consent and required details"
                                },
                                {
                                    number: "3",
                                    title: "Verification",
                                    description: "Contact relevant employer channels and document confirmed details"
                                },
                                {
                                    number: "4",
                                    title: "Clear Reporting",
                                    description: "Receive concise report that's easy to read and share internally"
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

            {/* Turnaround Time & PDPA Section */}
            <section className="py-20 px-6 bg-gray-50">
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
                                    Timelines depend on how quickly a previous employer responds. As a reference point, many screening providers quote around 3 to 5 business days for standard checks.
                                </p>
                                <p className="text-gray-700 font-semibold">
                                    Broader background checks can take around <span className="text-red-600">a week or longer</span>, especially if employers or institutions are hard to reach.
                                </p>
                                <p className="text-gray-700 mt-4">
                                    If you have urgent hiring, we can advise on the fastest workable approach without cutting corners.
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
                                    <h3 className="text-2xl font-bold text-gray-800">PDPA Compliance & Candidate Experience</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Employment verification is personal. Doing it properly protects both the employer and the candidate. Venovox aligns screening with core PDPA requirements.
                                </p>
                                <ul className="text-gray-700 list-disc pl-5 space-y-2">
                                    <li>Consent-based processing of personal data</li>
                                    <li>Written notice in Bahasa Malaysia and English</li>
                                    <li>Purpose limitation and relevance</li>
                                    <li>Secure handling practices</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* When to Use Employment Verification */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            When to Run Employment Verification
                        </h2>
                        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                            Most HR teams run employment verification at these key stages:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                "After shortlisting and before final offer",
                                "After conditional offer and before onboarding completion",
                                "For roles requiring minimum experience levels",
                                "When hiring for regulated or high-trust positions",
                                "For senior or executive level appointments",
                                "When consistency across departments is needed",
                                "For roles with professional licensing requirements",
                                "When candidate has gaps in employment history",
                                "For international hires with overseas work experience"
                            ].map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 p-6 rounded-lg flex items-start"
                                    whileHover={{ scale: 1.02 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{useCase}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-12 text-center max-w-3xl mx-auto">
                            <p className="text-gray-600 italic">
                                Candidate communication matters here. Job seekers are often advised that employment history may be verified, and delays can happen if employers cannot be reached.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Common Challenges Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Common Challenges & How We Handle Them
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    challenge: "Former employer does not respond",
                                    solution: "We document attempts, use alternative channels where appropriate, and report outcomes clearly so you can decide next steps."
                                },
                                {
                                    challenge: "Company has strict disclosure policies",
                                    solution: "Many employers will only confirm dates and title. That is still valuable. We design the report to make limited confirmation useful."
                                },
                                {
                                    challenge: "Candidate worked in multiple countries",
                                    solution: "Employment verification can be done for overseas employers too, with realistic expectations on timing and data availability."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 rounded-xl shadow-lg"
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                >
                                    <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                                        !
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-800">{item.challenge}</h3>
                                    <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                                        {item.solution}
                                    </p>
                                </motion.div>
                            ))}
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
                                    title: "Reference Check",
                                    description: "Professional referee verification and qualitative interviews",
                                    icon: Users,
                                    link: "/my-en/reference-check"
                                },
                                {
                                    title: "Education Verification",
                                    description: "Degree, diploma and academic credential validation",
                                    icon: GraduationCap,
                                    link: "/my-en/education-verification"
                                },
                                {
                                    title: "Criminal Record Check",
                                    description: "Local & international criminal history verification",
                                    icon: ShieldAlert,
                                    link: "/my-en/criminal-background-check"
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
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <FAQSection
                        faqs={employmentVerificationFAQs}
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
                            Ready to Verify Employment History with Confidence?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            If you are hiring in Malaysia and want employment verification that is clear, compliant, and built for real HR workflows, Venovox can help. Verify employment history in Malaysia with a PDPA-compliant process that confirms previous employer details, job title, and tenure so you can hire with confidence.
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
                                className="bg-white text-black border-1 border-red-600 font-semibold px-8 py-3 rounded-full transition-transform"
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