import { Button, Label, RichTextEditor } from "@repo/UI";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./style.module.css";

export const PrivacyPolicy: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SYSTEM_SETTING";

  return (
    <div className={classes.privacyPolicy}>
      <Label text={t(`${translationKey}.privacy_policy`)} />
      <RichTextEditor />

      <Button
        text={t(`${translationKey}.save`)}
        buttonProps={{
          style: {
            alignSelf: "flex-end",
          },
        }}
      />
    </div>
  );
};
