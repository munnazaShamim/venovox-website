'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import PageTranslator from './page-translator';
import MetaUpdater from './meta-updater';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MetaUpdater />
      <PageTranslator />
      {children}
    </LanguageProvider>
  );
}

