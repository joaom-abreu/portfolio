import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import pt from "@/locales/pt.json";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  applyDocumentLanguage,
  readLanguageFromUrl,
  writeLanguageToUrl,
} from "@/shared/lib/language.js";

function syncLanguage(language) {
  applyDocumentLanguage(language);
  writeLanguageToUrl(language);
}

i18next.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: readLanguageFromUrl(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: { escapeValue: false },
  initAsync: false,
});

syncLanguage(i18next.language);
i18next.on("languageChanged", syncLanguage);

export default i18next;
