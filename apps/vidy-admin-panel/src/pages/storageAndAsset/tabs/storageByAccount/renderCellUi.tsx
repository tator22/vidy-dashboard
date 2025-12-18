import TableAction, {
  TableActionMenuItemRender,
} from "@/components/TableAction";
import { ASSET_PATHS } from "@repo/assets";
import moment from "moment";
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

  // Total hits across platforms
  if (el === "oldest_media_date") {
    return <td>{moment(row.oldest_media_date).format("DD, MMMM YYYY")}</td>;
  } else if (el === "actions") {
    return (
      <td>
        <TableAction>
          <TableActionMenuItemRender
            name={t(`${translationKey}.enable_automated_cleanup`)}
            icon={ASSET_PATHS.SVGS.SYSTEM_SETTING_OUTLINE}
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
