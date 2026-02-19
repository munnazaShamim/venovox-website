import {
  ShieldCheck,
  MessageCircle,
  TrendingUp,
  MailIcon,
  CircleSlash,
  UmbrellaOff,
  BriefcaseBusiness,
  Lectern,
  Shredder,
  Shield,
  AudioLines,
  Cpu,
  Droplet,
  GlobeLock,
} from "lucide-react";
import type { FAQ } from "../RegulatoryAndComplianceInvestigations/Faqs";
import type { ActionItem } from "../RegulatoryAndComplianceInvestigations/Cta";
import type { ServiceItem } from "@/components/common/cards-section";
import type { Step } from "../BrandAndIpInvestigations/ThreeStepBand";

export const heroData = {
  mainText: "A strong speak up culture protects people and protects the company",
  paragraphs: [
    " Venovox designs and runs whistleblowing and ethics programs that are trusted, fair, and simple to use. We help you receive concerns safely, investigate with care, and report with confidence to leaders and the board.",
  ],
};

export const threeStepBandData: Step[] = [
  {
    icon: MessageCircle,
    title: "Speak up",
    description: "Safe intake and clear triage",
  },
  {
    icon: ShieldCheck,
    title: "Investigate",
    description: "Fair process and careful review",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "Clear reporting and better culture",
  },
];

export const introductionData = {
  title: "What this page covers",
  description:
    "This page explains how Venovox builds and improves whistleblowing and ethics programs. It shows how we set policy, create safe intake, run careful triage, manage cases, and protect people from retaliation. It also explains our reporting model for management and the board, and the training that helps your culture grow stronger.",
};

export const whySpeakUpMattersData = {
  title: "Why a strong speak up program matters",
  description:
    "People raise issues earlier when they feel safe. Early notice protects staff and reduces loss. A clear program also shows regulators and partners that you take integrity seriously. It helps leaders understand risks that normal reporting may miss. Most of all, it gives every person a fair way to be heard.",
};

export const coreProgramElementsServices: ServiceItem[] = [
  {
    title: "Policy and governance",
    description:
      "We align your policy with local law and industry rules. We define roles for intake owners, investigators, HR, legal, and the board or audit committee. We set service levels for intake, triage, investigation, and close out. We include a plain language non retaliation promise and clear examples of what to report.",
    icon: ShieldCheck,
  },
  {
    title: "Hotline and intake channels",
    description:
      "We provide web, phone, and email channels and can add in person intake where needed. Lines can be open all day, every day. We support anonymous or named reports based on local law. Each report receives a clear receipt message and next step plan so people know what to expect.",
    icon: CircleSlash,
  },
  {
    title: "Triage and risk rating",
    description:
      "We screen each report for urgency and risk. We decide who should handle it and who should be walled off. We check for conflicts of interest. We set early holds to protect data, messages, and devices. We track time to first action and keep the reporter informed where possible.",
    icon: UmbrellaOff,
  },
  {
    title: "Case management workflow",
    description:
      "We map each step from intake to close. We define the evidence to be collected, interview plans, and review points. We use simple checklists and templates so cases move in a steady and fair way. We record scope, actions, and decisions at each key moment.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Investigation standards",
    description:
      "We follow fair process in every case. We keep chain of custody for digital and paper evidence. We use trauma informed interviews. We write findings in clear language and we explain limits and confidence. We do not use leading questions or unfair pressure.",
    icon: Lectern,
  },
  {
    title: "Anonymity and confidentiality",
    description:
      "Reporters can stay anonymous in many places. Where names must be known, we keep access limited and remind teams of privacy duties. We store data safely and we control who can view it. We never expose the identity of a reporter in public channels.",
    icon: Shredder,
  },
  {
    title: "Non retaliation and safety",
    description:
      "We make it clear that retaliation is not allowed. We give managers simple guidance on what to do and what not to do. We watch for signs of subtle harm such as shift changes, isolation, or lost opportunities. We set up support options for those who feel at risk.",
    icon: Shield,
  },
  {
    title: "Communication and training",
    description:
      "We prepare a simple launch kit. It includes posters, intranet content, slides, and manager talking points. We train leaders and investigators on intake, interviews, and fair process. We refresh training each year and after major changes.",
    icon: AudioLines,
  },
  {
    title: "Technology and integrations",
    description:
      "We can deploy a secure case management system or work with your current tools. We integrate with HR, identity, and collaboration systems where possible. We keep audit trails, access logs, and role based permissions.",
    icon: Cpu,
  },
  {
    title: "Multi language and global reach",
    description:
      "We support reports in many languages and cover different time zones. We provide translators and local partner support where required. We adapt messages to local culture while keeping global standards.",
    icon: Droplet,
  },
  {
    title: "Privacy and data protection",
    description:
      "We follow privacy rules in every place you work. We collect only what is needed and we keep it no longer than required. We set clear retention rules and document lawful bases for processing.",
    icon: GlobeLock,
  },
];

