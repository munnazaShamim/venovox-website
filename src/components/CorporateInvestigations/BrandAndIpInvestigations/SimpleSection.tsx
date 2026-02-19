"use client";

import { motion } from "framer-motion";

interface SimpleSectionProps {
  title?: string;
  description: string;
  accentColor?: string;
  bgColor?: string;
}

export default function SimpleSection({
  title,
  description,
  accentColor = "text-red-600",
  bgColor = "bg-white",
}: SimpleSectionProps) {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <div className="text-center mb-8">
                <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4`}>
                  {title}
                </h2>
              </div>
            )}
            <div className={`p-8 rounded-lg shadow-sm max-w-3xl mx-auto ${title ? "text-center" : ""}`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

