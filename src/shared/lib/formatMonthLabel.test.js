import { describe, expect, it } from "vitest";
import { formatMonthLabel } from "@/shared/lib/formatMonthLabel.js";

describe("formatMonthLabel", () => {
  it.each([
    ["2026-01", "pt", "2026 · janeiro"],
    ["2026-11", "pt", "2026 · novembro"],
    ["2026-12", "pt", "2026 · dezembro"],
    ["2026-01", "en", "2026 · January"],
    ["2026-11", "en", "2026 · November"],
    ["2026-12", "en", "2026 · December"],
  ])("formats %s in %s as %s", (isoMonth, language, expected) => {
    expect(formatMonthLabel(isoMonth, language)).toBe(expected);
  });
});
