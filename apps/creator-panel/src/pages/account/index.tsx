import Header from "@/components/Header";
import { ASSET_PATHS } from "@repo/assets";
import {
  Button,
  Image,
  Input,
  Label,
  ProfilePhoto,
  Separator,
  Text,
} from "@repo/UI";
import clsx from "clsx";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { useWindowSize } from "@uidotdev/usehooks";

const Account = () => {
  // Hooks
  const { t } = useTranslation();
  const { width } = useWindowSize();

  // Variables
  const translationKey = "PAGES.ACCOUNT";
  const isMobile = width && width <= 550;

  return (
    <div className={styles.account}>
      <Header
        heading={t(`${translationKey}.heading`)}
        style={{
          padding: "2.2rem 3rem",
        }}
        rightChildren={
          <div className={styles.headerButtonGroup}>
            <Button
              text={t(`${translationKey}.cancel`)}
              size="medium"
              variant="secondary"
              buttonProps={{
                className: styles.headerActionButton,
              }}
            />
            <Button
              text={t(`${translationKey}.save`)}
              size="medium"
              buttonProps={{
                className: styles.headerActionButton,
              }}
            />
          </div>
        }
      />

      <section className={clsx(styles.storageSection, styles.sectionWidth)}>
        <Image
          containerProps={{
            className: styles.iconContainer,
          }}
          imageProps={{
            src: ASSET_PATHS.SVGS.STORAGE,
            className: styles.icon,
          }}
        />
        <div className={styles.storageCounter}>
          <div className={styles.storageCount}>
            <span className={styles.storage}>
              {t(`${translationKey}.storage`)}
            </span>
            <span className={styles.storage}>2.3GB/5GB</span>
          </div>
          <div className={styles.storageSlider} />
        </div>
        <Button
          text={t(`${translationKey}.add_more`)}
          size="medium"
          buttonProps={{
            className: styles.addMoreStorageButton,
          }}
        />
      </section>
      <Separator />

      <section className={clsx(styles.profileWrapper, styles.sectionWidth)}>
        <AccountLabel text={t(`${translationKey}.picture`)} />
        <div className={styles.profileSection}>
          <ProfilePhoto size={isMobile ? "8rem" : "11rem"} />
          <div className={styles.info}>
            <Text
              tag="p"
              containerProps={{
                className: styles.profileInfo,
              }}
            >
              It's recommended to use a picture that's at least 98 x 98 pixels
              and 4MB or less. Use a PNG file. Make sure your picture follows
              the AgShorts Community Guidelines.
            </Text>
            <div className={styles.buttonGroup}>
              <Button
                variant="secondary"
                text={t(`${translationKey}.change`)}
                size="small"
              />
              <Button
                variant="secondary"
                text={t(`${translationKey}.remove`)}
                size="small"
              />
            </div>
          </div>
        </div>
      </section>
      <Separator />

      <section className={clsx(styles.nameSection, styles.sectionWidth)}>
        <AccountLabel
          text={t(`${translationKey}.name`)}
          subLabel={t(`${translationKey}.sub_name_label`)}
          style={{
            marginBottom: "1.2rem",
          }}
        />
        <Input
          inputProps={{
            placeholder: t(`${translationKey}.enter_name`),
          }}
        />
      </section>
      <Separator />

      <section className={clsx(styles.nameSection, styles.sectionWidth)}>
        <AccountLabel
          text={t(`${translationKey}.email`)}
          subLabel={t(`${translationKey}.sub_email_label`)}
          style={{
            marginBottom: "1.2rem",
          }}
        />
        <Input
          inputProps={{
            placeholder: t(`${translationKey}.enter_email`),
          }}
        />
      </section>
      <Separator />

      <section className={clsx(styles.passwordSection, styles.sectionWidth)}>
        <AccountLabel
          text={t(`${translationKey}.update_password`)}
          subLabel={t(`${translationKey}.sub_update_password_label`)}
          style={{
            marginBottom: "1.2rem",
          }}
        />

        <div className={styles.inputGroup}>
          <Input
            inputProps={{
              placeholder: t(`${translationKey}.old_password`),
            }}
          />
          <Input
            inputProps={{
              placeholder: t(`${translationKey}.new_password`),
            }}
          />
          <Input
            inputProps={{
              placeholder: t(`${translationKey}.confirm_password`),
            }}
          />
        </div>
      </section>
      <Separator />
    </div>
  );
};

export default Account;

const AccountLabel = ({
  text,
  subLabel,
  style,
}: {
  text: string;
  subLabel?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={styles.labelAndSubLabel}
      style={{
        ...style,
      }}
    >
      <Label
        text={text}
        containerProps={{
          className: styles.label,
        }}
      />

      {subLabel && (
        <Text
          tag="p"
          containerProps={{
            className: styles.subLabel,
          }}
        >
          {subLabel}
        </Text>
      )}
    </div>
  );
};
