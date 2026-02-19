import Script from "next/script";

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  baseUrl?: string;
}

export function WebPageSchema({
  name,
  description,
  url,
  baseUrl = "https://venovox.com",
}: WebPageSchemaProps) {
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: fullUrl,
  };

  return (
    <Script
      id="webpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
