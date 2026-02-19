"use client";

import { motion } from "framer-motion";

interface IntroductionProps {
  title: string;
  description: string;
  accentColor?: string;
}

export default function Introduction({ 
  title, 
  description, 
  accentColor = "text-red-600" 
}: IntroductionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl text-center font-bold ${accentColor} mb-4`}>
              {title}
            </h2>
            <p className="text-lg text-gray-700 text-center [text-justify:inter-word] hyphens-none leading-relaxed mb-6">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

