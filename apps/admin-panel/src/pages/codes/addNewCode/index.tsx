import { Input, Label, Modal, Textarea } from "@repo/ui";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { ASSET_PATHS } from "@repo/assets";

const AddNewCode = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.CODES";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(`${translationKey}.new_code`)}
      primaryButtonText={t(`${translationKey}.modal_cta`)}
      primaryButtonProps={{ className: styles.primaryButton, onClick: onClose }}
    >
      <div className={styles.addListing}>
        <Input
          label={t(`${translationKey}.name`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.enter_name`),
          }}
        />
        <Textarea
          label={t(`${translationKey}.detail`)}
          placeholder={t(`${translationKey}.enter_detail`)}
        />

        <div className={styles?.listingUrl}>
          <Label text={t(`${translationKey}.link`)} />
          <div className={styles?.input}>
            <Input
              inputProps={{
                required: true,
                placeholder: t(`${translationKey}.enter_listing_url`),
                value: "videoleads.com/",
                contentEditable: false,
                readOnly: true,
                className: styles?.prefix,
              }}
              containerProps={{
                className: styles?.prefixInput,
              }}
            />
            <Input
              inputProps={{
                required: true,
              }}
              helperText={t(`${translationKey}.link_warning`)}
              helperTextIcon={ASSET_PATHS.SVGS.WARNING}
            />
          </div>
        </div>

        {/* <div className={styles.listingType}>
          <Label text={t(`${translationKey}.listing_type`)} />
          
          <div className={styles.renderCheckbox}>
          <CheckBox
              inputProps={{
                checked: true,
                required: true,
              }}
              label={t(`${translationKey}.multiple_listing`)}
            />
            <CheckBox
              label={t(`${translationKey}.individual_listing`)}
              inputProps={{
                required: true,
              }}
            />
          </div>
        </div> */}
      </div>
    </Modal>
  );
};

export default AddNewCode;
