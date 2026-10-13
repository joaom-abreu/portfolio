import { DEFAULT_LANGUAGE } from "@/shared/lib/language.js";

export function localize(text, language) {
  if (typeof text === "string") {
    return text;
  }

  return text[language] ?? text[DEFAULT_LANGUAGE];
}
