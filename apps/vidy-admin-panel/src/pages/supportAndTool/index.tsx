import { Text } from "@repo/UI";
import classes from "./style.module.css";

const SupportAndTool = () => {
  return (
    <div className={classes.dashboard}>
      <Text
        tag="h1"
        containerProps={{
          style: {
            fontSize: "10rem",
          },
        }}
      >
        Support Tool / Notes
      </Text>
    </div>
  );
};

export default SupportAndTool;
