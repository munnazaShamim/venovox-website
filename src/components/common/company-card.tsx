"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { useState } from "react";

export interface CompanyCardProps {
  slug: string;
  name: string;
  logo?: string;
  rating?: number;
  reviewCount?: number;
  businessActivity?: string;
  industry?: string[];
  headquarters?: string;
}

export function CompanyCard({
  slug,
  name,
  logo,
  rating,
  reviewCount,
  businessActivity,
  industry,
  headquarters,
}: CompanyCardProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
      <div className="p-6 space-y-4">
        {/* Logo and Company Name */}
        <div className="flex items-start gap-4">
          {logo && logo !== "N/A" && !logoError ? (
            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-full h-full object-contain"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
              {name}
            </h2>
            {rating !== undefined && rating > 0 && (
              <div className="flex items-center gap-1 mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">
                  {rating.toFixed(1)}
                </span>
                {reviewCount !== undefined && reviewCount > 0 && (
                  <span className="text-sm text-gray-500">
                    ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Business Activity */}
        {businessActivity && businessActivity !== "N/A" && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {businessActivity}
          </p>
        )}

        {/* Industry Tags */}
        {industry && industry.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {industry.slice(0, 2).map((ind, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {ind}
              </span>
            ))}
            {industry.length > 2 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{industry.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Headquarters */}
        {headquarters && headquarters !== "N/A" && (
          <p className="text-gray-500 text-xs flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="line-clamp-1">{headquarters}</span>
          </p>
        )}

        {/* View Profile Button */}
        <div className="pt-4">
          <Link
            href={`/companies/${slug}`}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            View Profile
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

