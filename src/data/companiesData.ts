export interface CompanyProfile {
  slug: string;
  name: string;
  registrationNumber?: string;
  companySize?: string;
  website?: string;
  logo?: string;
  rating?: number;
  reviewCount?: number;
  businessActivity?: string;
  incorporationDate?: string;
  phone?: string;
  email?: string;
  address?: string;
  headquarters?: string;
  industry?: string[];
  founded?: string;
  overview: string;
  servicesAndOperations?: string[];
  hiringAndComplianceNotes?: string;
  industrySpecificRiskFactors?: string[];
  businessCategory?: string[];
  similarCompanies?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
  };
}

export const companiesData: CompanyProfile[] = [
  {
    slug: "petronas",
    name: "Petronas",
    registrationNumber: "197401001024 (20076-K)",
    companySize: "50,000+",
    website: "#",
    logo: "/companies/petronas-logo.svg",
    rating: 4.5,
    reviewCount: 120,
    businessActivity: "Energy and Petrochemical Company",
    incorporationDate: "1974-08-17",
    phone: "+60 3-2051 5000",
    email: "info@petronas.com",
    address: "Petronas Twin Towers, Kuala Lumpur City Centre, Malaysia",
    headquarters: "Petronas Twin Towers, Kuala Lumpur City Centre, Malaysia",
    industry: ["Energy", "Oil and Gas", "Petrochemicals"],
    founded: "1974",
    overview: "Petronas is a major global energy and petrochemical company headquartered in Kuala Lumpur. Founded in 1974, it manages and develops Malaysia's oil and gas resources and operates across exploration, production, refining, petrochemicals, and energy trading. The company is widely recognized for its contribution to Malaysia's industrial growth and for operating projects across Asia, the Middle East, and Africa.",
    servicesAndOperations: [
      "Upstream exploration and production",
      "Refining and retail fuel operations",
      "Petrochemical manufacturing",
      "Liquefied natural gas distribution",
      "Global energy trading",
      "Engineering and technical solutions"
    ],
    hiringAndComplianceNotes: "Companies in the energy and petrochemical sector operate in highly regulated environments. This includes strict safety standards, workforce verification policies, and compliance processes to maintain secure operations. It is common for organizations in this industry to implement structured background screening for roles involving technical work, access to critical infrastructure, financial responsibility, or safety sensitive environments. This helps reduce operational risk and maintain regulatory alignment within Malaysia.",
    industrySpecificRiskFactors: [
      "Workplace safety regulations",
      "High value asset protection",
      "Technical role competency",
      "Environmental and operational compliance",
      "Identity verification for contractor based workforce"
    ],
    businessCategory: [
      "Top Malaysian Corporations",
      "Energy and Petrochemical Companies in Malaysia",
      "Global State Owned Enterprises"
    ],
    similarCompanies: [
      "Shell Malaysia",
      "Petron Malaysia",
      "Hibiscus Petroleum",
      "Dialog Group"
    ],
    faqs: [
      {
        question: "What does Petronas do?",
        answer: "Petronas manages Malaysia's oil and gas resources and operates across exploration, production, petrochemicals, and energy trading."
      },
      {
        question: "Is the company government owned?",
        answer: "Yes. It is wholly owned by the Government of Malaysia."
      },
      {
        question: "What regulations apply to companies in this sector?",
        answer: "Energy companies typically follow strict workplace safety rules, environmental laws, and competency standards. Workforce verification is often part of compliance for sensitive roles."
      },
      {
        question: "Do energy companies use background screening?",
        answer: "Many businesses in this sector adopt background checks to ensure safety, verify technical qualifications, and maintain compliance with Malaysian and international standards."
      }
    ],
    seo: {
      metaTitle: "Petronas Company Profile | Malaysia Energy Company | Venovox",
      metaDescription: "Complete company profile for Petronas - Malaysia's leading energy and petrochemical company. Learn about their operations, services, and compliance requirements.",
      keywords: [
        "Petronas",
        "Malaysia energy company",
        "petrochemical company Malaysia",
        "oil and gas Malaysia",
        "Petronas company profile"
      ],
      canonicalUrl: "https://venovox.com/companies/petronas"
    }
  },
  {
    slug: "vincci-ladies-specialties",
    name: "VINCCI LADIES' SPECIALTIES CENTRE SDN BHD",
    registrationNumber: "198101007288 (73404-H)",
    companySize: "N/A",
    website: "#",
    logo: "/companies/vincci-logo.jpg",
    rating: 0,
    reviewCount: 0,
    businessActivity: "DEALING OF LADIES' SHOES AND ACCESSORIES",
    incorporationDate: "1981-07-22",
    phone: "N/A",
    email: "N/A",
    address: "133, Jalan 17/11, Seksyen 17, 46300 Petaling Jaya, Selangor, Malaysia",
    headquarters: "Malaysia",
    industry: ["Retail", "Fashion", "Accessories"],
    founded: "1981",
    overview: "VINCCI LADIES' SPECIALTIES CENTRE SDN BHD is a retail company specializing in ladies' shoes and accessories. Established in 1981, the company has been serving customers in Malaysia's fashion retail sector.",
    servicesAndOperations: [
      "Retail of ladies' shoes",
      "Retail of ladies' accessories",
      "Fashion retail operations"
    ],
    businessCategory: [
      "Retail Companies in Malaysia",
      "Fashion Retail Companies"
    ],
    seo: {
      metaTitle: "VINCCI LADIES' SPECIALTIES CENTRE SDN BHD Company Profile | Venovox",
      metaDescription: "Company profile for VINCCI LADIES' SPECIALTIES CENTRE SDN BHD - A retail company specializing in ladies' shoes and accessories in Malaysia.",
      keywords: [
        "VINCCI LADIES SPECIALTIES",
        "Malaysia retail company",
        "fashion retail Malaysia",
        "company profile Malaysia"
      ]
    }
  },
  {
    slug: "lizard-global",
    name: "Lizard Global",
    registrationNumber: "N/A",
    companySize: "50-249",
    website: "#",
    logo: "/companies/lizard-logo.svg",
    rating: 4.8,
    reviewCount: 45,
    businessActivity: "Web Development and Software Services",
    incorporationDate: "N/A",
    phone: "N/A",
    email: "info@lizard.global",
    address: "Kuala Lumpur, Malaysia",
    headquarters: "Kuala Lumpur, Malaysia",
    industry: ["Technology", "Web Development", "Software Development"],
    founded: "N/A",
    overview: "Lizard Global is a web development company specializing in web application development, front-end and back-end development, and custom website development. With overwhelmingly positive feedback, including timely delivery and responsiveness, 100% of reviewers commend their reliability and project management. Approximately 90% highlight their proactive involvement and strategic thinking, making them an esteemed partner in diverse projects.",
    servicesAndOperations: [
      "Web Development (30%)",
      "Mobile App Development (60%)",
      "Custom Software Development (10%)"
    ],
    businessCategory: [
      "Technology Companies in Malaysia",
      "Web Development Companies",
      "Software Development Companies"
    ],
    seo: {
      metaTitle: "Lizard Global Company Profile | Web Development Malaysia | Venovox",
      metaDescription: "Complete company profile for Lizard Global - A leading web and mobile app development company in Kuala Lumpur, Malaysia.",
      keywords: [
        "Lizard Global",
        "web development Malaysia",
        "mobile app development Malaysia",
        "software development company"
      ]
    }
  }
];

