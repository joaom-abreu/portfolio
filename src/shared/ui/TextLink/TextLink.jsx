import { Link } from "react-router-dom";
import { getLinkProps } from "@/shared/lib/externalLink.js";
import styles from "./TextLink.module.css";

function TextLink({ href, to, icon: Icon, children }) {
  const content = (
    <>
      {children}
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link className={styles.link} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a className={styles.link} href={href} {...getLinkProps(href)}>
      {content}
    </a>
  );
}

export default TextLink;
