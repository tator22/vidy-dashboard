import StatusChip from "@/components/StatusChip";
import moment from "moment";
import { FC } from "react";
import { TableColumnId } from "./tableColumn";
import TableAction, {
  TableActionMenuItemRender,
} from "@/components/TableAction";
import { ASSET_PATHS } from "@repo/assets";
import { useTranslation } from "react-i18next";

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
  const translationKey = "PAGES.CAMPAIGNS";

  // Table Columns

  if (el === "created_at") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.created_at).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Last Active At
  else if (el === "campaign_name") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.campaign_name}</td>;
  }

  // Name
  else if (el === "account") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.account}</td>;
  }

  // Status
  else if (el === "status") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <StatusChip status={row?.status} />
      </td>
    );
  }

  // Action
  else if (el === "action") {
    return (
      <td>
        <TableAction isDelete>
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.ARCHIVE}
            name={t(`${translationKey}.archive`)}
          />
          <TableActionMenuItemRender
            icon={ASSET_PATHS.SVGS.DELETE}
            name={t(`${translationKey}.soft_delete`)}
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
