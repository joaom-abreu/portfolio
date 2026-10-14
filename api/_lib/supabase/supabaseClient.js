import { createClient } from "@supabase/supabase-js";
import { readSupabaseConfig } from "../config/env.js";
import { ERROR_CODES, HTTP_STATUS, HttpError } from "../http/errors.js";
import { fetchWithTimeout } from "../http/network.js";

const CLIENT_OPTIONS = {
  auth: { persistSession: false, autoRefreshToken: false },
  global: { fetch: fetchWithTimeout },
};

let client = null;

function createSupabaseClient() {
  const { url, serviceRoleKey } = readSupabaseConfig();

  return createClient(url, serviceRoleKey, CLIENT_OPTIONS);
}

export function getSupabaseClient() {
  client ??= createSupabaseClient();

  return client;
}

export function unwrapResult(result) {
  if (result.error) {
    console.error(result.error);
    throw new HttpError(
      HTTP_STATUS.serviceUnavailable,
      ERROR_CODES.databaseUnavailable,
    );
  }

  return result;
}
