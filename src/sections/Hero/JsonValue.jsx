import styles from "./JsonValue.module.css";

const PENDING_VALUE = "…";
const NULL_VALUE = "null";

function JsonValue({ value }) {
  if (value === undefined) {
    return <span className={styles.pending}>{PENDING_VALUE}</span>;
  }

  if (value === null) {
    return <span className={styles.number}>{NULL_VALUE}</span>;
  }

  if (typeof value === "number") {
    return <span className={styles.number}>{value}</span>;
  }

  return <span className={styles.string}>{`"${value}"`}</span>;
}

export default JsonValue;
