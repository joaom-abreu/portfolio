import { getJson } from "@/shared/services/apiClient.js";

export const PROFILE_SUMMARY_PATH = "/api/joao";

export function getProfileSummary(options) {
  return getJson(PROFILE_SUMMARY_PATH, options);
}
