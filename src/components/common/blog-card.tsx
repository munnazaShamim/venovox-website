"use client";

import Link from "next/link";

export interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  featuredImage: string;
  altTag: string;
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
  authorLink?: string;
}

export function BlogCard({
  slug,
  title,
  description,
  featuredImage,
  altTag,
  authorName = "Dato' Venodevan",
  authorTitle = "Risk is an opportunity",
  authorImage = "/images/venovox-author1.webp",
  authorLink = "/author",
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={featuredImage}
          alt={altTag}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="pt-4 flex items-center justify-between">
          <Link
            href={`${slug}`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            Read More
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

          <Link
            href={authorLink}
            className="flex items-center gap-2 text-right cursor-pointer"
          >
            <img
              src={authorImage}
              alt="Author"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h4 className="text-sm font-semibold">{authorName}</h4>
              <p className="text-xs text-gray-500 line-clamp-1">{authorTitle}</p>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}

