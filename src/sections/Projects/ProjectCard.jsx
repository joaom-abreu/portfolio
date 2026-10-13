import ProjectLinks from "@/sections/Projects/ProjectLinks.jsx";
import ProjectMedia from "@/sections/Projects/ProjectMedia.jsx";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import TagList from "@/shared/ui/TagList/TagList.jsx";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  const localize = useLocalize();

  return (
    <article className={styles.card}>
      <ProjectMedia media={project.media} />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{localize(project.title)}</h3>
          <p className={styles.description}>{localize(project.description)}</p>
        </div>
        <TagList items={project.tags} />
        <ProjectLinks repoUrl={project.repoUrl} liveUrl={project.liveUrl} />
      </div>
    </article>
  );
}

export default ProjectCard;
