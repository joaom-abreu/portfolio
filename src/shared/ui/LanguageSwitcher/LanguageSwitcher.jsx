import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/shared/lib/language.js";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.group} role="group" aria-label={t("language.label")}>
      {SUPPORTED_LANGUAGES.map((language) => (
        <button
          key={language}
          type="button"
          className={styles.option}
          aria-pressed={language === i18n.resolvedLanguage}
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
