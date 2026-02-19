"use client";

import Image from "next/image";

export interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  titleBgColor?: string;
  titleTextColor?: string;
}

export function ImageCard({
  image,
  title,
  description,
  titleBgColor = "bg-red-600",
  titleTextColor = "text-white",
}: ImageCardProps) {
  return (
    <div className="space-y-0">
      <div className="relative overflow-hidden h-[296px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={80}
        />
      </div>

      <div className={`${titleBgColor} ${titleTextColor} text-center py-2 font-semibold`}>
        {title}
      </div>

      <p className="text-gray-600 text-justify [text-justify:inter-word] hyphens-none mt-4">
        {description}
      </p>
    </div>
  );
}

