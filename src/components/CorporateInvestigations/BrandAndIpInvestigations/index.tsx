"use client";

import Hero from "../RegulatoryAndComplianceInvestigations/Hero";
import Introduction from "../RegulatoryAndComplianceInvestigations/Introduction";
import WhenToAct from "../RegulatoryAndComplianceInvestigations/WhenToAct";
import CardsSection from "@/components/common/cards-section";
import Faqs from "../RegulatoryAndComplianceInvestigations/Faqs";
import Cta from "../RegulatoryAndComplianceInvestigations/Cta";
import WhenToActSection from "@/components/common/act";
import ThreeStepBand from "./ThreeStepBand";
import SimpleSection from "./SimpleSection";

import {
  heroData,
  threeStepBandData,
  introductionData,
  whyBrandMattersData,
  whenToActData,
  cardsSections,
  legalEnforcementSupportData,
  crossBorderCapabilityData,
  whatYouReceiveData,
  faqsData,
  ctaData,
} from "./data";

export default function BrandAndIpInvestigations() {
  return (
    <div className="bg-white px-6 text-gray-900">
      <Hero mainText={heroData.mainText} paragraphs={heroData.paragraphs} />

      <ThreeStepBand steps={threeStepBandData} />

      <Introduction
        title={introductionData.title}
        description={introductionData.description}
      />

      <SimpleSection
        title={whyBrandMattersData.title}
        description={whyBrandMattersData.description}
      />

      <WhenToAct
        title={whenToActData.title}
        subtitle={whenToActData.subtitle}
        listItems={whenToActData.listItems}
        highlightBoxText={whenToActData.highlightBoxText}
      />

      <CardsSection sections={cardsSections} />

      <WhenToActSection
        title={legalEnforcementSupportData.title}
        subtitle={legalEnforcementSupportData.subtitle}
        listItems={legalEnforcementSupportData.listItems}
        accentColor="text-red-600"
      />

      <SimpleSection
        title={crossBorderCapabilityData.title}
        description={crossBorderCapabilityData.description}
        bgColor="bg-white"
      />

      <WhenToActSection
        title={whatYouReceiveData.title}
        listItems={whatYouReceiveData.listItems}
        accentColor="text-red-600"
      />

      <Faqs faqs={faqsData} />

      <Cta actions={ctaData} />
    </div>
  );
}

