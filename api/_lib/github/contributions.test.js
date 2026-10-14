import { describe, expect, it } from "vitest";
import { ERROR_CODES, HTTP_STATUS } from "../http/errors.js";
import { buildContributions } from "./contributions.js";

function createPayload(overrides) {
  return {
    total: { lastYear: 3 },
    contributions: [
      { date: "2025-10-12", count: 0, level: 0 },
      { date: "2025-10-13", count: 1, level: 1 },
      { date: "2025-10-14", count: 2, level: 4 },
    ],
    ...overrides,
  };
}

describe("buildContributions", () => {
  it("reads the total of the last year", () => {
    expect(buildContributions(createPayload()).total).toBe(3);
  });

  it("keeps only the date and the level of each day", () => {
    expect(buildContributions(createPayload()).days).toEqual([
      { date: "2025-10-12", level: 0 },
      { date: "2025-10-13", level: 1 },
      { date: "2025-10-14", level: 4 },
    ]);
  });

  it("keeps every day in the order it was received", () => {
    const contributions = Array.from({ length: 368 }, (_, index) => ({
      date: `day-${index}`,
      count: 0,
      level: 0,
    }));
    const { days } = buildContributions(createPayload({ contributions }));

    expect(days).toHaveLength(368);
    expect(days.at(0).date).toBe("day-0");
    expect(days.at(-1).date).toBe("day-367");
  });

  it.each([
    ["the payload is empty", null],
    ["the days are missing", createPayload({ contributions: undefined })],
    ["the total is missing", createPayload({ total: {} })],
  ])("rejects the response when %s", (_, payload) => {
    expect(() => buildContributions(payload)).toThrow(
      expect.objectContaining({
        status: HTTP_STATUS.badGateway,
        code: ERROR_CODES.upstreamUnavailable,
      }),
    );
  });
});
