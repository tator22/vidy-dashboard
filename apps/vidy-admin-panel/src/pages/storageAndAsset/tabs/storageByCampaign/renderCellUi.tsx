import TableAction, {
  TableActionMenuItemRender,
} from "@/components/TableAction";
import { ASSET_PATHS } from "@repo/assets";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TableColumnId } from "./tableColumn";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.STORAGE_AND_ASSETS";

  // Table Columns
  if (el === "actions") {
    return (
      <td>
        <TableAction>
          <TableActionMenuItemRender
            name={t(`${translationKey}.purge_old_media`)}
            icon={ASSET_PATHS.SVGS.PURGE}
          />
        </TableAction>
      </td>
    );
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
