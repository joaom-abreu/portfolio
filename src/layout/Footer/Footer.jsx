import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "@/layout/Container/Container.jsx";
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
        <div className={styles.links}>
          <a className={styles.link} href="/design">
            {t("footer.designSystem")}
          </a>
          <a className={styles.link} href="#top">
            {t("footer.backToTop")}
            <ArrowUp className={styles.icon} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
