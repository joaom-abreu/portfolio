import { describe, expect, it } from "vitest";
import { buildProfileSummary } from "./profileSummary.js";

const USER = { public_repos: 4 };

function createRepo(overrides) {
  return {
    fork: false,
    language: "Java",
    pushed_at: "2026-10-01T00:00:00Z",
    ...overrides,
  };
}

describe("buildProfileSummary", () => {
  it("returns the contract fields", () => {
    const summary = buildProfileSummary(USER, [createRepo()]);

    expect(summary).toEqual({
      public_repos: 4,
      top_language: "Java",
      last_push: "2026-10-01T00:00:00Z",
    });
  });

  it("ignores forks when choosing the top language", () => {
    const repos = [
      createRepo({ language: "Go" }),
      createRepo({ language: "Java", fork: true }),
      createRepo({ language: "Java", fork: true }),
    ];

    expect(buildProfileSummary(USER, repos).top_language).toBe("Go");
  });

  it("chooses the most frequent language", () => {
    const repos = [
      createRepo({ language: "Go" }),
      createRepo({ language: "Python" }),
      createRepo({ language: "Python" }),
      createRepo({ language: null }),
    ];

    expect(buildProfileSummary(USER, repos).top_language).toBe("Python");
  });

  it("keeps the first language when counts are tied", () => {
    const repos = [
      createRepo({ language: "Go" }),
      createRepo({ language: "Python" }),
    ];

    expect(buildProfileSummary(USER, repos).top_language).toBe("Go");
  });

  it("picks the most recent push", () => {
    const repos = [
      createRepo({ pushed_at: "2026-09-30T10:00:00Z" }),
      createRepo({ pushed_at: "2026-10-12T04:52:00Z" }),
      createRepo({ pushed_at: "2026-10-02T08:00:00Z" }),
    ];

    expect(buildProfileSummary(USER, repos).last_push).toBe(
      "2026-10-12T04:52:00Z",
    );
  });

  it("returns null fields when there are no repositories", () => {
    expect(buildProfileSummary({ public_repos: 0 }, [])).toEqual({
      public_repos: 0,
      top_language: null,
      last_push: null,
    });
  });
});
