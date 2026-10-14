import { CACHE_POLICY } from "./_lib/http/cache.js";
import {
  assertMethod,
  sendError,
  sendJson,
  sendNoContent,
} from "./_lib/http/respond.js";
import { getViewsSummary, registerView } from "./_lib/views/viewsService.js";

async function sendSummary(req, res) {
  sendJson(res, await getViewsSummary(), CACHE_POLICY.views);
}

async function saveView(req, res) {
  await registerView(req.headers);
  sendNoContent(res);
}

const METHOD_HANDLERS = { GET: sendSummary, POST: saveView };
const ALLOWED_METHODS = Object.keys(METHOD_HANDLERS);

export default async function handler(req, res) {
  try {
    assertMethod(req, res, ALLOWED_METHODS);
    await METHOD_HANDLERS[req.method](req, res);
  } catch (error) {
    sendError(res, error);
  }
}
