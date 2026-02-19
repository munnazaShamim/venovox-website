'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translateText, translateBatch } from '@/lib/translation';

// Hook for translating a single text
export function useTranslation(originalText: string): string {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState(originalText);

  useEffect(() => {
    if (language === 'en') {
      setTranslatedText(originalText);
      return;
    }

    let isMounted = true;

    translateText(originalText, language)
      .then(translated => {
        if (isMounted) {
          setTranslatedText(translated);
        }
      })
      .catch(() => {
        if (isMounted) {
          setTranslatedText(originalText);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [originalText, language]);

  return translatedText;
}

// Hook for translating multiple texts
export function useTranslations(originalTexts: string[]): string[] {
  const { language } = useLanguage();
  const [translatedTexts, setTranslatedTexts] = useState(originalTexts);

  useEffect(() => {
    if (language === 'en') {
      setTranslatedTexts(originalTexts);
      return;
    }

    let isMounted = true;

    console.log(`[useTranslations] Translating ${originalTexts.length} texts to ${language}`);
    
    translateBatch(originalTexts, language)
      .then(translated => {
        if (isMounted) {
          console.log(`[useTranslations] Translation complete:`, translated);
          setTranslatedTexts(translated);
        }
      })
      .catch((error) => {
        console.error('[useTranslations] Translation error:', error);
        if (isMounted) {
          setTranslatedTexts(originalTexts);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [originalTexts, language]);

  return translatedTexts;
}

// Hook for translating text on demand (for async operations)
export function useTranslate() {
  const { language } = useLanguage();

  const translate = useCallback(
    async (text: string): Promise<string> => {
      return translateText(text, language);
    },
    [language]
  );

  return translate;
}

