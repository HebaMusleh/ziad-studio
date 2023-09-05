// LanguageContext.js
import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const direction = i18n.language === 'en' ? 'ltr' : 'rtl';

  return (
    <LanguageContext.Provider value={{ direction }}>
      {children}
    </LanguageContext.Provider>
  );
};
