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

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
