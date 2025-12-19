import { InfoCard, Separator, Text } from "@repo/UI";
import classes from "./style.module.css";

export const CapacityOverviewCard = ({
  data,
  // heading,
  variant,
}: {
  data: any;
  heading: string;
  variant: "hits" | "storage" | "distribution";
}) => {
  return (
    <div className={classes.capacityOverviewCard}>
      <Text
        tag="p"
        containerProps={{
          className: classes.heading,
        }}
      >
        {variant}
      </Text>

      <Separator />

      {variant === "hits" && (
        <div className={classes.renderInfo}>
          <InfoCard
            title="Day: "
            value={data?.total_hits_across_platforms?.per_day}
            style={{
              background: "none",
              padding: "0",
              flexDirection: "row",
            }}
          />
          <InfoCard
            title="Month: "
            value={data?.total_hits_across_platforms?.per_month}
            style={{
              background: "none",
              padding: "0",
              flexDirection: "row",
            }}
          />
        </div>
      )}

      {variant === "storage" && (
        <>
          <InfoCard
            title="Total: "
            value={data?.total_storage_used}
            style={{
              background: "none",
              padding: "0",
              flexDirection: "row",
            }}
          />
        </>
      )}

      {variant === "distribution" && (
        <div className={classes.renderInfo}>
          <InfoCard
            title="Free: "
            value={data?.storage_distribution_by_plan?.free}
            style={{
              background: "none",
              padding: "0",
              flexDirection: "row",
            }}
          />
          <InfoCard
            title="Pro: "
            value={data?.storage_distribution_by_plan?.pro}
            style={{
              background: "none",
              padding: "0",
              flexDirection: "row",
            }}
          />
          <InfoCard
            title="Enterprise: "
            value={data?.storage_distribution_by_plan?.enterprise}
            style={{
              background: "none",
              padding: "0",
              flexDirection: "row",
            }}
          />
        </div>
      )}
    </div>
  );
};
