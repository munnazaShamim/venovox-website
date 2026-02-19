'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export type Language = 'en' | 'ms' | 'zh' | 'ar' | 'de' | 'fr';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Malaysia' },
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Function to detect language from URL path
function detectLanguageFromPath(pathname: string): Language {
  // Check for language prefixes in URL
  if (pathname.startsWith('/ms/') || pathname === '/ms') {
    return 'ms';
  }
  if (pathname.startsWith('/zh/') || pathname === '/zh') {
    return 'zh';
  }
  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    return 'ar';
  }
  if (pathname.startsWith('/de/') || pathname === '/de') {
    return 'de';
  }
  if (pathname.startsWith('/fr/') || pathname === '/fr') {
    return 'fr';
  }
  // Default to English (for /, /my-en/, or any other path)
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const pathname = usePathname();

  // Sync language with URL pathname
  useEffect(() => {
    const urlLanguage = detectLanguageFromPath(pathname);
    
    // Priority: URL language > localStorage > English default
    if (urlLanguage !== 'en' || pathname.startsWith('/my-en')) {
      // URL has a language prefix, use it and save to localStorage
      setLanguageState(urlLanguage);
      localStorage.setItem('venovox-language', urlLanguage);
    } else {
      // URL doesn't have language prefix, check localStorage
      // This ensures language persists even when navigating to non-prefixed routes
      const savedLanguage = localStorage.getItem('venovox-language') as Language;
      if (savedLanguage && languages.some(l => l.code === savedLanguage)) {
        setLanguageState(savedLanguage);
      } else {
        // Default to English if no saved language
        setLanguageState('en');
        localStorage.setItem('venovox-language', 'en');
      }
    }
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('venovox-language', lang);
    setIsTranslating(true);
    // Reset translating state after a short delay to allow translations to process
    setTimeout(() => setIsTranslating(false), 500);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

