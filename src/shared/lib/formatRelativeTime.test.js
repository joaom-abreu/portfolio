import { describe, expect, it } from "vitest";
import { formatRelativeTime } from "@/shared/lib/formatRelativeTime.js";

const NOW = "2026-10-13T12:00:00Z";

describe("formatRelativeTime", () => {
  it.each([
    ["2026-10-13T11:59:30Z", "pt", "agora"],
    ["2026-10-13T11:55:00Z", "pt", "há 5 min."],
    ["2026-10-13T10:00:00Z", "pt", "há 2 h"],
    ["2026-10-12T12:00:00Z", "pt", "ontem"],
    ["2026-10-10T12:00:00Z", "pt", "há 3 dias"],
    ["2026-08-01T12:00:00Z", "pt", "há 2 meses"],
    ["2024-10-01T12:00:00Z", "pt", "há 2 anos"],
    ["2026-10-13T11:59:30Z", "en", "now"],
    ["2026-10-13T10:00:00Z", "en", "2h ago"],
    ["2026-10-12T12:00:00Z", "en", "yesterday"],
    ["2026-10-10T12:00:00Z", "en", "3d ago"],
  ])("formats %s in %s as %s", (date, language, expected) => {
    expect(formatRelativeTime(date, language, NOW)).toBe(expected);
  });

  it("rounds down to the largest unit that fits", () => {
    expect(formatRelativeTime("2026-10-13T09:01:00Z", "en", NOW)).toBe(
      "2h ago",
    );
  });

  it("accepts Date objects and timestamps", () => {
    const date = new Date("2026-10-13T10:00:00Z");
    const now = new Date(NOW).getTime();

    expect(formatRelativeTime(date, "en", now)).toBe("2h ago");
  });

  it("formats future dates", () => {
    expect(formatRelativeTime("2026-10-13T15:00:00Z", "en", NOW)).toBe("in 3h");
  });
});
