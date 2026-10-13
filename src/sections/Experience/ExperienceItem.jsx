import { useLocalize } from "@/shared/hooks/useLocalize.js";
import styles from "./ExperienceItem.module.css";

function ExperienceItem({ experience }) {
  const localize = useLocalize();

  return (
    <li className={styles.item}>
      <span className={styles.period}>{localize(experience.period)}</span>
      <div>
        <h4 className={styles.role}>{localize(experience.role)}</h4>
        <p className={styles.organization}>
          {localize(experience.organization)}
        </p>
        <p className={styles.description}>{localize(experience.description)}</p>
      </div>
    </li>
  );
}

export default ExperienceItem;
