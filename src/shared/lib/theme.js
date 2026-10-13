export const THEME_STORAGE_KEY = "jm-theme";
export const DARK_THEME = "dark";
export const LIGHT_THEME = "light";

export function getOppositeTheme(theme) {
  return theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
}

export function readAppliedTheme() {
  const appliedTheme = document.documentElement.dataset.theme;
  return appliedTheme === LIGHT_THEME ? LIGHT_THEME : DARK_THEME;
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

export function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    return true;
  } catch {
    return false;
  }
}
