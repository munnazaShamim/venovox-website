interface WebSiteSchemaProps {
  url?: string;
  name?: string;
  searchTarget?: string;
  queryInput?: string;
}

export function WebSiteSchema({
  url = "https://venovox.com/",
  name = "Venovox",
  searchTarget = "https://venovox.com/?s={search_term_string}",
  queryInput = "required name=search_term_string",
}: WebSiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
    potentialAction: {
      "@type": "SearchAction",
      target: searchTarget,
      "query-input": queryInput,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}

