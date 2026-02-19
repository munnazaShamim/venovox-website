interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  // Validate that faqs is an array
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  // Deduplicate FAQs by question to prevent duplicate schema entries
  const uniqueFAQs = faqs.filter((faq, index, self) => 
    index === self.findIndex((f) => f.question.toLowerCase().trim() === faq.question.toLowerCase().trim())
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uniqueFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}
