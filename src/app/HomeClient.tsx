"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Globe, Target, Search, FileSearch, Briefcase, DollarSign, Users, Shield, Lock, LucideIcon, Building2, Award, Database, Clock, TrendingUp, MapPin, ClipboardCheck, Zap, Scale, Eye, Mail, Phone } from 'lucide-react';
import RecognizedBy from "@/components/home/recognitions-section";
import HeroSection from "@/components/home/hero-section";
import { FAQSection } from "@/components/common/faq-section";
import { homeFAQs } from "@/data/homeFAQs";
import ImageTextSection from "@/components/home/image-text-section";
import GridCardSection from "@/components/home/grid-card-section";
import NumberedStepsSection from "@/components/home/numbered-steps-section";
import ServiceCardsSection from "@/components/home/service-cards-section";
import SectionWithHeader from "@/components/home/section-with-header";
import SingleCardSection from "@/components/home/single-card-section";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;
  colSpan?: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Due Diligence",
    description: "Strategic partner verification and investigative research that strengthens leadership decisions.",
    icon: Search,
    image: "/due-delligence.jpeg",
    link: "/my-en/background-screening/due-diligence"
  },
  {
    title: "Risk and Audit",
    description: "Operational and compliance reviews that surface gaps before they escalate.",
    icon: FileSearch,
    image: "/risk-and-audit.jpeg",
    link: "/my-en/background-screening/risk-audit"
  },
  {
    title: "Corporate Investigations",
    description: "Discreet inquiries into misconduct, fraud, brand and IP abuse, and asset tracing.",
    icon: Briefcase,
    image: "/corporate-investigation.jpeg",
    link: "/corporate-investigations"
  },
  {
    title: "Financial Crime",
    description: "AML and fraud risk assessments with remediation guidance.",
    icon: DollarSign,
    image: "/finanical-crime.jpeg",
    link: ""
  },
  {
    title: "HR Background Screening",
    description: "Employment checks that are fair, consistent and PDPA aligned.",
    icon: Users,
    image: "/hr-background-screening.jpeg",
    link: " "
  },
  {
    title: "Cyber Security",
    description: "Digital risk assessments and incident response coordination.",
    icon: Shield,
    image: "/cyber-security.jpeg",
    link: " "
  },
  {
    title: "Counter Measures and Intellectual Property",
    description: "Protection for sensitive assets, trade secrets and brand value.",
    icon: Lock,
    image: "/counter-measures.jpeg",
    link: " ",
    colSpan: "md:col-span-2 lg:col-span-1"
  }
];

const industries = [
  "Financial Services",
  "Technology",
  "Healthcare",
  "Energy",
  "Logistics",
  "Consumer Goods",
  "Professional Services",
  "Government Entities"
].map(industry => ({
  title: industry,
  description: "",
  icon: Building2,
}));

const certifications = [
  { title: "ISO 27001", description: "Data security aligned to ISO 27001 control families", icon: Award },
  { title: "PBSA Guidelines", description: "Screening approach follows PBSA guidelines", icon: Award },
  { title: "PDPA 2024", description: "Respects PDPA (Amendment) 2024 in Malaysia and privacy frameworks", icon: Award },
];

const technologyItems = [
  { title: "Role-Based Access", description: "Access is role based with least privilege principles", icon: Database },
  { title: "Encryption", description: "Data at rest and in transit is encrypted", icon: Database },
  { title: "Multi-Factor Authentication", description: "MFA applied across all analyst accounts", icon: Database },
  { title: "Audit Trails", description: "Tamper evident audit trails maintained", icon: Database },
];

const turnaroundItems = [
  { title: "Standard Checks", subtitle: "3-5 Working Days", description: "Depending on jurisdiction and depth", icon: Clock },
  { title: "Due Diligence", subtitle: "5-10 Working Days", description: "When records are readily accessible", icon: Clock },
  { title: "Complex Matters", subtitle: "Extended Timeline", description: "Multi country or complex cases", icon: Clock },
];

const methodologySteps = [
  { number: "1", title: "Scope and risk profile", description: "We agree objectives, jurisdictions and timelines." },
  { number: "2", title: "Data collection", description: "Compliant records, open source intelligence and verified sources." },
  { number: "3", title: "Analysis and validation", description: "Cross checks reduce false positives and confirm facts." },
  { number: "4", title: "Reporting", description: "Concise findings with clear risk ratings and recommended actions." },
  { number: "5", title: "Follow through", description: "Optional monitoring and post engagement support." },
];

const caseResults = [
  { 
    title: "Vendor risk reduced", 
    description: "A client avoided a high risk supplier after our adverse media and litigation screening identified unresolved regulatory actions.",
    icon: TrendingUp,
  },
  { 
    title: "Senior hire safeguarded", 
    description: "Discrepancies in academic claims were confirmed before appointment, preventing reputational harm.",
    icon: TrendingUp,
  },
  { 
    title: "Asset tracing support", 
    description: "Financial flows and control relationships were mapped to support recovery efforts through counsel.",
    icon: TrendingUp,
  },
];

