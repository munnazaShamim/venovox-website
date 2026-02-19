"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/common/card";
import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  imageUrl?: string;
  link?: string;
}

export interface CardsSectionProps {
  sections: {
    title: string;
    subtitle?: string;
    description?: string;
    services: ServiceItem[];
    accentColor?: string;
    bgColor?: string;
    gridCols?: string;
  }[];
}

export default function CardsSection({ sections }: CardsSectionProps) {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section 
          key={sectionIndex} 
          className={`py-12 ${section.bgColor || "bg-white"}`}
        >
          <div className="container mx-auto px-6">
            <div className="mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <h2 className={`text-3xl md:text-4xl font-bold ${section.accentColor || "text-red-600"} mb-4`}>
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className={`text-lg ${section.subtitle.includes("text-") ? section.subtitle : "text-gray-700"} leading-relaxed max-w-3xl mx-auto mb-4`}>
                      {section.subtitle}
                    </p>
                  )}
                  {section.description && (
                    <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                      {section.description}
                    </p>
                  )}
                </div>

                <div className={`grid ${section.gridCols || "md:grid-cols-2"} gap-8`}>
                  {section.services.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      imageUrl={service.imageUrl}
                      link={service.link}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

