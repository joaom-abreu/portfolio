function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable ${name}`);
  }

  return value;
}

export function readGithubToken() {
  return process.env.GITHUB_TOKEN || null;
}

export function readSupabaseConfig() {
  return {
    url: requireEnv("SUPABASE_URL"),
    serviceRoleKey: requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
  };
}

export function readViewsSalt() {
  return requireEnv("VIEWS_SALT");
}
