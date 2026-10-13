import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./Container.module.css";

function Container({ className, children }) {
  const classNames = joinClassNames(styles.container, className);

  return <div className={classNames}>{children}</div>;
}

export default Container;
