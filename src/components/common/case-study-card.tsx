"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface CaseStudyCardProps {
  title: string;
  description: string;
  industry: string;
  url: string;
  imageUrl: string;
  index?: number;
}

export function CaseStudyCard({
  title,
  description,
  industry,
  url,
  imageUrl,
  index = 0,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1 h-full flex flex-col"
        whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full backdrop-blur-sm">
              {industry}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-justify mb-4 flex-grow">
            {description}
          </p>
          <Link
            href={`/my-en${url}`}
            className="text-red-600 hover:text-red-700 font-medium mt-4 inline-flex items-center group/link"
            onClick={(e) => e.stopPropagation()}
          >
            Learn more
            <svg
              className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

