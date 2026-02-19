"use client";

import { motion } from "framer-motion";

export interface MethodStep {
  num: number;
  title: string;
  description: string;
}

interface InvestigationMethodProps {
  title: string;
  description?: string;
  steps: MethodStep[];
  accentColor?: string;
  bgColor?: string;
}

export default function InvestigationMethod({
  title,
  description,
  steps,
  accentColor = "text-red-600",
  bgColor = "",
}: InvestigationMethodProps) {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4`}>
                {title}
              </h2>
              {description && (
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>

            <div className="space-y-8 bg-white p-8 rounded-lg">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm" 
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.num}. {step.title}
                      </h3>
                      <p className="text-gray-700 text-justify leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

