// SocialMediaScreeningClient.tsx
"use client";

import { motion } from 'framer-motion';
import { Check, Globe, ShieldAlert, FileCheck, Calendar, AlertTriangle, Users, Clock, Award, Search, Eye, MessageSquare, Shield } from 'lucide-react';
import Link from 'next/link';
import ImageTextSection from "@/components/home/image-text-section";
import { FAQSection } from "@/components/common/faq-section";

const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

const socialMediaScreeningFAQs = [
    {
        id: "faq-1",
        question: "What is social media screening in recruitment?",
        answer: "It is the review of a candidate's public online presence as part of hiring to identify potential misconduct risks, professionalism concerns, or reputation issues."
    },
    {
        id: "faq-2",
        question: "Is social media screening legal in Malaysia?",
        answer: "There is no single 'social media screening law' for hiring, but employers should comply with Malaysia's PDPA when processing personal data, including providing proper notice and using data for a defined purpose."
    },
    {
        id: "faq-3",
        question: "Do you only check public posts?",
        answer: "Yes. A responsible social media background check focuses on publicly accessible information and avoids attempting to access private content."
    },
    {
        id: "faq-4",
        question: "Can employers ask for a candidate's social media password?",
        answer: "We do not request passwords and we do not recommend invasive access methods. Privacy and fairness risks increase when screening goes beyond public information."
    },
    {
        id: "faq-5",
        question: "What do employers look for during social media screening?",
        answer: "Common areas include signs of harassment, hate speech, threats, repeated abusive conduct, illegal activity promotion, or content that could create serious reputational risk in a role."
    },
    {
        id: "faq-6",
        question: "How far back do social media background checks go?",
        answer: "It depends on the package scope and what is publicly accessible. Some screening models define a review window, while others focus on recent and job-relevant patterns rather than searching indefinitely."
    },
    {
        id: "faq-7",
        question: "Can a candidate be rejected because of social media?",
        answer: "Yes, employers may decide not to proceed if they find credible, job-relevant red flags. However, content can be misinterpreted, so best practice is to document findings and consider context before making a decision."
    },
    {
        id: "faq-8",
        question: "Should social media screening be done for every role?",
        answer: "Not always. It is most useful for roles with high visibility, leadership responsibility, sensitive access, or brand risk. Applying it selectively by role, with a documented policy, is often more defensible than random use."
    },
    {
        id: "faq-9",
        question: "How do you reduce bias in social media screening?",
        answer: "Use a written policy, standardized criteria, and keep decision-making focused on job-relevant risk categories. Unstructured screening is linked to fairness and privacy concerns, so structure matters."
    }
];

