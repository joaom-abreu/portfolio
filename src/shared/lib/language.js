export const DEFAULT_LANGUAGE = "pt";
export const SUPPORTED_LANGUAGES = ["pt", "en"];
export const LANGUAGE_QUERY_PARAM = "lang";

export const LANGUAGE_OPTIONS = SUPPORTED_LANGUAGES.map((language) => ({
  value: language,
  label: language.toUpperCase(),
}));

const DOCUMENT_LANGUAGES = {
  pt: "pt-BR",
  en: "en",
};

export function normalizeLanguage(value) {
  const language = value?.toLowerCase();
  return SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
}

export function readLanguageFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  return normalizeLanguage(searchParams.get(LANGUAGE_QUERY_PARAM));
}

export function writeLanguageToUrl(language) {
  const url = new URL(window.location.href);

  if (language === DEFAULT_LANGUAGE) {
    url.searchParams.delete(LANGUAGE_QUERY_PARAM);
  } else {
    url.searchParams.set(LANGUAGE_QUERY_PARAM, language);
  }

  window.history.replaceState(window.history.state, "", url);
}

export function applyDocumentLanguage(language) {
  document.documentElement.lang = DOCUMENT_LANGUAGES[language];
}
