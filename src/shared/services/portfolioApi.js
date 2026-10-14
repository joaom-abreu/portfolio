import { getJson } from "@/shared/services/apiClient.js";

export const PROFILE_SUMMARY_PATH = "/api/joao";

const GITHUB_ACTIVITY_PATH = "/api/github-activity";

export function getProfileSummary(options) {
  return getJson(PROFILE_SUMMARY_PATH, options);
}

export function getGithubActivity(options) {
  return getJson(GITHUB_ACTIVITY_PATH, options);
}
