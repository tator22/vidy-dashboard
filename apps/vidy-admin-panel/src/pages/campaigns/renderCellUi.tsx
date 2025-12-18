import StatusChip from "@/components/StatusChip";
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
  // else if (el === "action") {
  //   return (
  //     <td>
  //       <Actions actions={["DELETE", "ARCHIVE"]} />
  //     </td>
  //   );
  // }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
