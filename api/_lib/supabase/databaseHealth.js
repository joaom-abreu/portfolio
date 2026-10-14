import { getSupabaseClient, unwrapResult } from "./supabaseClient.js";

const PROBE_TABLE = "page_views";
const PROBE_COLUMN = "visited_on";
const PROBE_ROWS = 1;

export async function checkDatabase() {
  unwrapResult(
    await getSupabaseClient()
      .from(PROBE_TABLE)
      .select(PROBE_COLUMN)
      .limit(PROBE_ROWS),
  );
}
