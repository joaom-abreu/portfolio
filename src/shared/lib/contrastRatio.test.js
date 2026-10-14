import { describe, expect, it } from "vitest";
import { contrastRatio } from "@/shared/lib/contrastRatio.js";

function round(ratio) {
  return Number(ratio.toFixed(1));
}

describe("contrastRatio", () => {
  it("returns 21 for black on white", () => {
    expect(contrastRatio("#000000", "#ffffff")).toBeCloseTo(21, 5);
  });

  it("returns 1 for the same color", () => {
    expect(contrastRatio("#7c4dff", "#7c4dff")).toBe(1);
  });

  it("does not depend on the order of the colors", () => {
    expect(contrastRatio("#eeecf3", "#0c0b10")).toBe(
      contrastRatio("#0c0b10", "#eeecf3"),
    );
  });

  it("accepts short and uppercase hex values", () => {
    expect(contrastRatio("#FFF", "#000")).toBeCloseTo(21, 5);
  });

  it("matches the WCAG reference for mid gray on white", () => {
    expect(round(contrastRatio("#767676", "#ffffff"))).toBe(4.5);
  });

  it.each([
    ["text on the dark background", "#eeecf3", "#0c0b10", 16.7],
    ["text on the light background", "#17151d", "#faf9fc", 17.2],
    ["muted text on the dark background", "#a09aaf", "#0c0b10", 7.2],
    ["accent on the light background", "#6d3fd6", "#faf9fc", 6.0],
    ["control outline on the dark background", "#6e6880", "#0c0b10", 3.7],
    ["white on the primary button", "#ffffff", "#7c4dff", 4.8],
  ])("gives the design system value for %s", (_, first, second, expected) => {
    expect(round(contrastRatio(first, second))).toBe(expected);
  });

  it("returns null for a value that is not a hex color", () => {
    expect(contrastRatio("rgb(0, 0, 0)", "#ffffff")).toBeNull();
    expect(contrastRatio("", "#ffffff")).toBeNull();
  });
});
