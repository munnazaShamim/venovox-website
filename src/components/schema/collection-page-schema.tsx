import Script from "next/script";

interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  baseUrl?: string;
}

export function CollectionPageSchema({
  name,
  description,
  url,
  baseUrl = "https://venovox.com",
}: CollectionPageSchemaProps) {
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: fullUrl,
  };

  return (
    <Script
      id="collection-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
