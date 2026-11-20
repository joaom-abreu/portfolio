import { useTranslation } from "react-i18next";
import ProjectLinks from "@/sections/Projects/ProjectLinks.jsx";
import ProjectMedia from "@/sections/Projects/ProjectMedia.jsx";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import TagList from "@/shared/ui/TagList/TagList.jsx";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const localize = useLocalize();
  const hasMedia = Boolean(project.media);

  return (
    <article
      className={joinClassNames(
        styles.card,
        !hasMedia && styles.cardWithoutMedia,
      )}
    >
      {hasMedia && <ProjectMedia media={project.media} />}
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{localize(project.title)}</h3>
          <p className={styles.summary}>{localize(project.summary)}</p>
        </div>
        {project.role && (
          <div className={styles.role}>
            <h4 className={styles.roleLabel}>{t("projects.role")}</h4>
            <p>{localize(project.role)}</p>
          </div>
        )}
        <ul className={styles.highlights}>
          {project.highlights.map((highlight) => (
            <li className={styles.highlight} key={highlight.en}>
              {localize(highlight)}
            </li>
          ))}
        </ul>
        <TagList items={project.tags} />
        <ProjectLinks repoUrl={project.repoUrl} liveUrl={project.liveUrl} />
      </div>
    </article>
  );
}

export default ProjectCard;
