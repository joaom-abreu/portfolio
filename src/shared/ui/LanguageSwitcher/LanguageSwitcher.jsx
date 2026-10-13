import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/shared/lib/language.js";
import SegmentedControl from "@/shared/ui/SegmentedControl/SegmentedControl.jsx";

const LANGUAGE_OPTIONS = SUPPORTED_LANGUAGES.map((language) => ({
  value: language,
  label: language.toUpperCase(),
}));

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <SegmentedControl
      label={t("language.label")}
      options={LANGUAGE_OPTIONS}
      value={i18n.resolvedLanguage}
      onChange={(language) => i18n.changeLanguage(language)}
    />
  );
}

export default LanguageSwitcher;
