
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../data/languages';

type LanguageContextType = {
  language: string;
  t: (key: string) => string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  t: () => '',
  changeLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
