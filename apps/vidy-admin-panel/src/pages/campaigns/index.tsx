import Header from "@/components/Header";
import { DataTable } from "@repo/UI";
import { CAMPAIGNS } from "@repo/utilities";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const Campaigns: FC = () => {
  // Hooks
  const { t } = useTranslation();
  // const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.CAMPAIGNS";
  const showData = TableColumn.map((el) => el.id);

  // Local State
  const [enableAddCodeModal, setEnableAddCodeModal] = useState(false);

  // Functions
  const handleEnableAddCodeModal = () => {
    setEnableAddCodeModal(!enableAddCodeModal);
  };

  // const handleRowClick = () => {
  //   navigate(
  //     generateRoutePath({
  //       url: CONSTANTS.PATHS.LISTING_DETAIL,
  //       params: {
  //         id: String(1),
  //       },
  //     })
  //   );
  // };

  return (
    <div className={styles.code}>
      <Header
        heading={t(`${translationKey}.heading`)}
        onButtonClick={handleEnableAddCodeModal}
      />

      <DataTable
        headCells={TableColumn as any}
        rows={CAMPAIGNS as []}
        // onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`campaign-${index}`} row={row} el={el} />
          ))
        }
      />

      {/* Modal */}
      {/* {enableAddCodeModal && (
        <AddNewCode
          isOpen={enableAddCodeModal}
          onClose={handleEnableAddCodeModal}
        />
      )} */}
    </div>
  );
};
