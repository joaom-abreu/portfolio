import { describe, expect, it } from "vitest";
import { buildRecentRepos } from "./recentRepos.js";

function createRepo(overrides) {
  return {
    name: "portfolio",
    fork: false,
    description: "Meu portfólio em React + Vite.",
    language: "JavaScript",
    stargazers_count: 1,
    pushed_at: "2026-10-12T04:52:00Z",
    html_url: "https://github.com/joaom-abreu/portfolio",
    ...overrides,
  };
}

function readNames(repos) {
  return buildRecentRepos(repos).map((repo) => repo.name);
}

describe("buildRecentRepos", () => {
  it("returns the contract fields", () => {
    expect(buildRecentRepos([createRepo()])).toEqual([
      {
        name: "portfolio",
        description: "Meu portfólio em React + Vite.",
        language: "JavaScript",
        stars: 1,
        pushed_at: "2026-10-12T04:52:00Z",
        url: "https://github.com/joaom-abreu/portfolio",
      },
    ]);
  });

  it("keeps the three most recently pushed repositories", () => {
    const repos = [
      createRepo({ name: "oldest", pushed_at: "2026-09-01T00:00:00Z" }),
      createRepo({ name: "newest", pushed_at: "2026-10-12T00:00:00Z" }),
      createRepo({ name: "third", pushed_at: "2026-10-01T00:00:00Z" }),
      createRepo({ name: "second", pushed_at: "2026-10-05T00:00:00Z" }),
    ];

    expect(readNames(repos)).toEqual(["newest", "second", "third"]);
  });

  it("ignores forks and the profile repository", () => {
    const repos = [
      createRepo({ name: "class-fork", fork: true }),
      createRepo({ name: "joaom-abreu" }),
      createRepo({ name: "courtside-api" }),
    ];

    expect(readNames(repos)).toEqual(["courtside-api"]);
  });

  it("returns null for a missing description or language", () => {
    const [repo] = buildRecentRepos([
      createRepo({ description: undefined, language: null }),
    ]);

    expect(repo.description).toBeNull();
    expect(repo.language).toBeNull();
  });

  it("returns an empty list when there are no repositories", () => {
    expect(buildRecentRepos([])).toEqual([]);
  });
});
