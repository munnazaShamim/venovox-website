import Script from "next/script";

interface ItemListSchemaProps {
  name: string;
  description?: string;
  items: Array<{
    name: string;
    url: string;
    description?: string;
  }>;
  baseUrl?: string;
}

export function ItemListSchema({
  name,
  description,
  items,
  baseUrl = "https://venovox.com",
}: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    ...(description && { description }),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.name,
        url: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
        ...(item.description && { description: item.description }),
      },
    })),
  };

  return (
    <Script
      id="item-list-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
