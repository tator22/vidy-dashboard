import MediaCard from "@/components/Cards/mediaCard";
import { MEDIA_FILES } from "@repo/utilities";
import styles from "./style.module.css";

const Media = () => {
  return (
    <div className={styles.mediaSection}>
      <div className={styles.renderMediaCards}>
        {MEDIA_FILES.map((item, index) => (
          <div className={styles.gridColumn}>
            <MediaCard {...item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
