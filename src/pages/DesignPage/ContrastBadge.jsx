import { useTranslation } from "react-i18next";
import { contrastRatio } from "@/shared/lib/contrastRatio.js";
import styles from "./ContrastBadge.module.css";

const TEXT_MINIMUM = 4.5;
const RATIO_DECIMALS = 1;
const CONFORMANCE_LEVEL = "AA";
const NO_CONTRAST = "—";
const VALUE_SEPARATOR = " · ";

function formatRatio(ratio) {
  return ratio.toFixed(RATIO_DECIMALS);
}

function readRatios(contrast, themes) {
  return themes.map((tokens) =>
    contrastRatio(tokens[contrast.foreground], tokens[contrast.background]),
  );
}

function ContrastBadge({ contrast, themes }) {
  const { t } = useTranslation();
  const ratios = contrast ? readRatios(contrast, themes) : [];

  if (ratios.length === 0 || ratios.includes(null)) {
    return <span className={styles.none}>{NO_CONTRAST}</span>;
  }

  const values = [...new Set(ratios.map(formatRatio))];
  const passesText = ratios.every((ratio) => ratio >= TEXT_MINIMUM);
  const customLabel = contrast.labelKey && t(contrast.labelKey);
  const label = customLabel || (passesText && CONFORMANCE_LEVEL);

  return (
    <span className={styles.badge}>
      {label && `${label} `}
      {values.join(VALUE_SEPARATOR)}
    </span>
  );
}

export default ContrastBadge;
