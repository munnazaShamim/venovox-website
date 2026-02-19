import { Language } from '@/contexts/LanguageContext';

// Language code to URL prefix mapping
const langPrefixMap: Record<Language, string> = {
  'en': '/my-en', // English uses /my-en/ prefix
  'ms': '/ms',
  'zh': '/zh',
  'ar': '/ar',
  'de': '/de',
  'fr': '/fr',
};

/**
 * Converts a base path to a language-prefixed path
 * @param basePath - The base path (e.g., "/about", "/case-studies")
 * @param language - The target language
 * @returns The language-prefixed path
 */
export function getLocalizedPath(basePath: string, language: Language): string {
  // Don't localize privacy/legal pages - they should be accessible without language prefix
  if (basePath.startsWith('/privacy')) {
    return basePath;
  }
  if (basePath.startsWith('/blogs')) {
    return basePath;
  }

  // Remove any existing language prefixes to get the base path
  let cleanPath = basePath;
  
  // Remove /my-en/ prefix if exists
  if (cleanPath.startsWith('/my-en')) {
    cleanPath = cleanPath.replace('/my-en', '');
  }
  
  // Remove any existing language prefixes
  const existingPrefixes = ['/ms', '/zh', '/ar', '/de', '/fr'];
  for (const prefix of existingPrefixes) {
    if (cleanPath.startsWith(prefix + '/') || cleanPath === prefix) {
      cleanPath = cleanPath.replace(prefix, '');
      break;
    }
  }

  // Ensure path starts with /
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  // Handle root path
  if (cleanPath === '/') {
    return language === 'en' ? '/' : `${langPrefixMap[language]}/`;
  }

  // Add the appropriate language prefix
  const prefix = langPrefixMap[language];
  return `${prefix}${cleanPath}`;
}

/**
 * Extracts the base path from a language-prefixed path
 * @param pathname - The full pathname (e.g., "/ms/about", "/my-en/contact-us")
 * @returns The base path without language prefix
 */
export function getBasePath(pathname: string): string {
  let basePath = pathname;
  
  // Remove /my-en/ prefix if exists
  if (basePath.startsWith('/my-en')) {
    basePath = basePath.replace('/my-en', '');
  }
  
  // Remove any existing language prefixes
  const existingPrefixes = ['/ms', '/zh', '/ar', '/de', '/fr'];
  for (const prefix of existingPrefixes) {
    if (basePath.startsWith(prefix + '/') || basePath === prefix) {
      basePath = basePath.replace(prefix, '');
      break;
    }
  }

  // Ensure path starts with /
  if (!basePath.startsWith('/')) {
    basePath = '/' + basePath;
  }

  return basePath || '/';
}

