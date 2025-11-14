import Header from "@/components/Header";
import WalkthroughVideoButton from "@/components/WalkthroughVideoButton";
import { DataTable } from "@repo/ui";
import {
  CONSTANTS,
  generateRoutePath,
  LISTING_DUMMY_DATA,
} from "@repo/utilities";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import AddNewCode from "./addNewCode";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const Codes: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.CODES";
  const showData = TableColumn.map((el) => el.id);

  // Local State
  const [enableAddCodeModal, setEnableAddCodeModal] = useState(false);

  // Functions
  const handleEnableAddCodeModal = () => {
    setEnableAddCodeModal(!enableAddCodeModal);
  };

  const handleRowClick = () => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.PATHS.LISTING_DETAIL,
        params: {
          id: String(1),
        },
      })
    );
  };

  return (
    <div className={styles.code}>
      <Header
        heading={t(`${translationKey}.heading`)}
        isButton
        buttonTitle={t(`${translationKey}.new_cta`)}
        onButtonClick={handleEnableAddCodeModal}
        rightChildren={
          <WalkthroughVideoButton text={t(`${translationKey}.cta`)} />
        }
      />

      <DataTable
        headCells={TableColumn as any}
        rows={LISTING_DUMMY_DATA as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`listing-${index}`} row={row} el={el} />
          ))
        }
      />

      {/* Modal */}
      {enableAddCodeModal && (
        <AddNewCode
          isOpen={enableAddCodeModal}
          onClose={handleEnableAddCodeModal}
        />
      )}
    </div>
  );
};
