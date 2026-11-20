import { describe, expect, it } from "vitest";
import { GITHUB_USERNAME } from "./githubClient.js";
import { buildProfileSummary } from "./profileSummary.js";

const USER = { public_repos: 4 };

function createRepo(overrides) {
  return {
    name: "courtside-api",
    fork: false,
    pushed_at: "2026-10-01T00:00:00Z",
    ...overrides,
  };
}

describe("buildProfileSummary", () => {
  it("returns the contract fields", () => {
    const summary = buildProfileSummary(USER, [createRepo()]);

    expect(summary).toEqual({
      public_repos: 4,
      building: "courtside-api",
      last_push: "2026-10-01T00:00:00Z",
    });
  });

  it("ignores forks", () => {
    const repos = [
      createRepo({ name: "own-repo", pushed_at: "2026-10-01T00:00:00Z" }),
      createRepo({
        name: "forked-repo",
        fork: true,
        pushed_at: "2026-10-12T00:00:00Z",
      }),
    ];

    expect(buildProfileSummary(USER, repos).building).toBe("own-repo");
  });

  it("ignores the profile repository and the portfolio", () => {
    const repos = [
      createRepo({ name: "own-repo", pushed_at: "2026-10-01T00:00:00Z" }),
      createRepo({ name: GITHUB_USERNAME, pushed_at: "2026-10-12T00:00:00Z" }),
      createRepo({ name: "portfolio", pushed_at: "2026-10-11T00:00:00Z" }),
    ];

    expect(buildProfileSummary(USER, repos).building).toBe("own-repo");
  });

  it("picks the most recently pushed repository and its push date", () => {
    const repos = [
      createRepo({ name: "older", pushed_at: "2026-09-30T10:00:00Z" }),
      createRepo({ name: "newest", pushed_at: "2026-10-12T04:52:00Z" }),
      createRepo({ name: "middle", pushed_at: "2026-10-02T08:00:00Z" }),
    ];
    const summary = buildProfileSummary(USER, repos);

    expect(summary.building).toBe("newest");
    expect(summary.last_push).toBe("2026-10-12T04:52:00Z");
  });

  it("returns null fields when there is no valid repository", () => {
    const repos = [
      createRepo({ name: "portfolio" }),
      createRepo({ name: "forked-repo", fork: true }),
    ];

    expect(buildProfileSummary({ public_repos: 2 }, repos)).toEqual({
      public_repos: 2,
      building: null,
      last_push: null,
    });
  });
});
