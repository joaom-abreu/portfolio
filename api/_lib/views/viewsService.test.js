import { describe, expect, it } from "vitest";
import { listRecentDays } from "./day.js";
import { fillDailyViews } from "./viewsService.js";

const DAYS = ["2026-10-12", "2026-10-13", "2026-10-14"];

describe("fillDailyViews", () => {
  it("maps the database rows to the contract fields", () => {
    const rows = [
      { day: "2026-10-12", views: 4 },
      { day: "2026-10-13", views: 0 },
      { day: "2026-10-14", views: 41 },
    ];

    expect(fillDailyViews(rows, DAYS)).toEqual([
      { date: "2026-10-12", count: 4 },
      { date: "2026-10-13", count: 0 },
      { date: "2026-10-14", count: 41 },
    ]);
  });

  it("fills the days without visits with zero", () => {
    const rows = [{ day: "2026-10-13", views: 2 }];

    expect(fillDailyViews(rows, DAYS)).toEqual([
      { date: "2026-10-12", count: 0 },
      { date: "2026-10-13", count: 2 },
      { date: "2026-10-14", count: 0 },
    ]);
  });

  it("ignores rows outside the requested days", () => {
    const rows = [{ day: "2026-09-01", views: 9 }];

    expect(fillDailyViews(rows, DAYS).every((day) => day.count === 0)).toBe(
      true,
    );
  });

  it("returns one entry per day of the window when there are no rows", () => {
    const days = listRecentDays(30, new Date("2026-10-14T12:00:00Z"));

    expect(fillDailyViews([], days)).toHaveLength(30);
  });
});
