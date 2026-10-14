import { useTranslation } from "react-i18next";
import { API_STATUS, useApi } from "@/shared/hooks/useApi.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import { getViews } from "@/shared/services/portfolioApi.js";
import Sparkline from "@/shared/ui/Sparkline/Sparkline.jsx";
import styles from "./VisitCounter.module.css";

const WINDOW_DAYS = 30;
const PENDING_TOTAL = "…";
const PENDING_COUNT = 0;
const NO_VALUES = [];

function VisitCounter({ className }) {
  const { t, i18n } = useTranslation();
  const { status, response } = useApi(getViews);

  if (status === API_STATUS.error) {
    return null;
  }

  const views = response?.data;
  const total = views
    ? new Intl.NumberFormat(i18n.resolvedLanguage).format(views.total)
    : PENDING_TOTAL;
  const values = views ? views.daily.map((day) => day.count) : NO_VALUES;

  return (
    <p className={joinClassNames(styles.counter, className)}>
      <Sparkline values={values} />
      <span>
        <strong className={styles.total}>{total}</strong>{" "}
        {t("footer.visits", {
          count: views?.total ?? PENDING_COUNT,
          days: WINDOW_DAYS,
        })}
      </span>
    </p>
  );
}

export default VisitCounter;
