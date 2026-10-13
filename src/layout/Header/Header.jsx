import { useTranslation } from "react-i18next";
import { sections } from "@/data/sections.js";
import Container from "@/layout/Container/Container.jsx";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher/LanguageSwitcher.jsx";
import ThemeToggle from "@/shared/ui/ThemeToggle/ThemeToggle.jsx";
import styles from "./Header.module.css";

function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <nav className={styles.nav} aria-label={t("nav.label")}>
          <ul className={styles.links}>
            {sections.map((section) => (
              <li key={section.id}>
                <a className={styles.link} href={`#${section.id}`}>
                  <span className={styles.number}>{section.number}</span>
                  {t(section.titleKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

export default Header;
