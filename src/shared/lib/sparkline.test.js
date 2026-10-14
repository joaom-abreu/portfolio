import { describe, expect, it } from "vitest";
import { buildSparkline } from "@/shared/lib/sparkline.js";

const SIZE = { width: 96, height: 24, padding: 2 };

describe("buildSparkline", () => {
  it("spreads the points across the width", () => {
    const { linePoints } = buildSparkline([0, 5, 10], SIZE);

    expect(linePoints).toBe("0,22 48,12 96,2");
  });

  it("puts the highest value at the top padding and zero at the bottom", () => {
    const { linePoints } = buildSparkline([0, 41], SIZE);

    expect(linePoints).toBe("0,22 96,2");
  });

  it("draws a flat line at the bottom when every value is zero", () => {
    const { linePoints } = buildSparkline([0, 0, 0], SIZE);

    expect(linePoints).toBe("0,22 48,22 96,22");
  });

  it("closes the area down to the bottom edge", () => {
    const { areaPath } = buildSparkline([0, 10], SIZE);

    expect(areaPath).toBe("M0,24 L0,22 L96,2 L96,24 Z");
  });

  it("rounds the coordinates to one decimal", () => {
    const { linePoints } = buildSparkline([1, 2, 3, 3], SIZE);

    expect(linePoints).toBe("0,15.3 32,8.7 64,2 96,2");
  });

  it("handles a single value", () => {
    expect(buildSparkline([7], SIZE).linePoints).toBe("0,2");
  });

  it("returns empty shapes when there are no values", () => {
    expect(buildSparkline([], SIZE)).toEqual({ linePoints: "", areaPath: "" });
  });
});
