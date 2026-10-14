import { GitCommitHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NEW_TAB_LINK_PROPS } from "@/shared/lib/externalLink.js";
import { formatRelativeTime } from "@/shared/lib/formatRelativeTime.js";
import styles from "./LastCommit.module.css";

const META_SEPARATOR = " · ";

function LastCommit({ commit }) {
  const { i18n } = useTranslation();
  const committedAt = formatRelativeTime(
    commit.committed_at,
    i18n.resolvedLanguage,
  );

  return (
    <div className={styles.commit}>
      <GitCommitHorizontal className={styles.icon} aria-hidden="true" />
      <a className={styles.message} href={commit.url} {...NEW_TAB_LINK_PROPS}>
        {commit.message}
      </a>
      <span className={styles.meta}>
        {commit.repo}
        {META_SEPARATOR}
        <time dateTime={commit.committed_at}>{committedAt}</time>
      </span>
    </div>
  );
}

export default LastCommit;
