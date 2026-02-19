"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ThreeStepBandProps {
  steps: Step[];
  accentColor?: string;
}

export default function ThreeStepBand({
  steps,
  accentColor = "text-red-600",
}: ThreeStepBandProps) {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center`}>
                  <Icon className={`${accentColor} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

