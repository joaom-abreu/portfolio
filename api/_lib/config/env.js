export function readGithubToken() {
  return process.env.GITHUB_TOKEN || null;
}
