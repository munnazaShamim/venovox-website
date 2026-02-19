import {
  Search,
  FileText,
  Ban,
  MailIcon,
  ReceiptCent,
  CirclePercent,
  MapMinus,
  BrushCleaning,
  Bubbles,
  Link2,
  FlaskConical,
  Check,
  TvMinimalPlay,
  ScanFace,
  Scale,
} from "lucide-react";
import type { FAQ } from "../RegulatoryAndComplianceInvestigations/Faqs";
import type { ActionItem } from "../RegulatoryAndComplianceInvestigations/Cta";
import type { ServiceItem } from "@/components/common/cards-section";
import type { Step } from "./ThreeStepBand";

export const heroData = {
  mainText: "Your brand is a promise to customers",
  paragraphs: [
    " When counterfeit goods or grey market diversion appear, trust and revenue are at risk. Venovox helps you find the source, collect proof, and act with speed. We run test buys, trace supply chains, and support takedowns and seizures. We work with care and keep your name protected.",
  ],
};

export const threeStepBandData: Step[] = [
  {
    icon: Search,
    title: "Find",
    description: "Identify sources and actors",
  },
  {
    icon: FileText,
    title: "Prove",
    description: "Collect court-ready evidence",
  },
  {
    icon: Ban,
    title: "Remove",
    description: "Act with speed and precision",
  },
];

export const introductionData = {
  title: "What this page covers",
  description:
    "This page explains how Venovox investigates counterfeit and grey market activity. It shows how we find the actors, collect evidence that stands up to review, and work with platforms, payment providers, logistics firms, and law enforcement. You will see when to act, how we work, what you receive, and the results you can expect.",
};

export const whyBrandMattersData = {
  title: "Why brand and IP abuse matters",
  description:
    "Counterfeit and diversion harm safety, customer trust, and margins. They confuse distributors and upset channel partners. They pull support teams away from real customers. A calm and steady investigation stops the loss and shows partners that you protect your brand.",
};

export const whenToActData = {
  title: "When to act",
  subtitle:
    "Move early when warning signs appear. Fast action protects customers and preserves leads.",
  listItems: [
    "Sudden price drops or unusual discounts online",
    "New sellers with limited history or vague contact details",
    "Product complaints that do not match your quality control data",
    "Missing units between factory output and market sales",
    "Domain names or social profiles that mimic your brand",
    "A whistleblower tip about diversion or leaks",
  ],
  highlightBoxText:
    "If you are unsure, start with a quiet scan. We can confirm scale and risk before you go public.",
};

export const typesOfCasesServices: ServiceItem[] = [
  {
    title: "Counterfeit goods",
    description:
      "We identify makers and sellers of fake products. We map how goods move from source to market. We collect samples and keep chain of custody so that tests and photos can be used in court.",
    icon: ReceiptCent,
  },
  {
    title: "Grey market diversion",
    description:
      "We find where genuine stock is leaking into unintended markets. We review distributor agreements, rebate programs, and serial ranges. We compare factory output and sales to spot gaps.",
    icon: CirclePercent,
  },
  {
    title: "Trademark and brand misuse",
    description:
      "We remove listings that use your marks without consent. We address misleading ads, fake service centers, and lookalike packaging.",
    icon: MapMinus,
  },
  {
    title: "Trade secret and design theft",
    description:
      "We investigate leaks of formulas, drawings, software, or process know how. We review access, downloads, and unusual use of external drives. We align with our digital team where needed.",
    icon: BrushCleaning,
  },
  {
    title: "Online impersonation and phishing",
    description:
      "We locate false websites, social profiles, and messaging campaigns that pretend to be you. We gather proof and support takedowns.",
    icon: Bubbles,
  },
  {
    title: "Supply chain leaks",
    description:
      "We trace leaks in manufacturing, packaging, warehousing, and transit. We visit sites and review logs to see where controls failed.",
    icon: Link2,
  },
];

export const investigationApproachServices: ServiceItem[] = [
  {
    title: "Intelligence and OSINT",
    description:
      "We scan marketplaces, social platforms, review sites, and forums. We collect seller data, contact details, and shipping patterns. We gather open source records on companies and domains.",
    icon: Search,
  },
  {
    title: "Test buys with chain of custody",
    description:
      "We make covert purchases on markets of interest. We record the process, keep receipts, and store items securely. We photograph packaging, labels, and serial numbers. Where needed we send items for lab testing and keep a clean record from purchase to report.",
    icon: FlaskConical,
  },
  {
    title: "Supply chain tracing and site checks",
    description:
      "We review bills of lading, warehouse logs, and shipping labels. We compare serial ranges and batch codes to your own records. We visit factories, warehouses, and retail points with local partners.",
    icon: Check,
  },
  {
    title: "Digital monitoring and takedowns",
    description:
      "We monitor listings and ads. We prepare platform notices with the evidence needed for quick action. We work with hosts, registrars, and payment providers to remove or block bad actors.",
    icon: TvMinimalPlay,
  },
  {
    title: "Forensic marking and serialization",
    description:
      "We help you add or improve markings, QR codes, or track and trace features. This makes it easier to prove origin and to spot leakage points.",
    icon: ScanFace,
  },
  {
    title: "Partner and law enforcement coordination",
    description:
      "We brief distributors and logistics partners and agree on simple checks. Where the facts support it, we prepare referrals to law enforcement and support raids with careful planning.",
    icon: Scale,
  },
];

