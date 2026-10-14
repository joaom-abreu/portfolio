import { GITHUB_USERNAME, fetchGithub } from "./githubClient.js";
import { sortByLastPush } from "./repos.js";

const LINE_BREAK = "\n";

function buildCommitsPath(repoName) {
  return `/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=1`;
}

function readSubject(message) {
  return message.split(LINE_BREAK)[0];
}

export function buildLastCommit(repo, commits) {
  const [latest] = commits;

  if (!latest) {
    return null;
  }

  return {
    message: readSubject(latest.commit.message),
    repo: repo.name,
    url: latest.html_url,
    committed_at: latest.commit.committer.date,
  };
}

export async function getLastCommit(repos) {
  const [repo] = sortByLastPush(repos);

  if (!repo) {
    return null;
  }

  return buildLastCommit(repo, await fetchGithub(buildCommitsPath(repo.name)));
}
