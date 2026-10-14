import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./Skeleton.module.css";

function Skeleton({ className }) {
  return (
    <span
      className={joinClassNames(styles.skeleton, styles.pulse, className)}
      aria-hidden="true"
    />
  );
}

export default Skeleton;
