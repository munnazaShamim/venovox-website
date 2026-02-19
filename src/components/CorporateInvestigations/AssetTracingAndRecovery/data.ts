import {
  Telescope,
  BookOpenCheck,
  Brain,
  Gpu,
  GlobeLock,
  MapPin,
  Activity,
  MailIcon,
} from "lucide-react";
import type { FAQ } from "../RegulatoryAndComplianceInvestigations/Faqs";
import type { ActionItem } from "../RegulatoryAndComplianceInvestigations/Cta";
import type { ServiceItem } from "@/components/common/cards-section";

export const heroData = {
  mainText: "When money or property goes missing the clock starts ticking.",
  paragraphs: [
    "  Venovox helps you find what is lost and turn findings into action. We work with care, precision, and discretion. Our team traces assets across borders, lifts the veil on complex structures, and supports legal steps that lead to recovery. You get a calm plan, clear reporting, and evidence that can stand up to challenge.",
  ],
};

export const introductionData = {
  title: "What this page covers",
  description:
    "This page explains how Venovox traces assets and supports recovery. It shows when to begin an asset trace, how we collect and test information, and how we work with your lawyers and finance teams. It also lists the deliverables you will receive, the results you can expect, and the related services that complete the picture.",
};

export const whenToStartData = {
  title: "When to start an asset trace",
  description:
    "Act early if you think value has been hidden or moved. Speed helps preserve evidence and improves your options in court or in negotiations. Typical triggers include internal fraud, vendor or partner disputes, insolvency or bankruptcy, breach of fiduciary duty, judgment or award enforcement, and post exit data theft that may relate to diversion of business. If the facts are unclear we can begin with a short scoping review to confirm whether a full trace is warranted.",
};

export const pathToRecoveryServices: ServiceItem[] = [
  {
    title: "Discover",
    description:
      "We gather information from public records, financial analysis, open source intelligence, and human sources. We build a factual timeline and map the flow of value. Each step is documented so findings can be used with confidence.",
    icon: Telescope,
  },
  {
    title: "Map",
    description:
      "We turn names, entities, addresses, and identifiers into a network graph that shows relationships. The graph helps us see common directors, shared contact details, nominee patterns, and circular transactions. This often reveals the next place to look or a location where a freezing step may succeed.",
    icon: MapPin,
  },
  {
    title: "Act",
    description:
      "We deliver clear outputs including a recovery map, asset register, ownership charts, timeline, exhibits, and a recommended action plan. We support your legal and finance teams with evidence that can be used in court or at the negotiating table.",
    icon: Activity,
  },
];

export const howVenovoxTracesServices: ServiceItem[] = [
  {
    title: "Discovery from public records",
    description:
      "We collect information from corporate and beneficial ownership registers, land and property records, ship and aircraft registries, trademark and patent databases, court filings, procurement records, customs data, and licensing sources. We look for changes in ownership, new filings that align with key dates, and links between people and entities that point to hidden interests.",
    icon: Telescope,
  },
  {
    title: "Forensic accounting and transaction testing",
    description:
      "We review general ledgers, bank statements where available, invoices, contracts, and payment files. We test for round sum payments, split payments, off cycle activity, shell vendors, and unusual rebates. We align payments with known events and look for asset purchases that match the pattern of loss. Where needed we work with your auditors and controllers to secure read only access so the business can continue while we work.",
    icon: BookOpenCheck,
  },
  {
    title: "Open source and human source intelligence",
    description:
      "We search media, trade publications, social networks, domain records, corporate announcements, and community sources. We speak with knowledgeable people where lawful and appropriate. This helps confirm whether an asset is in use, where it is located, and who may control it. We are careful with privacy rules and local custom and we keep a clean record of sources.",
    icon: Brain,
  },
  {
    title: "Digital forensics support",
    description:
      "If data theft or account compromise is suspected we work with our digital team to review devices, logs, and cloud systems. We confirm who accessed what and when, and whether files were moved to external drives or personal accounts. The result is a stronger link between a person, a time period, and a transfer of value.",
    icon: Gpu,
  },
  {
    title: "Network mapping and link analysis",
    description:
      "We turn names, entities, addresses, and identifiers into a graph that shows relationships. The graph helps us see common directors, shared contact details, nominee patterns, and circular transactions. This often reveals the next place to look or a location where a freezing step may succeed.",
    icon: GlobeLock,
  },
];

export const crossBorderData = {
  title: "Cross border and offshore structures",
  description:
    "Many traces lead across jurisdictions. Venovox works with trusted local partners to obtain records and to respect local law. We handle multi language materials, notarized requests, and certified copies where needed. We are familiar with common offshore structures, nominee arrangements, and trusts. We screen for sanctions and trade controls to ensure that recovery steps do not create new risk. Our job is to give you clear choices that fit the rules of each place while keeping the full picture in view.",
};

export const legalFinanceServices: ServiceItem[] = [
  {
    title: "Privilege and confidentiality",
    description:
      "We document instructions and communication lines to protect privilege where possible. We keep clean files and secure all evidence. Sensitive steps are handled by a small core team and we limit access to need to know participants.",
  },
  {
    title: "Evidence standards",
    description:
      "We record sources, dates, and methods. For digital work we keep hashes and tool notes. For interviews we keep attendance, consents, and summaries. This discipline gives your lawyers material they can trust.",
  },
];

