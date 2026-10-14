import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { designNavIds, designNavItems } from "@/data/designSystem.js";
import { useIsPageBottom } from "@/shared/hooks/useIsPageBottom.js";
import { useScrollSpy } from "@/shared/hooks/useScrollSpy.js";
import styles from "./DesignNav.module.css";

const LAST_ID = designNavIds.at(-1);

function DesignNav() {
  const { t } = useTranslation();
  const visibleId = useScrollSpy(designNavIds);
  const isPageBottom = useIsPageBottom();
  const activeId = isPageBottom ? LAST_ID : visibleId;

  return (
    <nav className={styles.nav} aria-labelledby="design-nav-title">
      <p className={styles.title} id="design-nav-title">
        {t("design.onThisPage")}
      </p>
      <ul className={styles.links}>
        {designNavItems.map((item) => (
          <li key={item.id}>
            <Link
              className={styles.link}
              to={{ hash: `#${item.id}` }}
              aria-current={item.id === activeId ? "true" : undefined}
            >
              {t(item.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesignNav;
