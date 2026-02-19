'use client';

import { companiesData } from "@/data/companiesData";
import { useState, useEffect } from "react";
import { CompanyCard } from "../common/company-card";

export default function CompaniesClient() {
    const COMPANIES_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(companiesData.length / COMPANIES_PER_PAGE);

    const startIndex = (currentPage - 1) * COMPANIES_PER_PAGE;
    const endIndex = startIndex + COMPANIES_PER_PAGE;

    const currentCompanies = companiesData.slice(startIndex, endIndex);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number' && page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Added the word "VENOVOX" used for pagination
    const venovoxLetters = ["V", "E", "N", "O", "V", "O", "O", "O", "X"];

    return (
        <main className="container mx-auto px-6 py-20">
            {/* Company Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCompanies.map((company) => (
                    <CompanyCard
                        key={company.slug}
                        slug={company.slug}
                        name={company.name}
                        logo={company.logo}
                        rating={company.rating}
                        reviewCount={company.reviewCount}
                        businessActivity={company.businessActivity}
                        industry={company.industry}
                        headquarters={company.headquarters}
                    />
                ))}
            </div>

            {/* Custom VENOVOX Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-col items-center justify-center mt-16 space-y-4">
                    {/* Word pagination (VENOVOX) */}
                    <div className="flex justify-center items-center space-x-3">
                        {venovoxLetters.map((letter, index) => {
                            const page = index + 1;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(page)}
                                    disabled={page > totalPages}
                                    className={`text-2xl font-extrabold tracking-wider transition-all duration-300 ${
                                        currentPage === page
                                            ? "text-red-600 scale-125 drop-shadow-[0_0_6px_rgba(220,38,38,0.5)]"
                                            : page > totalPages
                                                ? "text-red-300 cursor-not-allowed"
                                                : "text-red-500 hover:text-white-500 hover:scale-110"
                                    }`}
                                >
                                    {letter}
                                </button>
                            );
                        })}
                    </div>

                    {/* Prev / Next arrows */}
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-full border transition-all duration-300 ${
                                currentPage === 1
                                    ? "border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50"
                                    : "border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 hover:bg-red-50"
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-full border transition-all duration-300 ${
                                currentPage === totalPages
                                    ? "border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50"
                                    : "border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 hover:bg-red-50"
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
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
                        </button>
                    </div>
                </div>
            )}

            {/* Empty state */}
            {companiesData.length === 0 && (
                <div className="text-center py-20">
                    <div className="space-y-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                            <svg
                                className="w-10 h-10 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">No Companies Yet</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                            We&apos;re working on adding company profiles. Check back soon!
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}

