import { describe, expect, it } from "vitest";
import { listRecentDays, toIsoDay } from "./day.js";

describe("toIsoDay", () => {
  it("uses the UTC date", () => {
    expect(toIsoDay(new Date("2026-10-13T23:30:00-03:00"))).toBe("2026-10-14");
  });
});

describe("listRecentDays", () => {
  it("ends on the given day, oldest first", () => {
    expect(listRecentDays(3, new Date("2026-10-14T02:00:00Z"))).toEqual([
      "2026-10-12",
      "2026-10-13",
      "2026-10-14",
    ]);
  });

  it("crosses month boundaries", () => {
    const days = listRecentDays(30, new Date("2026-10-14T12:00:00Z"));

    expect(days).toHaveLength(30);
    expect(days.at(0)).toBe("2026-09-15");
    expect(days.at(-1)).toBe("2026-10-14");
  });
});
