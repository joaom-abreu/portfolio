import { API_CARD_TONE } from "@/sections/Hero/apiCardTone.js";
import { API_STATUS } from "@/shared/hooks/useApi.js";
import { formatRelativeTime } from "@/shared/lib/formatRelativeTime.js";

export const PROFILE_SUMMARY_METHOD = "GET";

const STATUS_BULLET = "●";
const SUCCESS_TEXT = "OK";
const DURATION_UNIT = "ms";

const PENDING_BODY = {
  public_repos: undefined,
  top_language: undefined,
  last_push: undefined,
};

function buildBody(summary, language) {
  return {
    public_repos: summary.public_repos,
    top_language: summary.top_language,
    last_push:
      summary.last_push && formatRelativeTime(summary.last_push, language),
  };
}

export function buildProfileSummaryCard({ status, response }, t, language) {
  if (status === API_STATUS.loading) {
    return {
      tone: API_CARD_TONE.muted,
      status: `${STATUS_BULLET} ${t("hero.api.loading")}`,
      body: PENDING_BODY,
    };
  }

  if (status === API_STATUS.error) {
    return {
      tone: API_CARD_TONE.danger,
      status: `${STATUS_BULLET} ${t("hero.api.offline")}`,
      body: PENDING_BODY,
    };
  }

  return {
    tone: API_CARD_TONE.success,
    status: `${STATUS_BULLET} ${response.status} ${SUCCESS_TEXT} · ${response.durationMs}${DURATION_UNIT}`,
    body: buildBody(response.data, language),
  };
}
