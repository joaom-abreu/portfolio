import { GITHUB_USERNAME, fetchGithub } from "./githubClient.js";

const REPOS_PATH = `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`;
const NEVER_PUSHED = "";

function readPush(repo) {
  return repo.pushed_at ?? NEVER_PUSHED;
}

export function fetchRepos() {
  return fetchGithub(REPOS_PATH);
}

export function sortByLastPush(repos) {
  return repos.toSorted((first, second) =>
    readPush(second).localeCompare(readPush(first)),
  );
}
