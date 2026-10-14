import { getSupabaseClient, unwrapResult } from "../supabase/supabaseClient.js";

const TABLE = "page_views";
const DAILY_VIEWS_FUNCTION = "daily_views";
const CONFLICT_COLUMNS = "visited_on,visitor_hash";
const ALL_COLUMNS = "*";
const COUNT_ONLY = { count: "exact", head: true };

export async function insertView({ visitedOn, visitorHash }) {
  unwrapResult(
    await getSupabaseClient()
      .from(TABLE)
      .upsert(
        { visited_on: visitedOn, visitor_hash: visitorHash },
        { onConflict: CONFLICT_COLUMNS, ignoreDuplicates: true },
      ),
  );
}

export async function countViews() {
  const { count } = unwrapResult(
    await getSupabaseClient().from(TABLE).select(ALL_COLUMNS, COUNT_ONLY),
  );

  return count;
}

export async function fetchDailyViews(days) {
  const { data } = unwrapResult(
    await getSupabaseClient().rpc(DAILY_VIEWS_FUNCTION, { days }),
  );

  return data;
}
