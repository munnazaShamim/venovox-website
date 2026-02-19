"use client";

import ContentSection from "@/components/common/hero-content";

interface HeroProps {
  mainText: string;
  paragraphs: string[];
}

export default function Hero({ mainText, paragraphs }: HeroProps) {
  return (
    <ContentSection mainText={mainText} paragraphs={paragraphs} />
  );
}

