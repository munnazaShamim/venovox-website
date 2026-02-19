'use client';

import { Language } from '@/contexts/LanguageContext';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY;
const TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';
const CACHE_KEY_PREFIX = 'venovox-translations-';
const CACHE_VERSION = 'v1';
const MAX_CACHE_SIZE = 5000; // Maximum number of cached translations
const RATE_LIMIT_COOLDOWN = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_KEY = 'venovox-rate-limit-until';

// Log API key status (only first characters for security)
if (typeof window !== 'undefined') {
  if (API_KEY) {
    console.log('✅ Google Translation API key loaded:', API_KEY.substring(0, 10) + '...');
  } else {
    console.error('❌ Google Translation API key NOT found!');
    console.error('Please create .env.local file with: NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY=your_key');
  }
}

// In-memory cache for translations (fast access)
const translationCache = new Map<string, string>();

// Track if Google API returned 403 in this session (to avoid repeated calls)
let googleApiRateLimited = false;

// Track if we've already logged the rate limit warning (to avoid spam)
let rateLimitWarningLogged = false;
let lastWarningTime = 0;
const WARNING_COOLDOWN = 300000; // Only log warning once per 5 minutes

// Check if we're currently rate limited (LOCAL check only - Google API may still rate limit)
function isRateLimited(): boolean {
  if (typeof window === 'undefined') return false;
  
  // ALWAYS BYPASS LOCAL RATE LIMIT IN DEVELOPMENT (localhost)
  // Google API may still rate limit, but we'll handle that in the API call
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return false; // Always allow API calls in development
  }
  
  // DEVELOPMENT MODE: Allow bypass via localStorage flag
  const bypassRateLimit = localStorage.getItem('venovox-bypass-rate-limit') === 'true';
  if (bypassRateLimit) {
    return false; // Bypass rate limit check
  }
  
  try {
    const rateLimitUntil = localStorage.getItem(RATE_LIMIT_KEY);
    if (rateLimitUntil) {
      const until = parseInt(rateLimitUntil, 10);
      if (Date.now() < until) {
        return true; // Local rate limit active
      } else {
        // Cooldown expired, clear it
        localStorage.removeItem(RATE_LIMIT_KEY);
        rateLimitWarningLogged = false;
      }
    }
  } catch (error) {
    // Ignore localStorage errors
  }
  return false;
}

// Set rate limit cooldown
function setRateLimitCooldown(): void {
  if (typeof window === 'undefined') return;
  
  try {
    const until = Date.now() + RATE_LIMIT_COOLDOWN;
    localStorage.setItem(RATE_LIMIT_KEY, until.toString());
    console.warn('Translation API rate limit detected. Cooldown active for 1 hour.');
  } catch (error) {
    // Ignore localStorage errors
  }
}

// Load persistent cache from localStorage on initialization
function loadPersistentCache(): void {
  if (typeof window === 'undefined') return;
  
  try {
    const cacheData = localStorage.getItem(`${CACHE_KEY_PREFIX}${CACHE_VERSION}`);
    if (cacheData) {
      const cache = JSON.parse(cacheData);
      Object.entries(cache).forEach(([key, value]) => {
        translationCache.set(key, value as string);
      });
      console.log(`Loaded ${Object.keys(cache).length} translations from persistent cache`);
    }
  } catch (error) {
    console.error('Error loading translation cache:', error);
  }
}

// Save cache to localStorage
function savePersistentCache(): void {
  if (typeof window === 'undefined') return;
  
  try {
    // Convert Map to object and limit size
    const cacheEntries = Array.from(translationCache.entries());
    if (cacheEntries.length > MAX_CACHE_SIZE) {
      // Keep only the most recent entries
      cacheEntries.splice(0, cacheEntries.length - MAX_CACHE_SIZE);
    }
    
    const cacheObject = Object.fromEntries(cacheEntries);
    localStorage.setItem(`${CACHE_KEY_PREFIX}${CACHE_VERSION}`, JSON.stringify(cacheObject));
  } catch (error) {
    console.error('Error saving translation cache:', error);
    // If quota exceeded, clear old cache
    try {
      localStorage.removeItem(`${CACHE_KEY_PREFIX}${CACHE_VERSION}`);
    } catch (e) {
      // Ignore
    }
  }
}

