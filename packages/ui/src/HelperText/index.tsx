import { ASSET_PATHS } from "@repo/assets";
import { FC } from "react";
import { Text } from "../Text";
import "./style.css";

export const HelperText: FC<{
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  text?: string;
  icon?: string;
}> = ({ containerProps, text, icon }): JSX.Element => {
  return (
    <div
      {...containerProps}
      className={`HelperText ${containerProps?.className || ""}`}
    >
      <img
        src={icon || ASSET_PATHS?.SVGS?.INFO}
        className="icon"
        title="Icon"
      />
      {text ? <Text containerProps={{ className: "text" }}>{text}</Text> : null}
    </div>
  );
};
