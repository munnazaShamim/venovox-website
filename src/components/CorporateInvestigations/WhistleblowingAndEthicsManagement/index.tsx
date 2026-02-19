"use client";

import Hero from "../RegulatoryAndComplianceInvestigations/Hero";
import Introduction from "../RegulatoryAndComplianceInvestigations/Introduction";
import CardsSection from "@/components/common/cards-section";
import Faqs from "../RegulatoryAndComplianceInvestigations/Faqs";
import Cta from "../RegulatoryAndComplianceInvestigations/Cta";
import WhenToActSection from "@/components/common/act";
import ThreeStepBand from "../BrandAndIpInvestigations/ThreeStepBand";
import SimpleSection from "../BrandAndIpInvestigations/SimpleSection";
import { motion } from "framer-motion";

import {
  heroData,
  threeStepBandData,
  introductionData,
  whySpeakUpMattersData,
  cardsSections,
  legalHrCollaborationData,
  whatYouReceiveData,
  faqsData,
  ctaData,
} from "./data";

export default function WhistleblowingAndEthicsManagement() {
  return (
    <div className="bg-white px-6 text-gray-900">
      <Hero mainText={heroData.mainText} paragraphs={heroData.paragraphs} />

      <ThreeStepBand steps={threeStepBandData} />

      <Introduction
        title={introductionData.title}
        description={introductionData.description}
      />

      <SimpleSection
        title={whySpeakUpMattersData.title}
        description={whySpeakUpMattersData.description}
      />

      <CardsSection sections={[cardsSections[0]]} />

      <CardsSection sections={[cardsSections[1]]} />

      <section className="py-12 bg-white">
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
                  {legalHrCollaborationData.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                  {legalHrCollaborationData.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {legalHrCollaborationData.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhenToActSection
        title={whatYouReceiveData.title}
        listItems={whatYouReceiveData.listItems}
        highlightBoxText={whatYouReceiveData.highlightBoxText}
        accentColor="text-red-600"
      />

      <CardsSection sections={cardsSections.slice(2)} />

      <Faqs faqs={faqsData} />

      <Cta actions={ctaData} />
    </div>
  );
}