// Check if user agent is a bot/crawler
function isBot(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return true;
  
  const userAgent = navigator.userAgent.toLowerCase();
  const botPatterns = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
    'yandexbot', 'sogou', 'exabot', 'facebot', 'ia_archiver',
    'facebookexternalhit', 'twitterbot', 'rogerbot', 'linkedinbot',
    'embedly', 'quora link preview', 'showyoubot', 'outbrain',
    'pinterest', 'slackbot', 'vkShare', 'W3C_Validator',
    'whatsapp', 'flipboard', 'tumblr', 'bitlybot', 'skypeuripreview',
    'nuzzel', 'discordbot', 'google page speed', 'qwantify',
    'pinterestbot', 'bitrix link preview', 'xing-contenttabreceiver',
    'chrome-lighthouse', 'telegrambot', 'applebot', 'crawler',
    'spider', 'bot', 'crawling'
  ];
  
  return botPatterns.some(pattern => userAgent.includes(pattern));
}

// Initialize cache on load
if (typeof window !== 'undefined') {
  loadPersistentCache();
}

interface TranslationResponse {
  data: {
    translations: Array<{
      translatedText: string;
      detectedSourceLanguage?: string;
    }>;
  };
}

export async function translateText(
  text: string,
  targetLanguage: Language
): Promise<string> {
  // Return original text if English (default language)
  if (targetLanguage === 'en') {
    return text;
  }

  // Skip translations for bots/crawlers
  if (isBot()) {
    return text;
  }

  // Skip empty or whitespace-only text
  if (!text || !text.trim()) {
    return text;
  }

  // Check cache first (both in-memory and persistent)
  const cacheKey = `${text}:${targetLanguage}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  // Check if we're rate limited - return original text immediately
  if (isRateLimited()) {
    return text;
  }

  // If Google API already returned 403 in this session, don't make more calls
  if (googleApiRateLimited) {
    // Return original text - no API call
    return text;
  }

  if (!API_KEY) {
    console.error('Google Translation API key not found! Please check .env.local file');
    console.error('Expected: NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY');
    return text;
  }

  try {
    const response = await fetch(
      `${TRANSLATE_API_URL}?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      
      // Handle 403 rate limit errors gracefully
      if (response.status === 403) {
        // Mark that Google API is rate limited - stop making more calls
        googleApiRateLimited = true;
        console.warn(`[translateText] ⚠️ Google API returned 403 - Rate limited. No more API calls will be made.`);
        // Return original text - don't cache it
        return text;
      }
      
      console.error('Translation API error response:', errorText);
      throw new Error(`Translation API error: ${response.status} ${response.statusText}`);
    }

    const data: TranslationResponse = await response.json();
    const translatedText = data.data.translations[0]?.translatedText || text;

    // Cache the translation (both in-memory and persistent)
    translationCache.set(cacheKey, translatedText);
    savePersistentCache();

    return translatedText;
  } catch (error) {
    console.error('Translation error for text:', text, 'target:', targetLanguage, error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    return text; // Return original text on error
  }
}

