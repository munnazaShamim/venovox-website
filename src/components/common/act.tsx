"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface WhenToActSectionProps {
  title: string;
  subtitle?: string; 
  listItems: string[];
  highlightBoxText?: string;
  accentColor?: string; 
}

export default function WhenToActSection({
  title,
  subtitle,
  listItems,
  highlightBoxText,
  accentColor = "text-red-600",
}: WhenToActSectionProps) {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className={`text-3xl md:text-4xl font-bold ${accentColor}`}>
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <ul className="space-y-6">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle
                    className={`${accentColor} w-6 h-6 mr-4 mt-1 flex-shrink-0`}
                  />
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            {highlightBoxText && (
              <div className="mt-10 p-6 bg-red-50 rounded-lg border border-red-100">
                <p className="text-gray-800 font-semibold text-lg leading-relaxed text-center md:text-left">
                  {highlightBoxText}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
