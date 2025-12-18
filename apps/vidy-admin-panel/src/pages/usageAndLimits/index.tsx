import Header from "@/components/Header";
import { RenderTab, renderTabProps } from "@repo/UI";
import { FC, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { CapacityOverview } from "./tabs/capacityOverview";
import { HighUsageAccounts } from "./tabs/highUsageAccounts";

export const UsageAndLimit: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.USAGE_AND_LIMIT";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.high_usage`),
      key: "high_usage",
    },
    {
      label: t(`${translationKey}.capacity_overview`),
      key: "capacity_overview",
    },
  ];

  //  Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "high_usage",
  });

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "high_usage":
          return <HighUsageAccounts />;
        case "capacity_overview":
          return <CapacityOverview />;
        default:
          return <p>No component found</p>;
      }
    }
  };

  // const handleRowClick = () => {
  //   navigate(
  //     generateRoutePath({
  //       url: CONSTANTS.PATHS.LISTING_DETAIL,
  //       params: {
  //         id: String(1),
  //       },
  //     })
  //   );
  // };

  return (
    <div className={styles.code}>
      <Header heading={t(`${translationKey}.heading`)} />

      <div className={styles.addMedia}>
        <RenderTab
          tabs={tabs}
          activeTab={activeTab.key}
          onClick={setActiveTab}
        />

        <Suspense fallback="loading...">{renderTabItem()}</Suspense>
      </div>
    </div>
  );
};
