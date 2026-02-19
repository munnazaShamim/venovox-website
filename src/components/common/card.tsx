import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  imageUrl?: string;
  link?: string;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon,
  imageUrl,
  link,
  className = "" 
}: ServiceCardProps) {
  const getImageSrc = (url?: string) => {
    if (!url) return "";
    if (url.startsWith("/") || url.startsWith("http")) return url;
    return `/${url}`;
  };

  return (
    <motion.div
      className={`bg-white p-6 rounded-lg shadow-sm hover:text-red-600 transition-colors duration-300 ${className}`}
      whileHover={{ y: -5 }}
    >
      {imageUrl && (
        <div className="mb-4 w-full h-48 rounded-lg overflow-hidden">
          <img 
            src={getImageSrc(imageUrl)} 
            alt={title || "Service image"} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex items-center mb-4">
        {!imageUrl && Icon && (
          <div className="bg-red-600 p-3 rounded-full mr-4 flex-shrink-0">
            <Icon className="text-white w-7 h-7" />
          </div>
        )}
        <h3 className="text-xl font-bold text-center ">{title}</h3>
      </div>

      <p className="text-gray-700 text-justify leading-relaxed">
        {description}
      </p>
      
      {link && (
        <Link 
          href={`/my-en${link}`}
          className="text-red-600 hover:text-red-600 font-medium mt-4 inline-flex items-center"
        >
          Learn more →
        </Link>
      )}
    </motion.div>
  );
}
