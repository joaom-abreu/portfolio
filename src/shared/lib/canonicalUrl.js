const TRAILING_SLASHES = /\/+$/;
const ROOT_PATH = "/";

function normalizePath(pathname) {
  return pathname.replace(TRAILING_SLASHES, "") || ROOT_PATH;
}

export function buildCanonicalUrl(baseUrl, pathname) {
  return new URL(normalizePath(pathname), baseUrl).href;
}
