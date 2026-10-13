import { PROJECT_STATUS, projects } from "@/data/projects.js";
import ProjectCard from "@/sections/Projects/ProjectCard.jsx";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./ProjectTimeline.module.css";

function getMarkerClassName(status) {
  const isPublished = status === PROJECT_STATUS.published;
  return joinClassNames(styles.marker, !isPublished && styles.upcoming);
}

function ProjectTimeline() {
  const localize = useLocalize();

  return (
    <ol className={styles.timeline}>
      {projects.map((project) => (
        <li className={styles.item} key={project.id}>
          <span
            className={getMarkerClassName(project.status)}
            aria-hidden="true"
          />
          <time className={styles.date} dateTime={project.date}>
            {localize(project.dateLabel)}
          </time>
          <ProjectCard project={project} />
        </li>
      ))}
    </ol>
  );
}

export default ProjectTimeline;