const corePrinciples = [
  {
    title: "Our Vision",
    description: "As an ISO 27001-certified company, we connect global security partners to deliver expert ground support and intelligence consulting across APAC and the global region.",
    icon: ShieldCheck,
  },
  {
    title: "Our Mission",
    description: "We deliver tailored risk management solutions that strengthen resilience, protect operations, and support strategic growth while upholding the highest ethical standards.",
    icon: Target,
  },
  {
    title: "Our Values",
    description: "Reducing Risk – Proactively identify and mitigate threats. Supporting Compliance – Ensure adherence to standards. Enhancing Efficiency – Strengthen processes and boost productivity.",
    icon: Globe,
  },
  {
    title: "Resilience",
    description: "Design processes that hold under pressure.",
    icon: Zap,
  },
  {
    title: "Integrity",
    description: "Respect the law and ethical boundaries.",
    icon: Scale,
  },
  {
    title: "Clarity",
    description: "Deliver findings in plain language that drives action.",
    icon: Eye,
  },
];

export default function HomeClient() {
  return (<>
    <main className="bg-white text-black">
      <HeroSection />
      <RecognizedBy />

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About <span className="text-red-600">VENOVOX</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch] mb-6">
                  Founded in Malaysia in 1999 and headquartered in London, Venovox supports leadership teams across Malaysia, Singapore and international markets. We verify people and partners, surface risk early, and protect corporate reputation with clear and defensible intelligence. Our analysts combine local insight, global data access and a quality system that produces reliable, audit ready reports. The result is simple. Decisions made with facts, not assumptions.
                </p>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch]">
                  VENOVOX is a premier risk management and background screening consultancy offering specialised services in due diligence, security advisory, background checks, and intelligence analysis across Malaysia, the Asia-Pacific regions, and globally. By leveraging local insight and global capabilities, we support businesses mitigate risk, ensure compliance, and enhance operational effectiveness.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/about-us.jpg"
                  alt="VENOVOX Global Team"
                  fill
                  className="object-contain md:object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ImageTextSection
        title={<>Rooted in <span className="text-red-600">Local Expertise</span>, Driven by <span className="text-red-600">International Standards</span></>}
        paragraphs={[
          "Founded in Malaysia back in 1999 and now headquartered in London, United Kingdom, VENOVOX has grown into a trusted leader in risk management solutions and background screening services.",
          "We specialize in identifying, assessing, authenticating, and mitigating risks to people, assets, operations, and reputations — empowering organisations to operate securely and confidently in complex environments."
        ]}
        imageSrc="/vector2.png"
        imageAlt="International Standards"
        bgColor="white"
        imageFirst={true}
      />

      <ImageTextSection
        title={<>Your Trusted Experts in <span className="text-red-600">Background Screening</span> and <span className="text-red-600">Risk Solutions</span></>}
        paragraphs={[
          "Our enhanced screening process delivers accurate background check results with faster turnaround times – ensuring efficiency without compromising quality.",
          "With a seamless, stress-free experience and a proven track record of precision and timeliness, you can rely on us to support your hiring, verification, and authentication needs."
        ]}
        imageSrc="/vector1.png"
        imageAlt="Screening Process"
        bgColor="gray"
      />

      <ImageTextSection
        title={<>Why <span className="text-red-600">Leaders Choose</span> Us</>}
        paragraphs={[
          "Our executive level analysis delivers verified intelligence, precision reporting and recommendations. With deep local expertise and global operating footprint, we provide on ground capability across APAC and beyond.",
          "Our compliance driven culture ensures PDPA aligned practices, strict data minimisation, and access controls. We offer transparent, realistic turnarounds with a commitment to integrity."
        ]}
        imageSrc="/why-leaders-choose-us.jpeg"
        imageAlt="why leaders choose us"
        bgColor="white"
        imageFirst={true}
      />

      <ServiceCardsSection
        title={<>Our <span className="text-red-600">Services</span></>}
        description="Our work spans the full spectrum of corporate risk. Clients rely on Venovox for strategic checks before hiring, investments, partnerships or sensitive transactions."
        services={servicesData}
      />

      <SectionWithHeader
        title={<>Industries <span className="text-red-600">We Serve</span></>}
        description="Financial services, technology, healthcare, energy, logistics, consumer goods, professional services and government linked entities trust Venovox. Each sector faces unique challenges and risk quantum. Financial institutions prioritise AML controls and sanctions risk. Technology firms focus on insider threats and data access. Energy and logistics require cross border verification with complex vendor chains. For each industry we adapt scope, sources and reporting to the realities of your operating model."
        bgColor="gray"
      >
        <GridCardSection
          title=""
          items={industries}
          bgColor="gray"
          gridCols="4"
        />
      </SectionWithHeader>

      <SectionWithHeader
        title={<>Certifications and <span className="text-red-600">Compliance</span></>}
        description="We operate with strict governance. Our data security program is aligned to ISO 27001 control families. Our screening approach follows PBSA guidelines. Our work respects PDPA (Amendment) 2024 in Malaysia and relevant privacy frameworks in other jurisdictions. We audit our processes, train our analysts and log access to sensitive records. The objective is consistent. Protect data, prove compliance, and deliver dependable evidence that stands up to scrutiny."
        bgColor="white"
      >
        <GridCardSection
          title=""
          items={certifications}
          bgColor="white"
          gridCols="3"
        />
      </SectionWithHeader>

      <SectionWithHeader
        title={<>Technology and <span className="text-red-600">Data Security</span></>}
        description="Venovox uses secure systems for collection, analysis and delivery. Access is role based with least privilege. Data at rest and in transit is encrypted. Sensitive artefacts are retained only for the period required by law and client contract. We apply multi factor authentication across analyst accounts and maintain tamper evident audit trails. Clients receive reports through a secure handoff with optional restricted viewer rights."
        bgColor="gray"
      >
        <GridCardSection
          title=""
          items={technologyItems}
          bgColor="gray"
          gridCols="2"
        />
      </SectionWithHeader>

      <SectionWithHeader
        title={<>Turnaround Times and <span className="text-red-600">Service Levels</span></>}
        description="Standard background checks complete within three to five working days depending on jurisdiction and depth of verification. Corporate due diligence projects complete within five to ten working days when records are readily accessible. Multi country or complex matters may require additional time. Service level expectations are set at the start of every engagement so your team can plan with confidence."
        bgColor="white"
      >
        <GridCardSection
          title=""
          items={turnaroundItems}
          bgColor="white"
          gridCols="3"
        />
      </SectionWithHeader>

      <NumberedStepsSection
        title={<>Methodology and <span className="text-red-600">Reporting</span></>}
        subtitle="Our process is structured and transparent."
        steps={methodologySteps}
        footerText="Reports are written in plain language with an executive summary for quick decisions and an appendix for evidence and citations where appropriate."
        bgColor="gray"
      />

      <SectionWithHeader
        title={<>Case <span className="text-red-600">Results</span></>}
        description="Confidential matters cannot be disclosed, yet outcomes speak clearly."
        bgColor="white"
      >
        <GridCardSection
          title=""
          items={caseResults}
          bgColor="white"
          gridCols="3"
        />
        <p className="text-lg text-gray-700 mt-8 text-center">
          References are available subject to confidentiality and approval.
        </p>
      </SectionWithHeader>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Thought Leadership and <span className="text-red-600">Publications</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Industry <span className="text-red-600">Insights</span>
                </h3>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch] mb-6">
                  Venovox contributes insights on background screening, due diligence and risk intelligence. Our publications help compliance and HR leaders keep pace with evolving standards, technology and regulation.
                </p>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch]">
                  Use these resources to brief internal teams, refine policy and inform board level decisions. For deeper guidance, our consultants can tailor briefings to your sector and jurisdiction.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/thought-leadership.jpeg"
                  alt="Thought Leadership and Publications"
                  fill
                  className="object-contain md:object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Global <span className="text-red-600">Coverage</span>
              </h2>
            </div>
            <div className="">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-red-600 p-3 rounded-full mr-4">
                      <MapPin className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      A Global Presence <span className="text-red-600">Rooted in Trust</span>
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none mb-6">
                    We serve clients from London to Kuala Lumpur and Singapore, and coordinate vetted ground support across Asia Pacific and beyond. This network allows consistent methodology, familiar reporting and rapid escalation when timelines are tight.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {["London", "Kuala Lumpur", "Singapore", "Asia Pacific"].map((location, index) => (
                      <motion.div
                        key={location}
                        className="bg-white p-4 rounded-lg text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="font-semibold text-red-600">{location}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SingleCardSection
        title={<>Screening <span className="text-red-600">Process</span></>}
        cardTitle="Structured and Compliant"
        description="Every assignment begins with clarity on purpose and proportionality. We verify identity and credentials, assess integrity risks and provide context that explains findings. Where the law limits access, we work within local rules and advise on acceptable alternatives so your organisation remains compliant while still making informed decisions."
        icon={ClipboardCheck}
        bgColor="gray"
      />

      <SectionWithHeader
        title={<>Our <span className="text-red-600">Core</span> Principles</>}
        bgColor="white"
      >
        <GridCardSection
          title=""
          items={corePrinciples}
          bgColor="white"
          gridCols="3"
        />
      </SectionWithHeader>

  

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <blockquote className="text-xl md:text-2xl italic text-gray-800 text-center">
              <p className="relative">
                <span className="absolute -left-6 -top-4 text-red-600 text-4xl">&quot;</span>
                Resilience is not about avoiding risks, instead, it is about responding effectively when they arise.
                <span className="absolute -right-6 -bottom-4 text-red-600 text-4xl">&quot;</span>
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <FAQSection
              faqs={homeFAQs}
              heading="Frequently asked questions"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Take the <span className="text-red-600">Next Step</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Speak with a specialist today. Claim your free custom screening strategy session.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                <a
                  href="mailto:hi@venovox.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <div className="bg-red-600 p-3 rounded-full">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">hi@venovox.com</span>
                </a>
                <div className="hidden md:block text-gray-300">|</div>
                <a
                  href="tel:+60128008888"
                  className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <div className="bg-red-600 p-3 rounded-full">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">+6012 800 8888</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
    </main>
  </>);
}
