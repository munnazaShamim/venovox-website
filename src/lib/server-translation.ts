/**
 * Server-side translation utility for metadata generation
 * This uses Google Translate API on the server side
 */

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATION_API_KEY;
const TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';

// Map language codes to Google Translate language codes
const languageMap: Record<string, string> = {
  'my-en': 'en', // English (Malaysia)
  'ms': 'ms',    // Malay
  'zh': 'zh',    // Chinese
  'ar': 'ar',    // Arabic
  'de': 'de',    // German
  'fr': 'fr',    // French
};

interface TranslationResponse {
  data: {
    translations: Array<{
      translatedText: string;
      detectedSourceLanguage?: string;
    }>;
  };
}

/**
 * Translate text on the server side using Google Translate API
 * Returns original text if translation fails or for English
 */
export async function translateTextServer(
  text: string,
  targetLanguage: string
): Promise<string> {
  // Return original text if English (default language)
  if (targetLanguage === 'my-en' || targetLanguage === 'en') {
    return text;
  }

  // Skip empty or whitespace-only text
  if (!text || !text.trim()) {
    return text;
  }

  if (!API_KEY) {
    console.error('Google Translation API key not found!');
    return text;
  }

  const googleLangCode = languageMap[targetLanguage] || targetLanguage;

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
          target: googleLangCode,
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Translation API error:', errorText);
      // Return original text on error
      return text;
    }

    const data: TranslationResponse = await response.json();
    const translatedText = data.data.translations[0]?.translatedText || text;

    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    // Return original text on error
    return text;
  }
}

/**
 * Translate multiple texts in batch on the server side
 */
export async function translateBatchServer(
  texts: string[],
  targetLanguage: string
): Promise<string[]> {
  // Return original texts if English
  if (targetLanguage === 'my-en' || targetLanguage === 'en') {
    return texts;
  }

  if (!API_KEY) {
    console.error('Google Translation API key not found!');
    return texts;
  }

  // Filter out empty texts
  const validTexts = texts.filter(text => text && text.trim());
  if (validTexts.length === 0) {
    return texts;
  }

  const googleLangCode = languageMap[targetLanguage] || targetLanguage;

  try {
    const response = await fetch(
      `${TRANSLATE_API_URL}?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: validTexts,
          target: googleLangCode,
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Translation API error:', errorText);
      return texts;
    }

    const data: TranslationResponse = await response.json();
    const translations = data.data.translations;

    // Map translations back to original array positions
    const results: string[] = [];
    let translationIndex = 0;

    texts.forEach((text) => {
      if (text && text.trim()) {
        results.push(translations[translationIndex]?.translatedText || text);
        translationIndex++;
      } else {
        results.push(text);
      }
    });

    return results;
  } catch (error) {
    console.error('Batch translation error:', error);
    return texts;
  }
}

