import TableAction from "@/components/TableAction";
import { FC } from "react";
import { TableColumnId } from "./tableColumn";
import { Text } from "@repo/UI";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Table Columns

  // Total hits across platforms
  if (el === "total_hits_across_platforms") {
    return (
      <td>
        <Text
          tag="p"
          containerProps={{
            style: {
              fontSize: "inherit",
              color: "inherit",
            },
          }}
        >
          Per Day: {row?.total_hits_across_platforms?.per_day}
        </Text>
        <Text
          tag="p"
          containerProps={{
            style: {
              fontSize: "inherit",
              color: "inherit",
            },
          }}
        >
          Per Month: {row?.total_hits_across_platforms?.per_month}
        </Text>
      </td>
    );
  }

  // Total hits across platforms
  else if (el === "storage_distribution_by_plan") {
    return (
      <td>
        <Text
          tag="p"
          containerProps={{
            style: {
              fontSize: "inherit",
              color: "inherit",
            },
          }}
        >
          Free: {row?.storage_distribution_by_plan?.free}
        </Text>
        <Text
          tag="p"
          containerProps={{
            style: {
              fontSize: "inherit",
              color: "inherit",
            },
          }}
        >
          Pro: {row?.storage_distribution_by_plan?.pro}
        </Text>
        <Text
          tag="p"
          containerProps={{
            style: {
              fontSize: "inherit",
              color: "inherit",
            },
          }}
        >
          Enterprise: {row?.storage_distribution_by_plan?.enterprise}
        </Text>
      </td>
    );
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
