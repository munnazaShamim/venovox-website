'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const recognizedByLogos = [
  { src: '/ism.jpeg', alt: 'ISM Logo', width: 160, height: 60 },
  { src: '/isms1.jpeg', alt: 'ISM Logo', width: 150, height: 70 },
  { src: '/isms2.jpeg', alt: 'ISM Logo', width: 180, height: 60 },
  { src: '/isms3.jpeg', alt: 'ISM Logo', width: 160, height: 80 },
  { src: '/napbs-logo.png', alt: 'PBSA Logo', width: 110, height: 30 },
  { src: '/md-status.png', alt: 'Malaysia Digital Logo', width: 130, height: 30 },
  { src: '/mof.png', alt: 'MOF Registered Logo', width: 140, height: 40 },
  { src: '/hrd.png', alt: 'HRD Corp Logo', width: 130, height: 60 },
];

const RecognizedBy = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight"
          >
            <span className="text-red-600">Recognized</span> & Trusted Worldwide
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="text-gray-600 mt-5 text-sm sm:text-base md:text-lg lg:text-xl container mx-auto"
          >
           Recognised by global decision makers and guided by international standards, Venovox maintains a security posture that meets the expectations of regulated industries. Our internal controls align with ISO 27001 best practices, our screening model follows PBSA principles, and our data handling respects privacy requirements across Malaysia and the international market. Clients choose Venovox when accuracy, confidentiality and compliance are non negotiable.
          </motion.p>
        </div>

        <div className="overflow-hidden relative">
          {/* Left fade - natural gradient */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgb(248 250 252), transparent)',
            }}
          />
          
          {/* Right fade - natural gradient */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgb(249 250 251), transparent)',
            }}
          />
          
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...recognizedByLogos, ...recognizedByLogos].map((logo, index) => (
              <div key={index} className="min-w-[160px] h-[120px] flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-all duration-300"
                  loading="lazy"
                  quality={75}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecognizedBy;
