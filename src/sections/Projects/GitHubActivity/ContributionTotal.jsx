import { useTranslation } from "react-i18next";
import styles from "./ContributionTotal.module.css";

function ContributionTotal({ total }) {
  const { t, i18n } = useTranslation();
  const formattedTotal = new Intl.NumberFormat(i18n.resolvedLanguage).format(
    total,
  );

  return (
    <p className={styles.total}>
      <strong className={styles.count}>{formattedTotal}</strong>{" "}
      {t("projects.activity.total", { count: total })}
    </p>
  );
}

export default ContributionTotal;
