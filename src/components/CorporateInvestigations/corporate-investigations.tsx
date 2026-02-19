"use client";

import { motion } from "framer-motion";
import WhenToActSection from "../common/act";
import { MailIcon, DollarSign, Cpu, Truck,BatteryCharging,Hospital,ScanBarcode,BookDashed,ShieldCheck,LucideIcon } from "lucide-react";
import { Faqs } from "../common/faq-section";
import { ServiceCard } from "../common/card";
import { ActionSection } from "../common/action";


export default function CorporateInvestigations() {
  const services: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
    imageUrl?: string;
    link?: string | undefined;
  }> = [
    {
      title: "Internal fraud",
      description: "We uncover embezzlement, false billing, conflict of interest, ghost employees, and financial manipulation. Our team analyzes books and records, expense data, and approval logs. We map who had access and who gained from the scheme. We interview staff and review messages and emails where needed. You receive a clear timeline, an estimate of loss, and evidence that can support recovery and HR action.",
      imageUrl: "538.jpg",
      link: undefined,
    },
    {
      title: "Third party fraud",
      description: "We test the integrity of vendors, distributors, partners, and agents. We look for kickbacks, bid rigging, diversion, duplicate invoicing, and false claims. We review contracts, side letters, pricing, rebate structures, and proof of delivery. We compare expected activity to actual activity using data analytics. You receive findings and a practical plan to fix controls and recover value.",
      imageUrl: "images/1450.webp",
      link: undefined,
    },
    {
      title: "Intelligence and OSINT",
      description: "We deliver enhanced due diligence, background checks on people and companies, and human source insights. We assess market entry risk and partner risk. We combine online sources with field research where appropriate. You receive a clear view of integrity, reputation, and hidden risk before you act.",
      imageUrl: "tingey-injury-law-firm-nSpj-Z12lX0-unsplash (1).jpg",
    },
    {
      title: "Litigation support",
      description: "We gather evidence, protect chain of custody, and coordinate with eDiscovery teams. We validate the source of documents and confirm authenticity. We locate witnesses and provide background on counterparties. We supply expert reports and testimony where required. Your legal team gains facts they can trust.",
      imageUrl: "images/18026.webp",
    },
    {
      title: "Workplace misconduct",
      description: "We handle harassment, discrimination, bullying, and code of conduct breaches with care and fairness. We use a trauma informed approach. We set ground rules, protect privacy, and avoid harm. We gather evidence from interviews, policies, devices, and systems. We provide balanced findings and recommendations that meet HR and legal standards.",
      imageUrl: "65370.jpg",
      link: "/corporate-investigations/workplace-misconduct-investigations",
    },
    {
      title: "Data and cyber incidents",
      description: "We investigate insider threats, data theft, account compromise, and ransomware impact. We preserve devices, cloud data, and logs. We identify what was accessed, what was taken, and how it happened. We support containment with your IT and security teams. You receive a clear incident report, evidence logs, and guidance for notification and recovery.",
      imageUrl: "75331.jpg",
      link: "/corporate-investigations/digital-forensics-and-incident-investigations",
    },
    {
      title: "Regulatory breaches",
      description: "We investigate ABC and AML matters, sanctions exposure, books and records issues, and dawn raid response. We test transactions and counterparties. We review approvals, controls, and training. We assess exposure against the laws that apply in your markets. We prepare briefing packs for counsel and regulators and propose a practical remediation plan.",
      imageUrl: "89025.jpg",
      link: "/corporate-investigations/regulatory-and-compliance-investigations",
    },
    {
      title: "Asset tracing",
      description: "We follow money and assets across borders and through complex structures. We use corporate records, court filings, trade data, travel data, and open sources to build a picture of ownership and control. We identify bankable leads for freezing orders and enforcement. You receive a recovery map that aligns evidence with legal options.",
      imageUrl: "2150103555.jpg",
      link: "/corporate-investigations/asset-tracing-and-recovery",
    },
   
    {
      title: "Brand and IP protection",
      description: "We fight counterfeit and grey market leakage. We run test buys on and offline. We track serial numbers and map supply chain weak points. We work with platforms, hosts, and local partners to support takedowns and seizures. You get evidence that supports enforcement and steps to protect revenue.",
      imageUrl: "2150461318.jpg",
      link: "/corporate-investigations/brand-and-ip-investigations",
    },
   
    {
      title: "Prevention and controls",
      description: "We test controls, use data analytics, and train teams to stop issues early. We run fraud risk assessments and process walk throughs. We design simple monitoring that your team can run. We help you build a culture that values speaking up and early action.",
      imageUrl: "markus-winkler--NEEL2Qzlwc-unsplash.jpg",
      link: "/corporate-investigations/fraud-risk-management-and-prevention",
    },
  ];

  const services1 = [
    {
      title: "Financial services",
      description: "Banks, fintech, insurance, payments, and asset managers face strict rules and rapid change. Typical issues include insider abuse, sanctions screening gaps, trade based money laundering, and third party risk. We help you respond to alerts, review historic activity, and prepare for regulator questions. We support remediation and testing so you can prove progress.",
      icon: DollarSign,
      link: undefined,
    },
    {
      title: "Technology and media",
      description: "Software firms, platforms, telecoms, and media companies protect large volumes of user data and IP. Insider threat, data leaks, and account compromise are common triggers for investigations. We combine digital forensics with interviews and policy review. We help you manage notification, PR, and regulator interactions with clear facts.",
      icon: Cpu,
      link: undefined,
    },
    {
      title: "Manufacturing and logistics",
      description: "Global supply chains create fraud and diversion risk. We see false vendors, duplicate invoices, off invoice rebates, and grey market sales. We use data tests, site checks, and test buys to map what is real and what is not. We deliver simple fixes that strengthen approvals and cut leakage.",
      icon: Truck,
      link: undefined,
    },
    {
      title: "Energy and natural resources",
      description: "Projects often involve joint ventures, state counterparties, and complex local rules. ABC risk, sanctions exposure, and security concerns can be high. We review partner integrity, monitor local agents, and test high risk payments. We help you work within local law while meeting global standards.",
      icon: BatteryCharging, 
      link: undefined,
    },
    {
      title: "Healthcare and life sciences",
      description: "Organisations handle sensitive patient data, research IP, and long vendor networks. Risks include procurement fraud, clinical misconduct, and privacy breaches. We balance duty of care with the need to find the truth. We work with counsel to keep sensitive data secure and privileged.",
      icon: Hospital,
      link: undefined,
    },
    {
      title: "Consumer and retail",
      description: "Brands fight counterfeit goods and grey market diversion. Chargeback fraud and return abuse also erode margin. We run online monitoring, covert test buys, and logistics reviews. We help you remove bad listings, improve controls, and protect honest customers.",
      icon: ScanBarcode,
      link: undefined,
    },
    {
      title: "Public sector and NGOs",
      description: "Public funds and grants demand strong integrity and transparent records. Risks include conflict of interest, improper influence, and procurement problems. We provide evidence based reporting and clear remedial plans that stand up to audit and public review.",
      icon: BookDashed,      
      link: undefined,
    },
    
  ];

  
  const services2 = [
    {
      title: "Intake and scoping",
      description: "We listen to your concerns and gather the facts you already have. We define the problem, the goals, and the limits. We agree on access, roles, and timelines. We set early safeguards so nothing is lost and nobody is harmed.",
      imageUrl: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
      link: undefined,
    },
    {
      title: "Evidence preservation",
      description: "We secure devices, emails, chat records, cloud drives, and paper files. We document every action to protect chain of custody. We place holds where needed and isolate systems that may be at risk. Our goal is to freeze the scene without stopping your business.",
      imageUrl: "israel-andrade-YI_9SivVt_s-unsplash.jpg",
      link: undefined,
    },
    {
      title: " Collection and analysis",
      description: "We collect data and testimony in a fair and consistent way. We use digital forensics, accounting reviews, OSINT and HUMINT checks, and structured interviews. We build a clear timeline that shows who did what and when. We test competing theories and note what we cannot confirm.",
      imageUrl: "kate-sade-2zZp12ChxhU-unsplash.jpg",
      link: undefined,
    },
    {
      title: "Findings and reporting",
      description: "We turn complex facts into a clear story. You get a concise executive summary and detailed appendices with evidence, methods, and sources. We explain limits and confidence levels. We brief leaders, HR, and counsel and support next steps.",
      imageUrl: "rodeo-project-management-software-ONe-snuCaqQ-unsplash.jpg",
      link: undefined,
    },
    {
      title: "Remediation and prevention",
      description: "We help close gaps and improve controls. We update policies, design monitoring, and train teams on do and do not rules. We propose quick wins and longer term fixes. We plan follow up testing and can help you report progress to your board and stakeholders.",
      imageUrl: "building-public-trust.png",
      link: undefined,
    },
  ]

  const services3 = [
    {
      title: "Privilege planning",
      description: "We align with in house and external counsel on scope, instructions, and communications. We keep privileged and non privileged work streams separate where needed. We record the basis for privilege and keep clean files.",
      icon: ShieldCheck,
      link: undefined,
    },
    {
      title: "Evidence integrity",
      description: "We maintain chain of custody and use repeatable methods. We log tools, settings, and hashes for digital work. We reference sources and citations for interviews and documents. Our documentation supports review, audit, and court use.",
      icon: ShieldCheck,
      link: undefined,
    },
    {
      title: "Regulator engagement",
      description: "We prepare response plans and briefing packs. We help you respond to dawn raids and inquiries with confidence. We provide clear facts, timelines, and corrective actions. Where monitorships apply we support planning and progress tracking.",
    icon: ShieldCheck,      
      link: undefined,
    },
    {
      title: "Court ready outputs",
      description: "We provide expert reports, exhibits, and affidavits where required. We can testify to methods and findings. We follow local procedural rules and coordinate with your legal team so evidence is presented in a clear and helpful way.",
    icon: ShieldCheck,      
      link: undefined,
    },
  ]


  const services4 = [
    {
      description: "A clear understanding of what happened, why it happened, and who was involved. We highlight root causes and control gaps.",
      
      link: undefined,
    },
    {
      description: "Evidence that stands up to legal and regulator review. We show how each fact was found and preserved.",
      
      link: undefined,
    },
    {
      description: "Practical steps to stop the issue and prevent a repeat. We give owners, timelines, and simple measures of success.",
      
      link: undefined,
    },
    {
      description: "Support for recovery, remediation, and culture change. We help you repair trust and communicate with care.",
      
      link: undefined,
    },
  ]


  const services5 = [
    {
      title: "Independent and discreet",
      description: "We act with care and keep your trust. We avoid conflicts and report facts as we find them. We keep a low profile and protect your privacy.",
      imageUrl: "vitaly-gariev-e_2XAeZWbUI-unsplash.jpg",
      link: undefined,
    },
    {
      title: "Cross border reach",
      description: "International work is routine for us. We understand regional laws and culture and we partner with trusted local experts. We coordinate permits, translation, and data transfer rules so your case runs smoothly.",
       imageUrl: "simon-hurry-uySO9ZCbo-c-unsplash.jpg",
      link: undefined,
    },
    {
      title: "Multidisciplinary team",
      description: "Investigators, forensic accountants, cyber experts, and intelligence analysts work as one team. This saves time and gives you a complete view of risk. You do not need to manage several vendors",
  imageUrl: "vitaly-gariev-Jeg0c4gnpOM-unsplash.jpg",      
      link: undefined,
    },
    {
      title: "Fast action and clear updates",
      description: "You get a single point of contact, a simple plan, and regular short updates. We remove jargon and explain choices so you can decide quickly.",
  imageUrl: "vitaly-gariev-qd3w1qjI_SQ-unsplash.jpg",      
      link: undefined,
    },
    {
      title: "Human approach",
      description: "We respect people. We protect whistleblowers and witnesses. We design interviews and communications that are firm and kind. We aim to find the truth while keeping dignity in view.",
  imageUrl: "rodeo-project-management-software-ONe-snuCaqQ-unsplash copy.jpg",      
      link: undefined,
    },
  ]

  const services6 = [
    {
      title: "Workplace Misconduct Investigations",
      link: "/corporate-investigations/workplace-misconduct-investigations",
    },
    {
      title: "Asset-tracing-and-recovery",
      link: "/corporate-investigations/asset-tracing-and-recovery",
    },
    {
      title: "digital-forensics-and-incident-investigations  ",
      link: "/corporate-investigations/digital-forensics-and-incident-investigations",
    },
    {
      title: "whistleblowing-and-ethics-management",
      link: "/corporate-investigations/whistleblowing-and-ethics-management",
    },
    {
      title: "brand-and-ip-investigations", 
      link: "/corporate-investigations/brand-and-ip-investigations",
    },
    {
      title: "fraud-risk-management-and-prevention", 
      link: "/corporate-investigations/fraud-risk-management-and-prevention",
    },
    {
      title: "regulatory-and-compliance-investigations",
      link: "/corporate-investigations/regulatory-and-compliance-investigations",
    },
    {
      title: "litigation-support-investigations",
    },
    {
      title: "corporate-intelligence-and-osint",
    },
  ]
  const actionSection = [
    {
      title: "Ready to get started?",
      description: "  Ready to talk Speak with an investigations specialist today. Tell us what happened, what you need, and your timeline. We will propose a simple plan and the first safe steps to protect people and evidence. Prefer email Send a short note and we will reply with times for a quick call.Prefer a document We can send a one page plan that outlines scope, timing, and estimated effort. ",
      primaryButton: {
        text: "Get in Touch",
        link: "/my-en/contact-us",
        icon: MailIcon,
      },
      
    },
  ]

  const faqs = [
    {
      id: "1",
      question: "How quickly can an investigation start?",
      answer: "We can usually begin once scope and access are agreed. We prioritize evidence preservation and a safe plan first."
    },
    {
      id: "2",
      question: "Do you work under legal privilege?",
      answer: "Yes. We align with your counsel from the start, keep clean files, and protect privilege where possible."
    },
    {
      id: "3",
      question: "Can Venovox operate across borders?",
      answer: "Yes. We work internationally with trusted local partners and follow local rules and privacy laws."
    },
    {
      id: "4",
      question: "What will the final report include?",
      answer: "A plain language summary, a detailed timeline, evidence lists, methods, limits, and clear next steps."
    },
   
  ];

  return (
    <div className="container mx-auto px-6">
      
      <section className="relative w-full  py-12">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-full max-w-md" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-8"
          >
            <p className="text-lg sm:text-xl md:text-3xl  font-semibold leading-relaxed  px-4">
              Serious problems inside a company create stress and doubt.
              In these moments you need steady guidance and a clear plan.
            </p>
            
            <div className="relative py-8 px-6 sm:px-12">
              <p className="text-base sm:text-lg md:text-xl  text-center leading-relaxed ">
                Our investigators handle sensitive matters with care, structure, and respect for every person involved. We find facts, reduce risk, and help leaders act with confidence.
              </p>
              <p className="text-base sm:text-lg md:text-xl  text-center leading-relaxed ">
                We focus on the real world outcomes that matter. We protect people and data. We help you meet legal and regulator expectations. We preserve your reputation while you make sound decisions. Our team has deep experience across finance, operations, cyber, and compliance, which means we can move fast and coordinate complex work without losing control.
              </p>
              <p className="text-base sm:text-lg md:text-xl  text-center leading-relaxed ">
                We are independent and discreet. We follow repeatable methods and keep detailed records so your findings can stand up to challenge. We work across borders with trusted partners. You get plain language updates and one point of contact from day one.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-full max-w-md" />
          </motion.div>
        </motion.div>
      </div>
    </section>


     

      <section className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
      </section>

      <section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Scope of work
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We investigate problems that can harm your people, money, data, and reputation.
                  Each topic below includes a short overview of how we work and the results you can expect.
                  Every item links to a detailed service page.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    imageUrl={service.imageUrl}
                    link={service.link}
                  />
                ))}
              </div>
        </motion.div>
      </section>

      <section className="py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Industries we serve
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We support clients in many sectors. Each industry has its own rules, risks, and pressure points.
                  We tailor our plan to fit your context and your culture.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services1.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={service.link}
                  />
                ))}
              </div>
        </motion.div>
      </section>

      <section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  How we work
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Our method is simple and strong. It keeps your matter defensible and your people respected.
                  We plan carefully, move with purpose, and explain each step in plain language.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  {services2.map((service, index) => (
                    <ServiceCard
                      imageUrl={service.imageUrl}
                      key={index}
                      title={service.title}
                      description={service.description}
                      link={service.link}
                    />
                  ))}
                </div>
        </motion.div>
      </section>


      <section className="py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Legal and regulatory interface
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Many investigations sit inside legal privilege and may face regulators or courts.
                  We work closely with counsel from the start so your matter is protected and efficient.
                </p>
              </div>


              <div className="grid md:grid-cols-2 gap-8">
                  {services3.map((service, index) => (
                    <ServiceCard
                    icon={service.icon}
                      key={index}
                      title={service.title}
                      description={service.description}
                      link={service.link}
                    />
                  ))}
                </div>
        </motion.div>
      </section>

      <section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                  Outcomes you can expect
                </h2>
              </div>


              <div className="grid md:grid-cols-2 gap-8">
                  {services4.map((service, index) => (
                    <ServiceCard
                      key={index}
                      description={service.description}
                      link={service.link}
                    />
                  ))}
                </div>
        </motion.div>
      </section>

      <section className="py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
              <div className="text-center mb-8">

                <h2 className="text-3xl md:text-4xl font-bold  text-red-600">
                  Why choose us
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {services5.map((service, index) => (
                    <ServiceCard
                    imageUrl={service.imageUrl}
                      key={index}
                      title={service.title}
                      description={service.description}
                      link={service.link}
                    />
                  ))}
                </div>
        </motion.div>
      </section>

      <WhenToActSection
  title="When to act"
  listItems={[
    "You see red flags in payments or procurement — for example, duplicate invoices, unusual round numbers, or vendors with shared details.",
    "A whistleblower raises a concern. Treat this early so people feel safe and facts are not lost.",
    "A dawn raid or regulator inquiry arrives. Early planning protects privilege and reduces disruption.",
    "A key employee leaves and data looks at risk. Preserve devices and accounts before they are reused.",
    "Your brand is hit by fakes or grey market activity. Quick test buys and takedowns protect revenue.",
    "You need to trace assets for recovery. Early intelligence can support freezing orders and stronger negotiations.",

  ]}
  highlightBoxText="If this is urgent, contact us now. We can start with a short scoping call and a quick preservation plan."
  accentColor="text-red-600"
/>

      <Faqs faqs={faqs} head="Frequently asked questions" />

      <section className=" py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
              <div className="text-center mb-8">

                <h2 className="text-3xl md:text-4xl font-bold  text-red-600">
                  Related services
                </h2>
              </div>
              <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                Explore our full set of services that connect with corporate investigations. Use the links below to learn more or to request a short scoping call.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                  {services6.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      link={service.link}
                    />
                  ))}
                </div>
        </motion.div>
      </section>

    

      
      <div className="space-y-24 relative">
      {actionSection.map((action, index) => (
    <ActionSection
      key={index}
      title={action.title}
      description={action.description}
      primaryButton={action.primaryButton} 
    />
  ))}
</div>

    </div>
  );
}