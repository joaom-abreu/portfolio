import { useState } from "react";
import { spacingTokens } from "@/data/designSystem.js";
import { readTokens } from "@/shared/lib/themeTokens.js";
import styles from "./SpacingScale.module.css";

const TOKEN_PREFIX = "--";

function SpacingScale() {
  const [values] = useState(() => readTokens(spacingTokens));

  return (
    <ul className={styles.card}>
      {spacingTokens.map((token) => (
        <li className={styles.row} key={token}>
          <span className={styles.label}>
            {token.replace(TOKEN_PREFIX, "")}
          </span>
          <span
            className={styles.bar}
            style={{ "--bar-width": `var(${token})` }}
            aria-hidden="true"
          />
          <span className={styles.value}>{values[token]}</span>
        </li>
      ))}
    </ul>
  );
}

export default SpacingScale;
