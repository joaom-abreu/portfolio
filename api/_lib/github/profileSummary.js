import { GITHUB_USERNAME, fetchGithub } from "./githubClient.js";
import { fetchRepos, sortByLastPush } from "./repos.js";

const USER_PATH = `/users/${GITHUB_USERNAME}`;
const EXCLUDED_REPOS = [GITHUB_USERNAME, "portfolio"];

function findCurrentProject(repos) {
  return (
    sortByLastPush(repos).find(
      (repo) => !repo.fork && !EXCLUDED_REPOS.includes(repo.name),
    ) ?? null
  );
}

export function buildProfileSummary(user, repos) {
  const project = findCurrentProject(repos);

  return {
    public_repos: user.public_repos,
    building: project?.name ?? null,
    last_push: project?.pushed_at ?? null,
  };
}

export async function getProfileSummary() {
  const [user, repos] = await Promise.all([
    fetchGithub(USER_PATH),
    fetchRepos(),
  ]);

  return buildProfileSummary(user, repos);
}
