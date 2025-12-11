import Header from "@/components/Header";
import { RenderTab, renderTabProps } from "@repo/ui";
import { FC, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { AccountBillingSnapshot } from "./tabs/accountBillingSnapshot";
import { PlanOverview } from "./tabs/planOverview";

export const PlanAndBilling: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.PLANS_AND_BILLING";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.plans_overview`),
      key: "plans_overview",
    },
    {
      label: t(`${translationKey}.account_billing_snapshot`),
      key: "account_billing_snapshot",
    },
  ];

  //  Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "plans_overview",
  });

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "plans_overview":
          return <PlanOverview />;
        case "account_billing_snapshot":
          return <AccountBillingSnapshot />;
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
