import { useTranslation } from "react-i18next";
import HeatCell from "@/sections/Projects/GitHubActivity/HeatCell.jsx";
import {
  COMPACT_WEEK_COUNT,
  takeLatestWeeks,
} from "@/sections/Projects/GitHubActivity/contributionWeeks.js";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery.js";
import { FULL_CALENDAR_MEDIA_QUERY } from "@/shared/lib/breakpoints.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./ContributionCalendar.module.css";

function ContributionCalendar({ weeks, isLoading = false }) {
  const { t } = useTranslation();
  const showsFullYear = useMediaQuery(FULL_CALENDAR_MEDIA_QUERY);
  const visibleWeeks = showsFullYear
    ? weeks
    : takeLatestWeeks(weeks, COMPACT_WEEK_COUNT);

  return (
    <div
      className={joinClassNames(styles.calendar, isLoading && styles.loading)}
      role="img"
      aria-label={t("projects.activity.calendarLabel")}
    >
      {visibleWeeks.toReversed().map((week, weekIndex) => (
        <div className={styles.week} key={weekIndex}>
          {week.map((day, dayIndex) => (
            <HeatCell key={dayIndex} level={day?.level} isBlank={!day} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ContributionCalendar;
