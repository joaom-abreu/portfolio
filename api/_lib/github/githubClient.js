import { readGithubToken } from "../config/env.js";
import { fetchJson } from "../http/fetchJson.js";

export const GITHUB_USERNAME = "joaom-abreu";

const GITHUB_API_URL = "https://api.github.com";
const USER_AGENT = "joaom-abreu-portfolio";
const ACCEPT = "application/vnd.github+json";

function buildHeaders() {
  const token = readGithubToken();
  const headers = { "User-Agent": USER_AGENT, Accept: ACCEPT };

  return token ? { ...headers, Authorization: `Bearer ${token}` } : headers;
}

export function fetchGithub(path) {
  return fetchJson(`${GITHUB_API_URL}${path}`, buildHeaders());
}
