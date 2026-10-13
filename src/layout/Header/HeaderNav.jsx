import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { sections } from "@/data/sections.js";
import { getSectionLocation } from "@/shared/lib/routes.js";
import styles from "./HeaderNav.module.css";

function HeaderNav({ activeSectionId }) {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav} aria-label={t("nav.label")}>
      <ul className={styles.links}>
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              className={styles.link}
              to={getSectionLocation(section.id)}
              aria-current={section.id === activeSectionId ? "true" : undefined}
            >
              <span className={styles.number}>{section.number}</span>
              {t(section.titleKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
