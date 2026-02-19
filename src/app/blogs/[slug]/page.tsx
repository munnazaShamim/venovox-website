import { notFound } from "next/navigation";
import { CheckCircle, Shield, Clock, Users, Info, Lock, ShieldCheck, Gavel,AlertTriangle, Globe, TrendingUp, Search, AlertCircle, Network, Filter, Airplay, Bell, FileText, BarChart, Calendar, ShieldOff, BookX, UserX, File, OctagonAlert, ShieldAlert, CircleCheck, PhoneCall, Earth, Smartphone, SquareLibrary, BookmarkPlus, Monitor, ReceiptText, LayoutDashboard, PersonStanding, Rss, CircleFadingPlus, Scale, CheckCheck, GlobeLock, Anvil, NotebookPen, Presentation, BookOpen, CircleCheckBig, PrinterCheck, TvMinimalPlay, Heart, SquarePen, DollarSign, Briefcase, Book, Lightbulb, MapPin ,ThumbsDown} from "lucide-react";
import { blogData } from "@/data/blogsData";
import Link from "next/link";
import { HTMLContent } from "@/components/common/HTMLContent";
import { FAQSection } from "@/components/common/faq-section";


const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://venovox.com';

const iconMap: { [key: string]: any } = { CheckCircle, Shield, Clock, Users, Info, Lock, ShieldCheck, Gavel,AlertTriangle, Globe, TrendingUp, Search, AlertCircle, Network, Filter, Airplay, Bell, FileText, BarChart, Calendar, ShieldOff, BookX, UserX, File, OctagonAlert, ShieldAlert, CircleCheck, PhoneCall, Earth, Smartphone, SquareLibrary, BookmarkPlus, Monitor, ReceiptText, LayoutDashboard, PersonStanding, Rss, CircleFadingPlus, Scale, CheckCheck, GlobeLock, Anvil, NotebookPen, Presentation, BookOpen, CircleCheckBig, PrinterCheck, TvMinimalPlay, Heart, SquarePen, DollarSign, Briefcase, Book, Lightbulb, MapPin ,ThumbsDown};

interface BlogPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogData.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: BlogPageProps) {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);
    if (!blog) return {};

    const canonicalUrl = `${BASE_URL}/blogs/${slug}`;

    return {
        title: blog.seo.metaTitle,
        description: blog.seo.metaDescription,
        keywords: blog.seo.keywords.join(", "),
        alternates: {
            canonical: canonicalUrl
        },
    };
}

function generateCanonicalUrl(slug: string, category?: string): string {
    if (category) {
        return `${BASE_URL}/${category}/${slug}`;
    }
    return `${BASE_URL}/blogs/${slug}`;
}

