import Skeleton from "@/shared/ui/Skeleton/Skeleton.jsx";
import styles from "./LastCommit.module.css";

function LastCommitPlaceholder() {
  return (
    <div className={styles.commit}>
      <Skeleton className={styles.placeholder} />
    </div>
  );
}

export default LastCommitPlaceholder;
