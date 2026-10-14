import { GITHUB_USERNAME } from "./githubClient.js";
import { sortByLastPush } from "./repos.js";

const RECENT_REPOS_LIMIT = 3;
const PROFILE_REPO_NAME = GITHUB_USERNAME;

function isProject(repo) {
  return !repo.fork && repo.name !== PROFILE_REPO_NAME;
}

function toRecentRepo(repo) {
  return {
    name: repo.name,
    description: repo.description ?? null,
    language: repo.language ?? null,
    stars: repo.stargazers_count,
    pushed_at: repo.pushed_at,
    url: repo.html_url,
  };
}

export function buildRecentRepos(repos) {
  return sortByLastPush(repos.filter(isProject))
    .slice(0, RECENT_REPOS_LIMIT)
    .map(toRecentRepo);
}
