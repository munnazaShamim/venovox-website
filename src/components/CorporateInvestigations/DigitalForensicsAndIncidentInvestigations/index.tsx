"use client";

import Hero from "../RegulatoryAndComplianceInvestigations/Hero";
import Introduction from "../RegulatoryAndComplianceInvestigations/Introduction";
import WhenToAct from "../RegulatoryAndComplianceInvestigations/WhenToAct";
import CardsSection from "@/components/common/cards-section";
import InvestigationMethod from "../RegulatoryAndComplianceInvestigations/InvestigationMethod";
import Faqs from "../RegulatoryAndComplianceInvestigations/Faqs";
import Cta from "../RegulatoryAndComplianceInvestigations/Cta";
import WhenToActSection from "@/components/common/act";
import SimpleSection from "../BrandAndIpInvestigations/SimpleSection";
import { motion } from "framer-motion";

import {
  heroData,
  introductionData,
  whenToActData,
  cardsSections,
  investigationProcessData,
  legalPrivacyData,
  itSecurityData,
  toolsPlatformsData,
  whatYouReceiveData,
  faqsData,
  ctaData,
} from "./data";

export default function DigitalForensicsAndIncidentInvestigations() {
  return (
    <div className="bg-white px-6 text-gray-900">
      <Hero mainText={heroData.mainText} paragraphs={heroData.paragraphs} />

      <Introduction
        title={introductionData.title}
        description={introductionData.description}
      />

      <WhenToAct
        title={whenToActData.title}
        subtitle={whenToActData.subtitle}
        listItems={whenToActData.listItems}
        highlightBoxText={whenToActData.highlightBoxText}
      />

      <CardsSection sections={[cardsSections[0]]} />

      <section className="py-12">
        <div className="container mx-auto">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  {investigationProcessData.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                  {investigationProcessData.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <motion.div className="text-red-600 w-8 h-8 flex items-center justify-center">
                      Preserve
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Preserve</h3>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <motion.div className="text-red-600 w-8 h-8 flex items-center justify-center">
                      Investigate
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Investigate</h3>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <motion.div className="text-red-600 w-8 h-8 flex items-center justify-center">
                      Recover
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Recover</h3>
                </motion.div>
              </div>

              <InvestigationMethod
                title=""
                steps={investigationProcessData.steps}
                bgColor="bg-gray-50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                {legalPrivacyData.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                {legalPrivacyData.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {legalPrivacyData.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  whileHover={{ y: -3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  {itSecurityData.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                  {itSecurityData.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {itSecurityData.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SimpleSection
        title={toolsPlatformsData.title}
        description={toolsPlatformsData.description}
        bgColor="bg-white"
      />

      <WhenToActSection
        title={whatYouReceiveData.title}
        listItems={whatYouReceiveData.listItems}
        accentColor="text-red-600"
      />

      <CardsSection sections={cardsSections.slice(1)} />

      <Faqs faqs={faqsData} />

      <Cta actions={ctaData} />
    </div>
  );
}

