"use client";

import Hero from "./Hero";
import Introduction from "./Introduction";
import WhenToAct from "./WhenToAct";
import CardsSection from "@/components/common/cards-section";
import InvestigationMethod from "./InvestigationMethod";
import Faqs from "./Faqs";
import Cta from "./Cta";
import WhenToActSection from "@/components/common/act";

import {
  heroData,
  introductionData,
  whenToActData,
  cardsSections,
  investigationMethodData,
  whatYouReceiveData,
  faqsData,
  ctaData,
} from "./data";

export default function RegulatoryAndComplianceInvestigations() {
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

      
      <CardsSection sections={cardsSections} />


      <InvestigationMethod
        title={investigationMethodData.title}
        description={investigationMethodData.description}
        steps={investigationMethodData.steps}
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

