import { Text } from "@repo/UI";
import classes from "./style.module.css";

export const StatCard = ({ time, count }: { time: string; count: number }) => {
  return (
    <div className={classes.statCard}>
      <Text
        tag="p"
        children={time}
        containerProps={{
          className: classes.time,
        }}
      />

      <div className={classes.countAndText}>
        <Text
          tag="h4"
          children={count}
          containerProps={{
            className: classes.count,
          }}
        />
        {/* <Text
          tag="p"
          children={"Scans"}
          containerProps={{
            className: classes.countText,
          }}
        /> */}
      </div>
    </div>
  );
};
