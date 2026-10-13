import { CACHE_POLICY, setCachePolicy } from "./cache.js";
import { ERROR_CODES, HTTP_STATUS, HttpError, toHttpError } from "./errors.js";

const ALLOW_HEADER = "Allow";
const METHOD_SEPARATOR = ", ";

export function assertMethod(req, res, allowedMethods) {
  if (allowedMethods.includes(req.method)) {
    return;
  }

  res.setHeader(ALLOW_HEADER, allowedMethods.join(METHOD_SEPARATOR));
  throw new HttpError(
    HTTP_STATUS.methodNotAllowed,
    ERROR_CODES.methodNotAllowed,
  );
}

export function sendJson(res, body, cachePolicy) {
  setCachePolicy(res, cachePolicy);
  res.status(HTTP_STATUS.ok).json(body);
}

export function sendError(res, error) {
  const { status, code } = toHttpError(error);

  if (status === HTTP_STATUS.internalError) {
    console.error(error);
  }

  setCachePolicy(res, CACHE_POLICY.none);
  res.status(status).json({ error: code });
}
