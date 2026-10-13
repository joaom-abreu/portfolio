import { CircleAlert } from "lucide-react";
import { useId } from "react";
import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./TextField.module.css";

function TextField({ label, error, multiline = false, ...controlProps }) {
  const id = useId();
  const errorId = `${id}-error`;
  const Control = multiline ? "textarea" : "input";

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <Control
        id={id}
        className={joinClassNames(
          styles.control,
          multiline && styles.multiline,
        )}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        {...controlProps}
      />
      {error && (
        <p className={styles.error} id={errorId}>
          <CircleAlert className={styles.errorIcon} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export default TextField;
