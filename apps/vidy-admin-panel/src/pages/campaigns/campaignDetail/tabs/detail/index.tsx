import { InfoWrapper } from "@/components/InfoWrapper";
import { InfoCard, Separator } from "@repo/UI";
import { CAMPAIGNS } from "@repo/utilities";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StatCard } from "./statCard";

const Details = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.CAMPAIGNS.DETAIL";
  const data = CAMPAIGNS[0];

  // States
  const [firstUser, setFirstUser] = useState(data);

  // Functions

  // Effects
  useEffect(() => {
    setFirstUser(data);
  }, []);

  return (
    <div>
      <InfoWrapper
        title={t(`${translationKey}.campaign_details`)}
        style={{
          paddingTop: "0rem",
        }}
      >
        <InfoCard
          isLink
          title={t(`${translationKey}.campaign_name`)}
          linkValue={firstUser.campaign_name}
          link={`https://www.google.com`}
          linkTarget="_blank"
        />
        <InfoCard
          isLink
          title={t(`${translationKey}.account`)}
          linkValue={firstUser.account}
          link={`https://www.google.com`}
          linkTarget="_blank"
        />
        <InfoCard title={t(`${translationKey}.plan`)} value={firstUser.plan} />
        <InfoCard
          isBoolean
          title={t(`${translationKey}.branding_status`)}
          booleanValue={true}
        />
        <InfoCard
          title={t(`${translationKey}.storage_used`)}
          value={"15GB / 20GB"}
        />
        {/*
        
       
        <InfoCard
          title={t(`${translationKey}.platform`)}
          value={firstUser.platforms.map((i) => i).join(", ")}
        />
        <InfoCard
          title={t(`${translationKey}.last_login_and_usage`)}
          value={moment().format("DD, MMMM YYYY")}
        /> 
        */}
      </InfoWrapper>

      <Separator />

      <InfoWrapper title={t(`${translationKey}.stats`)}>
        <StatCard count={120} time="Today" />
        <StatCard count={1020} time="This Month" />
        <StatCard count={10200} time="Lifetime" />
      </InfoWrapper>
    </div>
  );
};

export default Details;
