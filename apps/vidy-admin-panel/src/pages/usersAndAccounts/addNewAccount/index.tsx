import { Input, Modal } from "@repo/UI";
import { useTranslation } from "react-i18next";
import classes from "./style.module.css";

const AddNewAccount = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.USERS_AND_ACCOUNTS.ADD_NEW_ACCOUNT_MODAL";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(`${translationKey}.heading`)}
      primaryButtonText={t(`${translationKey}.cta`)}
      primaryButtonProps={{
        className: classes.primaryButton,
        onClick: onClose,
      }}
    >
      <div className={classes.inputGroup}>
        <Input
          label={t(`${translationKey}.name`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.name_placeholder`),
          }}
        />
        <Input
          label={t(`${translationKey}.email`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.email_placeholder`),
          }}
        />
        <Input
          label={t(`${translationKey}.password`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.password_placeholder`),
          }}
        />
        <Input
          label={t(`${translationKey}.limits`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.limits_placeholder`),
          }}
        />
        <Input
          label={t(`${translationKey}.custom_pricing`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.custom_pricing_placeholder`),
          }}
        />
      </div>
    </Modal>
  );
};

export default AddNewAccount;
