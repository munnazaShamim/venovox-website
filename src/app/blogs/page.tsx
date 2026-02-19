import type { Metadata } from "next";
import BlogsClient from "@/components/blogs/BlogsClient";

export const metadata: Metadata = {
    title: "Our Latest Blog Posts | Venovox",
    description: "Explore expert insights from Venovox on background checks, compliance, fraud prevention, and risk intelligence to help your business make safer, smarter decisions.",
    keywords: [
        "blog posts",
        "background screening insights",
        "company verification tips",
        "business intelligence articles",
        "malaysia business news",
        "hr insights",
        "risk management blog",
        "venovox blog"
    ],
    alternates: {
        canonical: "https://venovox.com/blogs"
    }
};

export default function BlogsPage() {

    return (
        <div className="bg-white">
            <section className="relative bg-[#b30000] text-white overflow-hidden min-h-[450px]">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 pt-32 pb-12">
                    <div className="text-center space-y-8 py-12">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-white">Our Latest Blog Posts</span>
                            {/* <span className="text-red-600">Blog Posts</span> */}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Discover insights, tips, and expert advice to help you stay ahead in the digital world.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
                    </div>
                </div>
            </section>

            <BlogsClient />
        </div>
    );
}