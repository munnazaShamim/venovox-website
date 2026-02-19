"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWithHeaderProps {
  title: string | ReactNode;
  description?: string;
  children: ReactNode;
  bgColor?: 'white' | 'gray';
  id?: string;
}

export default function SectionWithHeader({
  title,
  description,
  children,
  bgColor = 'white',
  id,
}: SectionWithHeaderProps) {
  const bgClass = bgColor === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section id={id} className={`py-20 px-6 ${bgClass}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {typeof title === 'string' ? title : title}
            </h2>
            {description && (
              <p className="text-lg text-gray-700  hyphens-none mx-auto mb-8">
                {description}
              </p>
            )}
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

