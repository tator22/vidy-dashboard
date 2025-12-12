import { DataTable } from "@repo/UI";
import { ACCOUNT_BILLING_SNAPSHOT } from "@repo/utilities";
import { FC, ReactNode } from "react";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const AccountBillingSnapshot: FC = () => {
  // Variables
  const showData = TableColumn.map((el) => el.id);

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
      <DataTable
        headCells={TableColumn as any}
        rows={ACCOUNT_BILLING_SNAPSHOT as []}
        // onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi
              key={`high-usage-account-${index}`}
              row={row}
              el={el}
            />
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
