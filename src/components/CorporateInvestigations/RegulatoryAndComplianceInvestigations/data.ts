import {
  SpellCheck2,
  CircleDollarSign,
  FileUp,
  LibraryBig,
  MessageSquareQuote,
  Star,
  Code,
  MailIcon,
} from "lucide-react";
import type { FAQ } from "./Faqs";
import type { ActionItem } from "./Cta";
import type { ServiceItem } from "@/components/common/cards-section";
import type { MethodStep } from "./InvestigationMethod";

export const heroData = {
  mainText: "Regulators expect clear answers and a fair process. ",
  paragraphs: [
    "   Venovox helps you investigate possible breaches and show credible progress. We focus on facts, legal defensibility, and practical change. Our team reviews high risk transactions, third parties, and control gaps. We work with your legal and compliance leaders to protect privilege and to meet local rules.",
  ],
};

export const introductionData = {
  title: "What this page covers",
  description:
    "This page explains how Venovox investigates anti bribery and corruption, anti money laundering, sanctions and export controls, and related books and records issues. It also sets out how we support dawn raid response, independent reviews, and remedial plans. You will see when to start, how we work, what you receive, and the results you can expect.",
};

export const whenToActData = {
  title: "When to act",
  subtitle:
    "Move quickly when there is a credible concern. Early action preserves evidence and builds trust with regulators and your board.",
  listItems: [
    "A whistleblower report or hotline alert names a payment or a partner",
    "A regulator request, dawn raid, or inquiry arrives",
    "Sanctions screening flags a hit that was missed in the past",
    "Transaction monitoring shows unusual patterns or structuring",
    "A due diligence review reveals hidden ownership or adverse media",
    "Audit findings point to weak approvals or false records",
  ],
  highlightBoxText:
    "If the facts are unclear we can begin with a focused intake review and a short chronology. This helps you decide the right scope.",
};

export const areasWeInvestigateServices: ServiceItem[] = [
  {
    title: "Anti bribery and corruption",
    description:
      "We look at payments, benefits, and decision points that may involve public officials or private bribery. We review third party agreements, marketing development funds, rebates, sponsorships, gifts, travel, and entertainment. We compare what was approved to what occurred in the field. We test high risk markets and channels and we map the control gaps that allowed risk to pass.",
    icon: SpellCheck2,
  },
  {
    title: "Anti money laundering",
    description:
      "We test customer due diligence, onboarding steps, risk scoring, screening, and alert handling. We review sample files and look for missing documents, weak justification, and poor escalation. We assess the tuning of transaction monitoring and the quality of investigations. We confirm whether suspicious activity reports were made on time and with enough detail.",
    icon: CircleDollarSign,
  },
  {
    title: "Sanctions and export controls",
    description:
      "We screen counterparties, vessels, and beneficial owners. We review routing, transshipment, and payment paths that may hide the true party. We check restricted party lists, sectoral rules, and export classifications. We work with external counsel to judge the risk and to plan disclosures where required.",
    icon: FileUp,
  },
  {
    title: "Books and records",
    description:
      "We test the accuracy of accounting entries and supporting documents. We look for vague descriptions, false vendors, round numbers, and off cycle entries. We compare ledgers with contracts and delivery proof. We align payment dates with key events like tenders, site visits, and approvals.",
    icon: LibraryBig,
  },
  {
    title: "Dawn raid readiness and response",
    description:
      "We help you prepare playbooks and brief teams. In the event of a raid we support reception, document handling, and legal coordination. We keep a log of actions and items taken. After the event we help you stabilize systems, continue business, and plan a careful internal review.",
    icon: MessageSquareQuote,
  },
  {
    title: "Monitorships and independent reviews",
    description:
      "Where a regulator appoints a monitor or requests an independent review, we support planning, evidence gathering, and progress tracking. We set clear milestones, owners, and measures of success. We prepare simple reports that show how risks are being reduced over time.",
    icon: Star,
  },
  {
    title: "Remediation and program uplift",
    description:
      "We turn findings into practical change. We update policies, simplify approvals, and add detective controls. We train teams and leaders. We plan quick wins that reduce risk now and longer fixes that build a stronger culture.",
    icon: Code,
  },
];

export const legalRegulatorInterfaceServices: ServiceItem[] = [
  {
    title: "Privilege and work streams",
    description:
      "We document instructions and separate privileged and non privileged tracks where needed. We use clear labels and distribution lists to keep files clean.",
  },
  {
    title: "Regulatory strategy",
    description:
      "We help you plan timing, scope, and messages. We prepare briefing packs with key facts, actions taken, and remediation plans. We support voluntary disclosures and responses to formal requests.",
  },
  {
    title: "Cross border coordination",
    description:
      "For multi country matters we align with local counsel and partners. We respect privacy and data transfer rules and we keep a single master record so leaders see the whole picture.",
  },
];

export const outcomesServices: ServiceItem[] = [
  {
    description: "Clear answers to the questions regulators and boards ask",
  },
  {
    description: "Evidence that stands up to legal review and audit",
  },
  {
    description: "A practical plan to fix gaps and show progress",
  },
  {
    description: "Better controls, better culture, and lower risk going forward",
  },
];

