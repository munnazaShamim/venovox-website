"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StepItem {
  number: string;
  title: string;
  description: string;
}

interface NumberedStepsSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  steps: StepItem[];
  footerText?: string;
  bgColor?: 'white' | 'gray';
}

export default function NumberedStepsSection({
  title,
  subtitle,
  steps,
  footerText,
  bgColor = 'gray',
}: NumberedStepsSectionProps) {
  const bgClass = bgColor === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-20 px-6 ${bgClass}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {typeof title === 'string' ? title : title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-700 mb-8 text-center">
                {subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`${bgColor === 'gray' ? 'bg-white' : 'bg-gray-50'} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-base hyphens-none">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {footerText && (
            <p className="text-lg  text-center hyphens-none mt-8">
              {footerText}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

