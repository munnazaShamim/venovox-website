'use client';

import { blogData } from "@/data/blogsData";
import { useState, useEffect } from "react";
import { BlogCard } from "../common/blog-card";

export default function BlogsClient() {
    const BLOGS_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blogData.length / BLOGS_PER_PAGE);

    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    const endIndex = startIndex + BLOGS_PER_PAGE;

    const reversedBlogs = [...blogData].reverse();
    const currentBlogs = reversedBlogs.slice(startIndex, endIndex);

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
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog) => (
                    <BlogCard
                        key={blog.slug}
                        slug={blog.slug}
                        title={blog.h1}
                        description={blog.seo.metaDescription}
                        featuredImage={blog.featuredImage}
                        altTag={blog.altTag}
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

                    {/* Prev / Next arrows (optional, kept for usability) */}
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

            {/* Empty state (no blogs) */}
            {blogData.length === 0 && (
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
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">No Blog Posts Yet</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                            We&apos;re working on creating amazing content for you. Check back soon!
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}
