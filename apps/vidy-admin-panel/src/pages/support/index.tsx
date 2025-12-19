import Header from "@/components/Header";
import { DataTable } from "@repo/UI";
import { SUPPORT_NOTES_DATA } from "@repo/utilities";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const Support: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();
  // const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.SUPPORT";
  const showData = TableColumn.map((el) => el.id);

  // Functions
  // const handleRowClick = () => {
  //   navigate(
  //     generateRoutePath({
  //       url: CONSTANTS.VIDY_ADMIN_PATHS.SUPPORT_TOOLS_OR_NOTES,
  //       params: {
  //         id: String(1),
  //       },
  //     })
  //   );
  // };

  return (
    <div className={styles.code}>
      <Header heading={t(`${translationKey}.heading`)} />

      <DataTable
        headCells={TableColumn as any}
        rows={SUPPORT_NOTES_DATA as []}
        // onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`support-${index}`} row={row} el={el} />
          ))
        }
      />
    </div>
  );
};
