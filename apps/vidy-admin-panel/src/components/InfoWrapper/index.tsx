import { Text } from "@repo/UI";
import { CSSProperties, FC, ReactNode } from "react";
import classes from "./style.module.css";

export const InfoWrapper: FC<{
  title?: string;
  style?: CSSProperties;
  children?: ReactNode;
}> = ({ title, style, children }) => {
  return (
    <div className={classes.infoWrapper} style={{ ...style }}>
      <Text
        tag="h6"
        maximumNumberOfLines={1}
        containerProps={{
          className: classes.title,
        }}
      >
        {`# ${title}`}
      </Text>

      <div className={classes.renderCard}>{children}</div>
    </div>
  );
};
