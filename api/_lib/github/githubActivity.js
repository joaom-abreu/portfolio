import { getContributions } from "./contributions.js";
import { getLastCommit } from "./lastCommit.js";
import { buildRecentRepos } from "./recentRepos.js";
import { fetchRepos } from "./repos.js";

export async function getGithubActivity() {
  const [contributions, repos] = await Promise.all([
    getContributions(),
    fetchRepos(),
  ]);

  return {
    total: contributions.total,
    days: contributions.days,
    last_commit: await getLastCommit(repos),
    recent_repos: buildRecentRepos(repos),
  };
}
