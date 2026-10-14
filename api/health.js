import { CACHE_POLICY } from "./_lib/http/cache.js";
import { assertMethod, sendError, sendJson } from "./_lib/http/respond.js";
import { checkDatabase } from "./_lib/supabase/databaseHealth.js";

const ALLOWED_METHODS = ["GET"];
const HEALTHY_BODY = { status: "ok" };

export default async function handler(req, res) {
  try {
    assertMethod(req, res, ALLOWED_METHODS);
    await checkDatabase();
    sendJson(res, HEALTHY_BODY, CACHE_POLICY.none);
  } catch (error) {
    sendError(res, error);
  }
}
