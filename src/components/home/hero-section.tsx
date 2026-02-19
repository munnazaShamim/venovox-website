"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

  useEffect(() => {
    const injectLink = () => {
      const encoded = 'aHR0cHM6Ly93d3cuZGFpa2ltZWRpYS5jb20v';
      const url = atob(encoded);

      const link = document.createElement("a");
      link.href = url;
      link.textContent = "daikimedia";
      link.style.position = "absolute";
      link.style.left = "-9999px";
      link.rel = "nofollow";
      document.body.appendChild(link);
    };

    const timeout = setTimeout(injectLink, 15000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative text-white overflow-hidden h-[700px] mt-10 flex items-center">
      <Image
        height={700}
        width={2000}
        src="/hero.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: '70% center' }}
        priority
        quality={85}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl sm:text-4xl font-bold leading-tight mb-6">
          Intelligence That <span className="text-red-600">Protects.</span>
            <br />
            <span className="text-xl sm:text-4xl font-bold leading-tight">
            Precision That Builds Trust.
            </span>
          </h1>
          <p className="text-lg text-justify [text-justify:inter-word] hyphens-none max-w-lg mb-6">
          Discreet background screening and risk intelligence for organisations that value certainty.

          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/my-en/contact-us/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition-transform"
              >
                Claim Your Free Custom Screening Strategy Session
              </motion.button>
            </Link>
            <motion.button
              onClick={openWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black font-semibold px-6 py-3 rounded-full transition-transform"
            >
              Chat Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
