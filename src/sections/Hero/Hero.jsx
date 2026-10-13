import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile.js";
import Container from "@/layout/Container/Container.jsx";
import HeroActions from "@/sections/Hero/HeroActions.jsx";
import HeroMedia from "@/sections/Hero/HeroMedia.jsx";
import HeroTagline from "@/sections/Hero/HeroTagline.jsx";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import styles from "./Hero.module.css";

const TITLE_ID = "hero-title";

function Hero() {
  const { t } = useTranslation();
  const localize = useLocalize();

  return (
    <section className={styles.hero} aria-labelledby={TITLE_ID}>
      <Container>
        <div className={styles.columns}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>{localize(profile.eyebrow)}</p>
            <h1 className={styles.name} id={TITLE_ID}>
              {profile.name}
            </h1>
            <HeroTagline />
            <HeroActions />
          </div>
          <HeroMedia className={styles.media} />
        </div>
        <p className={styles.scrollHint}>
          {t("hero.scrollHint")}
          <ArrowDown className={styles.scrollIcon} aria-hidden="true" />
        </p>
      </Container>
    </section>
  );
}

export default Hero;
