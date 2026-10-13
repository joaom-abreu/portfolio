import { Fragment } from "react";
import styles from "./JsonValue.module.css";

const ITEM_SEPARATOR = ", ";

function JsonValue({ value }) {
  if (Array.isArray(value)) {
    return (
      <>
        {"["}
        {value.map((item, index) => (
          <Fragment key={item}>
            {index > 0 && ITEM_SEPARATOR}
            <JsonValue value={item} />
          </Fragment>
        ))}
        {"]"}
      </>
    );
  }

  if (typeof value === "number") {
    return <span className={styles.number}>{value}</span>;
  }

  return <span className={styles.string}>{`"${value}"`}</span>;
}

export default JsonValue;
