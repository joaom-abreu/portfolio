import { formatHexColor } from "@/shared/lib/hexColor.js";
import styles from "./ColorSwatch.module.css";

function ColorSwatch({ token, theme, value }) {
  return (
    <span className={styles.color}>
      <span
        className={styles.swatch}
        data-theme={theme}
        style={{ "--swatch-color": `var(${token})` }}
        aria-hidden="true"
      />
      <span className={styles.value}>{formatHexColor(value)}</span>
    </span>
  );
}

export default ColorSwatch;
