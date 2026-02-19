"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;
  colSpan?: string;
}

interface ServiceCardsSectionProps {
  title: string | ReactNode;
  description: string;
  services: ServiceItem[];
}

export default function ServiceCardsSection({
  title,
  description,
  services,
}: ServiceCardsSectionProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {typeof title === 'string' ? title : title}
            </h2>
            <p className="text-lg hyphens-none mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className={`bg-gray-50 p-0 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden ${service.colSpan || ""}`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      quality={80}
                    />
                    <div className="absolute top-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-red-600 p-3 rounded-full mr-4 transition-colors">
                        <IconComponent className="text-white w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-base text-gray-700 text-justify [text-justify:inter-word] hyphens-none mb-4">
                      {service.description}
                    </p>
                    {service.link && service.link.trim() !== "" && (
                      <Link
                        href={service.link}
                        className="text-red-600 font-medium hover:text-red-700 inline-flex items-center transition-colors"
                      >
                        Learn more
                        <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

