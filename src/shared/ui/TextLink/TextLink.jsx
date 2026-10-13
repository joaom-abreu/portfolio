import { getLinkProps } from "@/shared/lib/externalLink.js";
import styles from "./TextLink.module.css";

function TextLink({ href, icon: Icon, children }) {
  return (
    <a className={styles.link} href={href} {...getLinkProps(href)}>
      {children}
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
    </a>
  );
}

export default TextLink;
