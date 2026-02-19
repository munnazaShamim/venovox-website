"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const capitalizeWords = (str: string) =>
    str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

export default function PageBanner() {
    const pathname = usePathname();

    const pathSegments = pathname.split("/").filter(Boolean);

    const currentPage = pathSegments[pathSegments.length - 1] || "Home";

    const buildBreadcrumbs = () => {
        const breadcrumbs: Array<{ name: string; url: string; isLast?: boolean }> = [
            { name: "Home", url: "/" }
        ];

        // Filter out all language segments from path segments
        const languageSegments = ["en", "my-en", "ms", "zh", "ar", "de", "fr"];
        const filteredSegments = pathSegments.filter(segment => !languageSegments.includes(segment));

        let currentPath = "";
        filteredSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            const isLast = index === filteredSegments.length - 1;
            
            let displayName = capitalizeWords(segment);
            if (segment === "case-studies") {
                displayName = "Case Studies";
            } else if (segment === "corporate-investigations") {
                displayName = "Corporate Investigations";
            } else if (segment === "our-services") {
                displayName = "Our Services";
            } else if (segment === "background-screening") {
                displayName = "Background Screening";
            }
            
            breadcrumbs.push({
                name: displayName,
                url: currentPath,
                isLast
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = buildBreadcrumbs();

    return (
        <div className="w-full">
            <div 
                className="py-20 text-center mt-20 bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url('/close-up-people-working-from-home_23-2149173354.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                <h1 className="text-white text-4xl md:text-6xl font-bold relative z-10">
                    {capitalizeWords(currentPage)}
                </h1>
            </div>

            <div className="bg-gray-50 py-4 px-4 border-b border-gray-200">
                <div className="container mx-auto">
                    <div className="flex items-center flex-wrap text-sm text-gray-600">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center">
                                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                                {crumb.isLast ? (
                                    <span className="text-gray-900 font-medium">
                                        {crumb.name}
                                    </span>
                                ) : (
                                    <Link 
                                        href={crumb.url} 
                                        className="hover:text-red-600 transition-colors duration-200"
                                    >
                                        {crumb.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
