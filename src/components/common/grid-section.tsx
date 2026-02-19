"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface GridSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  accentColor?: string;
  bgColor?: string;
  gridCols?: string;
  className?: string;
}

export function GridSection({
  title,
  subtitle,
  description,
  children,
  accentColor = "text-red-600",
  bgColor = "bg-white",
  gridCols = "md:grid-cols-2",
  className = "",
}: GridSectionProps) {
  return (
    <section className={`py-12 ${bgColor} ${className}`}>
      <div className="container mx-auto px-6">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {(title || subtitle || description) && (
              <div className="text-center mb-8">
                {title && (
                  <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4`}>
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className={`text-lg ${subtitle.includes("text-") ? subtitle : "text-gray-700"} leading-relaxed max-w-3xl mx-auto mb-4`}>
                    {subtitle}
                  </p>
                )}
                {description && (
                  <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none leading-relaxed mb-8">
                    {description}
                  </p>
                )}
              </div>
            )}

            <div className={`grid ${gridCols} gap-8`}>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