export async function translateBatch(
  texts: string[],
  targetLanguage: Language
): Promise<string[]> {
  if (targetLanguage === 'en') {
    return texts;
  }

  // Skip translations for bots/crawlers
  if (isBot()) {
    return texts;
  }

  if (!API_KEY) {
    console.error('Google Translation API key not found! Please check .env.local file');
    console.error('Expected: NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY');
    return texts;
  }

  // Filter out empty texts and check cache FIRST
  const textsToTranslate: { text: string; index: number }[] = [];
  const results: string[] = new Array(texts.length);
  let cachedCount = 0;

  texts.forEach((text, index) => {
    if (!text || !text.trim()) {
      results[index] = text;
      return;
    }

    const cacheKey = `${text}:${targetLanguage}`;
    if (translationCache.has(cacheKey)) {
      // Use cached translation even if rate limited
      results[index] = translationCache.get(cacheKey)!;
      cachedCount++;
    } else {
      textsToTranslate.push({ text, index });
    }
  });

  // If all texts were cached, return immediately
  if (textsToTranslate.length === 0) {
    return results;
  }

  // Check rate limit only for texts that need API calls
  // If rate limited, return cached translations + original texts for uncached ones
  if (isRateLimited()) {
    console.warn(`[translateBatch] Rate limited - ${cachedCount} cached, ${textsToTranslate.length} will show original text`);
    // Fill in original texts for uncached items
    textsToTranslate.forEach(item => {
      results[item.index] = item.text;
    });
    return results;
  }
  
  // If Google API already returned 403 in this session, don't make more calls
  if (googleApiRateLimited) {
    console.log(`[translateBatch] Google API is rate limited. Using cached translations only (${cachedCount} cached, ${textsToTranslate.length} will show original)`);
    textsToTranslate.forEach(item => {
      results[item.index] = item.text;
    });
    return results;
  }
  
  // Log if we have cached translations
  if (cachedCount > 0) {
    console.log(`[translateBatch] Using ${cachedCount} cached translations, ${textsToTranslate.length} need API calls`);
  }

  try {
    console.log(`[translateBatch] Making API call for ${textsToTranslate.length} texts to ${targetLanguage}`);
    
    const response = await fetch(
      `${TRANSLATE_API_URL}?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: textsToTranslate.map(t => t.text),
          target: targetLanguage,
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      
      // Handle 403 rate limit errors gracefully
      if (response.status === 403) {
        // Mark that Google API is rate limited - stop making more calls
        googleApiRateLimited = true;
        console.warn(`[translateBatch] ⚠️ Google API returned 403 - Rate limited.`);
        console.warn(`[translateBatch] Will use cached translations only. No more API calls will be made in this session.`);
        
        // Return original texts for uncached items
        textsToTranslate.forEach(item => {
          results[item.index] = item.text;
        });
        return results;
      }
      
      console.error('[translateBatch] API error response:', errorText);
      throw new Error(`Translation API error: ${response.status} ${response.statusText}`);
    }

    const data: TranslationResponse = await response.json();
    const translations = data.data.translations;

    console.log(`[translateBatch] ✅ Received ${translations.length} translations from API for ${targetLanguage}`);

    let translatedCount = 0;
    let sameCount = 0;

    // Map translations back to their original positions
    textsToTranslate.forEach((item, idx) => {
      const translatedText = translations[idx]?.translatedText || item.text;
      results[item.index] = translatedText;
      
      // Only cache if translation is actually different
      const cacheKey = `${item.text}:${targetLanguage}`;
      if (translatedText !== item.text) {
        translationCache.set(cacheKey, translatedText);
        translatedCount++;
        // Log first few translations as examples
        if (translatedCount <= 3) {
          console.log(`[translateBatch] ✅ "${item.text.substring(0, 40)}..." → "${translatedText.substring(0, 40)}..."`);
        }
      } else {
        // Translation same as original - don't cache (might be error)
        sameCount++;
        console.warn(`[translateBatch] ⚠️ Translation same as original: "${item.text.substring(0, 40)}..."`);
      }
    });
    
    // Save cache after batch translation
    savePersistentCache();
    
    console.log(`[translateBatch] ✅ Successfully processed: ${translatedCount} translated, ${sameCount} unchanged`);

    return results;
  } catch (error) {
    console.error('Batch translation error:', error);
    // Return original texts on error
    textsToTranslate.forEach(item => {
      results[item.index] = item.text;
    });
    return results;
  }
}

// Clear cache when language changes (optional - we keep cache for all languages)
export function clearTranslationCache() {
  translationCache.clear();
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(`${CACHE_KEY_PREFIX}${CACHE_VERSION}`);
    } catch (error) {
      console.error('Error clearing translation cache:', error);
    }
  }
}

// Clear rate limit cooldown (for testing or manual override)
export function clearRateLimitCooldown() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(RATE_LIMIT_KEY);
      rateLimitWarningLogged = false;
      lastWarningTime = 0;
      googleApiRateLimited = false; // Reset Google API rate limit flag
      console.log('✅ Rate limit cooldown cleared. API calls will resume.');
    } catch (error) {
      console.error('Error clearing rate limit cooldown:', error);
    }
  }
}

// Clear bad cache entries (where original text was cached as translation)
export function clearBadCacheEntries(targetLanguage?: Language) {
  if (typeof window === 'undefined') return;
  
  try {
    const cacheData = localStorage.getItem(`${CACHE_KEY_PREFIX}${CACHE_VERSION}`);
    if (cacheData) {
      const cache = JSON.parse(cacheData);
      let clearedCount = 0;
      
      // Remove entries where translation equals original (bad cache from rate limit)
      Object.keys(cache).forEach(key => {
        const [originalText, lang] = key.split(':');
        if (targetLanguage && lang !== targetLanguage) return; // Skip if language filter
        
        const cachedTranslation = cache[key];
        // If cached translation is same as original, it's a bad cache entry
        if (cachedTranslation === originalText) {
          delete cache[key];
          translationCache.delete(key);
          clearedCount++;
        }
      });
      
      // Save cleaned cache
      localStorage.setItem(`${CACHE_KEY_PREFIX}${CACHE_VERSION}`, JSON.stringify(cache));
      console.log(`✅ Cleared ${clearedCount} bad cache entries`);
    }
  } catch (error) {
    console.error('Error clearing bad cache entries:', error);
  }
}

// Check rate limit status
export function getRateLimitStatus(): { isActive: boolean; minutesLeft?: number } {
  if (typeof window === 'undefined') return { isActive: false };
  
  try {
    const rateLimitUntil = localStorage.getItem(RATE_LIMIT_KEY);
    if (rateLimitUntil) {
      const until = parseInt(rateLimitUntil, 10);
      if (Date.now() < until) {
        const minutesLeft = Math.ceil((until - Date.now()) / (60 * 1000));
        return { isActive: true, minutesLeft };
      } else {
        // Expired, clear it
        localStorage.removeItem(RATE_LIMIT_KEY);
        return { isActive: false };
      }
    }
  } catch (error) {
    // Ignore
  }
  return { isActive: false };
}

// Expose functions to window for easy console access
if (typeof window !== 'undefined') {
  (window as any).clearTranslationRateLimit = clearRateLimitCooldown;
  (window as any).clearBadCache = clearBadCacheEntries;
  (window as any).checkRateLimit = getRateLimitStatus;
  
  // Auto-check and log rate limit status on load
  const status = getRateLimitStatus();
  let bypassActive = localStorage.getItem('venovox-bypass-rate-limit') === 'true';
  
  // AUTO-ENABLE BYPASS IN DEVELOPMENT MODE (localhost)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    if (!bypassActive) {
      localStorage.setItem('venovox-bypass-rate-limit', 'true');
      bypassActive = true;
      console.log('🔧 DEVELOPMENT MODE: Auto-enabled rate limit bypass');
    }
  }
  
  if (bypassActive) {
    console.log('✅ Rate limit BYPASS is ACTIVE - Translations will work!');
  } else if (status.isActive) {
    console.warn(`⚠️ Translation API rate limit is ACTIVE. ${status.minutesLeft} minutes remaining.`);
    console.warn('💡 Quick fix: Run enableTranslationBypass() to bypass rate limit for testing');
  } else {
    console.log('✅ Translation API rate limit is NOT active. Translations will work normally.');
  }
  
  // Helper function to enable bypass
  (window as any).enableTranslationBypass = () => {
    localStorage.setItem('venovox-bypass-rate-limit', 'true');
    console.log('✅ Rate limit bypass ENABLED. Translations will work now!');
    console.log('💡 Reload the page and change language to test.');
    // Force page reload suggestion
    if (confirm('Bypass enabled! Reload page now?')) {
      window.location.reload();
    }
  };
  
  // Helper function to disable bypass
  (window as any).disableTranslationBypass = () => {
    localStorage.removeItem('venovox-bypass-rate-limit');
    console.log('✅ Rate limit bypass DISABLED.');
  };
  
  // Helper to force clear everything and start fresh
  (window as any).resetTranslationSystem = () => {
    clearRateLimitCooldown();
    clearBadCacheEntries();
    googleApiRateLimited = false; // Reset Google API rate limit flag
    localStorage.setItem('venovox-bypass-rate-limit', 'true');
    console.log('✅ Translation system RESET. Bypass enabled. Google API flag cleared.');
    console.log('💡 Reload page and try language change again.');
    if (confirm('System reset! Reload page now?')) {
      window.location.reload();
    }
  };
  
  console.log('💡 Available commands:');
  console.log('   - resetTranslationSystem() - RESET everything (RECOMMENDED)');
  console.log('   - enableTranslationBypass() - Bypass rate limit');
  console.log('   - clearTranslationRateLimit() - Clear rate limit cooldown');
  console.log('   - clearBadCache() - Clear bad cache entries');
  console.log('   - checkRateLimit() - Check current rate limit status');
}

// Export bot detection for use in components
export function shouldSkipTranslation(): boolean {
  return isBot();
}

