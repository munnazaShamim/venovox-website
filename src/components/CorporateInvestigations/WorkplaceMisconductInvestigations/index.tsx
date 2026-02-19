"use client";

import Hero from "../RegulatoryAndComplianceInvestigations/Hero";
import Introduction from "../RegulatoryAndComplianceInvestigations/Introduction";
import WhenToAct from "../RegulatoryAndComplianceInvestigations/WhenToAct";
import CardsSection from "@/components/common/cards-section";
import InvestigationMethod from "../RegulatoryAndComplianceInvestigations/InvestigationMethod";
import Faqs from "../RegulatoryAndComplianceInvestigations/Faqs";
import Cta from "../RegulatoryAndComplianceInvestigations/Cta";
import SimpleSection from "../BrandAndIpInvestigations/SimpleSection";
import { motion } from "framer-motion";

import {
  heroData,
  introductionData,
  whenToActData,
  whatIsWorkplaceMisconductData,
  cardsSections,
  investigationProcessData,
  outcomesData,
  whyChooseUsData,
  faqsData,
  ctaData,
  whistleblowingIntakeNote,
  careForPeopleData,
  digitalEvidenceData,
} from "./data";

export default function WorkplaceMisconductInvestigations() {
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

      <SimpleSection
        title={whatIsWorkplaceMisconductData.title}
        description={whatIsWorkplaceMisconductData.description}
        bgColor="bg-white"
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
              {/* <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  {cardsSections[1].title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                  {cardsSections[1].subtitle}
                </p>
              </div> */}
              <CardsSection sections={[cardsSections[1]]} />
              <p className="text-lg text-gray-700 text-center leading-relaxed mt-6">
                {whistleblowingIntakeNote}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <InvestigationMethod
        title={investigationProcessData.title}
        description={investigationProcessData.description}
        steps={investigationProcessData.steps}
        bgColor="bg-gray-50"
      />

      <CardsSection sections={[cardsSections[2]]} />

      <section className="py-12">
        <div className="container mx-auto">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  {careForPeopleData.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
                  {careForPeopleData.description}
                </p>
              </div> */}
              <CardsSection sections={[cardsSections[3]]} />
              <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center max-w-2xl mx-auto">
                {careForPeopleData.footerText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  {digitalEvidenceData.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
                  {digitalEvidenceData.description}
                </p>
              </div> */}
              <CardsSection sections={[cardsSections[4]]} />
              <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center max-w-2xl mx-auto">
                {digitalEvidenceData.footerText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CardsSection sections={[cardsSections[5]]} />

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
                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                  Outcomes you can expect
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {outcomesData.items.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 text-justify leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto ">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                  {whyChooseUsData.title}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {whyChooseUsData.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-justify leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Faqs faqs={faqsData} />

      <CardsSection sections={[cardsSections[6]]} />

      <Cta actions={ctaData} />
    </div>
  );
}

