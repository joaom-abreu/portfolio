import { describe, expect, it } from "vitest";
import { buildCanonicalUrl } from "@/shared/lib/canonicalUrl.js";

const BASE_URL = "https://www.joaomario.dev/";

describe("buildCanonicalUrl", () => {
  it("keeps the home page at the root", () => {
    expect(buildCanonicalUrl(BASE_URL, "/")).toBe("https://www.joaomario.dev/");
  });

  it("points a route to its own address", () => {
    expect(buildCanonicalUrl(BASE_URL, "/design")).toBe(
      "https://www.joaomario.dev/design",
    );
  });

  it("removes a trailing slash from a route", () => {
    expect(buildCanonicalUrl(BASE_URL, "/design/")).toBe(
      "https://www.joaomario.dev/design",
    );
  });

  it("uses only the origin of the current canonical address", () => {
    expect(buildCanonicalUrl("https://www.joaomario.dev/design", "/")).toBe(
      "https://www.joaomario.dev/",
    );
  });
});
