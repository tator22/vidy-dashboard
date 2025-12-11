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
  // Total hits across platforms
  if (el === "oldest_media_date") {
    return <td>{moment(row.oldest_media_date).format("DD, MMMM YYYY")}</td>;
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
