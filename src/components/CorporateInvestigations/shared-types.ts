import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  link?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ActionItem {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    link: string;
    icon?: LucideIcon;
  };
  secondaryButton?: {
    text: string;
    link: string;
    icon?: LucideIcon;
  };
}

export interface MethodStep {
  num: number;
  title: string;
  description: string;
}

