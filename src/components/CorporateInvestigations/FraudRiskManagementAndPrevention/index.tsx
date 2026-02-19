"use client";

import Hero from "../RegulatoryAndComplianceInvestigations/Hero";
import Introduction from "../RegulatoryAndComplianceInvestigations/Introduction";
import WhenToAct from "../RegulatoryAndComplianceInvestigations/WhenToAct";
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
  whyPreventionMattersData,
  whenToActData,
  cardsSections,
  ourApproachData,
  dataAnalyticsData,
  governanceReportingData,
  whatYouReceiveData,
  faqsData,
  ctaData,
} from "./data";

export default function FraudRiskManagementAndPrevention() {
  return (
    <div className="bg-white px-6 text-gray-900">
      <Hero mainText={heroData.mainText} paragraphs={heroData.paragraphs} />

      <ThreeStepBand steps={threeStepBandData} />

      <Introduction
        title={introductionData.title}
        description={introductionData.description}
      />

      <SimpleSection
        title={whyPreventionMattersData.title}
        description={whyPreventionMattersData.description}
      />

      <WhenToAct
        title={whenToActData.title}
        subtitle={whenToActData.subtitle}
        listItems={whenToActData.listItems}
        highlightBoxText={whenToActData.highlightBoxText}
      />

      <CardsSection sections={[cardsSections[0]]} />

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
                  {ourApproachData.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                  {ourApproachData.description}
                </p>
              </div>

              <div className="space-y-8">
                {ourApproachData.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 text-justify leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhenToActSection
        title={dataAnalyticsData.title}
        subtitle={dataAnalyticsData.subtitle}
        listItems={dataAnalyticsData.listItems}
        highlightBoxText={dataAnalyticsData.highlightBoxText}
        accentColor="text-red-600"
      />

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
                  {governanceReportingData.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
                  {governanceReportingData.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {governanceReportingData.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-lg max-w-3xl mx-auto">
                <p className="text-gray-800 font-semibold text-lg">
                  {governanceReportingData.highlightText}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

