'use client';

import { CompanyProfile } from '@/data/companiesData';
import Link from 'next/link';

interface CompanyContentProps {
    company: CompanyProfile;
}

export default function CompanyContent({ company }: CompanyContentProps) {
    // Extract state from address or headquarters
    // For Malaysian addresses: usually format is Street, City, State, Malaysia
    const getState = () => {
        const addressStr = company.address && company.address !== "N/A" 
            ? company.address 
            : company.headquarters && company.headquarters !== "N/A" 
            ? company.headquarters 
            : "";
        
        if (!addressStr) return "N/A";
        
        const parts = addressStr.split(',').map(p => p.trim());
        // If last part is "Malaysia", second-to-last is likely the state
        if (parts.length >= 2 && parts[parts.length - 1].toLowerCase() === "malaysia") {
            return parts[parts.length - 2] || "N/A";
        }
        // Otherwise, return the last part
        return parts[parts.length - 1] || "N/A";
    };

    // Generate company description text
    const getCompanyDescription = () => {
        const registrationInfo = company.registrationNumber && company.registrationNumber !== "N/A" 
            ? ` with registration number of ${company.registrationNumber}` 
            : "";
        
        const incorporationInfo = company.incorporationDate && company.incorporationDate !== "N/A"
            ? ` on ${company.incorporationDate}`
            : company.founded && company.founded !== "N/A"
            ? ` in ${company.founded}`
            : "";

        const businessInfo = company.businessActivity && company.businessActivity !== "N/A"
            ? `. ${company.name}'s business includes ${company.businessActivity}`
            : "";

        return `${company.name} was incorporated${incorporationInfo} in Malaysia${registrationInfo}${businessInfo}.`;
    };

    return (
        <main className="container mx-auto px-6 py-8">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Side - Company Details Table */}
                <div className="w-full">
  <div className="border border-black rounded-lg overflow-hidden">
    {/* Company Name Row */}
    <div className="grid grid-cols-[40%_60%] border-b border-red-300">
      <div className="bg-red-200 px-4 py-3 text-red-700 font-semibold">
        Company Name
      </div>
      <div className="bg-red-100 px-4 py-3 text-red-700">
        {company.name}
      </div>
    </div>

    {/* Registration Number Row */}
    {company.registrationNumber && company.registrationNumber !== "N/A" && (
      <div className="grid grid-cols-[40%_60%] border-b border-red-300">
        <div className="bg-red-200 px-4 py-3 text-red-700 font-semibold">
          Company Registration No.
        </div>
        <div className="bg-red-100 px-4 py-3 text-red-700">
          {company.registrationNumber}
        </div>
      </div>
    )}

    {/* Nature of Business Row */}
    {company.businessActivity && company.businessActivity !== "N/A" && (
      <div className="grid grid-cols-[40%_60%] border-b border-red-300">
        <div className="bg-red-200 px-4 py-3 text-red-700 font-semibold">
          Nature of Business
        </div>
        <div className="bg-red-100 px-4 py-3 text-red-700">
          {company.businessActivity}
        </div>
      </div>
    )}

    {/* Date of Registration Row */}
    {company.incorporationDate && company.incorporationDate !== "N/A" && (
      <div className="grid grid-cols-[40%_60%] border-b border-red-300">
        <div className="bg-red-200 px-4 py-3 text-red-700 font-semibold">
          Date of Registration
        </div>
        <div className="bg-red-100 px-4 py-3 text-red-700">
          {company.incorporationDate}
        </div>
      </div>
    )}

    {/* State Row */}
    {getState() !== "N/A" && (
      <div className="grid grid-cols-[40%_60%]">
        <div className="bg-red-200 px-4 py-3 text-red-700 font-semibold">
          State
        </div>
        <div className="bg-red-100 px-4 py-3 text-red-700">
          {getState().toUpperCase()}
        </div>
      </div>
    )}
  </div>
</div>


                {/* Right Side - Company Description */}
                <div className="w-full space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-red-600 mb-4">COMPANY DESCRIPTION</h2>
                        <p className="text-gray-900 leading-relaxed">
                            {getCompanyDescription()}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-900 leading-relaxed">
                            Get an accurate picture of a customer's financial status with a credit report for a business. Our solutions help you minimise risk, increase sales and improve business performance.
                        </p>
                    </div>
                    <div>
                        <Link href="/my-en/contact-us/" className="bg-red-600 text-white px-4 py-2 rounded-md">Contact for background screening in Malaysia</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

