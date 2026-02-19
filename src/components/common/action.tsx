"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon, MailIcon } from "lucide-react";

interface ActionSectionProps {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    link: string;
    icon?: LucideIcon;
  };
  secondaryButton?: {
    text: string;
    link: string;
    icon?: LucideIcon;
  };
  className?: string;
}

export function ActionSection({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = "",
}: ActionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-10 text-center shadow-xl relative overflow-hidden ${className}`}
    >
      <div className="absolute -right-10 -top-10 opacity-20">
        <MailIcon className="w-32 h-32 text-white" />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

        <p className="text-red-100 mb-6 max-w-2xl mx-auto text-center leading-relaxed">
          <span className="text-white font-medium">{description}</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          {primaryButton && (
            <Link
              href={primaryButton.link}
              className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-3 rounded-full hover:bg-gray-100 transition font-medium shadow-md hover:shadow-lg"
            >
              {primaryButton.icon ? (
                <primaryButton.icon size={18} />
              ) : (
                <MailIcon size={18} />
              )}
              {primaryButton.text}
            </Link>
          )}

          {secondaryButton && (
            <Link
              href={secondaryButton.link}
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-red-700 transition font-medium shadow-md hover:shadow-lg"
            >
              {secondaryButton.icon && <secondaryButton.icon size={18} />}
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
