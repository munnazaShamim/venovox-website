import {
  ShieldCheck,
  MailIcon,
  Search,
  CheckCircle,
  CircleUserRound,
  BetweenHorizontalStart,
  Worm,
  CloudFog,
  HardDrive,
  Tally3,
} from "lucide-react";
import type { FAQ } from "../RegulatoryAndComplianceInvestigations/Faqs";
import type { ActionItem } from "../RegulatoryAndComplianceInvestigations/Cta";
import type { ServiceItem } from "@/components/common/cards-section";
import type { MethodStep } from "../RegulatoryAndComplianceInvestigations/InvestigationMethod";

export const heroData = {
  mainText: "When accounts are breached or data goes missing, speed and care matter",
  paragraphs: [
    "  Venovox helps you understand what happened, limit the damage, and get back to safe operations. We collect and preserve evidence, analyze devices and logs, and deliver clear findings that leaders and lawyers can use. Our work is calm, methodical, and discreet.",
  ],
};

export const introductionData = {
  title: "What this page covers",
  description:
    "This page explains how Venovox investigates cyber incidents and data loss. It shows when to act, what types of cases we handle, our forensics process, and how we coordinate with legal, IT, and security teams. It also lists the deliverables you receive, the outcomes you can expect, and the related services that complete your response.",
};

export const whenToActData = {
  title: "When to act",
  subtitle: "Move quickly if you see early signs of compromise. Fast action preserves evidence and reduces impact.",
  listItems: [
    "A ransomware note or sudden encryption of files",
    "Unusual data transfers or downloads outside working hours",
    "New forwarding rules or mail flow changes in email",
    "Alerts on admin actions or disabled security tools",
    "Staff reporting suspicious prompts or messages",
    "A whistleblower suggests data was taken by a departing employee",
    "A regulator or customer asks about a potential breach",
  ],
  highlightBoxText: "If you are unsure, start with a short triage call. We will help you decide the first safe steps.",
};

export const incidentTypesServices: ServiceItem[] = [
  {
    title: "Account compromise and BEC",
    description:
      "Unauthorized access to email or collaboration tools that leads to invoice fraud, phishing, or data exposure.",
    icon: CircleUserRound,
  },
  {
    title: "Data theft and insider threat",
    description:
      "Copying of files to personal accounts or devices, repository cloning, or covert use of portable storage.",
    icon: BetweenHorizontalStart,
  },
  {
    title: "Malware and ransomware",
    description: "Execution of malicious code that encrypts systems or provides backdoor access.",
    icon: Worm,
  },
  {
    title: "Cloud security events",
    description:
      "Misconfigurations or abused tokens in Microsoft 365, Google Workspace, AWS, or Azure that expose data.",
    icon: CloudFog,
  },
  {
    title: "Endpoint and server intrusions",
    description: "Lateral movement, privilege escalation, and persistence on laptops, desktops, and servers.",
    icon: HardDrive,
  },
  {
    title: "Third party incidents",
    description: "Breaches at vendors or partners that place your data at risk.",
    icon: Tally3,
  },
];

export const investigationProcessData = {
  title: "Our investigation and forensics process",
  description:
    "Venovox follows a structured method that protects evidence and produces reliable answers. We explain each step in plain language and align with your change controls.",
  steps: [
    {
      num: 1,
      title: "Triage and scope",
      description:
        "We confirm the type of incident, systems affected, and immediate risks. We agree on containment steps that do not destroy evidence. We set a communication plan and points of contact.",
    },
    {
      num: 2,
      title: "Evidence preservation",
      description:
        "We place legal holds and document the scene. We preserve volatile data when needed and collect forensic images of key devices. We secure server and cloud logs and ensure chain of custody for every item.",
    },
    {
      num: 3,
      title: "Collection",
      description:
        "We gather data from endpoints, servers, and cloud platforms. Typical sources include EDR telemetry, SIEM logs, email and audit logs, identity and access logs, network devices, collaboration tools, and mobile devices. We collect only what is needed and we store it safely.",
    },
    {
      num: 4,
      title: "Analysis",
      description:
        "We build a timeline of activity and correlate events across systems. We review process and driver listings, scheduled tasks, registry changes, and persistence methods. We analyze email headers and message traces. We inspect documents for metadata and exfil patterns. Where malware is present we examine samples in a safe environment to understand behavior and indicators of compromise.",
    },
    {
      num: 5,
      title: "Findings and reporting",
      description:
        "We prepare a clear executive summary and a detailed technical report. We include indicators of compromise, affected assets, data at risk, initial access method, and actions taken by the actor. We explain the limits of what can be confirmed and the confidence level for each key point.",
    },
    {
      num: 6,
      title: "Recovery and hardening",
      description:
        "We support safe containment and recovery. Typical steps include credential resets, MFA enforcement, removal of persistence, patching, EDR tuning, mail rule clean up, and restoration from backups. We deliver a prioritized hardening plan to reduce the chance of repeat events.",
    },
  ] as MethodStep[],
};

