export const HTTP_STATUS = {
  ok: 200,
  noContent: 204,
  methodNotAllowed: 405,
  internalError: 500,
  badGateway: 502,
  serviceUnavailable: 503,
};

export const ERROR_CODES = {
  methodNotAllowed: "method_not_allowed",
  upstreamUnavailable: "upstream_unavailable",
  databaseUnavailable: "database_unavailable",
  internalError: "internal_error",
};

export class HttpError extends Error {
  constructor(status, code) {
    super(code);
    this.name = "HttpError";
    this.status = status;
    this.code = code;
  }
}

export function toHttpError(error) {
  if (error instanceof HttpError) {
    return error;
  }

  return new HttpError(HTTP_STATUS.internalError, ERROR_CODES.internalError);
}
