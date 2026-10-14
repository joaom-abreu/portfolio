import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CalendarLegend from "@/sections/Projects/GitHubActivity/CalendarLegend.jsx";
import ContributionCalendar from "@/sections/Projects/GitHubActivity/ContributionCalendar.jsx";
import ContributionTotal from "@/sections/Projects/GitHubActivity/ContributionTotal.jsx";
import LastCommit from "@/sections/Projects/GitHubActivity/LastCommit.jsx";
import LastCommitPlaceholder from "@/sections/Projects/GitHubActivity/LastCommitPlaceholder.jsx";
import {
  buildContributionWeeks,
  buildPlaceholderWeeks,
} from "@/sections/Projects/GitHubActivity/contributionWeeks.js";
import { API_STATUS } from "@/shared/hooks/useApi.js";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.jsx";
import TextLink from "@/shared/ui/TextLink/TextLink.jsx";
import styles from "./ActivityCard.module.css";

const PLACEHOLDER_WEEKS = buildPlaceholderWeeks();

function LoadingActivity() {
  return (
    <>
      <div className={styles.head}>
        <Skeleton className={styles.totalPlaceholder} />
        <CalendarLegend />
      </div>
      <ContributionCalendar weeks={PLACEHOLDER_WEEKS} isLoading />
      <LastCommitPlaceholder />
    </>
  );
}

function LoadedActivity({ activity }) {
  return (
    <>
      <div className={styles.head}>
        <ContributionTotal total={activity.total} />
        <CalendarLegend />
      </div>
      <ContributionCalendar weeks={buildContributionWeeks(activity.days)} />
      {activity.last_commit && <LastCommit commit={activity.last_commit} />}
    </>
  );
}

function ActivityCard({ status, activity, profileUrl }) {
  const { t } = useTranslation();

  if (status === API_STATUS.error) {
    return (
      <p className={styles.card}>
        <TextLink href={profileUrl} icon={ArrowUpRight}>
          {t("projects.activity.viewActivity")}
        </TextLink>
      </p>
    );
  }

  return (
    <div className={styles.card}>
      {status === API_STATUS.loading ? (
        <LoadingActivity />
      ) : (
        <LoadedActivity activity={activity} />
      )}
    </div>
  );
}

export default ActivityCard;
