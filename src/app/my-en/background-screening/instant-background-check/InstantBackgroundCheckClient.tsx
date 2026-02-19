// InstantBackgroundCheckClient.tsx
"use client";

import { motion } from 'framer-motion';
import { Check, Zap, ShieldAlert, FileCheck, Globe, Clock, Award, Users, Calendar, BookOpen, GraduationCap, IdCard, Briefcase } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const instantBackgroundCheckFAQs = [
    {
        id: "faq-1",
        question: "What does an instant background check include?",
        answer: "Instant checks usually include screening steps that can return quickly using digital sources, such as identity validation and watchlist screening. Deeper verifications like employment history often require manual confirmation and take longer."
    },
    {
        id: "faq-2",
        question: "How fast is an instant background check in Malaysia?",
        answer: "Some checks can return within minutes or hours, while others take days depending on what must be verified and whether third parties need to respond."
    },
    {
        id: "faq-3",
        question: "Can you do a background check online?",
        answer: "Yes, many parts of screening can be done online, especially when candidates can submit details and documents digitally. However, some verification steps still depend on employer or institution responses."
    },
    {
        id: "faq-4",
        question: "How long do pre employment background checks usually take?",
        answer: "Many providers cite averages around 3 to 5 days, while some Malaysia-focused providers cite 3 to 10 business days depending on services selected."
    },
    {
        id: "faq-5",
        question: "Why do employment verifications take longer?",
        answer: "Employment verification often requires contacting previous employers. The timeline depends on how many employers must be checked and how quickly they respond."
    },
    {
        id: "faq-6",
        question: "Is instant background screening legal in Malaysia?",
        answer: "Employers can conduct screening, but they should comply with PDPA expectations around notice, purpose, and handling of personal data. Many Malaysian organizations include background checks in their PDPA notices for job applicants."
    },
    {
        id: "faq-7",
        question: "What if I need results urgently for a job offer?",
        answer: "A good approach is to run instant checks immediately for early risk signals, and start verification checks in parallel for final confirmation. This supports faster decisions without skipping due diligence."
    },
    {
        id: "faq-8",
        question: "Does an instant background check replace a full background screening?",
        answer: "No. Instant checks are best used as an early layer. Full screening still matters for roles requiring confirmed employment, education, criminal record checks, or compliance verification."
    }
];

