import GitHubActivity from "@/sections/Projects/GitHubActivity/GitHubActivity.jsx";
import ProjectTimeline from "@/sections/Projects/ProjectTimeline.jsx";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projects}>
      <ProjectTimeline />
      <GitHubActivity />
    </div>
  );
}

export default Projects;
