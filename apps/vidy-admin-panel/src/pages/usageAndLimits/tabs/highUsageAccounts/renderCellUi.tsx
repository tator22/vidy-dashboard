import TableAction from "@/components/TableAction";
import { FC } from "react";
import { TableColumnId } from "./tableColumn";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Table Columns

  if (el === "account_name") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.account_name}</td>;
  }

  // Action
  else if (el === "action") {
    return (
      <td>
        <TableAction />
      </td>
    );
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
