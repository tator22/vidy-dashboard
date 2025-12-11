import { Switch, Text } from "@repo/ui";
import { FC } from "react";
import classes from "./style.module.css";

export const GlobalFeature: FC = () => {
  return (
    <div className={classes.globalFeature}>
      <GlobalFeatureRow text="Enable vanity metrics" />
      <GlobalFeatureRow text="Enable the branding removal feature" />
    </div>
  );
};

const GlobalFeatureRow = ({ text }: { text: string }) => {
  return (
    <div className={classes.globalFeatureRow}>
      <Text
        tag="h6"
        maximumNumberOfLines={1}
        containerProps={{
          className: classes.text,
        }}
      >
        {text}
      </Text>
      <Switch />
    </div>
  );
};
