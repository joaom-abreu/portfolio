import { Fragment } from "react";
import JsonValue from "@/sections/Hero/JsonValue.jsx";
import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./ApiCard.module.css";

const OBJECT_START = "{\n";
const OBJECT_END = "}";
const INDENT = "  ";
const KEY_SEPARATOR = ": ";
const LINE_END = "\n";
const LINE_END_WITH_COMMA = ",\n";

function ApiCard({ method, path, status, tone, body, className }) {
  const entries = Object.entries(body);
  const lastIndex = entries.length - 1;

  return (
    <div className={joinClassNames(styles.card, className)}>
      <div className={styles.bar}>
        <span className={styles.method}>{method}</span>
        {path}
        <span className={joinClassNames(styles.status, styles[tone])}>
          {status}
        </span>
      </div>
      <pre className={styles.body}>
        {OBJECT_START}
        {entries.map(([key, value], index) => (
          <Fragment key={key}>
            {INDENT}
            <span className={styles.key}>{`"${key}"`}</span>
            {KEY_SEPARATOR}
            <JsonValue value={value} />
            {index < lastIndex ? LINE_END_WITH_COMMA : LINE_END}
          </Fragment>
        ))}
        {OBJECT_END}
      </pre>
    </div>
  );
}

export default ApiCard;
