import { GITHUB_USERNAME, fetchGithub } from "./githubClient.js";
import { fetchRepos } from "./repos.js";

const USER_PATH = `/users/${GITHUB_USERNAME}`;

function countLanguages(repos) {
  const counts = new Map();

  repos
    .filter((repo) => !repo.fork && repo.language)
    .forEach((repo) => {
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    });

  return counts;
}

function findTopLanguage(repos) {
  const ranking = [...countLanguages(repos)].toSorted(
    ([, firstCount], [, secondCount]) => secondCount - firstCount,
  );

  return ranking[0]?.[0] ?? null;
}

function findLastPush(repos) {
  const pushes = repos.map((repo) => repo.pushed_at).filter(Boolean);

  return pushes.toSorted().at(-1) ?? null;
}

export function buildProfileSummary(user, repos) {
  return {
    public_repos: user.public_repos,
    top_language: findTopLanguage(repos),
    last_push: findLastPush(repos),
  };
}

export async function getProfileSummary() {
  const [user, repos] = await Promise.all([
    fetchGithub(USER_PATH),
    fetchRepos(),
  ]);

  return buildProfileSummary(user, repos);
}
