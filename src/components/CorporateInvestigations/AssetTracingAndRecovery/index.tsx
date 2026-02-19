"use client";

import Hero from "../RegulatoryAndComplianceInvestigations/Hero";
import Introduction from "../RegulatoryAndComplianceInvestigations/Introduction";
import CardsSection from "@/components/common/cards-section";
import Faqs from "../RegulatoryAndComplianceInvestigations/Faqs";
import Cta from "../RegulatoryAndComplianceInvestigations/Cta";
import WhenToActSection from "@/components/common/act";
import SimpleSection from "../BrandAndIpInvestigations/SimpleSection";

import {
  heroData,
  introductionData,
  whenToStartData,
  cardsSections,
  crossBorderData,
  legalFinanceData,
  whatYouReceiveData,
  progressReportingData,
  faqsData,
  ctaData,
} from "./data";

export default function AssetTracingAndRecovery() {
  return (
    <div className="bg-white px-6 text-gray-900">
      <Hero mainText={heroData.mainText} paragraphs={heroData.paragraphs} />

      <Introduction
        title={introductionData.title}
        description={introductionData.description}
      />
      <SimpleSection
        title={whenToStartData.title}
        description={whenToStartData.description}
      />

      <CardsSection sections={cardsSections} />

      <SimpleSection
        title={crossBorderData.title}
        description={crossBorderData.description}
      />

      <section className="py-12">
        <div className="container mx-auto">
          <div className="mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                {legalFinanceData.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                {legalFinanceData.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {legalFinanceData.services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-justify leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhenToActSection
        title={whatYouReceiveData.title}
        subtitle={whatYouReceiveData.subtitle}
        listItems={whatYouReceiveData.listItems}
        accentColor="text-red-600"
      />

      <SimpleSection
        title={progressReportingData.title}
        description={progressReportingData.description}
        bgColor="bg-gray-50"
      />

      <Faqs faqs={faqsData} />

      <Cta actions={ctaData} />
    </div>
  );
}

