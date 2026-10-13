import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile.js";
import StackGroup from "@/sections/About/StackGroup.jsx";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import styles from "./About.module.css";

function About() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const paragraphs = profile.about.map(localize);

  return (
    <div className={styles.about}>
      <div className={styles.bio}>
        {paragraphs.map((paragraph) => (
          <p className={styles.paragraph} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={styles.stack}>
        <h3 className={styles.stackTitle}>{t("about.stackTitle")}</h3>
        <ul className={styles.groups}>
          {profile.stack.map((group) => (
            <li key={group.id}>
              <StackGroup
                label={localize(group.label)}
                items={group.items.map(localize)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
