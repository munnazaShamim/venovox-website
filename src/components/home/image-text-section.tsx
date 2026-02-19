"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Image from 'next/image';

interface ImageTextSectionProps {
  title?: string | ReactNode;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  bgColor?: 'white' | 'gray';
  imageFirst?: boolean;
  id?: string;
}

export default function ImageTextSection({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  bgColor = 'white',
  imageFirst = false,
  id,
}: ImageTextSectionProps) {
  const bgClass = bgColor === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  const imageContent = (
    <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-contain md:object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        quality={85}
      />
    </div>
  );

  const textContent = (
    <div>
      {title && (
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          {title}
        </h3>
      )}
      {paragraphs.map((para, index) => (
        <p
          key={index}
          className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch] mb-6 last:mb-0"
        >
          {para}
        </p>
      ))}
    </div>
  );

  return (
    <section id={id} className={`py-20 px-6 ${bgClass}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {imageFirst ? (
              <>
                {imageContent}
                {textContent}
              </>
            ) : (
              <>
                {textContent}
                {imageContent}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

