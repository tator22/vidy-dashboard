import Header from "@/components/Header";
import { RenderTab, renderTabProps } from "@repo/ui";
import { FC, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { StorageByAccount } from "./tabs/storageByAccount";
import { StorageByCampaign } from "./tabs/storageByCampaign";

export const StorageAndAsset: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.STORAGE_AND_ASSETS";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.storage_by_account`),
      key: "storage_by_account",
    },
    {
      label: t(`${translationKey}.storage_by_campaign`),
      key: "storage_by_campaign",
    },
  ];

  //  Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "storage_by_account",
  });

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "storage_by_account":
          return <StorageByAccount />;
        case "storage_by_campaign":
          return <StorageByCampaign />;
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
