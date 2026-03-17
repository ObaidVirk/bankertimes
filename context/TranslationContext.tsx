'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

import en from '@/translations/en.json';
import ur from '@/translations/ur.json';
import ar from '@/translations/ar.json';
import es from '@/translations/es.json';
import fr from '@/translations/fr.json';
import de from '@/translations/de.json';
import it from '@/translations/it.json';
import pt from '@/translations/pt.json';
import nl from '@/translations/nl.json';
import tr from '@/translations/tr.json';
import hi from '@/translations/hi.json';
import cn from '@/translations/cn.json';
import jp from '@/translations/jp.json';
import kr from '@/translations/kr.json';
import ru from '@/translations/ru.json';
import id from '@/translations/id.json';
import th from '@/translations/th.json';
import vn from '@/translations/vn.json';
import pl from '@/translations/pl.json';
import gr from '@/translations/gr.json';

const translations = {
  en, ur, ar, es, fr, de, it, pt, nl, tr,
  hi, cn, jp, kr, ru, id, th, vn, pl, gr,
} as const;

export type LangCode = keyof typeof translations;

const RTL_LANGS: LangCode[] = ['ar', 'ur'];

function getInitialLang(): LangCode {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('siteLanguage') as LangCode | null;
  return saved && saved in translations ? saved : 'en';
}

interface TranslationContextType {
  language: LangCode;
  setLanguage: (lang: LangCode) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LangCode>(getInitialLang);

  const setLanguage = (lang: LangCode) => {
    setLanguageState(lang);
    localStorage.setItem('siteLanguage', lang);
  };

  // Apply RTL direction when Arabic or Urdu is selected
  useEffect(() => {
    document.documentElement.dir = RTL_LANGS.includes(language) ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    const parts = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    for (const part of parts) {
      value = value?.[part];
    }
    // Fallback to English if key is missing in the selected language
    if (value === undefined || value === null) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let fallback: any = translations.en;
      for (const part of parts) {
        fallback = fallback?.[part];
      }
      return typeof fallback === 'string' ? fallback : key;
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
