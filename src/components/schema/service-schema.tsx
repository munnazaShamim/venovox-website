import Script from "next/script";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: {
    name?: string;
    url?: string;
  };
  areaServed?: string | string[];
  serviceType?: string;
  baseUrl?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  provider,
  areaServed,
  serviceType,
  baseUrl = "https://venovox.com",
}: ServiceSchemaProps) {
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: fullUrl,
    provider: {
      "@type": "Organization",
      name: provider?.name || "Venovox",
      url: provider?.url || baseUrl,
    },
    ...(areaServed && {
      areaServed: Array.isArray(areaServed) ? areaServed : [areaServed],
    }),
    ...(serviceType && { serviceType }),
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
