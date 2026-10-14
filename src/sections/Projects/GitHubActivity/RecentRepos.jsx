import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import RepoCard from "@/sections/Projects/GitHubActivity/RepoCard.jsx";
import { API_STATUS } from "@/shared/hooks/useApi.js";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.jsx";
import TextLink from "@/shared/ui/TextLink/TextLink.jsx";
import styles from "./RecentRepos.module.css";

const PLACEHOLDER_KEYS = ["first", "second", "third"];
const ERROR_SEPARATOR = "·";

function RepoPlaceholders() {
  return (
    <ul className={styles.grid}>
      {PLACEHOLDER_KEYS.map((key) => (
        <li key={key}>
          <Skeleton className={styles.placeholder} />
        </li>
      ))}
    </ul>
  );
}

function RepoGrid({ repos }) {
  return (
    <ul className={styles.grid}>
      {repos.map((repo) => (
        <li key={repo.name}>
          <RepoCard repo={repo} />
        </li>
      ))}
    </ul>
  );
}

function ReposError({ reposUrl }) {
  const { t } = useTranslation();

  return (
    <p className={styles.error}>
      {t("projects.repos.error")}
      <span aria-hidden="true">{ERROR_SEPARATOR}</span>
      <TextLink href={reposUrl} icon={ArrowUpRight}>
        {t("projects.repos.viewOnGithub")}
      </TextLink>
    </p>
  );
}

function RecentRepos({ status, repos, reposUrl }) {
  const { t } = useTranslation();
  const isEmpty = status === API_STATUS.success && repos.length === 0;

  if (isEmpty) {
    return null;
  }

  return (
    <div className={styles.recent}>
      <h4 className={styles.title}>{t("projects.repos.title")}</h4>
      {status === API_STATUS.loading && <RepoPlaceholders />}
      {status === API_STATUS.error && <ReposError reposUrl={reposUrl} />}
      {status === API_STATUS.success && <RepoGrid repos={repos} />}
    </div>
  );
}

export default RecentRepos;
