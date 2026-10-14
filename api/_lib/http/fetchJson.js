import { setDefaultAutoSelectFamilyAttemptTimeout } from "node:net";
import { ERROR_CODES, HTTP_STATUS, HttpError } from "./errors.js";

const REQUEST_TIMEOUT_MS = 8000;
const CONNECTION_ATTEMPT_TIMEOUT_MS = 2000;

setDefaultAutoSelectFamilyAttemptTimeout(CONNECTION_ATTEMPT_TIMEOUT_MS);

export function createUpstreamError() {
  return new HttpError(HTTP_STATUS.badGateway, ERROR_CODES.upstreamUnavailable);
}

async function request(url, headers) {
  try {
    return await fetch(url, {
      headers,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw createUpstreamError();
  }
}

export async function fetchJson(url, headers = {}) {
  const response = await request(url, headers);

  if (!response.ok) {
    throw createUpstreamError();
  }

  return response.json();
}
