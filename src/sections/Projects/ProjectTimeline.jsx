import { useTranslation } from "react-i18next";
import { PROJECT_STATUS, projects } from "@/data/projects.js";
import ProjectCard from "@/sections/Projects/ProjectCard.jsx";
import { joinClassNames } from "@/shared/lib/classNames.js";
import { formatMonthLabel } from "@/shared/lib/formatMonthLabel.js";
import styles from "./ProjectTimeline.module.css";

function getMarkerClassName(status) {
  const isPublished = status === PROJECT_STATUS.published;
  return joinClassNames(styles.marker, !isPublished && styles.upcoming);
}

function ProjectTimeline() {
  const { t, i18n } = useTranslation();

  function getDateLabel(project) {
    const monthLabel = formatMonthLabel(project.date, i18n.resolvedLanguage);
    const isInProgress = project.status === PROJECT_STATUS.inProgress;
    return isInProgress
      ? `${monthLabel} · ${t("projects.status.inProgress")}`
      : monthLabel;
  }

  return (
    <ol className={styles.timeline}>
      {projects.map((project) => (
        <li className={styles.item} key={project.id}>
          <span
            className={getMarkerClassName(project.status)}
            aria-hidden="true"
          />
          <time className={styles.date} dateTime={project.date}>
            {getDateLabel(project)}
          </time>
          <ProjectCard project={project} />
        </li>
      ))}
    </ol>
  );
}

export default ProjectTimeline;