export default function SocialMediaScreeningClient() {
    return (
        <main className="bg-white text-black">
            {/* Hero Banner */}
            <div className="relative mt-20 w-full h-[45vh] overflow-hidden bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-white">Social Media Screening Malaysia</span>
                    </h1>
                    <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
                        Review public online presence. Protect workplace culture. Hire with confidence.
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
                            Candidate Social Media Check & Online Presence Review
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            Resumes tell you what a candidate wants you to know. Social media can show how someone behaves when they think nobody at work is watching.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            Venovox provides social media screening in Malaysia to help employers spot avoidable risks early, protect workplace culture, and reduce brand exposure, using a structured approach that focuses on job-relevant signals and respects privacy.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 italic">
                            This is not "stalking candidates." It is a documented public online presence review designed for hiring decisions that need extra confidence.
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

            {/* Image Section 1 - Social Media Screening Definition */}
            <ImageTextSection
                title={<>What is Social Media Screening?</>}
                paragraphs={[
                    "Social media screening (also called a social media background check) is the review of a candidate's public online presence across common platforms to identify potential misconduct risks, reputation concerns, and inconsistencies with what was shared during hiring.",
                    "Done properly, it is: Consistent, not random; Focused on job relevance, not personal judgment; Based on public information, not private access."
                ]}
                imageSrc="/candidate-screening-experience.png"
                imageAlt="Social media screening process definition and importance"
                bgColor="white"
                imageFirst={false}
            />

            {/* Why Employers Use Social Media Screening */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Why Employers Use Social Media Screening in Malaysia
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-gray-700 mb-8 text-center">
                                Hiring is not only about skills. It is also about trust, professionalism, and reducing avoidable risk after onboarding.
                            </p>
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        "Detect behavior that could harm workplace safety or culture (harassment, threats, hate content)",
                                        "Reduce reputational risk for public-facing roles",
                                        "Verify consistency for professional claims, especially on platforms like LinkedIn",
                                        "Identify patterns that could create HR escalation later (bullying, aggressive conduct, repeated abusive language)"
                                    ].map((reason, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start p-4 bg-gray-50 rounded-lg"
                                            whileHover={{ scale: 1.02 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{reason}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-8 p-6 bg-blue-50 rounded-lg border-1 border-blue-500">
                                    <p className="text-gray-700">
                                        <span className="font-bold">Important:</span> Social media screening is also often recommended as a structured part of broader pre-employment screening where the employer wants an extra layer of context beyond CV claims.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Check Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            What We Check in Social Media Screening
                        </h2>
                        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                            We keep the scope clear, consistent, and job-relevant. Our screening focuses on publicly available content and looks for risk signals in defined categories, rather than vague "vibes."
                        </p>
                        
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            {/* Public Profile Assessment */}
                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                                        <Search className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Public Profile Assessment
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Profile identity consistency (name, role claims, professional presence)",
                                        "Public posts, captions, and visible media where relevant",
                                        "Comments and reposts that reflect public conduct",
                                        "Professional networking presence alignment"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="bg-red-100 p-2 rounded mr-3">
                                                <Check className="text-red-600 w-4 h-4" />
                                            </div>
                                            <p className="text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Risk Signals */}
                            <motion.div
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                                        <AlertTriangle className="text-white w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Online Reputation & Misconduct Signals
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Hate or discriminatory content",
                                        "Harassment, bullying, threats, or intimidation",
                                        "Violence or self-harm threats directed at others",
                                        "Sexual harassment content or predatory language",
                                        "Illegal drug promotion or clear evidence of illegal activity",
                                        "Sharing confidential company information",
                                        "Repeated aggressive or abusive public behavior patterns"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="bg-red-100 p-2 rounded mr-3">
                                                <AlertTriangle className="text-red-600 w-4 h-4" />
                                            </div>
                                            <p className="text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Role-Specific Context */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                                    Role-Specific Context
                                </h3>
                                <p className="text-gray-700 mb-6 text-center">
                                    Not every role needs the same depth. For public-facing, leadership, or high-trust roles, screening focuses on:
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        {
                                            title: "Brand Representation",
                                            description: "Content that could damage company reputation"
                                        },
                                        {
                                            title: "Professional Conduct",
                                            description: "Public behavior reflecting workplace suitability"
                                        },
                                        {
                                            title: "Client Trust Impact",
                                            description: "High-visibility controversy patterns affecting stakeholders"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="text-center p-4">
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                                                <Users className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* What We Do Not Do Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            What We Do Not Do
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                            To protect fairness and privacy, we set boundaries clearly.
                        </p>
                        
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    {
                                        icon: Shield,
                                        title: "No Private Access",
                                        description: "We do not ask for passwords, attempt to bypass privacy settings, or 'friend' candidates to see private content."
                                    },
                                    {
                                        icon: FileCheck,
                                        title: "No Decision Making",
                                        description: "We do not make hiring decisions for you. We provide structured findings for your informed assessment."
                                    },
                                    {
                                        icon: Users,
                                        title: "No Personal Bias",
                                        description: "We avoid using sensitive personal characteristics as evaluation criteria to prevent bias."
                                    },
                                    {
                                        icon: Eye,
                                        title: "No Unstructured Review",
                                        description: "We do not perform random or unstructured screening that could lead to unfair judgments."
                                    }
                                ].map((item, index) => {
                                    const IconComponent = item.icon;
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
                                            <div className="flex items-center mb-4">
                                                <div className="bg-red-100 p-3 rounded-lg mr-4">
                                                    <IconComponent className="text-red-600 w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                            </div>
                                            <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <div className="mt-12 p-6 bg-red-50 rounded-lg border-1 border-red-500">
                                <p className="text-gray-700 font-semibold">
                                    A major risk in social media checks is accidental exposure to personal traits that should not influence hiring and can introduce bias if the process is unstructured.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Fair Screening & PDPA Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Fair Screening Practices */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                    A Fair Way to Use Social Media Screening
                                </h3>
                                <p className="text-gray-700 mb-6">
                                    Social media screening becomes risky when it is inconsistent or done without a defined method.
                                </p>
                                <div className="space-y-4 mb-6">
                                    {[
                                        "A written policy with clear purpose, scope, and criteria",
                                        "The same screening rules for similar roles",
                                        "Separation between 'screening review' and 'final hiring decision' where possible",
                                        "Documented findings with context, not screenshots without explanation"
                                    ].map((practice, index) => (
                                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full mr-3 flex-shrink-0">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-gray-700">{practice}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 italic">
                                    This reduces bias risk and keeps the process defensible if a decision is questioned later.
                                </p>
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
                                    <h3 className="text-2xl font-bold text-gray-800">PDPA-Friendly Screening in Malaysia</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    Social media screening can still involve personal data, even if content is public. Malaysia's Personal Data Protection Act 2010 (PDPA) includes the Notice and Choice Principle, which requires written notice in both Bahasa Malaysia and English.
                                </p>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded mr-3">
                                            <Check className="text-blue-600 w-4 h-4" />
                                        </div>
                                        <p className="text-gray-700">Clear candidate notice that social media screening may be part of the process</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded mr-3">
                                            <Check className="text-blue-600 w-4 h-4" />
                                        </div>
                                        <p className="text-gray-700">Scope limited to job relevance and defined criteria</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded mr-3">
                                            <Check className="text-blue-600 w-4 h-4" />
                                        </div>
                                        <p className="text-gray-700">Documentation of what was reviewed and why</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded mr-3">
                                            <Check className="text-blue-600 w-4 h-4" />
                                        </div>
                                        <p className="text-gray-700">Secure handling and retention of candidate data</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">
                                    Venovox supports screening workflows that align with PDPA expectations by keeping screening structured and transparent.
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
                            How Our Social Media Screening Process Works
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    number: "1",
                                    title: "Choose Screening Depth",
                                    description: "Select standard screening for general roles or enhanced screening for leadership/public-facing roles"
                                },
                                {
                                    number: "2",
                                    title: "Candidate Notice & Consent",
                                    description: "Formal notice and consent as part of your screening pack for transparency"
                                },
                                {
                                    number: "3",
                                    title: "Review Public Presence",
                                    description: "Our team reviews publicly accessible content using consistent criteria"
                                },
                                {
                                    number: "4",
                                    title: "Reporting with Context",
                                    description: "Receive clear report with risk flags and supporting context"
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
                        
                        {/* Reporting Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-16 max-w-4xl mx-auto"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                                <h3 className="text-2xl font-bold mb-6 text-center">Clear, Contextual Reporting</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-lg mb-4 text-gray-800">Report Includes:</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                                <span>What was reviewed (platform types, public sources)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                                <span>Risk category flags (if any identified)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                                <span>Supporting context for proper HR interpretation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="text-green-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                                <span>Notes on limitations (e.g., no public presence found)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-lg mb-4 text-gray-800">Our Approach:</h4>
                                        <p className="text-gray-700 italic">
                                            We avoid "gotcha" reporting. Social content can be misinterpreted without context, so we document carefully with balanced perspective.
                                        </p>
                                        <div className="mt-4 flex items-center">
                                            <Clock className="text-red-600 w-5 h-5 mr-2" />
                                            <span className="text-gray-700 font-semibold">Turnaround: Typically within 2-5 business days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* When to Use & Who Benefits */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            When & Who Benefits from Social Media Screening
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            {/* When to Use */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                                    When to Run Social Media Screening
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "After shortlist, before final offer",
                                        "After conditional offer, before onboarding",
                                        "For roles requiring high public trust",
                                        "When hiring for leadership positions",
                                        "For brand-sensitive marketing or PR roles",
                                        "When consistent screening standards are needed across departments"
                                    ].map((timing, index) => (
                                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                            <Calendar className="text-red-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{timing}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                                    <p className="text-sm text-gray-700">
                                        Social media checks are typically positioned as a hiring risk review step and should be applied consistently for similar roles to avoid unequal treatment.
                                    </p>
                                </div>
                            </div>

                            {/* Who Benefits */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                                    Who Benefits Most
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Public-facing roles (sales, marketing, spokesperson-type roles)",
                                        "Leadership and executive hires",
                                        "Roles with access to sensitive data or finances",
                                        "Roles working closely with vulnerable groups or high-trust environments",
                                        "Roles where misconduct could quickly become a public incident",
                                        "Brand ambassador or influencer-facing positions"
                                    ].map((beneficiary, index) => (
                                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                            <Users className="text-blue-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{beneficiary}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Common Misconceptions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-center">Common Misconceptions</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        myth: "'Social media screening is just judgmental'",
                                        fact: "It is judgmental only if unstructured. With defined scope and criteria, it becomes a risk-focused check."
                                    },
                                    {
                                        myth: "'It will always find something'",
                                        fact: "Not everyone has meaningful public presence. Limited findings are normal and should be one signal among many."
                                    },
                                    {
                                        myth: "'It is okay to dig into private accounts'",
                                        fact: "Accessing private content creates privacy concerns. Responsible approaches focus on public information only."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow border border-gray-200">
                                        <div className="text-red-600 font-bold mb-2">{item.myth}</div>
                                        <div className="text-gray-700">{item.fact}</div>
                                    </div>
                                ))}
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
                            Related Background Screening Services
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Employment Verification",
                                    description: "Confirm past employment history, job titles and tenure",
                                    icon: FileCheck,
                                    link: "/my-en/employment-verification"
                                },
                                {
                                    title: "Criminal Record Check",
                                    description: "Local & international criminal history verification",
                                    icon: ShieldAlert,
                                    link: "/my-en/criminal-background-check"
                                },
                                {
                                    title: "Identity Verification",
                                    description: "ID validation and personal details matching",
                                    icon: Users,
                                    link: "/my-en/identity-verification"
                                },
                                {
                                    title: "Reference Checks",
                                    description: "Professional reference verification and insights",
                                    icon: MessageSquare,
                                    link: "/my-en/reference-check"
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
                        faqs={socialMediaScreeningFAQs}
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
                            Ready to Add Social Media Screening to Your Hiring Process?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-justify [text-justify:inter-word] hyphens-none">
                            If you want a social media screening service in Malaysia that is structured, job-relevant, and designed to reduce risk without invading privacy, Venovox is ready. Screen a candidate's public online presence with a structured, PDPA-aware approach that reviews social media red flags, online reputation risks, and digital footprint signals.
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