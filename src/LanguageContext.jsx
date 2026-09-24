import React from 'react';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = React.useState('en');
  
  // Simple translation helper for the mockup
  const t = (enText, esText) => lang === 'en' ? enText : esText;

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
