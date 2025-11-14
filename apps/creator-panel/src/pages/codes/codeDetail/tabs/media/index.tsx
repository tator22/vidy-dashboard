import RenderEngagement from "@/components/RenderEngagement";
import { ASSET_PATHS } from "@repo/assets";
import { Button, Image, Text } from "@repo/ui";
import { mediaCards } from "@repo/utilities";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const Media = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.CODE_DETAIL";

  return (
    <div className={styles.mediaComponent}>
      <div className={styles.media}>
        {mediaCards.map((item, index) => (
          <MediaCard
            key={index}
            description={item.description}
            likes={item.likes}
            shares={item.shares}
            thumbnail={item.image}
            message={item.message}
            title={item.title}
            label={item.label}
            buttonText={item.button.text}
            buttonColor={item.button.color}
          />
        ))}
      </div>

      <div className={styles.mediaSectionFooter}>
        <Text
          tag="p"
          children={t(`${translationKey}.tab_to_edit_media`)}
          containerProps={{
            className: styles.mediaFooterText,
          }}
        />

        <div className={styles.moveIconReference}>
          <Text
            tag="p"
            children={t(`${translationKey}.drag`)}
            containerProps={{
              className: styles.mediaFooterText,
            }}
          />
          <Image
            containerProps={{
              className: styles.iconBox,
            }}
            imageProps={{
              src: ASSET_PATHS.SVGS.MOVE,
              className: styles.icon,
            }}
          />
          <Text
            tag="p"
            children={t(`${translationKey}.to_move`)}
            containerProps={{
              className: styles.mediaFooterText,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Media;

export const ActionIcon = ({ icon }: { icon: string }) => {
  return (
    <Image
      containerProps={{
        className: styles.actionIconContainer,
      }}
      imageProps={{
        src: icon,
        className: styles.actionIcon,
      }}
    />
  );
};

export const MediaCard = ({
  thumbnail,
  title,
  description,
  likes,
  message,
  shares,
  label,
  buttonText,
  buttonColor,
}: {
  thumbnail: string;
  title: string;
  description: string;
  likes: number;
  message: string;
  shares: number;
  label: string;
  buttonText: string;
  buttonColor: string;
}) => {
  return (
    <div className={styles.mediaCard}>
      <div className={styles.moveIconAndCard}>
        <Image
          containerProps={{
            className: styles.moveIconContainer,
          }}
          imageProps={{
            src: ASSET_PATHS.SVGS.MOVE,
            className: styles.moveIcon,
          }}
        />
      </div>

      <div className={styles.mainCard}>
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
              src: ASSET_PATHS.SVGS.PLAY,
              className: styles.playIcon,
            }}
          />
        </div>

        <div className={styles.infoSection}>
          <div className={styles.textSection}>
            <div className={styles.text}>
              <Text
                tag="h6"
                children={title}
                containerProps={{
                  className: styles.title,
                }}
                maximumNumberOfLines={1}
              />
              <Text
                tag="p"
                children={description}
                containerProps={{
                  className: styles.description,
                }}
                maximumNumberOfLines={2}
              />
            </div>

            <div className={styles.actionContainer}>
              <ActionIcon icon={ASSET_PATHS.SVGS.ACTION_EDIT} />
              <ActionIcon icon={ASSET_PATHS.SVGS.ACTION_DELETE} />
            </div>
          </div>

          <div className={styles.engagementSection}>
            <RenderEngagement
              likes={likes}
              shares={shares}
              engagementRowClassName={styles.engagementRowClass}
            />
            <RenderEngagement
              likes={likes}
              shares={shares}
              engagementRowClassName={styles.engagementRowTwo}
            />
          </div>

          <div className={styles.smsSection}>
            <Text
              tag="h6"
              children={`${label}:`}
              containerProps={{
                className: styles.messageHeading,
              }}
              maximumNumberOfLines={1}
            />
            <Text
              tag="p"
              children={message}
              containerProps={{
                className: styles.message,
              }}
              maximumNumberOfLines={2}
            />
          </div>

          <Button
            variant="primary"
            text={buttonText}
            buttonProps={{
              className: styles.button,
              style: {
                backgroundColor: buttonColor,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
