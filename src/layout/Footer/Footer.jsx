import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "@/layout/Container/Container.jsx";
import VisitCounter from "@/layout/Footer/VisitCounter.jsx";
import { ROUTES, TOP_LOCATION } from "@/shared/lib/routes.js";
import styles from "./Footer.module.css";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.copyright}>
          {t("footer.copyright", { year: CURRENT_YEAR })}
        </p>
        <VisitCounter className={styles.counter} />
        <div className={styles.links}>
          <Link className={styles.link} to={ROUTES.design}>
            {t("footer.designSystem")}
          </Link>
          <Link className={styles.link} to={TOP_LOCATION}>
            {t("footer.backToTop")}
            <ArrowUp className={styles.icon} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
