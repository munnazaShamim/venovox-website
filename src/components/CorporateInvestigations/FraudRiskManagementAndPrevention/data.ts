import {
  ShieldCheck,
  BarChart3,
  Monitor,
  MailIcon,
  HandCoins,
  BadgePoundSterling,
  BaggageClaim,
  Speech,
  ChartCandlestick,
  Asterisk,
  SquareActivity,
} from "lucide-react";
import type { FAQ } from "../RegulatoryAndComplianceInvestigations/Faqs";
import type { ActionItem } from "../RegulatoryAndComplianceInvestigations/Cta";
import type { ServiceItem } from "@/components/common/cards-section";
import type { Step } from "../BrandAndIpInvestigations/ThreeStepBand";

export const heroData = {
  mainText: "Strong controls prevent loss and build trust",
  paragraphs: [
    " Venovox helps you find weak spots, design simple controls, and monitor them in a steady way. We focus on the risks that matter most to your business. Our approach is practical and kind. We teach people what good looks like and we give leaders clear insight so they can act early.",
  ],
};

export const threeStepBandData: Step[] = [
  {
    icon: BarChart3,
    title: "Assess",
    description: "Find weak spots and set priorities",
  },
  {
    icon: ShieldCheck,
    title: "Build",
    description: "Design simple, strong controls",
  },
  {
    icon: Monitor,
    title: "Monitor",
    description: "Check steadily and act early",
  },
];

export const introductionData = {
  title: "What this page covers",
  description:
    "This page explains how Venovox prevents fraud through risk assessment, control design, data analytics, and training. It shows when to act, which areas are most exposed, and how we build a simple program that your teams can run. You will see what you receive, the outcomes you can expect, and the related services that complete the picture.",
};

export const whyPreventionMattersData = {
  title: "Why prevention matters",
  description:
    "Fraud is easier to stop than to fix. A small set of clear controls can block many schemes. Prevention also supports culture. When staff see fair rules and fair checks, they feel safe and respected. Prevention saves money, protects reputation, and reduces the chance you will need a long investigation later. It also helps you meet the expectations of your board, auditors, and regulators.",
};

export const whenToActData = {
  title: "When to act",
  subtitle: "Start your prevention program when these signals appear.",
  listItems: [
    "Rapid growth or entry into new markets",
    "New systems, mergers, or outsourcing",
    "Repeated near misses or small losses that hint at bigger gaps",
    "New partners or a faster vendor onboarding process",
    "Audit findings on approvals, segregation of duties, or data quality",
    "A recent incident that revealed control issues",
  ],
  highlightBoxText:
    "If you are unsure where to start, we can begin with a short review and a simple heat map of your highest risks.",
};

export const commonFraudRisksServices: ServiceItem[] = [
  {
    title: "Procurement and payables",
    description:
      "False vendors, duplicate invoices, kickbacks, fake approvals, and split purchases. We check master data, approvals, three way match, and payment rules.",
    icon: HandCoins,
  },
  {
    title: "Sales and receivables",
    description:
      "Fictitious sales, unusual credits, channel stuffing, and write offs. We test price lists, discounts, returns, and credit notes.",
    icon: BadgePoundSterling,
  },
  {
    title: "Travel and expenses",
    description:
      "Personal spend, duplicate claims, altered receipts, and mileage abuse. We set rules that are simple to follow and easy to check.",
    icon: BaggageClaim,
  },
  {
    title: "Payroll and HR",
    description:
      "Ghost employees, false hours, and misuse of allowances. We align HR and payroll data and test for unusual patterns.",
    icon: Speech,
  },
  {
    title: "Inventory and assets",
    description:
      "Shrinkage, theft, and misuse of company assets. We design cycle counts, access rules, and handover checks.",
    icon: ChartCandlestick,
  },
  {
    title: "Third party risk",
    description:
      "Agents, distributors, and consultants that create bribery or sanctions exposure. We add due diligence, contract clauses, and monitoring.",
    icon: Asterisk,
  },
  {
    title: "IT and access",
    description:
      "Shared accounts, weak privilege controls, and risky downloads. We link identity, approvals, and offboarding steps.",
    icon: SquareActivity,
  },
];

export const ourApproachData = {
  title: "Our approach to fraud risk management",
  description:
    "Venovox uses a clear and steady method that builds lasting control without heavy burden on your teams.",
  steps: [
    {
      title: "Assess",
      description:
        "We run a fraud risk assessment. We meet with process owners and review policies and data. We identify where value could leak and where controls are missing or weak. We score risks by impact and likelihood and we propose a small set of priorities.",
    },
    {
      title: "Design",
      description:
        "We choose controls that fit your size and systems. We keep steps simple so people can follow them on a busy day. We set clear roles, thresholds, and approvals. We add checks that can be measured and we write short job aids.",
    },
    {
      title: "Build",
      description:
        "We help you put controls in place. This can include updates to forms and workflows, changes to master data, and automated rules in your systems. We align with IT change processes and we document each change.",
    },
    {
      title: "Monitor",
      description:
        "We set up ongoing checks. Some are manual spot checks. Others use data analytics to find patterns that merit a closer look. We design a short monthly report that shows what was tested and what was found.",
    },
    {
      title: "Train",
      description:
        "We train teams and managers. We explain why controls matter and how to use them. We give examples of real life issues and the right response. We teach people how to raise concerns early and with care.",
    },
    {
      title: "Review",
      description:
        "We check what works and what could be better. We adjust rules that cause friction and we strengthen weak spots. We plan a yearly refresh so your program stays current as the business changes.",
    },
  ],
};

