import { useTranslation } from "react-i18next";
import { EXPERIENCE_KIND, experiences } from "@/data/experiences.js";
import ExperienceItem from "@/sections/Experience/ExperienceItem.jsx";
import styles from "./Experience.module.css";

const GROUP_DEFINITIONS = [
  {
    id: "roles",
    labelKey: "experience.roles",
    kind: EXPERIENCE_KIND.work,
  },
  {
    id: "education",
    labelKey: "experience.education",
    kind: EXPERIENCE_KIND.education,
  },
];

const groups = GROUP_DEFINITIONS.map((group) => ({
  ...group,
  items: experiences.filter((item) => item.kind === group.kind),
}));

function Experience() {
  const { t } = useTranslation();

  return (
    <div className={styles.experience}>
      {groups.map((group) => (
        <div className={styles.group} key={group.id}>
          <h3 className={styles.label}>{t(group.labelKey)}</h3>
          <ul>
            {group.items.map((item) => (
              <ExperienceItem experience={item} key={item.id} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
