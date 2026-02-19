'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translateBatch, shouldSkipTranslation } from '@/lib/translation';
import { usePathname } from 'next/navigation';

// Component to translate all text content on the page
export default function PageTranslator() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const translationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTranslatingRef = useRef(false);
  const lastTranslatedPathRef = useRef<string>('');
  const lastTranslatedLangRef = useRef<string>('');

  // Listen for language change events
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      try {
        const newLang = event.detail?.language;
        if (newLang && newLang !== language) {
          // Reset translation state to force re-translation
          lastTranslatedPathRef.current = '';
          lastTranslatedLangRef.current = '';
          isTranslatingRef.current = false;
        }
      } catch (error) {
        console.error('Error handling language change event:', error);
      }
    };

    window.addEventListener('language-changed', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange as EventListener);
    };
  }, [language]);

  useEffect(() => {
    // Skip translations for bots/crawlers
    if (shouldSkipTranslation()) {
      return;
    }

    // Clear any pending translations
    if (translationTimeoutRef.current) {
      clearTimeout(translationTimeoutRef.current);
      translationTimeoutRef.current = null;
    }

    // Reset translation state when language changes
    if (lastTranslatedLangRef.current !== language) {
      isTranslatingRef.current = false;
      // Clear the "already translated" flag when language changes
      if (lastTranslatedLangRef.current && lastTranslatedLangRef.current !== language) {
        lastTranslatedPathRef.current = '';
      }
    }

    // Translate when:
    // 1. Language changes (explicit user click)
    // 2. Pathname changes (navigation to new page) - even if language is same
    // Don't translate on:
    // - Page reload (same page, same language)
    // - Re-render (same page, same language, component re-render)
    const pageKey = `${pathname}:${language}`;
    const languageChanged = lastTranslatedLangRef.current !== language;
    const pathnameChanged = lastTranslatedPathRef.current !== pageKey;
    
    // Skip if already translated this exact page with this language (page reload scenario)
    if (lastTranslatedPathRef.current === pageKey && language !== 'en') {
      // Already translated this exact page with this language - skip
      return;
    }
    
    // Skip if neither language nor pathname changed (re-render scenario)
    if (!languageChanged && !pathnameChanged && language !== 'en') {
      // Neither language nor pathname changed - don't translate (re-render only)
      return;
    }
    
    // Proceed ONLY if language changed (explicit user click)

    if (language === 'en') {
      // If switching back to English, restore original text
      const restoreEnglish = () => {
        const originalTexts = document.querySelectorAll('[data-original-text]');
        originalTexts.forEach((el) => {
          const original = el.getAttribute('data-original-text');
          if (original) {
            // Find the text node and restore it
            const textNode = Array.from(el.childNodes).find(
              node => node.nodeType === Node.TEXT_NODE
            ) as Text;
            if (textNode) {
              textNode.textContent = original;
            } else {
              el.textContent = original;
            }
            // Remove translation markers
            el.removeAttribute('data-translated');
            el.removeAttribute('data-original-text');
          }
        });
        if (originalTexts.length > 0) {
          console.log('Restored English text for', originalTexts.length, 'elements');
        }
      };

      // Try immediately, then retry after a short delay to catch any late-rendered content
      restoreEnglish();
      translationTimeoutRef.current = setTimeout(restoreEnglish, 100);
      lastTranslatedPathRef.current = `${pathname}:en`;
      lastTranslatedLangRef.current = 'en';
      return;
    }

    // Don't clear cache when language changes - cache is keyed by language
    // so we can keep translations for all languages
    isTranslatingRef.current = false;

    // Clear translation markers if language or pathname changed (new page or new language)
    const currentPathKey = `${pathname}:${language}`;
    if (lastTranslatedPathRef.current !== currentPathKey) {
      const translatedElements = document.querySelectorAll('[data-translated]');
      translatedElements.forEach((el) => {
        el.removeAttribute('data-translated');
        // Also clear original text attribute so new page content can be translated fresh
        el.removeAttribute('data-original-text');
      });
    }

    // Translate all text on the page
    const translatePage = async () => {
      if (isTranslatingRef.current) {
        console.log('Translation already in progress, skipping...');
        return;
      }

      isTranslatingRef.current = true;
      const body = document.body;
      if (!body) {
        console.warn('Body element not found');
        isTranslatingRef.current = false;
        return;
      }

      // Wait for DOM to be ready using requestAnimationFrame
      await new Promise(resolve => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      // Collect all text nodes that need translation
      const textNodes: Array<{ node: Text; text: string; parent: Element }> = [];
      
      const walker = document.createTreeWalker(
        body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const text = node.textContent?.trim();
            if (!text || text.length === 0 || text.length < 2) return NodeFilter.FILTER_REJECT;
            
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            
            // Skip certain elements
            const skipTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'META', 'LINK'];
            if (skipTags.includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
            
            // Skip if already translated (check both attribute and if text matches cached translation)
            if (parent.hasAttribute('data-translated')) return NodeFilter.FILTER_REJECT;
            if (parent.hasAttribute('data-no-translate')) return NodeFilter.FILTER_REJECT;
            
            // Skip if parent is in a no-translate container
            if (parent.closest('[data-no-translate]')) return NodeFilter.FILTER_REJECT;
            
            // Skip numbers, URLs, emails, etc.
            if (/^[\d\s\-\+\(\)]+$/.test(text)) return NodeFilter.FILTER_REJECT;
            if (/^https?:\/\//.test(text)) return NodeFilter.FILTER_REJECT;
            if (/^[\w\.-]+@[\w\.-]+\.\w+$/.test(text)) return NodeFilter.FILTER_REJECT;
            
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      let node;
      while (node = walker.nextNode()) {
        const textNode = node as Text;
        const text = textNode.textContent?.trim();
        const parent = textNode.parentElement;
        if (text && parent && text.length >= 2) {
          textNodes.push({ node: textNode, text, parent });
        }
      }

      // Group texts for batch translation
      const textsToTranslate = textNodes.map(item => item.text);
      
      if (textsToTranslate.length === 0) {
        isTranslatingRef.current = false;
        return;
      }

      // Only log if there are texts to translate
      if (textsToTranslate.length > 0) {
        console.log(`Translating ${textsToTranslate.length} text nodes to ${language}`);
      }

      // Translate in batches
      const batchSize = 50; // Google API allows up to 100 texts per request
      for (let i = 0; i < textsToTranslate.length; i += batchSize) {
        const batch = textsToTranslate.slice(i, i + batchSize);
        const batchIndices = textNodes.slice(i, i + batchSize);
        
        try {
          const translatedTexts = await translateBatch(batch, language);
          
          // Debug: Check if translations are different
          let updatedCount = 0;
          let sameCount = 0;
          
          // Update DOM with translations
          batchIndices.forEach((item, idx) => {
            const translated = translatedTexts[idx];
            // Update if translation exists
            if (translated) {
              // Store original text if not already stored
              if (!item.parent.hasAttribute('data-original-text')) {
                item.parent.setAttribute('data-original-text', item.text);
              }
              
              // Always update DOM, even if same (for consistency)
              const currentText = item.node.textContent || '';
              
              // Check if translation is different from original
              if (translated !== item.text) {
                // Real translation received
                item.node.textContent = translated;
                item.parent.setAttribute('data-translated', 'true');
                updatedCount++;
              } else if (translated !== currentText) {
                // Translation same as original but different from current DOM
                item.node.textContent = translated;
                item.parent.setAttribute('data-translated', 'true');
                updatedCount++;
              } else {
                // Translation same as both original and current
                item.parent.setAttribute('data-translated', 'true');
                sameCount++;
              }
            } else {
              console.warn(`[PageTranslator] No translation received for text: "${item.text.substring(0, 30)}..."`);
            }
          });
          
          // Debug log - always show batch progress
          console.log(`Batch ${Math.floor(i / batchSize) + 1}: Updated ${updatedCount} texts, ${sameCount} unchanged`);
          
          // If no texts updated, log first few examples for debugging
          if (updatedCount === 0 && batchIndices.length > 0) {
            const firstItem = batchIndices[0];
            const firstTranslated = translatedTexts[0];
            console.warn(`[PageTranslator] No texts updated in batch. Example: "${firstItem.text.substring(0, 50)}..." -> "${firstTranslated?.substring(0, 50) || 'NO TRANSLATION'}..."`);
          }
          // Only log batch progress for debugging (commented out to reduce console spam)
          // console.log(`Translated batch ${Math.floor(i / batchSize) + 1}`);
        } catch (error) {
          console.error('Batch translation error:', error);
          // Log the error details
          if (error instanceof Error) {
            console.error('Error message:', error.message);
            // Don't log stack for 403 errors (rate limits)
            if (!error.message.includes('403')) {
              console.error('Error stack:', error.stack);
            }
          }
        }
        
        // Small delay between batches to avoid rate limiting
        if (i + batchSize < textsToTranslate.length) {
          await new Promise(resolve => setTimeout(resolve, 200)); // Increased delay
        }
      }

      // Mark page as translated
      lastTranslatedPathRef.current = pageKey;
      lastTranslatedLangRef.current = language;
      isTranslatingRef.current = false;
    };

    // Debounced translation start to prevent multiple calls
    const startTranslation = () => {
      // Double-check we're not already translating
      if (isTranslatingRef.current) {
        return;
      }
      translatePage().catch(err => {
        console.error('Error in translatePage:', err);
        isTranslatingRef.current = false;
      });
    };

    // Use a single debounced call instead of multiple triggers
    // Wait a bit for DOM to be ready, but only trigger once
    // Always trigger when language changes (not just on pathname change)
    // Note: language !== 'en' check not needed here since we already returned early for English
    translationTimeoutRef.current = setTimeout(() => {
      if (!isTranslatingRef.current) {
        // Force translation when language changes
        requestAnimationFrame(() => {
          requestAnimationFrame(startTranslation);
        });
      }
    }, 100); // Reduced delay for faster language switching

    return () => {
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
        translationTimeoutRef.current = null;
      }
      isTranslatingRef.current = false;
    };
  }, [language, pathname]); // Also depend on pathname to trigger on navigation

  return null; // This component doesn't render anything
}

