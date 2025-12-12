import { ASSET_PATHS } from "@repo/assets";
import { Button, Image, Input, Label, Modal, Separator, Text } from "@repo/UI";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const AddMediaModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Hooks
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  // Variables
  const translationKey = "MODALS.ADD_MEDIA_TAB";

  // Local State
  const [selectedMedia, setSelectedMedia] = useState<File | null>(null);

  // Functions
  const mediaURL = useMemo(() => {
    if (!selectedMedia) return null;
    const url = URL.createObjectURL(selectedMedia);
    return url;
  }, [selectedMedia]);

  const handleMediaChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setSelectedMedia(file);
      }
    },
    []
  );

  // Effects
  useEffect(() => {
    return () => {
      if (mediaURL) URL.revokeObjectURL(mediaURL);
    };
  }, [mediaURL]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(`${translationKey}.title`)}
      contentContainerStyle={{
        padding: "0rem",
        paddingBottom: "3rem",
      }}
      primaryButtonText={selectedMedia ? t(`${translationKey}.save`) : ""}
      primaryButtonProps={{
        className: styles.modalButton,
      }}
    >
      <>
        {selectedMedia ? (
          <div className={styles.mediaForm}>
            <section className={styles.form}>
              <Input
                label={t(`${translationKey}.name`)}
                inputProps={{
                  placeholder: t(`${translationKey}.enter_name`),
                  required: true,
                }}
              />
              <Input
                label={t(`${translationKey}.tags`)}
                inputProps={{
                  placeholder: t(`${translationKey}.add_tag`),
                  required: true,
                }}
              />

              <div className={styles.renderTags}>
                {["Noticias", "Economía", "Turismo"].map((item, index) => {
                  return <Tag text={item} key={index} />;
                })}
              </div>
            </section>
            <Separator
              direction="vertical"
              containerProps={{
                style: {
                  marginInline: "2rem",
                },
              }}
            />

            <section className={styles.mediaPreview}>
              <Label text={t(`${translationKey}.preview`)} />

              <div
                className={styles.videoContainer}
                onClick={() => window.open(mediaURL as string, "_blank")}
              >
                <video src={mediaURL as string} className={styles.video} />

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
            </section>
          </div>
        ) : (
          <div className={styles.upload}>
            <Image
              imageProps={{
                src: ASSET_PATHS.SVGS.UPLOAD,
                className: styles.uploadIcon,
              }}
            />

            <div className={styles.uploadGroup}>
              <Text
                tag="h6"
                children={t(`${translationKey}.upload_heading`)}
                containerProps={{ className: styles.uploadHeading }}
              />
              <Text
                tag="p"
                children={t(`${translationKey}.upload_description`)}
                containerProps={{ className: styles.uploadDescription }}
              />
            </div>

            <input
              type="file"
              style={{ display: "none" }}
              id="media-file"
              aria-label="input"
              ref={inputRef}
              accept="video/*"
              onChange={handleMediaChange}
            />
            <Button
              text={t(`${translationKey}.cta`)}
              size="medium"
              buttonProps={{
                onClick: () => inputRef.current?.click(),
                style: {
                  borderRadius: "1rem",
                },
              }}
            />
          </div>
        )}
      </>
    </Modal>
  );
};

export default AddMediaModal;

const Tag = ({ text }: { text: string }) => {
  return (
    <Text
      tag="p"
      containerProps={{
        className: styles.tag,
      }}
    >
      {text}
      <Image
        containerProps={{
          className: styles.iconBox,
        }}
        imageProps={{
          src: ASSET_PATHS.SVGS.PLUS,
          className: styles.icon,
        }}
      />
    </Text>
  );
};
