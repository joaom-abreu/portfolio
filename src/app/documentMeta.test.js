import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import pt from "@/locales/pt.json";

const html = readFileSync("index.html", "utf8");

function readTitle() {
  return /<title>([^<]*)<\/title>/.exec(html)?.[1];
}

function readMetaContent(attribute, name) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${name}"\\s+content="([^"]*)"`,
  );

  return pattern.exec(html)?.[1];
}

describe("index.html", () => {
  it("has the same title as the Portuguese translation", () => {
    expect(readTitle()).toBe(pt.meta.title);
    expect(readMetaContent("property", "og:title")).toBe(pt.meta.title);
  });

  it("has the same description as the Portuguese translation", () => {
    expect(readMetaContent("name", "description")).toBe(pt.meta.description);
    expect(readMetaContent("property", "og:description")).toBe(
      pt.meta.description,
    );
  });

  it("points the share image to an absolute address", () => {
    expect(readMetaContent("property", "og:image")).toMatch(
      /^https:\/\/.+\/images\/og-image\.png$/,
    );
  });
});