export default function InstantBackgroundCheckClient() {
    return (
        <main className="bg-white text-black">
            {/* Hero Banner */}
            <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-white">Instant Background Check Malaysia</span>
                    </h1>
                    <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
                        Fast pre-employment screening with clear timelines and structured workflows
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
                            Fast Pre Employment Screening & Express Background Checks
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            Hiring moves fast. Your risk checks should keep up. Venovox provides instant background checks in Malaysia to help employers get early screening signals quickly, then expand into deeper verification when needed.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            It is built for real hiring workflows: shortlist today, decide faster, and still keep the process structured and defensible. This page is for teams who want speed, but do not want guesswork.
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

            {/* Image Section 1 - What is Instant Background Check */}
            <ImageTextSection
                title={<>What is an Instant Background Check?</>}
                paragraphs={[
                    "An instant background check is a rapid pre employment screening step that returns certain results quickly when the data source is available digitally and the check does not depend on third-party responses.",
                    "Some checks can be returned in minutes or within hours, while others take days or weeks depending on what must be verified and who needs to respond. In simple terms: Instant checks are best for fast risk signals and early validation. Verification checks confirm facts with employers, institutions, or authorities and usually take longer."
                ]}
                imageSrc="/instant-background-check.webp"
                imageAlt="Instant background check process definition and benefits"
                bgColor="white"
                imageFirst={false}
            />

            {/* What It Can and Cannot Do */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            What an Instant Check Can and Cannot Do
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* What it can do well */}
                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-green-600 p-3 rounded-lg mr-4">
                                        <Check className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        What It Can Do Well
                                    </h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    Instant screening is great for:
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Early risk flags for urgent hires",
                                        "High-volume recruitment where you need a quick first filter",
                                        "Contractor onboarding where timing matters",
                                        "Hiring teams who want fast insight before committing time to deeper checks"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start p-3 bg-green-50 rounded-lg">
                                            <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* What it cannot promise */}
                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-yellow-600 p-3 rounded-lg mr-4">
                                        <ShieldAlert className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        What It Cannot Promise
                                    </h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    Some checks cannot be truly "instant" because they involve manual confirmation or third-party availability.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
                                        <ShieldAlert className="text-yellow-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Employment history checks require contacting previous employers</span>
                                    </div>
                                    <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
                                        <ShieldAlert className="text-yellow-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Turnaround depends on how quickly references respond</span>
                                    </div>
                                    <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
                                        <ShieldAlert className="text-yellow-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Education verification requires institution confirmation</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                                    <p className="text-gray-700 font-semibold">
                                        This is why Venovox positions instant checks as a speed layer, not a replacement for proper verification.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Include Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            What We Include in an Instant Background Check
                        </h2>
                        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                            Your exact package should match the role. We structure instant screening around checks that can return quickly and are commonly used as early hiring signals.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: IdCard,
                                    title: "Identity Verification Quick Validation",
                                    description: "Identity is the foundation. If identity is not correct, every downstream check becomes risky or inaccurate. Many screening workflows treat identity validation as a core part of screening.",
                                    bgColor: "bg-red-600"
                                },
                                {
                                    icon: ShieldAlert,
                                    title: "Global Sanctions & Watchlist Screening",
                                    description: "For roles involving financial access, sensitive data, or regulated environments, watchlist screening adds a fast compliance signal early in the process. This is often used as a quick risk filter.",
                                    bgColor: "bg-blue-600"
                                },
                                {
                                    icon: Globe,
                                    title: "Digital Footprint Risk Signals",
                                    description: "For public-facing roles, leadership, or high trust hires, some employers include a fast review layer that helps catch obvious public risk early. Applied consistently with clear criteria.",
                                    bgColor: "bg-purple-600"
                                }
                            ].map((check, index) => {
                                const IconComponent = check.icon;
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
                                        <div className={`${check.bgColor} p-4 rounded-lg w-fit mb-6`}>
                                            <IconComponent className="text-white w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">{check.title}</h3>
                                        <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                                            {check.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Optional Note */}
                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <div className="bg-blue-50 p-6 rounded-lg border-1 border-blue-500">
                                <p className="text-gray-700">
                                    <span className="font-bold">Note:</span> Digital footprint review is optional and role-based. If you want this included, Venovox can align it with your hiring policy.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Express Checks Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Express Checks That Follow the Instant Step
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                            Most employers combine instant screening with "express" verification checks to confirm facts before the final offer.
                        </p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: Briefcase,
                                    title: "Employment History Verification",
                                    description: "Job title, dates, tenure, and employer confirmation"
                                },
                                {
                                    icon: GraduationCap,
                                    title: "Education Verification",
                                    description: "Degree, diploma and academic credential validation"
                                },
                                {
                                    icon: FileCheck,
                                    title: "Right to Work Verification",
                                    description: "Especially important for foreign hires in Malaysia"
                                },
                                {
                                    icon: ShieldAlert,
                                    title: "Criminal Record Checks",
                                    description: "Scope depends on candidate profile and requirements"
                                }
                            ].map((check, index) => {
                                const IconComponent = check.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="bg-red-600 p-3 rounded-lg w-fit mb-4">
                                            <IconComponent className="text-white w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900">{check.title}</h3>
                                        <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                                            {check.description}
                                        </p>
                                        <div className="mt-4 flex items-center text-sm text-gray-600">
                                            <Clock className="w-4 h-4 mr-2" />
                                            <span>Typically 3-8 business days</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        
                        <div className="mt-12 max-w-3xl mx-auto">
                            <div className="bg-red-50 p-6 rounded-lg">
                                <p className="text-gray-700 text-center">
                                    <span className="font-bold">Important:</span> Employment and education checks can require third-party confirmation and can take longer when responses are slow. This is normal and expected in structured screening.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Turnaround Time Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Typical Turnaround Time in Malaysia
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                            It helps to set expectations clearly so your recruitment timeline stays realistic.
                        </p>
                        
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            {/* Timeline Info */}
                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                    Industry Standard Timelines
                                </h3>
                                <div className="space-y-6">
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold text-lg mb-2 text-gray-800">Instant Checks</h4>
                                        <p className="text-gray-700">
                                            Some checks can be returned <span className="font-bold text-green-600">within minutes or hours</span> when data sources are available digitally.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold text-lg mb-2 text-gray-800">Verification Checks</h4>
                                        <p className="text-gray-700">
                                            Many employment background checks via screening providers often take around <span className="font-bold text-yellow-600">3 to 5 business days</span> on average, depending on complexity.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold text-lg mb-2 text-gray-800">Complete Screening</h4>
                                        <p className="text-gray-700">
                                            Some Malaysia-focused providers cite <span className="font-bold text-red-600">3 to 10 business days</span> on average depending on services selected.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-gray-700 italic">
                                        Venovox uses this same logic: instant where possible, transparent where not, and always documented.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Factors Affecting Speed */}
                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                    What Affects Speed the Most?
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "Candidate Readiness",
                                            description: "Clear documents and accurate details reduce delays. Missing information slows everything down."
                                        },
                                        {
                                            title: "Employer & Institution Response Time",
                                            description: "Manual verifications depend on third-party availability. Employment checks take longer if HR teams respond slowly."
                                        },
                                        {
                                            title: "Scope Creep",
                                            description: "A 'fast check' becomes slow when the scope expands mid-way. Define what you need instantly vs. what must be verified."
                                        }
                                    ].map((factor, index) => (
                                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                            <h4 className="font-bold text-gray-800 mb-2">{factor.title}</h4>
                                            <p className="text-gray-700">{factor.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Same Day Background Check Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-yellow-50 p-8 rounded-xl border-1 border-yellow-500">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                                    "Same Day Background Check" in Malaysia: What That Really Means
                                </h3>
                                <p className="text-gray-700 mb-6">
                                    People search for "same day background check" because they want hiring decisions faster. That is fair. But not every check can be completed in one day.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-lg mb-3 text-gray-800">Can Be Fast:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <Check className="text-green-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Identity validation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="text-green-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Watchlist screening</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="text-green-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Digital risk checks</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-3 text-gray-800">May Take Longer:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <ShieldAlert className="text-yellow-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Employment verification</span>
                                            </li>
                                            <li className="flex items-start">
                                                <ShieldAlert className="text-yellow-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Education confirmation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <ShieldAlert className="text-yellow-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Criminal record checks</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-white rounded-lg">
                                    <p className="text-gray-700 font-semibold">
                                        The best way to deliver a same-day outcome is: run instant checks immediately, start verification checks at the same time, and set clear decision rules.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* When to Use & PDPA Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* When to Use */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                    When to Use an Instant Background Check
                                </h3>
                                <div className="space-y-4 mb-6">
                                    {[
                                        "You are hiring for roles with quick start dates",
                                        "You need a fast initial risk filter for high-volume roles",
                                        "You want early screening signals before investing in deeper checks",
                                        "You are onboarding contractors, interns, or temporary staff on tight timelines",
                                        "You want to keep candidates engaged with faster progress updates"
                                    ].map((useCase, index) => (
                                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-3 flex-shrink-0">
                                                <span className="font-semibold">{index + 1}</span>
                                            </div>
                                            <span className="text-gray-700">{useCase}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <p className="text-gray-700">
                                        <span className="font-bold">Candidate Experience:</span> Faster progress updates improve candidate experience and reduce dropout rates during hiring.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* PDPA Compliance */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                <div className="flex items-center mb-6">
                                    <ShieldAlert className="text-blue-600 w-8 h-8 mr-4" />
                                    <h3 className="text-2xl font-bold text-gray-800">PDPA-Aware Screening in Malaysia</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    Instant does not mean careless. Background checks involve personal data, so employers should use clear notice and consent processes aligned with Malaysia's Personal Data Protection Act 2010 (PDPA).
                                </p>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded mr-3">
                                            <Check className="text-blue-600 w-4 h-4" />
                                        </div>
                                        <p className="text-gray-700">Many organizations include background checks in their PDPA notices for job applicants</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded mr-3">
                                            <Check className="text-blue-600 w-4 h-4" />
                                        </div>
                                        <p className="text-gray-700">Notices provided in both Bahasa Malaysia and English as best practice</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded mr-3">
                                            <Check className="text-blue-600 w-4 h-4" />
                                        </div>
                                        <p className="text-gray-700">Purpose-based screening with job relevance</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded mr-3">
                                            <Check className="text-blue-600 w-4 h-4" />
                                        </div>
                                        <p className="text-gray-700">Minimal data collection and secure handling</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">
                                    Venovox supports PDPA-aware workflows by keeping screening structured, transparent, and compliant.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            How Venovox Instant Screening Works
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    number: "1",
                                    title: "Choose Your Package",
                                    description: "Pick instant screening for early signals, then add express verification checks if the role requires confirmed proof."
                                },
                                {
                                    number: "2",
                                    title: "Collect Consent & Details",
                                    description: "Screening should be transparent. Consent and clear disclosure are standard practice in Malaysia."
                                },
                                {
                                    number: "3",
                                    title: "Screening Begins",
                                    description: "Instant checks run quickly when data allows. Verification checks begin in parallel if included."
                                },
                                {
                                    number: "4",
                                    title: "Receive Clear Report",
                                    description: "Get easy-to-read summary with confirmed items, flagged risks, pending items, and next steps."
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

                        {/* Foreign Candidates Note */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-16 max-w-4xl mx-auto"
                        >
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                                <div className="flex items-center mb-6">
                                    <Globe className="text-blue-600 w-8 h-8 mr-4" />
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Instant Background Screening for Foreign Candidates
                                    </h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    If you hire foreign candidates in Malaysia, instant screening can still be useful, but you should plan for role-based add-ons.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        {
                                            title: "Identity & Eligibility",
                                            description: "May require additional documentation and verification"
                                        },
                                        {
                                            title: "Right-to-Work Checks",
                                            description: "May need extra documentation for foreign hires"
                                        },
                                        {
                                            title: "International Employment",
                                            description: "Verification may take longer due to cross-border responses"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="text-center p-4">
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                                                <ShieldAlert className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 bg-white rounded-lg">
                                    <p className="text-sm text-gray-700 italic">
                                        Candidates are commonly advised that checks may verify identity and employment history, and that timelines can vary, especially across countries.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
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
                            Related Screening Services
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Employment Verification",
                                    description: "Confirm past employment history, job titles and tenure",
                                    icon: Briefcase,
                                    link: "/my-en/employment-verification"
                                },
                                {
                                    title: "Education Verification",
                                    description: "Degree, diploma and academic credential validation",
                                    icon: GraduationCap,
                                    link: "/my-en/education-verification"
                                },
                                {
                                    title: "Identity Verification",
                                    description: "ID validation and personal details matching",
                                    icon: IdCard,
                                    link: "/my-en/identity-verification"
                                },
                                {
                                    title: "Social Media Screening",
                                    description: "Public online presence review for risk signals",
                                    icon: Globe,
                                    link: "/my-en/social-media-screening"
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
                        faqs={instantBackgroundCheckFAQs}
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
                            Ready to Move Faster Without Cutting Corners?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            If you want instant background screening in Malaysia with clear scope, realistic timelines, and PDPA-aware workflows, Venovox can help you screen faster and hire with confidence. Need faster hiring decisions? We offer instant background checks and express screening options with clear timelines, PDPA-aware workflows, and easy online reporting.
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