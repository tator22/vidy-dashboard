import { InfoWrapper } from "@/components/InfoWrapper";
import { InfoCard, Separator } from "@repo/UI";
import { USERS_AND_ACCOUNTS } from "@repo/utilities";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Details = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.USERS_AND_ACCOUNTS.DETAIL";
  const data = USERS_AND_ACCOUNTS[0];

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
        title={t(`${translationKey}.user_detail`)}
        style={{
          paddingTop: "0rem",
        }}
      >
        <InfoCard
          title={t(`${translationKey}.account_name`)}
          value={firstUser.account_name}
        />
        <InfoCard
          title={t(`${translationKey}.email`)}
          value={firstUser.email}
        />
        <InfoCard
          title={t(`${translationKey}.platform`)}
          value={firstUser.platforms.map((i) => i).join(", ")}
        />
        <InfoCard
          title={t(`${translationKey}.last_login_and_usage`)}
          value={moment().format("DD, MMMM YYYY")}
        />
      </InfoWrapper>

      <Separator />

      <InfoWrapper title={t(`${translationKey}.plan_details`)}>
        <InfoCard
          title={t(`${translationKey}.current_plan`)}
          value={firstUser.current_plan}
        />
        <InfoCard
          title={t(`${translationKey}.plan_start_date`)}
          value={moment().format("DD, MMMM YYYY")}
        />
        <InfoCard
          title={t(`${translationKey}.next_renewal_date`)}
          value={moment().format("DD, MMMM YYYY")}
        />
        <InfoCard
          title={t(`${translationKey}.total_campaigns`)}
          value={String(firstUser.total_campaigns)}
        />
        <InfoCard
          title={t(`${translationKey}.storage_used`)}
          value={String(firstUser.storage_used)}
        />
        <InfoCard
          title={t(`${translationKey}.hits_used_plan_limit`)}
          value={String(firstUser.hits_this_month)}
        />
      </InfoWrapper>
    </div>
  );
};

export default Details;
