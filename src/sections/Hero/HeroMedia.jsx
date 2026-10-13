import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile.js";
import ApiCard from "@/sections/Hero/ApiCard.jsx";
import {
  PROFILE_SUMMARY_METHOD,
  buildProfileSummaryCard,
} from "@/sections/Hero/profileSummaryCard.js";
import { useApi } from "@/shared/hooks/useApi.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import {
  PROFILE_SUMMARY_PATH,
  getProfileSummary,
} from "@/shared/services/portfolioApi.js";
import styles from "./HeroMedia.module.css";

const PHOTO_WIDTH = 260;
const PHOTO_HEIGHT = 325;

function HeroMedia({ className }) {
  const { t, i18n } = useTranslation();
  const profileSummary = useApi(getProfileSummary);
  const card = buildProfileSummaryCard(
    profileSummary,
    t,
    i18n.resolvedLanguage,
  );

  return (
    <div className={joinClassNames(styles.media, className)}>
      <img
        className={styles.photo}
        src={profile.photo}
        alt={profile.name}
        width={PHOTO_WIDTH}
        height={PHOTO_HEIGHT}
        loading="eager"
      />
      <ApiCard
        className={styles.card}
        method={PROFILE_SUMMARY_METHOD}
        path={PROFILE_SUMMARY_PATH}
        status={card.status}
        tone={card.tone}
        body={card.body}
      />
    </div>
  );
}

export default HeroMedia;
