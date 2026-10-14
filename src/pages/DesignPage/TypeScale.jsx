import { typeStyles } from "@/data/designSystem.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import styles from "./TypeScale.module.css";

const LABEL_SEPARATOR = " · ";

function TypeScale() {
  const localize = useLocalize();

  return (
    <ul className={styles.card}>
      {typeStyles.map((style) => (
        <li className={styles.row} key={style.id}>
          <span className={styles.label}>
            {style.id}
            {LABEL_SEPARATOR}
            {style.metrics}
          </span>
          <span className={styles.sample} data-style={style.id}>
            {localize(style.sample)}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TypeScale;
