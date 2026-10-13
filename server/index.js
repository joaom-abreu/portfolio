import { createApp } from "./app.js";

const DEFAULT_PORT = 3001;
const SHUTDOWN_SIGNALS = ["SIGTERM", "SIGINT"];

const port = Number(process.env.PORT) || DEFAULT_PORT;

const server = createApp().listen(port, () => {
  console.log(`API listening on port ${port}`);
});

SHUTDOWN_SIGNALS.forEach((signal) => {
  process.on(signal, () => server.close());
});
