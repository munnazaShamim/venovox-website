'use client';

import { CompanyProfile } from '@/data/companiesData';

interface CompanyHeaderProps {
    company: CompanyProfile;
}

export default function CompanyHeader({ company }: CompanyHeaderProps) {
    // Get country/region from address or headquarters
    const getLocation = () => {
        if (company.address && company.address !== "N/A") {
            const parts = company.address.split(',');
            return parts[parts.length - 1]?.trim() || "";
        }
        if (company.headquarters && company.headquarters !== "N/A") {
            const parts = company.headquarters.split(',');
            return parts[parts.length - 1]?.trim() || "";
        }
        return "";
    };

    const location = getLocation();
    const locationText = location ? ` (${location.toUpperCase()})` : "";

    return (
        <section className="relative bg-white mt-24">
            <div className="container mx-auto px-6 py-8">
                <div className="mb-6">
                    <p className="text-gray-600 text-sm mb-2">DISCOVER & GAIN INSIGHTS ON</p>
                    <h1 className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">
                        {company.name.toUpperCase()}{locationText}
                    </h1>
                    {/* <p className="text-gray-600 text-sm">Company</p> */}
                </div>
            </div>
        </section>
    );
}

