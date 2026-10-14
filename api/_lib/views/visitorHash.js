import { createHash } from "node:crypto";

const FORWARDED_FOR_HEADER = "x-forwarded-for";
const USER_AGENT_HEADER = "user-agent";
const FORWARDED_SEPARATOR = ",";
const BOT_PATTERN = /bot|crawler|spider/i;
const HASH_ALGORITHM = "sha256";
const HASH_ENCODING = "hex";
const MISSING_HEADER = "";

export function readClientIp(headers) {
  const forwardedFor = String(headers[FORWARDED_FOR_HEADER] ?? MISSING_HEADER);

  return forwardedFor.split(FORWARDED_SEPARATOR)[0].trim();
}

export function readUserAgent(headers) {
  return headers[USER_AGENT_HEADER] ?? MISSING_HEADER;
}

export function isBot(userAgent) {
  return BOT_PATTERN.test(userAgent);
}

export function buildVisitorHash({ ip, userAgent, salt, day }) {
  return createHash(HASH_ALGORITHM)
    .update(`${ip}${userAgent}${salt}${day}`)
    .digest(HASH_ENCODING);
}
