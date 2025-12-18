import { Text } from "@repo/UI";
import classes from "./style.module.css";

const Dashboard = () => {
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
        Dashboard
      </Text>
    </div>
  );
};

export default Dashboard;
