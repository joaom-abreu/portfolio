import styles from "./Container.module.css";

function Container({ className, children }) {
  const classNames = [styles.container, className].filter(Boolean).join(" ");

  return <div className={classNames}>{children}</div>;
}

export default Container;