export const whyVenovoxServices: ServiceItem[] = [
  {
    title: "Independent and trusted",
    description:
      "We report facts as we find them and we act with care. Our work is transparent and repeatable.",
  },
  {
    title: "Cross border experience",
    description:
      "We handle matters that span multiple countries. We work with local experts and follow local law.",
  },
  {
    title: "Multidisciplinary team",
    description:
      "Investigators, forensic accountants, sanctions and AML specialists, and digital analysts work as one team. You get a complete view without managing several vendors.",
  },
  {
    title: "Clear communication",
    description:
      "You get a single point of contact, short updates, and reports that leaders can read in minutes.",
  },
];

export const relatedServicesData: ServiceItem[] = [
  {
    title: "Corporate Intelligence and OSINT",
  },
  {
    title: "Fraud Risk Management and Prevention",
  },
  {
    title: "Asset Tracing and Recovery",
  },
  {
    title: "Digital Forensics and Incident Investigations",
  },
  {
    title: "Litigation Support Investigations",
  },
  {
    title: "Corporate Investigations Hub",
  },
];

export const cardsSections = [
  {
    title: "Areas we investigate",
    services: areasWeInvestigateServices,
  },
  {
    title: "Legal and regulator interface",
    subtitle:
      "We work hand in hand with your counsel. Our goal is to protect privilege, reduce risk, and foster constructive engagement.",
    services: legalRegulatorInterfaceServices,
  },
  {
    title: "Outcomes you can expect",
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
      "Explore our full set of services that connect with regulatory and compliance investigations. Use the links below to learn more or to request a short scoping call.",
    services: relatedServicesData,
  },
];

export const investigationMethodData = {
  title: "Our investigation method",
  description:
    "Venovox follows a disciplined method that protects privilege and produces reliable results. We keep a calm pace and give plain language updates.",
  steps: [
    {
      num: 1,
      title: "Intake and scoping",
      description:
        "We confirm the questions to be answered, the time window, and the teams involved. We set a plan for evidence preservation and stakeholder communication.",
    },
    {
      num: 2,
      title: "Preservation and collection",
      description:
        "We place legal holds and secure emails, chats, and files. We collect documents from finance, sales, compliance, and legal. We gather third party contracts, invoices, and proof of service. For digital sources we follow chain of custody.",
    },
    {
      num: 3,
      title: "Transaction testing",
      description:
        "We select samples based on risk. We test approvals, support, delivery, and payment routing. We compare data across systems to confirm whether each step was valid and in policy.",
    },
    {
      num: 4,
      title: "Third party and ownership checks",
      description:
        "We review beneficial ownership and related parties. We use open sources and structured data to find links, adverse media, and sanctions risk. We confirm whether due diligence was performed and whether red flags were cleared with care.",
    },
    {
      num: 5,
      title: "Interviews and fact pattern",
      description:
        "We run structured interviews with staff and partners. We test claims against documents and logs. We build a timeline that explains who acted, what was known, and when decisions were made.",
    },
    {
      num: 6,
      title: "Reporting and advice",
      description:
        "We provide an executive summary, a detailed report with findings, and an appendix with evidence. We explain limits and confidence levels. We advise on disclosures, engagement with regulators, and next steps for remediation.",
    },
  ] as MethodStep[],
};

export const whatYouReceiveData = {
  title: "What you receive from Venovox",
  listItems: [
    "Risk register with root causes and owners",
    "Transaction testing workbook and sampling method",
    "Issue memos on each significant finding",
    "Board and executive slide pack",
    "Regulator briefing pack with facts and actions",
    "Remediation roadmap with quick wins and long term fixes",
    "Training plan and simple job aids for front line teams",
  ],
};

export const faqsData: FAQ[] = [
  {
    id: "1",
    question: "Do you help with voluntary disclosures?",
    answer:
      "Yes. We align with counsel to plan timing, scope, and messaging for constructive regulator engagement.",
  },
  {
    id: "2",
    question: "How do you select transactions for testing?",
    answer:
      "We use risk based sampling that focuses on high risk markets, channels, counterparties, and red flag patterns.",
  },
  {
    id: "3",
    question: "Can you support a dawn raid response?",
    answer:
      "Yes. We provide playbooks, on call guidance, evidence logging, and post event stabilization and review.",
  },
  {
    id: "4",
    question: "What outcomes should we expect?",
    answer:
      "Clear answers to regulator questions, evidence that stands up to review, and a practical remediation roadmap.",
  },
];

export const ctaData: ActionItem[] = [
  {
    title: "Ready to get started?",
    description:
      "  If you face a possible breach or a regulator inquiry, speak with Venovox today. Share the basic facts and your timeline. We will propose first steps that protect evidence and show control. We can start light with an intake review, then scale the work as needed. ",
    primaryButton: {
      text: "Get in Touch",
      link: "/my-en/contact-us",
      icon: MailIcon,
    },
  },
];

