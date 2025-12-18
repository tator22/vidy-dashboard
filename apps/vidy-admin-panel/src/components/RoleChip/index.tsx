import { getStatusColor } from "@repo/utilities";
import { CSSProperties } from "react";
import styles from "./style.module.css";

const RoleChip = ({
  status,
  style,
}: {
  status: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={styles.roleChip}
      style={{
        ...style,
        color: `rgb(var(${getStatusColor(status)}))`,
        backgroundColor: `rgb(var(${getStatusColor(status)}), 0.15)`,
      }}
    >
      {status}
    </div>
  );
};

export default RoleChip;
