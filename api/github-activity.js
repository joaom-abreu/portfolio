import { getGithubActivity } from "./_lib/github/githubActivity.js";
import { CACHE_POLICY } from "./_lib/http/cache.js";
import { assertMethod, sendError, sendJson } from "./_lib/http/respond.js";

const ALLOWED_METHODS = ["GET"];

export default async function handler(req, res) {
  try {
    assertMethod(req, res, ALLOWED_METHODS);
    sendJson(res, await getGithubActivity(), CACHE_POLICY.github);
  } catch (error) {
    sendError(res, error);
  }
}
