import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects.js";

const DATE_PATTERN = /^\d{4}-(0[1-9]|1[0-2])$/;
const MAX_SUMMARY_LENGTH = 220;
const MAX_HIGHLIGHT_LENGTH = 90;
const PLACEHOLDER = "[completar";

function hasBothLanguages(text) {
  return typeof text?.pt === "string" && typeof text?.en === "string";
}

function collectStrings(value) {
  if (typeof value === "string") return [value];
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectStrings);
  }
  return [];
}

describe("projects", () => {
  it("has unique ids", () => {
    const ids = projects.map((project) => project.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  describe.each(projects)("$id", (project) => {
    it("has a date in the YYYY-MM format", () => {
      expect(project.date).toMatch(DATE_PATTERN);
    });

    it("has a summary in both languages within the length limit", () => {
      expect(hasBothLanguages(project.summary)).toBe(true);
      expect(project.summary.pt.length).toBeLessThanOrEqual(MAX_SUMMARY_LENGTH);
      expect(project.summary.en.length).toBeLessThanOrEqual(MAX_SUMMARY_LENGTH);
    });

    it("has 2 or 3 highlights in both languages within the length limit", () => {
      expect(project.highlights.length).toBeGreaterThanOrEqual(2);
      expect(project.highlights.length).toBeLessThanOrEqual(3);

      for (const highlight of project.highlights) {
        expect(hasBothLanguages(highlight)).toBe(true);
        expect(highlight.pt.length).toBeLessThanOrEqual(MAX_HIGHLIGHT_LENGTH);
        expect(highlight.en.length).toBeLessThanOrEqual(MAX_HIGHLIGHT_LENGTH);
      }
    });

    it("has a role that is null or in both languages", () => {
      expect(project.role === null || hasBothLanguages(project.role)).toBe(
        true,
      );
    });

    it("has media that is null or has alt text in both languages", () => {
      expect(
        project.media === null || hasBothLanguages(project.media.alt),
      ).toBe(true);
    });

    it("has no placeholder text", () => {
      for (const text of collectStrings(project)) {
        expect(text).not.toContain(PLACEHOLDER);
      }
    });
  });
});
