import { breakpoints } from "@/data/designSystem.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import styles from "./BreakpointList.module.css";

const LABEL_SEPARATOR = " · ";

function BreakpointList() {
  const localize = useLocalize();

  return (
    <ul className={styles.list}>
      {breakpoints.map((breakpoint) => (
        <li className={styles.card} key={breakpoint.id}>
          <span className={styles.label}>
            {breakpoint.id}
            {LABEL_SEPARATOR}
            {breakpoint.width}
          </span>
          <span className={styles.note}>{localize(breakpoint.note)}</span>
        </li>
      ))}
    </ul>
  );
}

export default BreakpointList;
