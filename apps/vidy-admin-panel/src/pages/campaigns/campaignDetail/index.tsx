import Header from "@/components/Header";
import StatusChip from "@/components/StatusChip";
import { RenderTab, renderTabProps } from "@repo/UI";
import { FC, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import Details from "./tabs/detail";
import Media from "./tabs/media";

export const CampaignDetail: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.CAMPAIGNS.DETAIL";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.details`),
      key: "details",
    },
    {
      label: t(`${translationKey}.media`),
      key: "media",
    },
  ];

  //  Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "details",
  });

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "details":
          return <Details />;
        case "media":
          return <Media />;
        default:
          return <p>No component found</p>;
      }
    }
  };

  return (
    <div className={styles.userAndAccountDetail}>
      <Header
        isBack
        heading={t(`${translationKey}.heading`)}
        rightChildren={<StatusChip status={"active"} />}
      />

      <div className={styles.addMedia}>
        <RenderTab
          tabs={tabs}
          activeTab={activeTab.key}
          onClick={setActiveTab}
          customContainerStyle={{
            marginBottom: activeTab.key === "media" ? "0rem" : "",
          }}
        />

        <Suspense fallback="loading...">{renderTabItem()}</Suspense>
      </div>
    </div>
  );
};
