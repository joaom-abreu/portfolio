import { setDefaultAutoSelectFamilyAttemptTimeout } from "node:net";

const REQUEST_TIMEOUT_MS = 8000;
const CONNECTION_ATTEMPT_TIMEOUT_MS = 2000;

setDefaultAutoSelectFamilyAttemptTimeout(CONNECTION_ATTEMPT_TIMEOUT_MS);

export function fetchWithTimeout(url, options) {
  return fetch(url, {
    ...options,
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
}
