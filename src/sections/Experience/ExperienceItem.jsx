import { useTranslation } from "react-i18next";
import { EXPERIENCE_KIND } from "@/data/experiences.js";
import { CONTACT_SECTION_ID } from "@/data/sections.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import { getSectionLocation } from "@/shared/lib/routes.js";
import TextLink from "@/shared/ui/TextLink/TextLink.jsx";
import styles from "./ExperienceItem.module.css";

const CONTACT_LOCATION = getSectionLocation(CONTACT_SECTION_ID);

function ExperienceItem({ experience }) {
  const { t } = useTranslation();
  const localize = useLocalize();
  const isNext = experience.kind === EXPERIENCE_KIND.next;

  return (
    <li className={joinClassNames(styles.item, isNext && styles.next)}>
      <span className={styles.period}>{localize(experience.period)}</span>
      <div>
        <h4 className={styles.role}>{localize(experience.role)}</h4>
        {experience.organization && (
          <p className={styles.organization}>
            {localize(experience.organization)}
          </p>
        )}
        <p className={styles.description}>
          {localize(experience.description)}
          {isNext && (
            <>
              {" "}
              <TextLink to={CONTACT_LOCATION}>
                {t("experience.letsTalk")}
              </TextLink>
            </>
          )}
        </p>
      </div>
    </li>
  );
}

export default ExperienceItem;
