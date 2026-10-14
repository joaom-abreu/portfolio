import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { applyDocumentMeta } from "@/app/documentMeta.js";
import en from "@/locales/en.json";
import pt from "@/locales/pt.json";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  applyDocumentLanguage,
  readLanguageFromUrl,
} from "@/shared/lib/language.js";

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

function syncDocument(language) {
  applyDocumentLanguage(language);
  applyDocumentMeta(i18next.t);
}

syncDocument(i18next.language);
i18next.on("languageChanged", syncDocument);

export default i18next;