function generateSEOCanonicalUrl(slug: string, blogData: any): string {
    if (blogData.seo?.canonicalUrl) {
        return blogData.seo.canonicalUrl;
    }

    const baseUrl = BASE_URL.replace(/\/$/, ''); // Remove trailing slash
    return `${baseUrl}/blogs/${slug}`;
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);

    if (!blog) return notFound();

    const canonicalUrl = generateCanonicalUrl(slug);

    const renderSection = (section: any, index: number) => {
        switch (section.type) {
            case "introduction":
                return (
                    <section key={index} className="mb-16">
                        <div className=" mx-auto">
                            <HTMLContent 
                                content={section.content}
                                className="text-gray-600 leading-relaxed text-lg text-justify"
                            />
                        </div>
                    </section>
                );

            case "content_section":
                return (
                    <section key={index} className="mb-12">
                        <div className="mx-auto py-12">
                            <h2 className="text-4xl font-bold  text-black text-center mb-12">
                                {section.heading}
                            </h2>
                            <HTMLContent 
                                content={section.content}
                                className="text-gray-600 leading-relaxed text-lg text-justify"
                            />
                        </div>
                    </section>
                );

            case "content_with_image":
                return (
                    <section key={index} className="mb-20">
                        <div className=" mx-auto">
                            <h2 className="text-4xl font-bold mb-12 text-black text-center leading-tight">
                                {section.heading}
                            </h2>
                            <div
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${section.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
                                    }`}
                            >
                                <div
                                    className={`space-y-6 ${section.imagePosition === "left" ? "lg:order-last" : ""
                                        }`}
                                >
                                    <HTMLContent 
                                        content={section.content}
                                        className="text-gray-600 leading-relaxed text-lg text-justify"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl  transition-shadow duration-300">
                                        <img
                                            src={section.image}
                                            alt={section.imageAlt}
                                            width={500}
                                            height={350}
                                            className="object-cover "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case "benefits_section":
                return (
                    <section key={index} className="mb-20 bg-white py-12">
                        <div className=" mx-auto px-6">
                            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center leading-tight">
                                {section.heading}
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl  transition-shadow duration-300">
                                        <img
                                            src={section.image}
                                            alt={section.imageAlt}
                                            width={500}
                                            height={350}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <HTMLContent 
                                        content={section.content}
                                        className="text-gray-600 text-lg leading-relaxed text-justify"
                                    />
                                    <div className="space-y-6">
                                        {section.benefits.map((benefit: any, benefitIndex: number) => {
                                            const Icon = iconMap[benefit.icon];
                                            return (
                                                <div
                                                    key={benefitIndex}
                                                    className="flex items-start p-4 bg-white rounded-xl shadow-sm  transition-shadow duration-200"
                                                >
                                                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                                                        <Icon className="w-6 h-6 text-red-600" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900 text-lg mb-2">
                                                            {benefit.title}
                                                        </h4>
                                                        <HTMLContent 
                                                            content={benefit.description}
                                                            className="text-gray-600 leading-relaxed text-justify"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case "two_column_section":
                return (
                    <section key={index} className="mb-20">
                        <div className="mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {section.sections.map((subsection: any, subIndex: number) => (
                                    <div
                                        key={subIndex}
                                        className="bg-white p-8 rounded-2xl shadow-lg transition-shadow duration-300 border border-gray-100"
                                    >
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900 leading-tight">
                                            {subsection.heading}
                                        </h3>
                                        <HTMLContent 
                                            content={subsection.content}
                                            className="text-gray-600 leading-relaxed text-lg text-justify"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case "conclusion":
                return (
                    <section key={index} className="mb-20">
                        <div className=" mx-auto">
                            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-12 rounded-2xl shadow-2xl">
                                <h2 className="text-3xl font-bold mb-6 leading-tight">
                                    {section.heading}
                                </h2>
                                <HTMLContent 
                                    content={section.content}
                                    className="text-lg leading-relaxed text-justify opacity-95"
                                />
                            </div>
                        </div>
                    </section>
                );

            case "faq_section":
                return (
                    <FAQSection
                        key={index}
                        faqs={section.faqs}
                        heading={section.heading}
                        sectionKey={`faq-${index}`}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white ">
            <section className="relative bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] mt-20">
                        <div className="space-y-8">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-white">
                                    {blog.h1.split(" ").slice(0, -3).join(" ")}{" "}
                                </span>
                                <span className="text-red-600">
                                    {blog.h1.split(" ").slice(-3).join(" ")}
                                </span>
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-300 w-[600px] h-[400px]">
                                <img
                                    src={blog.featuredImage}
                                    alt={blog.altTag}
                                    className="absolute inset-0 w-full h-full object-cover  transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <main className="container mx-auto px-6 py-20">
                <div className="space-y-8 text-justify">
                    {blog.sections.map((section, index) => renderSection(section, index))}
                </div>
                <div className="flex items-center justify-between mt-12">
                <Link
                                    href="/author"
                                    className="flex items-center gap-2 text-right cursor-pointer"
                                >
                                    <img
                                        src="/images/venovox-author1.webp"
                                        alt="Author"
                                        className="w-12 h-12 rounded-full object-cover "
                                    />
                                    <div className="hidden sm:block">
                                        <h4 className="text-sm font-semibold">Dato&apos; Venodevan</h4>
                                        <p className="text-xs text-gray-500 line-clamp-1">
                                            Risk is an opportunity
                                        </p>
                                    </div>
                                </Link>
                    <span className="text-gray-500 text-xl">August 8th, 2024.</span>
                </div>
            </main>
        </div>
    );
}