export const reportingToLeadersServices: ServiceItem[] = [
  {
    title: "Volume of reports and trends over time",
    description:
      "We track how report volumes change across months and teams to spot spikes or quiet periods that may indicate deeper issues.",
  },
  {
    title: "Mix of channels and locations",
    description:
      "We show which channels and regions are most active, helping leaders understand communication reach and awareness gaps.",
  },
  {
    title: "Time from intake to first action and close",
    description:
      "Reports include average time metrics that reflect responsiveness and investigation efficiency across teams.",
  },
  {
    title: "Case outcomes and root causes",
    description:
      "We summarize how cases were resolved, highlight recurring themes, and document underlying patterns that drive incidents.",
  },
  {
    title: "Status of remedial actions and training",
    description:
      "Dashboards track corrective actions and completed trainings so leaders can see progress toward stronger compliance.",
  },
  {
    title: "Heat maps for higher-risk regions or functions",
    description:
      "We visualize where issues cluster geographically or functionally, helping prioritize oversight and preventive measures.",
  },
  {
    title: "Board-ready case summaries",
    description:
      "We prepare concise board packs for major cases — including a clear timeline, actions taken, lessons learned, and prevention plans.",
  },
];

export const legalHrCollaborationData = {
  title: "Legal and HR collaboration",
  description:
    "Whistleblowing and ethics work touches both legal and HR. Venovox aligns with both teams so the program is fair, defensible, and kind.",
  items: [
    "Protect privilege where possible with clear instructions and clean files",
    "Align investigations with HR policy and local labor rules",
    "Keep privacy and data security in view at each step",
    "Plan communications for reporters, subjects, and witnesses",
  ],
};

export const whatYouReceiveData = {
  title: "What you receive from Venovox",
  listItems: [
    "Updated policy and governance documents",
    "Hotline and intake setup with scripts and templates",
    "Triage model and risk matrix",
    "Case workflow, forms, and guidance notes",
    "Training materials for leaders, managers, and investigators",
    "Monthly and quarterly report templates and dashboards",
    "A playbook for non retaliation and safety plans",
  ],
  highlightBoxText:
    "If this is urgent, contact us now. We can start with a short scoping call and a quick preservation plan.",
};

export const outcomesServices: ServiceItem[] = [
  {
    description: "Higher trust in the program and more timely reports",
  },
  {
    description: "Faster and fairer investigations with better records",
  },
  {
    description: "Lower risk of retaliation and better staff wellbeing",
  },
  {
    description: "Clearer insight for leaders and the board",
  },
  {
    description: "A stronger culture of integrity across regions",
  },
];

export const whyVenovoxServices: ServiceItem[] = [
  {
    title: "Independent and trusted",
    description:
      "We report facts as we find them and we treat every person with respect. Our work is transparent and repeatable.",
  },
  {
    title: "Practical and human",
    description:
      "We keep things simple and avoid jargon. We design steps that people can follow on a busy day.",
  },
  {
    title: "Cross border capability",
    description:
      "We run programs across regions with care for local law and culture. We support multi language intake and reporting.",
  },
  {
    title: "One team approach",
    description:
      "Investigators, policy specialists, and digital analysts work together. You do not need to manage several vendors.",
  },
];

export const relatedServicesData: ServiceItem[] = [
  {
    title: "Workplace Misconduct Investigations",
  },
  {
    title: "Corporate Investigations Hub",
  },
  {
    title: "Regulatory and Compliance Investigations",
  },
  {
    title: "Fraud Risk Management and Prevention",
  },
];

export const cardsSections = [
  {
    title: "Core program elements",
    bgColor: "bg-white",
    services: coreProgramElementsServices,
  },
  {
    title: "Reporting to leaders and the board",
    subtitle:
      "Good reporting builds trust. We design simple dashboards and written reports that focus on risk and progress.",
    bgColor: "bg-white",
    services: reportingToLeadersServices,
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
    bgColor: "bg-white",
    description:
      "Explore our full set of services that connect with whistleblowing and ethics management. Use the links below to learn more or to request a short scoping call.",
    services: relatedServicesData,
  },
];

export const faqsData: FAQ[] = [
  {
    id: "1",
    question: "Can reporters stay anonymous?",
    answer:
      "In many places yes. Where names are required by law, we limit access and protect confidentiality.",
  },
  {
    id: "2",
    question: "How fast do you acknowledge a report?",
    answer:
      "Promptly, often within one business day, with a clear outline of next steps.",
  },
  {
    id: "3",
    question: "Who can see a report?",
    answer:
      "Only the core intake and investigation team and legal where needed, following least privilege.",
  },
  {
    id: "4",
    question: "How do you prevent retaliation?",
    answer:
      "We set clear rules, brief managers, monitor for signs of harm, and act quickly if issues arise.",
  },
];

export const ctaData: ActionItem[] = [
  {
    title: "Ready to get started?",
    description:
      " If you want to improve your speak up culture, talk to Venovox. Share your current setup and your goals. We will recommend first steps and a simple plan for rollout. We can start small with a pilot and grow from there. I",
    primaryButton: {
      text: "Get in Touch",
      link: "/my-en/contact-us",
      icon: MailIcon,
    },
  },
];

