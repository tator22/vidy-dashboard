import {
  FlipDirection,
  FrameShapeType,
  QRDataType,
} from "@/components/CustomQRCode/types";
import { ASSET_PATHS } from "@repo/assets";
import { Button, Image, Input, Separator, Switch, Text } from "@repo/ui";
import { CONSTANTS } from "@repo/utilities";
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

export interface QRShapeElementType {
  name: FrameShapeType;
  icon: string;
  frameFlips: {
    topLeft: FlipDirection[];
    topRight: FlipDirection[];
    bottomLeft: FlipDirection[];
  };
  ballFlips: {
    topLeft: FlipDirection[];
    topRight: FlipDirection[];
    bottomLeft: FlipDirection[];
  };
}

const QRCode = ({
  setSelectedQR,
  selectedQR,
}: {
  setSelectedQR: Dispatch<SetStateAction<QRDataType>>;
  selectedQR: QRDataType;
}) => {
  // Hooks
  const { t } = useTranslation();
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  // Variables
  const translationKey = "PAGES.QR";
  const borderWidthWithFrame = 55;

  // Local State
  const [enableAddFrameSection, setEnableAddFrameSection] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);

  // Functions
  const handleClearLogo = () => {
    setSelectedLogo(null);
    setSelectedQR((prev) => ({
      ...prev,
      config: {
        ...prev.config,
        logo: "",
      },
    }));
  };

  const handleSelectLogo = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedLogo(file);
    setSelectedQR((prev) => ({
      ...prev,
      config: {
        ...prev.config,
        logo: URL.createObjectURL(file as File),
      },
    }));
  };

  const handleChooseShape = (type: "circle" | "square") => {
    setSelectedQR((prev) => ({
      ...prev,
      config: {
        ...prev.config,
        border: {
          ...prev.config.border,
          isBorder: true,
          frameType: type,
          borderColor: "#000000",
          borderWidthMultiplier: borderWidthWithFrame,
          borderRadius: type === "circle" ? "50%" : "7%",
        },
      },
    }));
  };

  const handleEnableFrame = (event: ChangeEvent<HTMLInputElement>) => {
    setEnableAddFrameSection(event.target.checked);
    setSelectedQR((prev) => ({
      ...prev,
      config: {
        ...prev.config,
        border: {
          ...prev.config.border,
          borderWidthMultiplier: borderWidthWithFrame,
          isAddFrame: event.target.checked,
        },
      },
    }));
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    target: string
  ) => {
    setSelectedQR((prev) => ({
      ...prev,
      config: {
        ...prev.config,
        [target]: event.target.value,
      },
    }));
  };

  return (
    <div className={styles.qrSectionRender}>
      <QrCodeSectionWrapper title={t(`${translationKey}.pick_a_color`)}>
        <div className={styles.renderColors}>
          {CONSTANTS.COLORS.map((item: string, index) => {
            return (
              <div
                key={`color-${index}`}
                className={styles.colorBox}
                style={{
                  backgroundColor: item,
                }}
                onClick={() =>
                  setSelectedQR((prev) => ({
                    ...prev,
                    config: {
                      ...prev.config,
                      bodyColor: item,
                      ballColors: {
                        bottomLeft: item,
                        topLeft: item,
                        topRight: item,
                      },
                      frameColors: {
                        bottomLeft: item,
                        topLeft: item,
                        topRight: item,
                      },
                    },
                  }))
                }
              />
            );
          })}
          <Image
            containerProps={{
              className: styles.colorPickerIconBox,
            }}
            imageProps={{
              src: ASSET_PATHS.SVGS.PLUS,
              className: styles.colorPickerIcon,
            }}
          />
        </div>
      </QrCodeSectionWrapper>
      <Separator />

      <QrCodeSectionWrapper title={t(`${translationKey}.logo`)}>
        {selectedLogo ? (
          <div className={styles.renderSelectedLogo}>
            <div className={styles.iconAndImageName}>
              <Image
                containerProps={{
                  className: styles.imageLogoContainer,
                }}
                imageProps={{
                  src: ASSET_PATHS.SVGS.IMAGE_ICON,
                  className: styles.imageIcon,
                }}
              />
              <Text
                maximumNumberOfLines={1}
                containerProps={{
                  className: styles.logoNameText,
                }}
              >
                {selectedLogo?.name}
              </Text>
            </div>

            <Image
              containerProps={{
                className: styles.deleteIconContainer,
                onClick: handleClearLogo,
              }}
              imageProps={{
                src: ASSET_PATHS.SVGS.LOGO_DELETE_ICON,
                className: styles.deleteIcon,
              }}
            />
          </div>
        ) : (
          <div className={styles.inputBox}>
            <Image
              imageProps={{
                src: ASSET_PATHS.SVGS.UPLOAD_QR_LOGO,
                className: styles.uploadLogo,
              }}
            />
            <input
              readOnly
              placeholder={t(`${translationKey}.select_logo_image`)}
              className={styles.fileInput}
              onClick={() => uploadInputRef.current?.click()}
            />
            <input
              type="file"
              style={{ display: "none" }}
              id="media-file"
              aria-label="input"
              accept="image/png, image/jpeg, image/svg+xml"
              ref={uploadInputRef}
              onChange={handleSelectLogo}
            />
            <Button
              size="medium"
              text={t(`${translationKey}.upload`)}
              variant="secondary"
              buttonProps={{
                className: styles.uploadButton,
                onClick: () => uploadInputRef.current?.click(),
              }}
            />
          </div>
        )}

        <Text
          containerProps={{
            className: styles.logoNote,
          }}
        >
          {t(`${translationKey}.logo_note`)}
        </Text>
      </QrCodeSectionWrapper>
      <Separator />

      <QrCodeSectionWrapper title={t(`${translationKey}.add_frame`)}>
        <div className={styles.switchBox}>
          <Text
            tag="p"
            containerProps={{
              className: styles.switchLabel,
            }}
          >
            {enableAddFrameSection ? "On" : "Off"}
          </Text>
          <Switch
            inputProps={{
              checked: enableAddFrameSection,
              onChange: handleEnableFrame,
            }}
          />
        </div>
      </QrCodeSectionWrapper>
      <Separator />

      {enableAddFrameSection ? (
        <>
          <QrCodeSectionWrapper title={t(`${translationKey}.add_text`)}>
            <div className={styles.inputGroup}>
              <Input
                label={t(`${translationKey}.top_text`)}
                showCounter
                inputProps={{
                  value: selectedQR.config.topName,
                  required: true,
                  placeholder: t(`${translationKey}.scan_here`),
                  maxLength: 25,
                  onChange: (event) => handleChange(event, "topName"),
                }}
              />
              <Input
                label={t(`${translationKey}.bottom_text`)}
                showCounter
                inputProps={{
                  value: selectedQR.config.bottomName,
                  required: true,
                  placeholder: t(`${translationKey}.scan_here`),
                  maxLength: 25,
                  onChange: (event) => handleChange(event, "bottomName"),
                }}
              />
            </div>
          </QrCodeSectionWrapper>
          <Separator />
        </>
      ) : null}

      <QrCodeSectionWrapper title={t(`${translationKey}.choose_shape`)}>
        <div className={styles.renderShapes}>
          <Image
            containerProps={{
              className: styles.iconBox,
              onClick: () => handleChooseShape("square"),
            }}
            imageProps={{
              src: ASSET_PATHS.SVGS.SQUARE_SHAPE,
              className: styles.icon,
            }}
          />
          <Image
            containerProps={{
              className: styles.iconBox,
              onClick: () => handleChooseShape("circle"),
            }}
            imageProps={{
              src: ASSET_PATHS.SVGS.CIRCLE_SHAPE,
              className: styles.icon,
            }}
          />
        </div>
      </QrCodeSectionWrapper>
      <Separator />

      <div className={styles.qrCodeSectionSeparate}>
        <Text
          tag="h6"
          containerProps={{
            className: styles.qrCodeSectionTitle,
          }}
        >
          {t(`${translationKey}.remove_videocode_branding`)}
        </Text>
        <Switch uncheckIcon={ASSET_PATHS.SVGS.SWITCH_LOCK_ICON} />
      </div>
      <Separator />
    </div>
  );
};

export default QRCode;

const QrCodeSectionWrapper = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <section className={styles.qrCodeSection}>
      <Text
        tag="h6"
        containerProps={{
          className: styles.qrCodeSectionTitle,
        }}
      >
        {title}
      </Text>
      {children}
    </section>
  );
};
