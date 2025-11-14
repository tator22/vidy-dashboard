import { Button, Input, ProfilePhoto, Text, Textarea } from "@repo/ui";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const Settings = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SETTINGS";

  return (
    <div className={styles.settings}>
      <Text
        tag="h6"
        containerProps={{
          className: styles.heading,
        }}
      >
        {t(`${translationKey}.profile_picture`)}
      </Text>

      <div className={styles.profileSection}>
        <ProfilePhoto size={"11rem"} />
        <div className={styles.info}>
          <Text
            tag="p"
            containerProps={{
              className: styles.profileInfo,
            }}
          >
            It's recommended to use a picture that's at least 98 x 98 pixels and
            4MB or less. Use a PNG file. Make sure your picture follows the
            AgShorts Community Guidelines.
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

      <form className={styles.form}>
        <Input
          label={t(`${translationKey}.profile_picture_link`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.enter_profile_picture_link`),
          }}
        />
        <Input
          label={t(`${translationKey}.code_name`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.enter_code_name`),
          }}
        />
        <Textarea
          label={t(`${translationKey}.description`)}
          placeholder={t(`${translationKey}.enter_description`)}
        />

        <div className={styles.buttonGroup}>
          <Button
            text={t(`${translationKey}.save`)}
            size="medium"
            buttonProps={{
              className: styles.saveButton,
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