export const dataAnalyticsData = {
  title: "Data analytics and continuous monitoring",
  subtitle:
    "Data makes prevention stronger. Venovox sets up simple tests that run on a schedule. We avoid heavy tools unless you already have them. We focus on clear signals and fast follow up.",
  listItems: [
    "Duplicate invoice and vendor checks",
    "Round number and weekend payment tests",
    "Split purchase and threshold checks",
    "Travel and expense anomaly checks",
    "Ghost employee and payroll mismatch checks",
    "Master data changes without approval",
    "Access rights that do not match job roles",
  ],
  highlightBoxText:
    "We agree on who reviews alerts, how to clear them, and how to record actions. This keeps effort focused and results easy to show.",
};

export const governanceReportingData = {
  title: "Governance and reporting",
  description:
    "Fraud prevention works best when people know what to do and who owns each step. We set a simple governance model with clear lines.",
  items: [
    "A senior sponsor who removes roadblocks",
    "Process owners for each control set",
    "A small risk forum that meets monthly",
    "A quarterly report to leaders and the board",
  ],
  highlightText:
    "We include measures that show progress, such as time to close alerts, number of controls tested, and trend lines for issues.",
};

export const whatYouReceiveData = {
  title: "What you receive from Venovox",
  listItems: [
    "A fraud risk assessment with a heat map and top risks",
    "A control matrix with owners, frequency, and evidence",
    "Data tests and a light dashboard for monthly review",
    "Updated policies, job aids, and training materials",
    "A remediation plan with quick wins and longer actions",
    "A board and executive pack that explains progress in plain language",
  ],
};

export const outcomesServices: ServiceItem[] = [
  {
    description: "Fewer losses and faster detection of issues",
  },
  {
    description: "Clear roles and controls that staff can follow",
  },
  {
    description: "Better records that stand up to audit and legal review",
  },
  {
    description: "Higher trust and a stronger speak up culture",
  },
  {
    description: "A program that grows with your business without heavy cost",
  },
];

export const whyVenovoxServices: ServiceItem[] = [
  {
    title: "Independent and practical",
    description:
      "We report facts as we find them and we design steps that work in the real world. We remove jargon and focus on results.",
  },
  {
    title: "Cross border experience",
    description:
      "We help global teams align on simple standards while respecting local rules. We support multi language training and reporting.",
  },
  {
    title: "Multidisciplinary team",
    description:
      "Investigators, control specialists, data analysts, and trainers work as one team. You do not need to coordinate several vendors.",
  },
  {
    title: "Clear communication",
    description:
      "You get one point of contact, short updates, and tools your teams can use without extra help.",
  },
];

export const relatedServicesData: ServiceItem[] = [
  {
    title: "Regulatory and Compliance Investigations",
  },
  {
    title: "Corporate Intelligence and OSINT",
  },
  {
    title: "Digital Forensics and Incident Investigations",
  },
  {
    title: "Workplace Misconduct Investigations",
  },
  {
    title: "Corporate Investigations Hub",
  },
];

export const cardsSections = [
  {
    title: "Common fraud risks we address",
    services: commonFraudRisksServices,
  },
  {
    title: "Outcomes you can expect",
    bgColor: "bg-white",
    services: outcomesServices,
  },
  {
    title: "Why Venovox",
    services: whyVenovoxServices,
  },
  {
    title: "Related services",
    bgColor: "bg-white",
    description:
      "Explore our full set of services that connect with fraud risk management and prevention. Use the links below to learn more or to request a short scoping call.",
    services: relatedServicesData,
  },
];

export const faqsData: FAQ[] = [
  {
    id: "1",
    question: "How long does a fraud risk assessment take?",
    answer:
      "Scope and size matter, but many organizations can complete a focused assessment in a few weeks.",
  },
  {
    id: "2",
    question: "Do we need new software for monitoring?",
    answer:
      "Not always. We often start with light analytics using your current systems and scale if needed.",
  },
  {
    id: "3",
    question: "Can you train our managers and teams?",
    answer: "Yes. We provide practical sessions with real examples and simple job aids.",
  },
  {
    id: "4",
    question: "How do we measure success?",
    answer:
      "Lower losses, faster detection, fewer repeat issues, and positive audit and regulator feedback.",
  },
];

export const ctaData: ActionItem[] = [
  {
    title: "Ready to get started?",
    description:
      " If you want to reduce fraud risk and build simple, strong controls, talk to Venovox. Share your goals and your timeline. We will suggest a short plan that starts with the areas of highest impact and lowest effort. We can begin with a focused assessment and a pilot for one process, then scale across the business once you see results. ",
    primaryButton: {
      text: "Get in Touch",
      link: "/my-en/contact-us",
      icon: MailIcon,
    },
  },
];

