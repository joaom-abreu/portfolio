const JSON_HEADERS = { Accept: "application/json" };

export class ApiError extends Error {
  constructor(status) {
    super(`Request failed with status ${status}`);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function getJson(path, { signal } = {}) {
  const startedAt = performance.now();
  const response = await fetch(path, { headers: JSON_HEADERS, signal });

  if (!response.ok) {
    throw new ApiError(response.status);
  }

  const data = await response.json();
  const durationMs = Math.round(performance.now() - startedAt);

  return { data, status: response.status, durationMs };
}
