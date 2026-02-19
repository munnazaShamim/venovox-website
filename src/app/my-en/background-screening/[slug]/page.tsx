import ServicePageClient from "./ServicePageClient";
import servicesData from "@/data/our-services.json";

export async function generateStaticParams() {
    return servicesData.services.map((service) => ({
        slug: service.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Find the service from the data
    const service = servicesData.services.find((s) => s.id === slug);

    return {
        title: service?.metaTitle,
        description: service?.metaDescription,
        alternates: {
            canonical: `https://venovox.com/my-en/background-screening/${slug}`,
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <ServicePageClient slug={slug} />;
}
