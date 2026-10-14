import { Book } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NEW_TAB_LINK_PROPS } from "@/shared/lib/externalLink.js";
import { formatRelativeTime } from "@/shared/lib/formatRelativeTime.js";
import styles from "./RepoCard.module.css";

const STAR = "★";

function RepoCard({ repo }) {
  const { i18n } = useTranslation();
  const pushedAt = formatRelativeTime(repo.pushed_at, i18n.resolvedLanguage);

  return (
    <a className={styles.card} href={repo.url} {...NEW_TAB_LINK_PROPS}>
      <span className={styles.name}>
        <Book className={styles.icon} aria-hidden="true" />
        {repo.name}
      </span>
      {repo.description && (
        <p className={styles.description}>{repo.description}</p>
      )}
      <span className={styles.meta}>
        {repo.language && (
          <span className={styles.language}>{repo.language}</span>
        )}
        <span>{`${STAR} ${repo.stars}`}</span>
        <time dateTime={repo.pushed_at}>{pushedAt}</time>
      </span>
    </a>
  );
}

export default RepoCard;
