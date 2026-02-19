"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { getLocalizedPath, getBasePath } from "@/lib/language-utils";
import { useTranslation } from "@/hooks/useTranslation";

interface MenuItem {
  name: string;
  path: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  path: string;
}

const navData = {
  logo: "/venovox-logo.png",
  endLogo: "/venovox-logo2.png",
  menuItems: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/our-services" },
    {
      name: "Background Screening",
      path: "/background-screening",
      subItems: [
        { name: "Risk Intelligence", path: "/background-screening/risk-intelligence/" },
        { name: "Due Diligence", path: "/background-screening/due-diligence/" },
        { name: "Risk & Audit", path: "/background-screening/risk-audit/" },
        { name: "Compliance", path: "/background-screening/compliance/" },
        { name: "Intellectual Property", path: "/background-screening/intellectual-property/" },
        { name: "Counter Measures", path: "/background-screening/counter-measures/" },
        { name: "Financial Crime", path: "/background-screening/financial-crime/" },
        { name: "HR Services", path: "/background-screening/hr-services/" },
        { name: "Cyber Security", path: "/background-screening/cyber-security/" }
      ]
    },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Publication", path: "/blogs/" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Career", path: "/career" },
    
    
  ] as MenuItem[]
};

export default function Navbar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);


  const isActive = (path: string, subItems?: SubMenuItem[]) => {
    // Get base paths (without language prefixes) for comparison
    const basePathname = getBasePath(pathname);
    const basePath = getBasePath(path);
    
    // Normalize paths (remove trailing slashes for comparison)
    const normalizedPathname = basePathname.replace(/\/$/, '');
    const normalizedPath = basePath.replace(/\/$/, '');
    
    // Special handling for home page: only match exact root path
    if (normalizedPath === "/" || normalizedPath === "") {
      return normalizedPathname === "/" || normalizedPathname === "";
    }
    
    // If menu item has sub-items, check if current path matches any sub-item
    if (subItems && subItems.length > 0) {
      const isSubItemActive = subItems.some(subItem => {
        const subBasePath = getBasePath(subItem.path);
        const normalizedSubPath = subBasePath.replace(/\/$/, '');
        return normalizedPathname === normalizedSubPath || normalizedPathname.startsWith(normalizedSubPath + "/");
      });
      
      // Return true if current path matches the parent path OR any sub-item path
      if (isSubItemActive) {
        return true;
      }
    }
    
    // For other paths, match exact path or paths that start with it
    return normalizedPathname === normalizedPath || normalizedPathname.startsWith(normalizedPath + "/");

  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const handleMenuItemClick = (item: MenuItem) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isOpen = activeSubMenu === item.name;
    setActiveSubMenu(hasSubItems ? (isOpen ? null : item.name) : null);
    if (!hasSubItems) setIsMenuOpen(false);
  };

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveSubMenu(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubMenu(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex justify-between items-center h-[100px]">
          <Link href={getLocalizedPath("/", language)} className="flex items-center">
            <Image
              src={navData.logo}
              alt="Main Logo"
              width={125}
              height={125}
              priority
              quality={90}
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-2 items-center">
              {navData.menuItems.map((item) => {
                const active = isActive(item.path, item.subItems);
                const hasSubItems = !!(item.subItems && item.subItems.length > 0);

                return (
                  <div key={item.name} className="relative group/nav">
                    <NavMenuItem 
                      item={item}
                      active={active}
                      hasSubItems={hasSubItems}
                      language={language}
                      isActive={isActive}
                      activeSubMenu={activeSubMenu}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                );
              })}
            </nav>
          </div>

          <a
            href="https://hi.venovox.com"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <div className="h-16 w-16 relative">
              <Image
                src={navData.endLogo}
                alt="End Logo"
                width={64}
                height={64}
                className="object-contain"
                quality={90}
              />
            </div>
          </a>


          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-md text-gray-700 hover:text-red-600 opacity-75 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[100px] bg-white z-[100] shadow-xl max-h-[calc(100vh-100px)] overflow-y-auto mt-[69px]">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {navData.menuItems.map((item) => {
              const active = isActive(item.path, item.subItems);
              const isOpen = activeSubMenu === item.name;
              const hasSubItems = !!(item.subItems && item.subItems.length > 0);

              return (
                <div key={item.name} className="border-b border-gray-100">
                  {hasSubItems ? (
                    <MobileNavMenuItem
                      item={item}
                      active={active}
                      isOpen={isOpen}
                      language={language}
                      onMenuItemClick={handleMenuItemClick}
                      isActive={isActive}
                      onClose={() => setIsMenuOpen(false)}
                    />
                  ) : (
                    <Link
                      href={getLocalizedPath(item.path, language)}
                      onClick={() => setIsMenuOpen(false)}
                      className={`w-full block px-4 py-4 rounded-lg text-lg font-medium ${active ? "text-red-600 bg-red-50" : "text-gray-800 hover:bg-gray-50"
                        }`}
                    >
                      <TranslatedText text={item.name} />
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4 pb-2 flex justify-center">
              <a href="https://hi.venovox.com" onClick={() => setIsMenuOpen(false)}>
                <div className="h-16 w-16 relative">
                  <Image
                    src={navData.endLogo}
                    alt="End Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                    quality={90}
                  />
                </div>
              </a>
            </div>

            <div className="pt-4">
              <Link
                href={getLocalizedPath("/contact-us", language)}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
              >
                <TranslatedText text="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Helper component to translate text
function TranslatedText({ text }: { text: string }) {
  const translatedText = useTranslation(text);
  return <>{translatedText}</>;
}

// Component for desktop nav menu items with sub-items
function NavMenuItem({ 
  item, 
  active, 
  hasSubItems, 
  language, 
  isActive, 
  activeSubMenu, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  item: MenuItem; 
  active: boolean; 
  hasSubItems: boolean; 
  language: Language; 

  isActive: (path: string, subItems?: SubMenuItem[]) => boolean; 

  activeSubMenu: string | null; 
  onMouseEnter: (name: string) => void; 
  onMouseLeave: () => void;
}) {
  const translatedName = useTranslation(item.name);
  
  return (
    <>
      <Link
        href={getLocalizedPath(item.path, language)}
        className={`px-4 py-3 text-base font-medium flex items-center hover:bg-gray-50 transition ${active
          ? "text-red-600 font-semibold border-b-2 border-red-600"
          : "text-gray-800 hover:text-red-600"
          }`}
        onMouseEnter={() => hasSubItems && onMouseEnter(item.name)}
        onMouseLeave={() => hasSubItems && onMouseLeave()}
      >
        {translatedName}
        {hasSubItems && <ChevronDown size={16} className="ml-1" />}
      </Link>
      {hasSubItems && activeSubMenu === item.name && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-xl z-50"
          onMouseEnter={() => onMouseEnter(item.name)}
          onMouseLeave={() => onMouseLeave()}
        >
          {item.subItems?.map((sub) => (
            <NavSubMenuItem
              key={sub.name}
              sub={sub}
              language={language}
              isActive={isActive}
            />
          ))}
        </div>
      )}
    </>
  );
}

// Component for sub-menu items
function NavSubMenuItem({ 
  sub, 
  language, 
  isActive 
}: { 
  sub: SubMenuItem; 
  language: Language; 

  isActive: (path: string, subItems?: SubMenuItem[]) => boolean;

}) {
  const translatedName = useTranslation(sub.name);
  
  return (
    <Link
      href={getLocalizedPath(sub.path, language)}
      className={`block px-5 py-3 text-sm hover:bg-gray-50 transition ${isActive(sub.path)
        ? "text-red-600 font-medium bg-red-50"
        : "text-gray-700"
        }`}
    >
      {translatedName}
    </Link>
  );
}

// Component for mobile nav menu items with sub-items
function MobileNavMenuItem({ 
  item, 
  active, 
  isOpen, 
  language, 
  onMenuItemClick, 
  isActive, 
  onClose 
}: { 
  item: MenuItem; 
  active: boolean; 
  isOpen: boolean; 
  language: Language; 
  onMenuItemClick: (item: MenuItem) => void; 
  isActive: (path: string, subItems?: SubMenuItem[]) => boolean; 
  onClose: () => void;
}) {
  const translatedName = useTranslation(item.name);
  
  return (
    <>
      <button
        onClick={() => onMenuItemClick(item)}
        className={`w-full flex justify-between items-center px-4 py-4 rounded-lg text-lg font-medium ${active ? "text-red-600 bg-red-50" : "text-gray-800 hover:bg-gray-50"
          }`}
      >
        <span>{translatedName}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="pl-6 space-y-2 py-2">
          {item.subItems?.map((sub) => (
            <Link
              key={sub.name}
              href={getLocalizedPath(sub.path, language)}
              onClick={onClose}
              className={`block text-base py-3 px-4 rounded-md ${isActive(sub.path)
                ? "text-red-600 bg-red-50 font-medium"
                : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <TranslatedText text={sub.name} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
