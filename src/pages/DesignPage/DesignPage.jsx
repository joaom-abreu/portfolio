import { useTranslation } from "react-i18next";
import Container from "@/layout/Container/Container.jsx";
import styles from "./DesignPage.module.css";

function DesignPage() {
  const { t } = useTranslation();

  return (
    <Container className={styles.page}>
      <h1 className={styles.title}>{t("design.title")}</h1>
      <p className={styles.note}>{t("design.comingSoon")}</p>
    </Container>
  );
}

export default DesignPage;
