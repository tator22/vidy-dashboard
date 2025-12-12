import { ASSET_PATHS } from "@repo/assets";
import {
  Button,
  Image,
  Input,
  Label,
  Radio,
  Separator,
  Text,
  Textarea,
} from "@repo/UI";
import {
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const Upload = () => {
  // Hooks
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  // Variables
  const translationKey = "MODALS.ADD_MEDIA";
  const colors = [
    {
      color: "#FFFFFF",
      background: "#0088FF",
    },
    {
      color: "#FFFFFF",
      background: "#FF383C",
    },
    {
      color: "#FFFFFF",
      background: "#FF8D28",
    },
    {
      color: "#FFFFFF",
      background: "#34C759",
    },
    {
      color: "#FFFFFF",
      background: "#FFCC00",
    },
    {
      color: "#FFFFFF",
      background: "#CB30E0",
    },
    {
      color: "#000000",
      background: "#FFFFFF",
    },
    {
      color: "#FFFFFF",
      background: "#000000",
    },
  ];

  // Local State
  const [selectedMedia, setSelectedMedia] = useState<File | null>(null);
  const [callToAction, setCallToAction] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "sms_message" | "call" | "web_link" | null
  >(null);

  // Functions
  const handleMediaChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setSelectedMedia(file);
      }
    },
    []
  );

  const mediaURL = useMemo(() => {
    if (!selectedMedia) return null;
    const url = URL.createObjectURL(selectedMedia);
    return url;
  }, [selectedMedia]);

  useEffect(() => {
    return () => {
      if (mediaURL) URL.revokeObjectURL(mediaURL);
    };
  }, [mediaURL]);

  return (
    <>
      {selectedMedia ? (
        <div className={styles.mediaForm}>
          <section className={styles.form}>
            <Input
              label={t(`${translationKey}.input_title`)}
              inputProps={{
                placeholder: t(`${translationKey}.input_title`),
                required: true,
              }}
            />
            <Textarea
              label={t(`${translationKey}.caption`)}
              placeholder={t(`${translationKey}.write_your_caption`)}
              maxLength={2000}
              showCounter
            />

            <div className={styles.engagementGroup}>
              <Label text={t(`${translationKey}.engagement_boost`)} />

              <div className={styles.engagementInputGroup}>
                <VanityInput type="LIKE" />
                <VanityInput type="SHARE" />
                {/* <VanityInput type="COMMENT" /> */}
              </div>
            </div>

            <Separator direction="horizontal" />

            <Label
              text={t(`${translationKey}.call_to_action`)}
              isSwitch
              inputProps={{
                onChange: (event) => setCallToAction(event.target.checked),
                checked: callToAction,
              }}
            />

            {/* <Textarea placeholder={t(`${translationKey}.write_your_message`)} /> */}

            {/* <Input
              label={t(`${translationKey}.call_to_action_button_url`)}
              inputProps={{
                placeholder: t(`${translationKey}.enter_cta_url`),
                required: true,
              }}
            /> */}

            {callToAction ? (
              <>
                <div className={styles.radioGroup}>
                  <Radio
                    label={t(`${translationKey}.radio_label_1`)}
                    inputProps={{
                      required: true,
                      checked: selectedAction === "sms_message",
                      onChange: () => {
                        setSelectedAction("sms_message");
                      },
                    }}
                  />
                  <Radio
                    label={t(`${translationKey}.radio_label_2`)}
                    inputProps={{
                      required: true,
                      checked: selectedAction === "call",
                      onChange: () => {
                        setSelectedAction("call");
                      },
                    }}
                  />
                  <Radio
                    label={t(`${translationKey}.radio_label_3`)}
                    inputProps={{
                      required: true,
                      checked: selectedAction === "web_link",
                      onChange: () => {
                        setSelectedAction("web_link");
                      },
                    }}
                  />
                </div>

                {selectedAction === "sms_message" ? (
                  <>
                    <Input
                      label={t(`${translationKey}.sms_number`)}
                      inputProps={{
                        placeholder: t(
                          `${translationKey}.sms_number_placeholder`
                        ),
                        required: true,
                      }}
                    />
                    <Textarea
                      label={t(`${translationKey}.message`)}
                      placeholder={t(`${translationKey}.message`)}
                    />
                  </>
                ) : null}

                {selectedAction === "call" ? (
                  <Input
                    label={t(`${translationKey}.call_number`)}
                    inputProps={{
                      placeholder: t(
                        `${translationKey}.call_number_placeholder`
                      ),
                      required: true,
                    }}
                  />
                ) : null}

                {selectedAction === "web_link" ? (
                  <Input
                    label={t(`${translationKey}.web_link`)}
                    inputProps={{
                      placeholder: t(`${translationKey}.web_link_placeholder`),
                      required: true,
                    }}
                  />
                ) : null}

                <Input
                  label={t(`${translationKey}.call_to_action_button_text`)}
                  inputProps={{
                    placeholder: t(`${translationKey}.enter_the_text_for_cta`),
                    required: true,
                  }}
                />

                <div className={styles.actionButtonColorGroup}>
                  <Label
                    text={t(`${translationKey}.call_to_action_button_color`)}
                  />
                  <div className={styles.buttonGroup}>
                    {colors.map((color, index) => {
                      return (
                        <Button
                          key={index}
                          text={t(`${translationKey}.call_to_action`)}
                          size="small"
                          buttonProps={{
                            style: {
                              backgroundColor: color.background,
                              color: color.color,
                              borderRadius: "0.8rem",
                              border: "0.1rem solid #8d99ae20",
                            },
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            ) : null}
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
  );
};

export default Upload;

type VanityInputProps = HTMLAttributes<HTMLInputElement> & {
  type: "LIKE" | "SHARE" | "COMMENT";
};

export const VanityInput = ({ type, ...props }: VanityInputProps) => {
  return (
    <div className={styles.iconAndInput}>
      <Image
        containerProps={{
          className: styles.iconContainer,
        }}
        imageProps={{
          src: ASSET_PATHS.SVGS[type],
          className: styles.icon,
        }}
      />
      <input
        type="number"
        placeholder="00"
        className={styles.vanityInput}
        {...props}
      />
    </div>
  );
};
