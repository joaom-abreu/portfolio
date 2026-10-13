export const profileSummaryRequest = {
  method: "GET",
  path: "/api/joao",
};

export const profileSummarySample = {
  status: "● 200 OK · 38ms",
  body: {
    focus: ["backend", "data"],
    public_repos: 12,
    top_language: "Java",
    last_push: { pt: "há 2h", en: "2h ago" },
  },
};
