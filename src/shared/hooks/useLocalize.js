import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { localize } from "@/shared/lib/localize.js";

export function useLocalize() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage;

  return useCallback((text) => localize(text, language), [language]);
}
