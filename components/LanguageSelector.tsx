'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation, type LangCode } from '@/context/TranslationContext';

const languages: { code: LangCode; name: string; flag: string }[] = [
  { code: 'en', name: 'English',    flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ur', name: 'Urdu',       flag: 'https://flagcdn.com/w40/pk.png' },
  { code: 'ar', name: 'Arabic',     flag: 'https://flagcdn.com/w40/sa.png' },
  { code: 'es', name: 'Spanish',    flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'fr', name: 'French',     flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'de', name: 'German',     flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'it', name: 'Italian',    flag: 'https://flagcdn.com/w40/it.png' },
  { code: 'pt', name: 'Portuguese', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'nl', name: 'Dutch',      flag: 'https://flagcdn.com/w40/nl.png' },
  { code: 'tr', name: 'Turkish',    flag: 'https://flagcdn.com/w40/tr.png' },
  { code: 'hi', name: 'Hindi',      flag: 'https://flagcdn.com/w40/in.png' },
  { code: 'cn', name: 'Chinese',    flag: 'https://flagcdn.com/w40/cn.png' },
  { code: 'jp', name: 'Japanese',   flag: 'https://flagcdn.com/w40/jp.png' },
  { code: 'kr', name: 'Korean',     flag: 'https://flagcdn.com/w40/kr.png' },
  { code: 'ru', name: 'Russian',    flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'id', name: 'Indonesian', flag: 'https://flagcdn.com/w40/id.png' },
  { code: 'th', name: 'Thai',       flag: 'https://flagcdn.com/w40/th.png' },
  { code: 'vn', name: 'Vietnamese', flag: 'https://flagcdn.com/w40/vn.png' },
  { code: 'pl', name: 'Polish',     flag: 'https://flagcdn.com/w40/pl.png' },
  { code: 'gr', name: 'Greek',      flag: 'https://flagcdn.com/w40/gr.png' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useTranslation();
  const selected = languages.find((l) => l.code === language) ?? languages[0];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div id="flagcdn-banker" ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-sm text-white text-sm font-medium transition-colors border border-white/20"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Image
          src={selected.flag}
          alt={selected.name}
          width={20}
          height={14}
          className="rounded-sm object-cover"
          unoptimized
        />
        <span className="hidden sm:inline">{selected.name}</span>
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 shadow-xl z-50 rounded-sm overflow-auto max-h-72">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${
                selected.code === lang.code ? 'bg-red-50 text-banker-red font-medium' : ''
              }`}
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={14}
                className="rounded-sm object-cover flex-shrink-0"
                unoptimized
              />
              <span>{lang.name}</span>
              {selected.code === lang.code && (
                <svg className="w-3.5 h-3.5 ml-auto text-banker-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
