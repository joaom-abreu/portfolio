import { useTranslation } from "react-i18next";
import HeatCell from "@/sections/Projects/GitHubActivity/HeatCell.jsx";
import styles from "./CalendarLegend.module.css";

const LEVELS = [0, 1, 2, 3, 4];

function CalendarLegend() {
  const { t } = useTranslation();

  return (
    <span className={styles.legend} aria-hidden="true">
      <span className={styles.label}>{t("projects.activity.less")}</span>
      {LEVELS.map((level) => (
        <HeatCell key={level} level={level} />
      ))}
      <span className={styles.label}>{t("projects.activity.more")}</span>
    </span>
  );
}

export default CalendarLegend;
