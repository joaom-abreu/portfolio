import { ERROR_CODES, HTTP_STATUS, HttpError } from "./errors.js";
import { fetchWithTimeout } from "./network.js";

export function createUpstreamError() {
  return new HttpError(HTTP_STATUS.badGateway, ERROR_CODES.upstreamUnavailable);
}

async function request(url, headers) {
  try {
    return await fetchWithTimeout(url, { headers });
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
