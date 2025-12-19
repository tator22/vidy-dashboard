import { DataTable } from "@repo/UI";
import {
  CONSTANTS,
  generateRoutePath,
  STORAGE_BY_ACCOUNT,
} from "@repo/utilities";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const StorageByAccount: FC = () => {
  // Hooks
  const navigate = useNavigate();

  // Variables
  const showData = TableColumn.map((el) => el.id);

  const handleRowClick = () => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.VIDY_ADMIN_PATHS.USERS_AND_ACCOUNTS_DETAIL,
        params: {
          id: String(1),
        },
      })
    );
  };

  return (
    <div className={styles.code}>
      <DataTable
        headCells={TableColumn as any}
        rows={STORAGE_BY_ACCOUNT as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi
              key={`storage-by-account-${index}`}
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
