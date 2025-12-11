import { Button, Input } from "@repo/ui";
import { FC } from "react";
import classes from "./style.module.css";
import { useTranslation } from "react-i18next";

export const Webhook: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SYSTEM_SETTING";

  return (
    <div className={classes.webhook}>
      <div className={classes.inputGroup}>
        <Input
          label={t(`${translationKey}.label_1`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.placeholder`),
          }}
        />
        <Input
          label={t(`${translationKey}.label_2`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.placeholder`),
          }}
        />
      </div>

      <div className={classes.buttonGroup}>
        <Button text={t(`${translationKey}.save`)} size="medium" />
      </div>
    </div>
  );
};
