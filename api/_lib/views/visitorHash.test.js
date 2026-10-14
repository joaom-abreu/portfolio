import { describe, expect, it } from "vitest";
import {
  buildVisitorHash,
  isBot,
  readClientIp,
  readUserAgent,
} from "./visitorHash.js";

const VISIT = {
  ip: "203.0.113.7",
  userAgent: "Mozilla/5.0 (X11; Linux x86_64) Firefox/140.0",
  salt: "test-salt",
  day: "2026-10-14",
};
const SHA256_HEX = /^[0-9a-f]{64}$/;

describe("buildVisitorHash", () => {
  it("returns a sha256 hash in hex", () => {
    expect(buildVisitorHash(VISIT)).toMatch(SHA256_HEX);
  });

  it("returns the same hash for the same visitor on the same day", () => {
    expect(buildVisitorHash(VISIT)).toBe(buildVisitorHash({ ...VISIT }));
  });

  it.each([
    ["ip", "203.0.113.8"],
    ["userAgent", "Mozilla/5.0 Chrome/141.0"],
    ["salt", "other-salt"],
    ["day", "2026-10-15"],
  ])("changes when the %s changes", (field, value) => {
    expect(buildVisitorHash({ ...VISIT, [field]: value })).not.toBe(
      buildVisitorHash(VISIT),
    );
  });

  it("does not contain the ip", () => {
    expect(buildVisitorHash(VISIT)).not.toContain(VISIT.ip);
  });
});

describe("readClientIp", () => {
  it("reads the first forwarded address", () => {
    const headers = { "x-forwarded-for": "203.0.113.7, 10.0.0.1, 10.0.0.2" };

    expect(readClientIp(headers)).toBe("203.0.113.7");
  });

  it("returns an empty value when the header is missing", () => {
    expect(readClientIp({})).toBe("");
  });
});

describe("readUserAgent", () => {
  it("returns an empty value when the header is missing", () => {
    expect(readUserAgent({})).toBe("");
  });
});

describe("isBot", () => {
  it.each([
    "Mozilla/5.0 (compatible; Googlebot/2.1)",
    "Mozilla/5.0 (compatible; bingbot/2.0)",
    "AhrefsBot/7.0",
    "SomeCrawler/1.0",
    "Baiduspider/2.0",
  ])("detects %s", (userAgent) => {
    expect(isBot(userAgent)).toBe(true);
  });

  it("accepts a regular browser", () => {
    expect(isBot(VISIT.userAgent)).toBe(false);
  });
});
