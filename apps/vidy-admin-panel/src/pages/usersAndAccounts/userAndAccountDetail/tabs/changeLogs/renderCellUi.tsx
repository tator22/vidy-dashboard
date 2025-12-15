import StatusChip from "@/components/StatusChip";
import TableAction from "@/components/TableAction";
import { FC } from "react";
import { TableColumnId } from "./tableColumn";
import moment from "moment";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Table Columns

  // Date
  if (el === "date") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.date).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
