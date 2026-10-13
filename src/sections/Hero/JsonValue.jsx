import styles from "./JsonValue.module.css";

function JsonValue({ value }) {
  if (typeof value === "number") {
    return <span className={styles.number}>{value}</span>;
  }

  return <span className={styles.string}>{`"${value}"`}</span>;
}

export default JsonValue;
