"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface GridCardItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  subtitle?: string;
}

interface GridCardSectionProps {
  title: string | ReactNode;
  description?: string;
  items: GridCardItem[];
  bgColor?: 'white' | 'gray';
  gridCols?: '2' | '3' | '4';
  showDivider?: boolean;
}

export default function GridCardSection({
  title,
  description,
  items,
  bgColor = 'white',
  gridCols = '3',
  showDivider = false,
}: GridCardSectionProps) {
  const bgClass = bgColor === 'gray' ? 'bg-gray-50' : 'bg-white';
  const gridClass = 
    gridCols === '2' ? 'md:grid-cols-2' :
    gridCols === '4' ? 'md:grid-cols-2 lg:grid-cols-4' :
    'md:grid-cols-3';

  return (
    <section className={`py-4  ${bgClass}`}>
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
            {showDivider && <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>}
            {description && (
              <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <div className={`grid ${gridClass} gap-6 mt-8`}>
            {items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className={`${bgColor === 'gray' ? 'bg-white' : 'bg-gray-50'} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {IconComponent && (
                    <div className="flex items-center mb-4">
                      <div className="bg-red-600 p-3 rounded-full mr-4">
                        <IconComponent className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        {item.subtitle && (
                          <p className="text-red-600 font-semibold text-sm">{item.subtitle}</p>
                        )}
                      </div>
                    </div>
                  )}
                  {!IconComponent && (
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-red-600 font-semibold text-sm">{item.subtitle}</p>
                      )}
                    </div>
                  )}
                  <p className="text-base text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

