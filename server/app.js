import express from "express";
import githubActivity from "../api/github-activity.js";
import health from "../api/health.js";
import joao from "../api/joao.js";
import views from "../api/views.js";

const HEALTH_PATH = "/healthz";
const HEALTH_BODY = { status: "ok" };

export function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(express.json());

  app.get(HEALTH_PATH, (req, res) => res.json(HEALTH_BODY));
  app.all("/api/joao", joao);
  app.all("/api/github-activity", githubActivity);
  app.all("/api/views", views);
  app.all("/api/health", health);

  return app;
}
