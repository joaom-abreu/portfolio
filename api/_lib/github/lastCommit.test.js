import { describe, expect, it } from "vitest";
import { buildLastCommit } from "./lastCommit.js";

const REPO = { name: "portfolio" };

function createCommit(overrides) {
  return {
    html_url: "https://github.com/joaom-abreu/portfolio/commit/abc123",
    commit: {
      message: "novo texto do Sobre mim",
      author: { date: "2026-10-12T04:00:00Z" },
      committer: { date: "2026-10-12T04:52:00Z" },
      ...overrides,
    },
  };
}

describe("buildLastCommit", () => {
  it("returns the contract fields", () => {
    expect(buildLastCommit(REPO, [createCommit()])).toEqual({
      message: "novo texto do Sobre mim",
      repo: "portfolio",
      url: "https://github.com/joaom-abreu/portfolio/commit/abc123",
      committed_at: "2026-10-12T04:52:00Z",
    });
  });

  it("keeps only the first line of the message", () => {
    const commit = createCommit({ message: "subject\n\nbody line" });

    expect(buildLastCommit(REPO, [commit]).message).toBe("subject");
  });

  it("uses the first commit of the list", () => {
    const commits = [
      createCommit({ message: "latest" }),
      createCommit({ message: "older" }),
    ];

    expect(buildLastCommit(REPO, commits).message).toBe("latest");
  });

  it("returns null when the repository has no commits", () => {
    expect(buildLastCommit(REPO, [])).toBeNull();
  });
});
