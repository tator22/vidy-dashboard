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
  const translationKey = "PAGES.FLAGS_AND_ABUSE";

  // Table Columns
  if (el === "account") {
    return (
      <td
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {row.account}
      </td>
    );
  }

  // Flag Type
  else if (el === "flag_type") {
    return (
      <td
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {row.flag_type}
      </td>
    );
  }

  // Created At
  else if (el === "created_at") {
    return (
      <td
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {moment(row.created_at).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Last Updated
  else if (el === "last_updated") {
    return (
      <td
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {moment(row.last_updated).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Actions
  else if (el === "actions") {
    return (
      <td>
        <TableAction>
          <TableActionMenuItemRender
            isDelete
            name={t(`${translationKey}.suspend_account`)}
            icon={ASSET_PATHS.SVGS.SUSPEND_ACCOUNT}
          />
          <TableActionMenuItemRender
            name={t(`${translationKey}.disable_specific_campaign`)}
            icon={ASSET_PATHS.SVGS.DISABLE}
          />
          <TableActionMenuItemRender
            name={t(`${translationKey}.add_admin_note`)}
            icon={ASSET_PATHS.SVGS.PLUS}
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
