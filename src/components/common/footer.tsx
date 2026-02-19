"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/lib/language-utils";

const Footer = () => {
  const { language } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <>


      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 px-6 py-12 md:py-12">
        <div className="container mx-auto">


<div className="flex flex-col items-center text-center gap-10">

  {/* OUR SERVICES - HORIZONTAL */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="w-full max-w-4xl"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>

    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
      {[
        { name: "Risk Intelligence", url: "/background-screening/risk-intelligence/" },
        { name: "Due Diligence", url: "/background-screening/due-diligence/" },
        { name: "Risk & Audit", url: "/background-screening/risk-audit/" },
        { name: "Compliance", url: "/background-screening/compliance/" },
        { name: "Intellectual Property", url: "/background-screening/intellectual-property/" },
        { name: "Counter Measures", url: "/background-screening/counter-measures/" },
        { name: "Financial Crime", url: "/background-screening/financial-crime/" },
        { name: "HR Services", url: "/background-screening/hr-services/" },
        { name: "Cyber Security", url: "/background-screening/cyber-security/" },
        { name: "Corporate Investigations", url: "/corporate-investigations/" },
      ].map((service, index) => (
        <motion.li
          key={service.name}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="list-none"
        >
          <Link
            href={getLocalizedPath(service.url, language)}
            className="text-gray-600 hover:text-red-600 transition duration-200 text-sm md:text-base flex items-center group"
          >
            <span className="h-1 w-1 bg-red-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition"></span>
            {service.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  </motion.div>



  {/* CONTACT US - HORIZONTAL */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="w-full max-w-4xl flex flex-col items-center"
  >
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>

    <div className="flex flex-wrap justify-center gap-6 items-center">

      {/* PHONE */}
      <motion.a
        href="tel:0128008888"
        className="flex items-center group"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Phone className="h-5 w-5 text-red-600 mr-2 group-hover:animate-pulse" />
        <p className="text-gray-600 text-base group-hover:text-red-600 transition">
          +6012 800 8888
        </p>
      </motion.a>

      {/* SOCIAL ROW */}
      <div className="flex gap-6">
        {[
          { icon: <FaFacebookF />, url: "https://www.facebook.com/venovox" },
          { icon: <FaInstagram />, url: "https://www.instagram.com/venovox/" },
          { icon: <FaWhatsapp />, url: "https://api.whatsapp.com/send/?phone=%2B60128008888" },
          { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/venovox/" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600 text-xl transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

    </div>
  </motion.div>

</div>


          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-gray-900 text-center mb-12 mt-12"
          >
            Our Offices
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-left pb-6 ">
            {[
              {
                title: "United Kingdom",
                company: "Venovox (HQ)",
                lines: [
                  "71-75 Shelton Street,",
                  "Covent Garden,",
                  "London,",
                  "WC2H 9JQ",
                  "United Kingdom",
                  <a
                    key="phone"
                    href="tel:44 2038356542"
                    className="hover:text-red-600 transition block mt-1"
                  >
                    📞+44 2038356542
                  </a>,
                ],
              },
              {
                title: "Singapore",
                company: "Venovox Pte Ltd",
                lines: [
                  "1 Scotts Road,",
                  "#24-10,",
                  "Shaw Centre,",
                  "228208",
                  "Singapore",
                  <a
                    key="phone"
                    href="tel:63030529"
                    className="hover:text-red-600 transition block mt-1"
                  >
                    📞  +65 6303 0529
                  </a>,
                ],
              },
              {
                title: "Malaysia",
                company: "Venovox Sdn Bhd",
                lines: [
                  "E-7-03, Block E,",
                  "Oasis Square,",
                  "No 2, Jalan PJU 1A/7,",
                  "Ara Damansara,",
                  "47301 Petaling Jaya Selangor",
                  <a
                    key="phone"
                    href="tel:0378000088"
                    className="hover:text-red-600 transition block mt-1"
                  >
                    📞  +603 7800 0088
                  </a>,
                ],
              },

              {
                title: "UAE",
                company: "Venovox Pvt Ltd",
                lines: [
                  "Level 03,",
                  "Boulevard Plaza Tower 1",
                  "Sheikh Mohammed Bin",
                  "Rashid Boulevard,",
                  "Downtown Dubai,",
                  "UAE, P.O. Box",
                  "334155",
                  <a
                    key="phone"
                    href="tel:043680972"
                    className="hover:text-red-600 transition block mt-1"
                  >
                    📞 +971 4 368 0972
                  </a>,
                ],
              },
            ].map((office, index) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <h4 className="font-semibold text-gray-800 text-base">{office.title}</h4>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="text-gray-600 text-sm font-medium">{office.company}</p>
                    {office.lines.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm leading-tight">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

            ))}
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-200 pt-6 text-sm text-gray-500 gap-4 md:gap-0 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href={getLocalizedPath("/privacy/terms-and-conditions", language)} className="hover:underline">Terms & Conditions</Link>
              <Link href={getLocalizedPath("/privacy/privacy-policy", language)} className="hover:underline">Privacy Policy</Link>
              <Link href={getLocalizedPath("/privacy/security-policy", language)} className="hover:underline">Security Policy</Link>
              <Link href={getLocalizedPath("/privacy/whistleblowing-policy", language)} className="hover:underline">Whistleblowing Policy</Link>
            </div>
            <p className="mt-2 md:mt-0">© {new Date().getFullYear()} Venovox. All rights reserved.</p>
          </div>



        </div>
      </footer >
    </>
  );
};

export default Footer;
