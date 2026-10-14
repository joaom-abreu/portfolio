import { useState } from "react";
import { radiusTokens } from "@/data/designSystem.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { readTokens } from "@/shared/lib/themeTokens.js";
import styles from "./RadiusScale.module.css";

const TOKEN_PREFIX = "--radius-";
const LABEL_SEPARATOR = " · ";
const RADIUS_NAMES = radiusTokens.map((token) => token.name);

function buildLabel(token, value, usage) {
  const size = token.name.replace(TOKEN_PREFIX, "");
  const parts = token.showsValue
    ? [size, Number.parseFloat(value), usage]
    : [size, usage];

  return parts.join(LABEL_SEPARATOR);
}

function RadiusScale() {
  const localize = useLocalize();
  const [values] = useState(() => readTokens(RADIUS_NAMES));

  return (
    <ul className={styles.card}>
      {radiusTokens.map((token) => (
        <li className={styles.item} key={token.name}>
          <span
            className={styles.shape}
            style={{ "--shape-radius": `var(${token.name})` }}
            aria-hidden="true"
          />
          <span className={styles.label}>
            {buildLabel(token, values[token.name], localize(token.usage))}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default RadiusScale;
