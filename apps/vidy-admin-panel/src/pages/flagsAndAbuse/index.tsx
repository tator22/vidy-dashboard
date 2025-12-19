import Header from "@/components/Header";
import { Button, DataTable } from "@repo/UI";
import { CONSTANTS, FLAGS_AND_ABUSE, generateRoutePath } from "@repo/utilities";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import FilterModal from "./filterModal";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const FlagsAndAbuse: FC = () => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const showData = TableColumn.map((el) => el.id);
  const translationKey = "PAGES.FLAGS_AND_ABUSE";

  // States
  const [enableFilter, setEnableFilter] = useState(false);

  // Functions
  const handleRowClick = () => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.VIDY_ADMIN_PATHS.CAMPAIGN_DETAIL,
        params: {
          id: String(1),
        },
      })
    );
  };

  const handleEnableFilter = () => {
    setEnableFilter((prev) => !prev);
  };

  return (
    <div className={styles.code}>
      <Header
        heading={t(`${translationKey}.heading`)}
        rightChildren={
          <Button
            text={t(`${translationKey}.filter`)}
            size="medium"
            variant="secondary"
            buttonProps={{
              onClick: handleEnableFilter,
            }}
          />
        }
      />

      <DataTable
        headCells={TableColumn as any}
        rows={FLAGS_AND_ABUSE as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`flag-&-abuse-${index}`} row={row} el={el} />
          ))
        }
      />

      {enableFilter ? (
        <FilterModal onClose={handleEnableFilter} isOpen={enableFilter} />
      ) : null}

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
