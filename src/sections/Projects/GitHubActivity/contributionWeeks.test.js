import { describe, expect, it } from "vitest";
import {
  CALENDAR_WEEK_COUNT,
  buildContributionWeeks,
  buildPlaceholderWeeks,
  takeLatestWeeks,
} from "./contributionWeeks.js";

const DAY_MS = 24 * 60 * 60 * 1000;
const SUNDAY = "2025-10-12";
const WEDNESDAY = "2025-10-15";

function createDays(firstDate, count) {
  const start = new Date(firstDate).getTime();

  return Array.from({ length: count }, (_, index) => ({
    date: new Date(start + index * DAY_MS).toISOString().slice(0, 10),
    level: index % 5,
  }));
}

describe("buildContributionWeeks", () => {
  it("groups the days in weeks of seven", () => {
    const weeks = buildContributionWeeks(createDays(SUNDAY, 14));

    expect(weeks).toHaveLength(2);
    expect(weeks[0]).toHaveLength(7);
    expect(weeks[1][0]).toEqual({ date: "2025-10-19", level: 2 });
  });

  it("keeps a shorter last week for the current days", () => {
    const weeks = buildContributionWeeks(createDays(SUNDAY, 368));

    expect(weeks).toHaveLength(53);
    expect(weeks.at(-1)).toHaveLength(4);
    expect(weeks.at(-1).at(-1).date).toBe("2026-10-14");
  });

  it("fills the first week with blanks when it does not start on Sunday", () => {
    const [firstWeek] = buildContributionWeeks(createDays(WEDNESDAY, 4));

    expect(firstWeek).toEqual([
      null,
      null,
      null,
      { date: "2025-10-15", level: 0 },
      { date: "2025-10-16", level: 1 },
      { date: "2025-10-17", level: 2 },
      { date: "2025-10-18", level: 3 },
    ]);
  });

  it("keeps only the latest weeks of a longer period", () => {
    const weeks = buildContributionWeeks(createDays(SUNDAY, 54 * 7));

    expect(weeks).toHaveLength(CALENDAR_WEEK_COUNT);
    expect(weeks[0][0].date).toBe("2025-10-19");
  });

  it("returns no weeks when there are no days", () => {
    expect(buildContributionWeeks([])).toEqual([]);
  });
});

describe("takeLatestWeeks", () => {
  it("returns the last weeks in the same order", () => {
    const weeks = buildContributionWeeks(createDays(SUNDAY, 28));
    const latest = takeLatestWeeks(weeks, 2);

    expect(latest).toEqual(weeks.slice(2));
  });
});

describe("buildPlaceholderWeeks", () => {
  it("returns a full calendar of empty days", () => {
    const weeks = buildPlaceholderWeeks();

    expect(weeks).toHaveLength(CALENDAR_WEEK_COUNT);
    expect(weeks.flat().every((day) => day.level === 0)).toBe(true);
    expect(weeks.every((week) => week.length === 7)).toBe(true);
  });
});
