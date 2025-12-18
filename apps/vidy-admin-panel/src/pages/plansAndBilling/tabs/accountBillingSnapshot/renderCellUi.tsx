import moment from "moment";
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

  // Expiration Date
  if (el === "expiration_date") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.expiration_date).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Original Purchase Date
  else if (el === "original_purchase_date") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.original_purchase_date).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Last Renewal Timestamp
  else if (el === "last_renewal_timestamp") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.last_renewal_timestamp).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Cancellation Flag
  else if (el === "cancellation_flag") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {row?.cancellation_flag ? "Yes" : "No"}
      </td>
    );
  }

  // Refund Flag
  else if (el === "refund_flag") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {row?.refund_flag ? "Yes" : "No"}
      </td>
    );
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
