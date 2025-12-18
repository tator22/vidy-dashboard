import { ASSET_PATHS } from "@repo/assets";
import { Image, Text } from "@repo/UI";
import styles from "./style.module.css";
import moment from "moment";

const MediaCard = ({
  thumbnail,
  mediaId,
  type,
  fileSize,
  uploadedAt,
}: {
  thumbnail: string;
  mediaId: string;
  type: string;
  fileSize?: string;
  uploadedAt?: string;
}) => {
  return (
    <div className={styles.mediaCard}>
      <div className={styles.videoContainer}>
        <Image
          imageProps={{
            className: styles.thumbnail,
            src: thumbnail,
          }}
        />

        <Image
          containerProps={{
            className: styles.playIconContainer,
          }}
          imageProps={{
            src:
              type === "image"
                ? ASSET_PATHS.SVGS.IMAGE_ICON
                : ASSET_PATHS.SVGS.PLAY,
            className: styles.playIcon,
          }}
        />
      </div>

      <Text
        tag="h6"
        children={mediaId}
        containerProps={{ className: styles.title }}
      />

      <Text>{`${fileSize} • ${moment(uploadedAt).format("DD, MMMM YYYY")}`}</Text>
    </div>
  );
};

export default MediaCard;
