import { DataTable } from "@repo/ui";
import { PLAN_OVERVIEW } from "@repo/utilities";
import { FC, ReactNode } from "react";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const PlanOverview: FC = () => {
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
        rows={PLAN_OVERVIEW as []}
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
