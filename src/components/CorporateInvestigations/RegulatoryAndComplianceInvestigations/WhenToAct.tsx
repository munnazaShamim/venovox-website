"use client";

import WhenToActSection from "@/components/common/act";

interface WhenToActProps {
  title: string;
  subtitle?: string;
  listItems: string[];
  highlightBoxText?: string;
  accentColor?: string;
}

export default function WhenToAct({
  title,
  subtitle,
  listItems,
  highlightBoxText,
  accentColor = "text-red-600",
}: WhenToActProps) {
  return (
    <WhenToActSection
      title={title}
      subtitle={subtitle}
      listItems={listItems}
      highlightBoxText={highlightBoxText}
      accentColor={accentColor}
    />
  );
}