export const legalEnforcementSupportData = {
  title: "Legal and enforcement support",
  subtitle:
    "We align with your counsel to plan the right mix of actions. We prepare clean files that support notices and court steps.",
  listItems: [
    "Marketplace and social media notices that meet platform rules",
    "Domain dispute filings and registrar requests",
    "Customs recordation and training for border agents",
    "Cease and desist letters and settlement options",
    "Civil claims with evidence packs and witness statements",
    "Criminal referrals where public safety is at risk",
  ],
};

export const crossBorderCapabilityData = {
  title: "Cross border capability",
  description:
    "Brand abuse is rarely limited to one place. Venovox works across regions with trusted partners. We collect records, conduct site checks, and coordinate language and local practice. We respect privacy and data rules in every step.",
};

export const whatYouReceiveData = {
  title: "What you receive from Venovox",
  listItems: [
    "A brand risk map that shows sources, routes, and markets",
    "A seller and platform register with links, contacts, and status",
    "Test buy reports with photos, receipts, and chain of custody notes",
    "Evidence packs for takedowns and for court use",
    "A dashboard that tracks removes, seizures, and repeat actors",
    "A playbook for partners with checks and contact points",
    "A short board pack that explains scale, impact, and next steps",
  ],
};

export const outcomesServices: ServiceItem[] = [
  {
    description: "Faster removals and fewer fake listings",
  },
  {
    description: "Clear evidence for court and for law enforcement",
  },
  {
    description: "Better control of channels and pricing",
  },
  {
    description: "Safer customers and stronger trust in your brand",
  },
  {
    description: "Lower cost of response as repeat actors are blocked",
  },
];

export const whyVenovoxServices: ServiceItem[] = [
  {
    title: "Independent and discreet",
    description:
      "We work quietly and keep your brand safe while we collect proof.",
  },
  {
    title: "Cross border reach",
    description:
      "We act across regions and manage local rules and languages with care.",
  },
  {
    title: "Multidisciplinary team",
    description:
      "Investigators, digital analysts, and supply chain specialists work as one team. You do not need to manage several vendors.",
  },
  {
    title: "Practical and fast",
    description:
      "We focus on steps that deliver results. We report in plain language so leaders can act.",
  },
];

export const relatedServicesData: ServiceItem[] = [
  {
    title: "Corporate Intelligence and OSINT",
  },
  {
    title: "Digital Forensics and Incident Investigations",
  },
  {
    title: "Asset Tracing and Recovery",
  },
  {
    title: "Corporate Investigations Hub",
  },
];

export const cardsSections = [
  {
    title: "Types of cases we handle",
    services: typesOfCasesServices,
  },
  {
    title: "Our investigation approach",
    subtitle:
      "Venovox combines field work, digital monitoring, and legal support. We keep a low profile and document every step.",
    bgColor: "bg-white",
    services: investigationApproachServices,
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
      "Explore our full set of services that connect with brand and IP investigations. Use the links below to learn more or to request a short scoping call.",
    services: relatedServicesData,
  },
];

export const faqsData: FAQ[] = [
  {
    id: "1",
    question: "Do you run covert test buys?",
    answer:
      "Yes. We keep receipts, photos, and chain of custody so samples can be used as evidence.",
  },
  {
    id: "2",
    question: "Can you help with customs recordation?",
    answer:
      "Yes. We prepare filings and training to help border agents spot risky shipments.",
  },
  {
    id: "3",
    question: "How quickly can listings be removed?",
    answer:
      "Timing varies by platform and evidence. Strong proofs often lead to removal within hours or days.",
  },
  {
    id: "4",
    question: "Do you coordinate with law enforcement?",
    answer:
      "Where facts support it, we prepare referrals and assist with planning for seizures or raids.",
  },
];

export const ctaData: ActionItem[] = [
  {
    title: "Ready to get started?",
    description:
      " If you see counterfeit or diversion, speak with Venovox. Share what you have seen and where. We will confirm the scale and propose first steps. We can begin with a short scan and one or two test buys, then scale as needed. ",
    primaryButton: {
      text: "Get in Touch",
      link: "/my-en/contact-us",
      icon: MailIcon,
    },
  },
];

