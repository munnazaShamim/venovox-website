interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

export function OrganizationSchema({
  name = "Venovox",
  url = "https://venovox.com/",
  logo = "https://venovox.com/venovox-logo.png",
  sameAs = [
    "https://www.facebook.com/venovox",
    "https://www.instagram.com/venovox/",
    "https://www.linkedin.com/company/venovox/",
  ],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name,
    url,
    logo,
    sameAs,
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
