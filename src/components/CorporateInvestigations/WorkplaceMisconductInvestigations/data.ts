import {
  AlertCircle,
  PersonStanding,
  HandFist,
  Code,
  Ban,
  MailIcon,
} from "lucide-react";
import type { FAQ } from "../RegulatoryAndComplianceInvestigations/Faqs";
import type { ActionItem } from "../RegulatoryAndComplianceInvestigations/Cta";
import type { ServiceItem } from "@/components/common/cards-section";
import type { MethodStep } from "../RegulatoryAndComplianceInvestigations/InvestigationMethod";

export const heroData = {
  mainText: "When people feel unsafe at work  the whole company feels it.",
  paragraphs: [
    " Trust drops. Good staff leave. Legal risk grows. We step in with care, speed, and a fair process. Our job is to find facts, protect people, and help leaders act with confidence.",
  ],
};

export const introductionData = {
  title: "What this page covers",
  description:
    "This page explains how we handle reports of harassment, discrimination, bullying, retaliation, and other conduct breaches. It also shows how we protect people, evidence, and your culture while we work. If you need urgent help, contact us for a short scoping call.",
};

export const whenToActData = {
  title: "When to act",
  subtitle:
    "Act early if you notice any of the signs below. Early action protects staff and preserves evidence.",
  listItems: [
    "A complaint or whistleblower report arrives",
    "You see patterns in exit interviews or HR data",
    "A manager hears about a hostile team culture",
    "Staff avoid a person or a place at work",
    "Rumors spread on chat channels or social media",
    "You get a legal letter or regulator inquiry",
  ],
  highlightBoxText:
    "If you are unsure, start with a quiet intake review. We can help you judge the risk and choose the first safe steps.",
};

export const whatIsWorkplaceMisconductData = {
  title: "What is workplace misconduct",
  description:
    "Workplace misconduct is behavior that breaks your code of conduct or the law. It includes harassment, discrimination, bullying, intimidation, conflicts of interest, misuse of power, and retaliation. It can be a single serious event or an ongoing pattern. Both deserve a fair and careful response.",
};

export const typesOfCasesServices: ServiceItem[] = [
  {
    title: "Harassment",
    description:
      "We investigate complaints of harassment, including sexual harassment, racial harassment, and other forms of discrimination.",
    icon: AlertCircle,
  },
  {
    title: "Discrimination",
    description:
      "Unequal treatment based on a protected trait. We review hiring, pay, promotion, and access to work. We compare data to policy and law.",
    icon: PersonStanding,
  },
  {
    title: "Bullying and intimidation",
    description:
      "Repeated behavior that humiliates or isolates someone. We examine team culture, workload, and norms that allow harm to continue.",
    icon: HandFist,
  },
  {
    title: "Code of conduct breaches",
    description:
      "Conflicts of interest, favoritism, misuse of company resources, and policy violations. We map decisions, approvals, and benefits.",
    icon: Code,
  },
  {
    title: "Retaliation",
    description:
      "Any negative action against a person who raised a concern or helped an inquiry. We put safeguards in place from day one.",
    icon: Ban,
  },
];

export const whistleblowingIntakeServices: ServiceItem[] = [
  {
    title: "Multiple channels",
    description: " hotline, email, web form, and in person options",
  },
  {
    title: "Safe intake:",
    description:
      "clear next steps, privacy notice, and non retaliation message",
  },
  {
    title: "Triage",
    description: "classify risk, set urgency, and choose the right team",
  },
  {
    title: "Eligibility",
    description:
      "what is in scope and what is better sent to HR or other teams",
  },
  {
    title: "Early holds",
    description:
      " protect messages, logs, and key devices before facts fade",
  },
];

export const whistleblowingIntakeNote =
  "We can manage your hotline or work with the system you already use. We can also run intake in more than one language when needed.";

export const investigationProcessData = {
  title: "Our investigation process",
  description:
    "We use a simple and strong method. It keeps your matter defensible and your people respected.",
  steps: [
    {
      num: 1,
      title: "Plan and scope",
      description:
        "We listen to the concern. We define issues, goals, and limits. We agree who is involved and who must be kept out. We record our plan and share a short timeline.",
    },
    {
      num: 2,
      title: "Preserve evidence",
      description:
        "We place legal holds. We secure emails, chats, and files. We collect device images where needed. We note chain of custody for every item.",
    },
    {
      num: 3,
      title: "Gather facts",
      description:
        "We review policies, HR files, calendars, access logs, and prior complaints. We interview witnesses and relevant managers. We collect digital traces like chat messages, edits, or access events.",
    },
    {
      num: 4,
      title: "Analyze and validate",
      description:
        "We compare statements with documents and data. We test competing stories. We look for motive, opportunity, and pattern. We are careful with bias and language.",
    },
    {
      num: 5,
      title: "Report and brief",
      description:
        "We write a clear report with a summary, timeline, findings, and evidence list. We include limits and confidence levels. We brief HR, Legal, and leaders and answer questions.",
    },
    {
      num: 6,
      title: "Remediate and follow up",
      description:
        "We propose actions that fit the facts and your policy. This can include coaching, warnings, separation, policy changes, training, and cultural repair. We plan follow up checks to make sure the fix holds.",
    },
  ] as MethodStep[],
};

