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

  // if (el === "created_at") {
  //   return (
  //     <td style={{ whiteSpace: "nowrap" }}>
  //       {moment(row?.created_at).format("DD, MMMM YYYY")}
  //     </td>
  //   );
  // }

  // Last Active At
  if (el === "last_active_at") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {moment(row?.last_active_at).format("DD, MMMM YYYY")}
      </td>
    );
  }

  // Name
  if (el === "account_name") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.account_name}</td>;
  }

  // // Branding
  // else if (el === "branding") {
  //   return <td>{row?.branding ? "On" : "Off"}</td>;
  // }

  // Status
  else if (el === "status") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        <StatusChip status={row?.status} />
      </td>
    );
  }

  // Platforms
  else if (el === "platforms") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {row.platforms.map((item: any) => item).join(", ")}
      </td>
    );
  }

  // Storage
  else if (el === "storage_used") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>{`${row.storage_used}/15GB`}</td>
    );
  }

  // Storage
  else if (el === "hits_this_month") {
    return (
      <td
        style={{ whiteSpace: "nowrap" }}
      >{`${row.hits_this_month}/10000000`}</td>
    );
  }

  // Action
  // else if (el === "action") {
  //   return (
  //     <td>
  //       {/* <TableAction /> */}
  //       <Actions actions={["DELETE"]} />
  //     </td>
  //   );
  // }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
