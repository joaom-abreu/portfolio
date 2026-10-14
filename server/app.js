import express from "express";
import githubActivity from "../api/github-activity.js";
import joao from "../api/joao.js";

const HEALTH_PATH = "/healthz";
const HEALTH_BODY = { status: "ok" };

export function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(express.json());

  app.get(HEALTH_PATH, (req, res) => res.json(HEALTH_BODY));
  app.all("/api/joao", joao);
  app.all("/api/github-activity", githubActivity);

  return app;
}