export const legalFinanceData = {
  title: "Working with legal and finance teams",
  description:
    "Asset tracing is most effective when it runs in step with legal strategy and financial planning. We align with external counsel and in house teams from the start. We prepare material that supports freezing applications, disclosure requests, and enforcement. We can assist receivers, liquidators, and insolvency practitioners with factual research and on the ground checks. We also help finance teams estimate potential recovery and weigh cost against benefit so decisions are practical and timely.",
  services: legalFinanceServices,
};

export const whatYouReceiveData = {
  title: "What you receive from Venovox",
  subtitle: "We deliver clear and useful outputs that you can take to court or to the table.",
  listItems: [
    "A recovery map that shows the flow of value and the points where you can act",
    "An asset register that lists properties, corporate interests, vehicles, vessels, and other items of value",
    "Ownership charts that explain who controls what and how entities connect",
    "A timeline with key events and transactions",
    "Exhibits and appendices with documents, filings, and sources",
    "A recommended action plan with options, costs, and likely impact",
    "A short pack for leaders and boards that supports decisions",
  ],
};

export const progressReportingData = {
  title: "How progress is reported",
  description:
    "You get regular updates that explain what we found and what it means. We agree a reporting rhythm at the start. Many clients choose weekly progress notes and a structured review every two weeks. Urgent matters can run to a daily cadence. Each update covers new leads, evidence obtained, next steps, and any change to risk or cost. This helps your legal and finance teams make timely moves.",
};

export const outcomesServices: ServiceItem[] = [
  {
    description: "Better insight into where assets are located and who controls them",
  },
  {
    description: "Evidence that supports freezing, disclosure, settlement, or seizure",
  },
  {
    description: "Practical paths to recovery, including quick wins and longer actions",
  },
  {
    description: "Reduced risk of new breaches while you pursue your claim",
  },
  {
    description: "Stronger controls that make future diversion harder",
  },
];

export const whyVenovoxServices: ServiceItem[] = [
  {
    title: "Independent and discreet",
    description:
      "Venovox is trusted because we report facts without fear or favor. We keep a low profile, protect privacy, and act with care in sensitive settings.",
  },
  {
    title: "Cross border reach",
    description:
      "We work across regions through a vetted partner network. We handle language, local practice, and data rules so your case keeps moving.",
  },
  {
    title: "Multidisciplinary team",
    description:
      "Our investigators, forensic accountants, digital specialists, and intelligence analysts work as one team. You get a complete view without managing multiple vendors.",
  },
  {
    title: "Speed with precision",
    description:
      "We move quickly without losing accuracy. Early steps focus on evidence preservation and high value leads so you see results sooner.",
  },
  {
    title: "Ethics and compliance",
    description:
      "We follow the law in each place we work and we respect human rights and privacy. This protects your reputation and the value of the case.",
  },
];

export const relatedServicesData: ServiceItem[] = [
  {
    title: "Litigation Support Investigations",
  },
  {
    title: "Corporate Intelligence and OSINT",
  },
  {
    title: "Regulatory and Compliance Investigations",
  },
  {
    title: "Digital Forensics and Incident Investigations",
  },
  {
    title: "Corporate Investigations Hub",
  },
];

export const cardsSections = [
  {
    title: "Your path to recovery",
    bgColor: "bg-gray-50",
    services: pathToRecoveryServices,
  },
  {
    title: "How Venovox traces assets",
    subtitle:
      "We combine public records, financial analysis, open source intelligence, and human source insight. We build a factual timeline and map the flow of value. Each step is documented so that findings can be used with confidence.",
    bgColor: "bg-gray-50",
    services: howVenovoxTracesServices,
  },
  {
    title: "Outcomes you can expect",
    bgColor: "bg-white",
    services: outcomesServices,
  },
  {
    title: "Why Venovox",
    bgColor: "bg-gray-50",
    services: whyVenovoxServices,
  },
  {
    title: "Related services",
    bgColor: "bg-gray-50",
    description:
      "Explore our full set of services that connect with asset tracing and recovery. Use the links below to learn more or to request a short scoping call.",
    services: relatedServicesData,
  },
];

export const faqsData: FAQ[] = [
  {
    id: "1",
    question: "Can you trace crypto assets?",
    answer:
      "We investigate wallets and transaction flows using open sources and specialized tools, then align findings with legal strategy.",
  },
  {
    id: "2",
    question: "How far back can you look?",
    answer:
      "We follow evidence and available records. Many traces review several years, subject to law and data retention.",
  },
  {
    id: "3",
    question: "Will your findings support freezing orders?",
    answer:
      "Yes. We document sources and methods so counsel can use them in freezing, disclosure, or enforcement steps.",
  },
  {
    id: "4",
    question: "What if assets are in another country?",
    answer:
      "We coordinate with local partners to obtain records and act lawfully while keeping a single master view.",
  },
];

export const ctaData: ActionItem[] = [
  {
    title: "Ready to get started?",
    description:
      "  If you believe assets have been hidden or moved, speak with Venovox today. Share the background and your timeline. We will propose a short plan for the first safe steps, including what to preserve, who to notify, and where to look first. We can start with a scoping call and a light touch discovery, then scale to a full trace once we confirm value at stake. ",
    primaryButton: {
      text: "Get in Touch",
      link: "/my-en/contact-us",
      icon: MailIcon,
    },
  },
];

