import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile.js";
import ApiCard from "@/sections/Hero/ApiCard.jsx";
import { API_CARD_TONE } from "@/sections/Hero/apiCardTone.js";
import HeroTagline from "@/sections/Hero/HeroTagline.jsx";
import { PROFILE_SUMMARY_METHOD } from "@/sections/Hero/profileSummaryCard.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { formatRelativeTime } from "@/shared/lib/formatRelativeTime.js";
import { PROFILE_SUMMARY_PATH } from "@/shared/services/portfolioApi.js";
import styles from "./OgImage.module.css";

const SITE_HOST = "joaomario.dev";
const SAMPLE_STATUS = "● 200 OK";
const SAMPLE_PUBLIC_REPOS = 11;
const SAMPLE_TOP_LANGUAGE = "Python";
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const SAMPLE_PUSH_AGE_HOURS = 2;
const SAMPLE_PUSH_DATE = 0;

function buildSampleBody(language) {
  const now = SAMPLE_PUSH_AGE_HOURS * MILLISECONDS_PER_HOUR;

  return {
    public_repos: SAMPLE_PUBLIC_REPOS,
    top_language: SAMPLE_TOP_LANGUAGE,
    last_push: formatRelativeTime(SAMPLE_PUSH_DATE, language, now),
  };
}

function OgImage() {
  const { i18n } = useTranslation();
  const localize = useLocalize();

  return (
    <main className={styles.canvas}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>{localize(profile.eyebrow)}</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <div className={styles.tagline}>
          <HeroTagline />
        </div>
        <p className={styles.site}>{SITE_HOST}</p>
      </div>
      <div className={styles.cardSlot}>
        <ApiCard
          className={styles.card}
          method={PROFILE_SUMMARY_METHOD}
          path={PROFILE_SUMMARY_PATH}
          status={SAMPLE_STATUS}
          tone={API_CARD_TONE.success}
          body={buildSampleBody(i18n.resolvedLanguage)}
        />
      </div>
    </main>
  );
}

export default OgImage;
