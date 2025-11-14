import MediaCard from "@/components/Cards/mediaCard";
import Header from "@/components/Header";
import { Searchbar } from "@/layout/searchbar";
import { MEDIA_CARD_DATA } from "@repo/utilities";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const VideoHelp = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.VIDEO_HELP";

  return (
    <div className={styles.mediaSection}>
      <Header
        heading={t(`${translationKey}.heading`)}
        rightChildren={
          <Searchbar
            containerClassName={styles.searchInputContainer}
            inputProps={{
              placeholder: t(`${translationKey}.search_topics`),
              className: styles.searchInput,
            }}
          />
        }
      />
      <div className={styles.renderMediaCards}>
        {MEDIA_CARD_DATA.map((item, index) => (
          <div className={styles.gridColumn}>
            <MediaCard {...item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoHelp;
