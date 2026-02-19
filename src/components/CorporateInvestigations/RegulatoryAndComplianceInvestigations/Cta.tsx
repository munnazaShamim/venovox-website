"use client";

import { ActionSection } from "@/components/common/action";
import { LucideIcon } from "lucide-react";

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

interface CtaProps {
  actions: ActionItem[];
}

export default function Cta({ actions }: CtaProps) {
  return (
    <div className="container mx-auto space-y-24 relative">
      {actions.map((action, index) => (
        <ActionSection
          key={index}
          title={action.title}
          description={action.description}
          primaryButton={action.primaryButton}
          secondaryButton={action.secondaryButton}
        />
      ))}
    </div>
  );
}

