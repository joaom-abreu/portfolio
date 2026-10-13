import { profile } from "@/data/profile.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import styles from "./HeroTagline.module.css";

function HeroTagline() {
  const localize = useLocalize();
  const highlight = localize(profile.taglineHighlight);
  const [beforeHighlight, afterHighlight] = localize(profile.tagline).split(
    highlight,
  );

  return (
    <p className={styles.tagline}>
      {beforeHighlight}
      <strong className={styles.highlight}>{highlight}</strong>
      {afterHighlight}
    </p>
  );
}

export default HeroTagline;
