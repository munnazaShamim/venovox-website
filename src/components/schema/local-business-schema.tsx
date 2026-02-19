interface LocalBusinessSchemaProps {
  name?: string;
  image?: string;
  url?: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    areaServed?: string;
    availableLanguage?: string;
  };
  sameAs?: string[];
  department?: {
    name?: string;
    address?: {
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry?: string;
    };
    contactPoint?: {
      telephone?: string;
      contactType?: string;
      areaServed?: string;
      availableLanguage?: string;
    };
  };
}

export function LocalBusinessSchema({
  name = "Venovox Sdn Bhd",
  image = "https://venovox.com/venovox-logo.png",
  url = "https://venovox.com",
  logo = "https://venovox.com/venovox-logo.png",
  description = "Venovox delivers premium background screening, due diligence, risk and corporate investigations in Malaysia, Singapore and the UK. PDPA aligned, ISO 27001 oriented, discreet and precise for confident decisions.",
  address = {
    streetAddress: "E-7-03, Block E, Oasis Square, No 2, Jalan PJU 1A/7",
    addressLocality: "Ara Damansara",
    addressRegion: "Selangor",
    postalCode: "47301",
    addressCountry: "MY",
  },
  contactPoint = {
    telephone: "+603 7800 0088",
    contactType: "Customer Service",
    areaServed: "MY",
    availableLanguage: "English",
  },
  sameAs = [
    "https://www.facebook.com/venovox",
    "https://www.linkedin.com/company/venovox",
  ],
  department,
}: LocalBusinessSchemaProps) {
  type LocalBusinessSchemaType = {
    "@context": string;
    "@type": string;
    name: string;
    image: string;
    url: string;
    logo: string;
    description: string;
    address: {
      "@type": string;
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry?: string;
    };
    contactPoint: {
      "@type": string;
      telephone?: string;
      contactType?: string;
      areaServed?: string;
      availableLanguage?: string;
    };
    sameAs: string[];
    department?: {
      "@type": string;
      name?: string;
      address?: {
        "@type": string;
        streetAddress?: string;
        addressLocality?: string;
        addressRegion?: string;
        postalCode?: string;
        addressCountry?: string;
      };
      contactPoint?: {
        "@type": string;
        telephone?: string;
        contactType?: string;
        areaServed?: string;
        availableLanguage?: string;
      };
    };
  };

  const schema: LocalBusinessSchemaType = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    image,
    url,
    logo,
    description,
    address: {
      "@type": "PostalAddress",
      ...(address.streetAddress && { streetAddress: address.streetAddress }),
      ...(address.addressLocality && { addressLocality: address.addressLocality }),
      ...(address.addressRegion && { addressRegion: address.addressRegion }),
      ...(address.postalCode && { postalCode: address.postalCode }),
      ...(address.addressCountry && { addressCountry: address.addressCountry }),
    },
    contactPoint: {
      "@type": "ContactPoint",
      ...(contactPoint.telephone && { telephone: contactPoint.telephone }),
      ...(contactPoint.contactType && { contactType: contactPoint.contactType }),
      ...(contactPoint.areaServed && { areaServed: contactPoint.areaServed }),
      ...(contactPoint.availableLanguage && { availableLanguage: contactPoint.availableLanguage }),
    },
    sameAs,
  };

  if (department) {
    schema.department = {
      "@type": "Organization",
      ...(department.name && { name: department.name }),
      ...(department.address && {
        address: {
          "@type": "PostalAddress",
          ...(department.address.streetAddress && { streetAddress: department.address.streetAddress }),
          ...(department.address.addressLocality && { addressLocality: department.address.addressLocality }),
          ...(department.address.addressRegion && { addressRegion: department.address.addressRegion }),
          ...(department.address.postalCode && { postalCode: department.address.postalCode }),
          ...(department.address.addressCountry && { addressCountry: department.address.addressCountry }),
        },
      }),
      ...(department.contactPoint && {
        contactPoint: {
          "@type": "ContactPoint",
          ...(department.contactPoint.telephone && { telephone: department.contactPoint.telephone }),
          ...(department.contactPoint.contactType && { contactType: department.contactPoint.contactType }),
          ...(department.contactPoint.areaServed && { areaServed: department.contactPoint.areaServed }),
          ...(department.contactPoint.availableLanguage && { availableLanguage: department.contactPoint.availableLanguage }),
        },
      }),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}

