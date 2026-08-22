import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof TRANSLATIONS.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('maahcodev_lang') as Language;
      if (saved === 'es' || saved === 'en') return saved;
      // Default to user browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) return 'es';
      return 'en';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('maahcodev_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
