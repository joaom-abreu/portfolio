import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { sections } from "@/data/sections.js";
import { getSectionLocation } from "@/shared/lib/routes.js";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher/LanguageSwitcher.jsx";
import styles from "./MobileMenu.module.css";

function MobileMenu({ id, activeSectionId, onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className={styles.menu} id={id}>
      <nav className={styles.nav} aria-label={t("nav.label")}>
        <ul className={styles.links}>
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                className={styles.link}
                to={getSectionLocation(section.id)}
                aria-current={
                  section.id === activeSectionId ? "true" : undefined
                }
                onClick={onNavigate}
              >
                <span className={styles.number}>{section.number}</span>
                {t(section.titleKey)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.language}>
        <span className={styles.languageLabel}>{t("language.label")}</span>
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default MobileMenu;
