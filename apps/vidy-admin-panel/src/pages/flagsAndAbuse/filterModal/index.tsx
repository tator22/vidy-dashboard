import { Dropdown, Modal } from "@repo/UI";
import { useTranslation } from "react-i18next";
import classes from "./style.module.css";

const FilterModal = ({
  onClose,
  isOpen,
}: {
  onClose: (e: any) => void;
  isOpen: boolean;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.FLAGS_AND_ABUSE";
  const STATUS_OPTIONS = [
    {
      display: "Open",
      value: "open",
    },
    {
      display: "Under Review",
      value: "under-review",
    },
    {
      display: "Resolved",
      value: "resolved",
    },
  ];

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title={t(`${translationKey}.filters`)}
      primaryButtonText={t(`${translationKey}.apply`)}
      secondaryButtonText={t(`${translationKey}.cancel`)}
      secondaryButtonProps={{
        onClick: onClose,
      }}
      primaryButtonProps={{
        onClick: onClose,
      }}
    >
      <div className={classes.inputBox}>
        <Dropdown
          label={t(`${translationKey}.status`)}
          displayKey="display"
          valueKey="value"
          data={STATUS_OPTIONS}
          setSelectedValue={(value) => console.log(value)}
        />
      </div>
    </Modal>
  );
};

export default FilterModal;
