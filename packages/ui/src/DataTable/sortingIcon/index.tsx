import { ASSET_PATHS } from "@repo/assets";
import { MouseEventHandler } from "react";
import "./style.css";

export const SortingIcon = ({
  sortBy,
  onClick,
  id,
}: {
  sortBy: string;
  onClick?: MouseEventHandler;
  id: string | number | undefined;
}) => {
  // Functions
  const getIcon = () => {
    if (sortBy === "") {
      return ASSET_PATHS.SVGS.DOWN_SORTING;
    } else if (sortBy === id || sortBy === `-${id}`) {
      if (sortBy.includes("-")) {
        return ASSET_PATHS.SVGS.UP_SORTING;
      } else {
        return ASSET_PATHS.SVGS.LEFT_ARROW;
      }
    }
  };

  return (
    <div className="iconBox">
      <img
        src={getIcon()}
        alt="sorting icon"
        className="sortingIcon"
        onClick={onClick}
      />
    </div>
  );
};
