import { CapacityOverviewCard } from "./overviewCard";
import classes from "./style.module.css";

const CapacityOverview = () => {
  const dummyData = {
    total_hits_across_platforms: {
      per_day: 1240,
      per_month: 37200,
    },
    total_storage_used: "52 GB",
    storage_distribution_by_plan: {
      free: "10 GB",
      pro: "25 GB",
      enterprise: "17 GB",
    },
  };

  return (
    <div className={classes.capacityOverview}>
      <CapacityOverviewCard
        data={dummyData}
        heading="Hits per day/month"
        variant="hits"
      />
      <CapacityOverviewCard
        data={dummyData}
        heading="Storage distribution by plan"
        variant="distribution"
      />
      <CapacityOverviewCard
        data={dummyData}
        heading=" Storage used"
        variant="storage"
      />
    </div>
  );
};

export default CapacityOverview;