export const legalPrivacyData = {
  title: "Legal, privacy, and regulator alignment",
  description:
    "Cyber matters often touch legal privilege and privacy rules. We work closely with counsel and privacy officers so your response stays defensible.",
  items: [
    "Privilege planning and clean work streams",
    "Chain of custody for all data and devices",
    "Guidance on breach notification triggers and timelines",
    "Support for regulator and customer communications",
    "Coordination with insurers where policies apply",
  ],
};

export const itSecurityData = {
  title: "Working with IT and security",
  description:
    "We slot into your existing process and tools. We respect change windows and service levels. We use plain language and short updates so everyone stays aligned.",
  items: [
    "Clear roles and responsibilities from day one",
    "Safe containment that avoids data loss",
    "Out of hours support for urgent steps",
    "Knowledge transfer so your team can maintain controls",
  ],
};

export const toolsPlatformsData = {
  title: "Tools and platforms we support",
  description:
    "We work with common enterprise tools and log sources. Examples include endpoint detection and response tools, security information and event management systems, identity and access logs, cloud platform audit logs, email systems, and collaboration suites. If you use a different toolset we adapt to it.",
};

export const whatYouReceiveData = {
  title: "What you receive from Venovox",
  listItems: [
    "Executive summary for leaders and the board",
    "Detailed technical report with timelines and evidence",
    "List of indicators of compromise and defensive rules",
    "Data exposure assessment and notification guidance",
    "Hardening plan with quick wins and longer actions",
    "Briefing pack for customers or regulators if required",
  ],
};

export const outcomesServices: ServiceItem[] = [
  {
    description: "A clear view of how the incident happened and what was affected",
  },
  {
    description: "Evidence that supports legal decisions and notification",
  },
  {
    description: "Faster recovery with fewer surprises",
  },
  {
    description: "Stronger controls that reduce future risk",
  },
];

export const whyVenovoxServices: ServiceItem[] = [
  {
    title: "Independent and trusted",
    description:
      "We report facts as we find them and we protect your privacy. Our work is transparent and repeatable.",
  },
  {
    title: "Cross border capability",
    description:
      "Many incidents cross regions and time zones. We coordinate with local partners and keep one master view for your leaders.",
  },
  {
    title: "Multidisciplinary team",
    description:
      "Forensic analysts, investigators, and compliance specialists work as one team. You get complete answers without juggling vendors.",
  },
  {
    title: "Clear and calm communication",
    description:
      "You get one point of contact, short status updates, and reports that non technical leaders can read in minutes.",
  },
];

export const relatedServicesData: ServiceItem[] = [
  {
    title: "Regulatory and Compliance Investigations",
  },
  {
    title: "Litigation Support Investigations",
  },
  {
    title: "Workplace Misconduct Investigations",
  },
  {
    title: "Corporate Intelligence and OSINT",
  },
  {
    title: "Corporate Investigations Hub",
  },
];

export const cardsSections = [
  {
    title: "Incident types we handle",
    bgColor: "bg-white",
    services: incidentTypesServices,
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
      "Explore our full set of services that connect with digital forensics and incident investigations. Use the links below to learn more or to request a short scoping call.",
    services: relatedServicesData,
  },
];

export const faqsData: FAQ[] = [
  {
    id: "1",
    question: "Can staff keep working while you collect evidence?",
    answer: "Often yes. We plan safe containment and target collections to reduce disruption while protecting data.",
  },
  {
    id: "2",
    question: "What cloud sources can you examine?",
    answer:
      "We collect logs and artifacts from suites like Microsoft 365, Google Workspace, common EDR and SIEM tools, and major cloud platforms.",
  },
  {
    id: "3",
    question: "Do you handle ransomware negotiations?",
    answer:
      "We focus on investigation and recovery and can coordinate with counsel and specialist negotiators where appropriate.",
  },
  {
    id: "4",
    question: "How long do you retain forensic images?",
    answer: "Retention follows your policy and legal guidance. We store evidence securely and control access.",
  },
];

export const ctaData: ActionItem[] = [
  {
    title: "Ready to get started?",
    description:
      "  If you are facing a cyber incident or data loss, speak with Venovox today. Share what you see and your timeline. We will propose safe first steps and begin preservation. We can start small with triage and expand as needed.",
    primaryButton: {
      text: "Get in Touch",
      link: "/my-en/contact-us",
      icon: MailIcon,
    },
  },
];

