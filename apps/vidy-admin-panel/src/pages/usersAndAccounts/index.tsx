import Header from "@/components/Header";
import { DataTable } from "@repo/UI";
import {
  CONSTANTS,
  generateRoutePath,
  USERS_AND_ACCOUNTS,
} from "@repo/utilities";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import AddNewAccount from "./addNewAccount";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const UsersAndAccounts: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.USERS_AND_ACCOUNTS";
  const showData = TableColumn.map((el) => el.id);

  // Local State
  const [enableAddAccountModal, setEnableAddAccountModal] = useState(false);

  // Functions
  const handleEnableAddCodeModal = () => {
    setEnableAddAccountModal((prev) => !prev);
  };

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
      <Header
        isButton
        heading={t(`${translationKey}.heading`)}
        buttonTitle={t(`${translationKey}.new_cta`)}
        onButtonClick={handleEnableAddCodeModal}
      />

      <DataTable
        headCells={TableColumn as any}
        rows={USERS_AND_ACCOUNTS as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi
              key={`user-and-account-${index}`}
              row={row}
              el={el}
            />
          ))
        }
      />

      {/* Modal */}
      {enableAddAccountModal && (
        <AddNewAccount
          isOpen={enableAddAccountModal}
          onClose={handleEnableAddCodeModal}
        />
      )}
    </div>
  );
};
