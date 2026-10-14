import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./HeatCell.module.css";

function HeatCell({ level, isBlank = false }) {
  return (
    <span
      className={joinClassNames(styles.cell, isBlank && styles.blank)}
      data-level={level}
    />
  );
}

export default HeatCell;
