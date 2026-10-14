import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { findContact } from "@/data/contacts.js";
import ActivityCard from "@/sections/Projects/GitHubActivity/ActivityCard.jsx";
import RecentRepos from "@/sections/Projects/GitHubActivity/RecentRepos.jsx";
import { useApi } from "@/shared/hooks/useApi.js";
import { getGithubActivity } from "@/shared/services/portfolioApi.js";
import TextLink from "@/shared/ui/TextLink/TextLink.jsx";
import styles from "./GitHubActivity.module.css";

const PROFILE_URL = findContact("github").href;
const REPOS_URL = `${PROFILE_URL}?tab=repositories`;

function GitHubActivity() {
  const { t } = useTranslation();
  const { status, response } = useApi(getGithubActivity);
  const activity = response?.data;

  return (
    <div className={styles.activity}>
      <div className={styles.header}>
        <h3 className={styles.title}>{t("projects.activity.title")}</h3>
        <TextLink href={PROFILE_URL} icon={ArrowUpRight}>
          {t("projects.activity.viewProfile")}
        </TextLink>
      </div>
      <ActivityCard
        status={status}
        activity={activity}
        profileUrl={PROFILE_URL}
      />
      <RecentRepos
        status={status}
        repos={activity?.recent_repos}
        reposUrl={REPOS_URL}
      />
    </div>
  );
}

export default GitHubActivity;
