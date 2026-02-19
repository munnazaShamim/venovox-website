"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface SingleCardSectionProps {
  title: string | ReactNode;
  cardTitle?: string;
  description: string;
  icon: LucideIcon;
  bgColor?: 'white' | 'gray';
}

export default function SingleCardSection({
  title,
  cardTitle,
  description,
  icon: Icon,
  bgColor = 'gray',
}: SingleCardSectionProps) {
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
              {title}
            </h2>
          </div>
          <div className="">
            <div className={`${bgColor === 'gray' ? 'bg-white' : 'bg-gray-50'} p-8 rounded-xl shadow-sm`}>
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{cardTitle || (typeof title === 'string' ? title : '')}</h3>
              </div>
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

