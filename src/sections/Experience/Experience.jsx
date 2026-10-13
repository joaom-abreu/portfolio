import { useTranslation } from "react-i18next";
import { EXPERIENCE_KIND, experiences } from "@/data/experiences.js";
import ExperienceItem from "@/sections/Experience/ExperienceItem.jsx";
import styles from "./Experience.module.css";

const GROUP_DEFINITIONS = [
  {
    id: "roles",
    labelKey: "experience.roles",
    kinds: [EXPERIENCE_KIND.work, EXPERIENCE_KIND.next],
  },
  {
    id: "education",
    labelKey: "experience.education",
    kinds: [EXPERIENCE_KIND.education],
  },
];

const groups = GROUP_DEFINITIONS.map((group) => ({
  ...group,
  items: experiences.filter((item) => group.kinds.includes(item.kind)),
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
