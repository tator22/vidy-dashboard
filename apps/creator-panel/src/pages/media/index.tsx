import { MEDIA_CARD_DATA } from "@repo/utilities";
import styles from "./style.module.css";
import MediaCard from "@/components/Cards/mediaCard";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import { Searchbar } from "@/layout/searchbar";
import { useState } from "react";
import AddMediaModal from "./AddMedia";

const Media = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.MEDIA";

  // Local State
  const [enableAddMediaModal, setEnableAddMediaModal] = useState(false);

  return (
    <div className={styles.mediaSection}>
      <Header
        isButton
        heading={t(`${translationKey}.heading`)}
        buttonTitle={t(`${translationKey}.new_cta`)}
        onButtonClick={() => setEnableAddMediaModal(true)}
        rightChildren={
          <Searchbar
            containerClassName={styles.searchInputContainer}
            inputProps={{
              placeholder: t(`${translationKey}.search_media`),
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

      {enableAddMediaModal && (
        <AddMediaModal
          isOpen={enableAddMediaModal}
          onClose={() => {
            setEnableAddMediaModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Media;
