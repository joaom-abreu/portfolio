import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/fonts.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/app/i18n.js";
import OgImage from "./OgImage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OgImage />
  </StrictMode>,
);
