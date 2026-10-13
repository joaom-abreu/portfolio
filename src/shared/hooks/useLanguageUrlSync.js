import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { writeLanguageToUrl } from "@/shared/lib/language.js";

export function useLanguageUrlSync() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage;

  useEffect(() => {
    writeLanguageToUrl(language);
  }, [location, language]);
}
