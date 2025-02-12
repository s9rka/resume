import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import et from "./locales/et/translation.json";

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      et: { translation: et },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes output
    },
    detection: {
      order: ["path", "querystring", "localStorage", "navigator"],
      lookupFromPathIndex: 0, // Extract language from URL path
      caches: ["localStorage"],
    },
  });

export default i18n;
