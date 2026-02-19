'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage, languages, Language } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { getLocalizedPath, getBasePath } from '@/lib/language-utils';

// Static mapping of language names in all languages
const languageNames: Record<Language, Record<Language, string>> = {
  en: {
    en: 'English',
    ms: 'Malay',
    zh: 'Chinese',
    ar: 'Arabic',
    de: 'German',
    fr: 'French',
  },
  ms: {
    en: 'Bahasa Inggeris',
    ms: 'Bahasa Malaysia',
    zh: 'Bahasa Cina',
    ar: 'Bahasa Arab',
    de: 'Bahasa Jerman',
    fr: 'Bahasa Perancis',
  },
  zh: {
    en: '英语',
    ms: '马来语',
    zh: '中文',
    ar: '阿拉伯语',
    de: '德语',
    fr: '法语',
  },
  ar: {
    en: 'الإنجليزية',
    ms: 'الماليزية',
    zh: 'الصينية',
    ar: 'العربية',
    de: 'الألمانية',
    fr: 'الفرنسية',
  },
  de: {
    en: 'Englisch',
    ms: 'Malaiisch',
    zh: 'Chinesisch',
    ar: 'Arabisch',
    de: 'Deutsch',
    fr: 'Französisch',
  },
  fr: {
    en: 'Anglais',
    ms: 'Malais',
    zh: 'Chinois',
    ar: 'Arabe',
    de: 'Allemand',
    fr: 'Français',
  },
};

export default function LanguageDropdown() {
  const { language, setLanguage, isTranslating } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get language name in the currently selected language
  const getLanguageName = (langCode: Language): string => {
    return languageNames[language]?.[langCode] || languages.find(l => l.code === langCode)?.nativeName || langCode;
  };

  // Get current language display name - directly computed from language state to ensure reactivity
  const currentLanguageName = useMemo(() => {
    return languageNames[language]?.[language] || languages.find(l => l.code === language)?.nativeName || language;
  }, [language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Use click instead of mousedown to avoid race conditions with button onClick
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language, event: React.MouseEvent) => {
    try {
      // Stop propagation to prevent handleClickOutside from interfering
      event.stopPropagation();

      // Close dropdown first
      setIsOpen(false);

      // Get base path from current pathname and convert to target language
      const basePath = getBasePath(pathname);
      const newPath = getLocalizedPath(basePath, lang);

      // Update language state
      setLanguage(lang);

      // Navigate to the new path if it's different
      if (newPath !== pathname) {
        router.push(newPath);
      }

      // Trigger page translation (wrapped in try-catch to prevent errors from breaking the dropdown)
      if (typeof window !== 'undefined') {
        try {
          window.dispatchEvent(new CustomEvent('language-changed', { detail: { language: lang } }));
        } catch (e) {
          console.error('Error dispatching language-changed event:', e);
        }
      }
    } catch (error) {
      console.error('Error changing language:', error);
      // Ensure dropdown is closed even if there's an error
      setIsOpen(false);
    }
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    try {
      // Stop propagation to prevent handleClickOutside from immediately closing
      event.stopPropagation();
      setIsOpen(prev => !prev);
    } catch (error) {
      console.error('Error toggling dropdown:', error);
    }
  };

  return (
    <>
      <style jsx>{`
        .language-dropdown {
          position: absolute;
          top: -20px;
          right: 10px;
          flex-shrink: 0;
          z-index: 1001;
          
        }
        
        .language-button {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 8px 16px;
          color: white;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          min-width: 140px;
          justify-content: space-between;
          white-space: nowrap;
          position: relative;
        }
        
        .language-button:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }
        
        .language-button:active {
          transform: scale(0.98) translateY(0);
        }
        
        .language-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
.language-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          min-width: 220px;
          z-index: 10000;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          max-height: 400px;
          overflow-y: auto;
          overflow-x: hidden;
        }
        
        .language-option {
          padding: 12px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #dc2626;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          background: white;
          border-radius: 0;
        }
        
        .language-option:first-child {
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }
        
        .language-option:last-child {
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
        }
        
    
        .language-option-name {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .language-option-native {
          font-size: 0.85rem;
          opacity: 0.7;
        }
        
        .translating-indicator {
          position: absolute;
          top: 50%;
          right: 12px;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        
        @keyframes spin {
          to { transform: translateY(-50%) rotate(360deg); }
        }
        
        .language-button-text {
          flex: 1;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .language-button-chevron {
          flex-shrink: 0;
        }
        
        @media (max-width: 767px) {
          .language-button {
            padding: 8px;
            min-width: auto;
            width: 40px;
            height: 40px;
            justify-content: center;
            gap: 0;
          }
          
          .language-button-text {
            display: none;
          }
          
          .language-button-chevron {
            display: none;
          }
          
          .language-dropdown-menu {
            min-width: 200px;
            right: 0;
            max-height: 300px;
          }
          
          .language-option {
            padding: 10px 14px;
          }
        }
      `}</style>

      <div className="language-dropdown" ref={dropdownRef}>
        <button
          className="language-button"
          onClick={handleButtonClick}
          aria-label="Select language"
        >
          <Globe size={18} />
          <span className="language-button-text" key={language}>
            {currentLanguageName}
          </span>
          <ChevronDown 
            size={16} 
            className="language-button-chevron"
            style={{ 
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }} 
          />
          {isTranslating && <div className="translating-indicator" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="language-dropdown-menu"
            >
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className={`language-option ${language === lang.code ? 'active' : ''}`}
                  onClick={(e) => handleLanguageChange(lang.code, e)}
                >
                  <div className="language-option-name">
                    <span>{getLanguageName(lang.code)}</span>
                    <span className="language-option-native">{lang.nativeName}</span>
                  </div>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#8b0000',
                      }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

