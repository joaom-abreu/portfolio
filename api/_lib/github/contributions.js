import { createUpstreamError, fetchJson } from "../http/fetchJson.js";
import { GITHUB_USERNAME } from "./githubClient.js";

const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

function hasExpectedShape(payload) {
  return (
    Array.isArray(payload?.contributions) &&
    Number.isInteger(payload.total?.lastYear)
  );
}

export function buildContributions(payload) {
  if (!hasExpectedShape(payload)) {
    throw createUpstreamError();
  }

  return {
    total: payload.total.lastYear,
    days: payload.contributions.map(({ date, level }) => ({ date, level })),
  };
}

export async function getContributions() {
  return buildContributions(await fetchJson(CONTRIBUTIONS_URL));
}
