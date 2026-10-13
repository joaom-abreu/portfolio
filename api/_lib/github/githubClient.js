import { readGithubToken } from "../config/env.js";
import { ERROR_CODES, HTTP_STATUS, HttpError } from "../http/errors.js";

export const GITHUB_USERNAME = "joaom-abreu";

const GITHUB_API_URL = "https://api.github.com";
const USER_AGENT = "joaom-abreu-portfolio";
const ACCEPT = "application/vnd.github+json";
const REQUEST_TIMEOUT_MS = 8000;

function buildHeaders() {
  const token = readGithubToken();
  const headers = { "User-Agent": USER_AGENT, Accept: ACCEPT };

  return token ? { ...headers, Authorization: `Bearer ${token}` } : headers;
}

function createUpstreamError() {
  return new HttpError(HTTP_STATUS.badGateway, ERROR_CODES.upstreamUnavailable);
}

async function requestGithub(path) {
  try {
    return await fetch(`${GITHUB_API_URL}${path}`, {
      headers: buildHeaders(),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw createUpstreamError();
  }
}

export async function fetchGithub(path) {
  const response = await requestGithub(path);

  if (!response.ok) {
    throw createUpstreamError();
  }

  return response.json();
}