export const legalHrCollaborationServices: ServiceItem[] = [
  {
    title: "Privilege and documentation",
    description:
      "We plan with counsel to protect privilege where possible. We keep clean files. We record scope, roles, and instructions.",
  },
  {
    title: "Privacy and data",
    description:
      "We follow privacy rules in each location. We collect only what we need and store it safely. We limit access to the core team.",
  },
  {
    title: "Interview practice",
    description:
      "We use fair, trauma informed interviews. We explain rights and process. We avoid leading questions and we keep a respectful tone.",
  },
  {
    title: "Outcome management",
    description:
      "We help HR communicate results in a way that is clear and careful. We give guidance on record keeping and retention.",
  },
];

export const legalHrCollaborationData = {
  title: "Legal and HR collaboration",
  description:
    "Workplace cases often run under legal privilege and must align with HR processes and local law. We work closely with both teams.",
  services: legalHrCollaborationServices,
};

export const careForPeopleServices: ServiceItem[] = [
  {
    description: " Soft starts and clear consent in interviews",
  },
  {
    description: "Right to a support person where policy allows",
  },
  {
    description: "Safety plans for those who feel at risk",
  },
  {
    description: "Non retaliation reminders for managers and peers",
  },
  {
    description: " Information on support services and next steps",
  },
];

export const careForPeopleData = {
  title: "Care for people",
  description:
    "Respect is not a slogan. It is a set of actions. We build these into every case.",
  services: careForPeopleServices,
  footerText:
    "A fair process helps people heal and helps teams move forward.",
};

export const digitalEvidenceServices: ServiceItem[] = [
  {
    description: "Chats and collaboration tools",
  },
  {
    description: "Email and calendar data",
  },
  {
    description: "Access logs and badge records",
  },
  {
    description: "Document history and edits",
  },
  {
    description: "Device images for targeted review",
  },
];

export const digitalEvidenceData = {
  title: "Digital evidence and forensics",
  description:
    "Misconduct can leave a digital trail. We collect and review it in a defensible way.",
  services: digitalEvidenceServices,
  footerText:
    "We log every step so your evidence can stand up to review or court use.",
};

export const deliverablesServices: ServiceItem[] = [
  {
    title: "A short executive summary for leaders",
  },
  {
    title: "A detailed report with findings, evidence, and timelines",
  },
  {
    title: "An appendix with interview notes and exhibits",
  },
  {
    title: "A remediation plan with owners and dates",
  },
  {
    title: "A board ready slide pack if you need one",
  },
];

export const outcomesData = {
  items: [
    "Clear facts about what happened and who was involved",
    "A fair process that respects privacy and dignity",
    "Steps that reduce risk and improve culture",
    "Records that meet legal and audit standards",
  ],
};

export const whyChooseUsData = {
  title: "Why choose us",
  items: [
    {
      title: "Neutral and independent",
      description: "We report facts as they are",
    },
    {
      title: "Kind and firm",
      description: "We protect people and hold to policy",
    },
    {
      title: "Cross border reach",
      description: "We work across regions with local care",
    },
    {
      title: "One team",
      description: "Investigators, HR specialists, and digital analysts",
    },
    {
      title: "Plain language",
      description: "No jargon, just clear next steps",
    },
  ],
};

export const relatedServicesData: ServiceItem[] = [
  {
    title: "Whistleblowing and Ethics Management",
  },
  {
    title: "Digital Forensics and Incident Investigations",
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
    title: "Types of cases we handle",
    bgColor: "bg-gray-50",
    services: typesOfCasesServices,
  },
  {
    title: "Whistleblowing and intake",
    subtitle:
      "People speak up when they feel safe and heard. We design intake with care and clarity.",
    bgColor: "bg-white",
    services: whistleblowingIntakeServices,
  },
  {
    title: "Legal and HR collaboration",
    subtitle:
      "Workplace cases often run under legal privilege and must align with HR processes and local law. We work closely with both teams.",
    bgColor: "bg-white",
    services: legalHrCollaborationServices,
  },
  {
    title: "Care for people",
    subtitle: careForPeopleData.description,
    bgColor: "bg-gray-50",
    services: careForPeopleServices,
  },
  {
    title: "Digital evidence and forensics",
    subtitle: digitalEvidenceData.description,
    bgColor: "bg-white",
    services: digitalEvidenceServices,
  },
  {
    title: "Deliverables you receive",
    bgColor: "bg-gray-50",
    services: deliverablesServices,
  },
  {
    title: "Related services",
    bgColor: "bg-white",
    services: relatedServicesData,
  },
];

export const faqsData: FAQ[] = [
  {
    id: "1",
    question: "Will participants be protected from retaliation?",
    answer:
      "Yes. We set clear safeguards, remind managers of duties, and monitor for subtle harms such as isolation or lost opportunities.",
  },
  {
    id: "2",
    question: "How are interviews conducted?",
    answer:
      "We use fair, trauma informed interviews with clear consent, simple ground rules, and respectful language.",
  },
  {
    id: "3",
    question: "Can reports be anonymous?",
    answer:
      "In many locations yes. Where names are required, we limit access to the core team and protect privacy.",
  },
  {
    id: "4",
    question: "How long does a typical case take?",
    answer:
      "It depends on scope and evidence. Many matters resolve within a few weeks after intake, preservation, and interviews.",
  },
];

export const ctaData: ActionItem[] = [
  {
    title: "Ready to get started?",
    description:
      "If you need help now, contact us. Share the basic facts and your timeline. We will set a short call and outline the first safe steps. We can also prepare a one page plan you can share with leaders.",
    primaryButton: {
      text: "Get in Touch",
      link: "/my-en/contact-us",
      icon: MailIcon,
    },
  },
];

