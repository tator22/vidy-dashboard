import Header from "@/components/Header";
import { ASSET_PATHS } from "@repo/assets";
import { Button, Image, Input, Radio, Separator, Text } from "@repo/ui";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { CONSTANTS } from "@repo/utilities";

const Billing = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.BILLING";

  return (
    <div className={styles.billing}>
      <Header
        heading={t(`${translationKey}.heading`)}
        style={{
          padding: "2.2rem 3rem",
        }}
        rightChildren={
          <div className={styles.headerButtonGroup}>
            <Button
              text={t(`${translationKey}.cancel`)}
              size="medium"
              variant="secondary"
              buttonProps={{
                className: styles.headerActionButton,
              }}
            />
            <Button
              text={t(`${translationKey}.save`)}
              size="medium"
              buttonProps={{
                className: styles.headerActionButton,
              }}
            />
          </div>
        }
      />

      <section className={styles.profileSection}>
        <Image
          imageProps={{
            src: ASSET_PATHS.IMAGES.DUMMY_PROFILE_PHOTO,
            alt: "Profile Photo",
            className: styles.profilePhoto,
          }}
        />
        <Text
          children={"Harry Potter"}
          tag="h6"
          containerProps={{
            className: styles.profileName,
          }}
        />
      </section>

      <section
        className={clsx(
          styles.planSection,
          styles.sectionWidth,
          styles.sectionPadding
        )}
      >
        <div className={styles.renderPlanDetailCard}>
          <PlanDetailCard
            planName="Plus Plan"
            pricePerMonth={29}
            nextBillingDate="1 Feb, 2025"
            includes={[
              "1GB Storage",
              "5 Active Codes",
              "10 Total Codes",
              "2 Team members",
            ]}
          />
          <PlanDetailCard
            planName="Storage Add-on"
            pricePerMonth={10}
            nextBillingDate="1 Feb, 2025"
            includes={["+1GB Additional Storage"]}
          />
          <PlanDetailCard
            planName="Team Member Add-on"
            pricePerMonth={15}
            nextBillingDate="1 Feb, 2025"
            includes={["+1 Additional Team Member"]}
          />
          <PlanDetailCard
            planName="Code Add-on"
            pricePerMonth={10}
            nextBillingDate="1 Feb, 2025"
            includes={["+10 Additional Videocodes"]}
          />
        </div>

        <div className={styles.buttonGroup}>
          <Button
            text={t(`${translationKey}.add_ons`)}
            variant="tertiary"
            buttonProps={{
              className: styles.ctaButton,
            }}
          />
          <Button
            text={t(`${translationKey}.edit_plans`)}
            variant="tertiary"
            buttonProps={{
              className: styles.ctaButton,
            }}
          />
        </div>
      </section>
      <Separator
        containerProps={{
          style: {
            marginBottom: "2rem",
          },
        }}
      />
      <section
        className={clsx(
          styles.billingSection,
          styles.sectionWidth,
          styles.sectionPadding
        )}
      >
        <SectionHeading text={t(`${translationKey}.billing_address`)} />
        <Input
          label={t(`${translationKey}.address_line_1`)}
          inputProps={{
            required: true,
          }}
        />
        <Input
          label={t(`${translationKey}.address_line_2`)}
          inputProps={{
            required: true,
          }}
        />

        <div className={styles.inputGroup}>
          <Input
            label={t(`${translationKey}.city`)}
            inputProps={{
              required: true,
            }}
          />
          <Input
            label={t(`${translationKey}.state`)}
            inputProps={{
              required: true,
            }}
          />
          <Input
            label={t(`${translationKey}.zip_code`)}
            inputProps={{
              required: true,
            }}
          />
          <Input
            label={t(`${translationKey}.country`)}
            inputProps={{
              required: true,
            }}
          />
        </div>
      </section>
      <Separator
        containerProps={{
          style: {
            marginBottom: "2rem",
          },
        }}
      />
      <section
        className={clsx(
          styles.paymentSection,
          styles.sectionWidth,
          styles.sectionPadding
        )}
      >
        <SectionHeading text={t(`${translationKey}.payment`)} />
        <div className={styles.paymentMethodGroup}>
          <PaymentMethodRow
            brandLogo={ASSET_PATHS.SVGS.PAY_PAL}
            checked
            numberOrEmail="dolores.chambers@example.com"
          />
          <PaymentMethodRow
            checked={false}
            brandLogo={ASSET_PATHS.SVGS.VISA}
            numberOrEmail="xxxx xxxx 01234"
          />
        </div>
        <Text
          children={t(`${translationKey}.choose_another_payment_method`)}
          tag="p"
        />

        <SectionHeading text={t(`${translationKey}.payment_methods`)} />
        <div className={styles.buttonGroup}>
          <Button
            variant="secondary"
            text={t(`${translationKey}.credit_card`)}
            buttonProps={{
              className: styles.ctaButton,
            }}
            leftNode={
              <Image
                imageProps={{
                  src: ASSET_PATHS.SVGS.CREDIT_CARD,
                }}
              />
            }
          />
          <Button
            variant="secondary"
            text={t(`${translationKey}.pay`)}
            buttonProps={{
              className: styles.ctaButton,
            }}
            leftNode={
              <Image
                containerProps={{
                  className: styles.brandLogoContainer,
                }}
                imageProps={{
                  src: ASSET_PATHS.SVGS.APPLE_PAY,
                }}
              />
            }
          />
          <Button
            variant="secondary"
            text={t(`${translationKey}.pay`)}
            buttonProps={{
              className: styles.ctaButton,
            }}
            leftNode={
              <Image
                imageProps={{
                  src: ASSET_PATHS.SVGS.GOOGLE_PAY,
                }}
              />
            }
          />
        </div>
      </section>
      <Separator
        containerProps={{
          style: {
            marginBottom: "2rem",
          },
        }}
      />
    </div>
  );
};

export default Billing;

const PaymentMethodRow = ({
  checked,
  numberOrEmail,
  brandLogo,
}: {
  checked?: boolean;
  numberOrEmail?: string;
  brandLogo?: string;
}) => {
  return (
    <div className={styles.paymentMethodRow}>
      <div className={styles.leftSection}>
        <Radio
          containerProps={{
            style: {
              width: "fit-content",
            },
          }}
          inputProps={{
            checked: checked,
          }}
          iconStyle={{
            filter: `var(--black-filter)`,
          }}
        />
        <Image
          containerProps={{
            className: styles.brandLogoContainer,
          }}
          imageProps={{
            className: styles.brandLogo,
            src: brandLogo,
            alt: numberOrEmail,
          }}
        />
        <Text
          tag="h6"
          children={numberOrEmail}
          maximumNumberOfLines={1}
          containerProps={{
            className: styles.idName,
          }}
        />
      </div>
      <div className={styles.rightSection}>
        <Image
          containerProps={{
            className: styles.actionButton,
          }}
          imageProps={{
            src: ASSET_PATHS.SVGS.ACTION_DELETE,
            className: styles.deleteIcon,
          }}
        />
      </div>
    </div>
  );
};

const SectionHeading = ({ text }: { text: string }) => {
  return (
    <Text
      tag="h6"
      children={text}
      maximumNumberOfLines={1}
      containerProps={{
        className: styles.sectionHeading,
      }}
    />
  );
};

const PlanDetailCard = ({
  planName,
  pricePerMonth,
  nextBillingDate,
  includes,
}: {
  planName: string;
  pricePerMonth: number;
  nextBillingDate: string;
  includes: string[];
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.BILLING";

  return (
    <div className={styles.planDetails}>
      <div className={styles.planNameAndLogo}>
        <Image
          imageProps={{
            src: ASSET_PATHS.ICONS.LOGO,
          }}
          containerProps={{
            className: styles.logo,
          }}
        />
        <Text
          children={planName}
          tag="h6"
          containerProps={{
            className: styles.planNameText,
          }}
        />
      </div>
      <div className={styles.planBilling}>
        <Text
          children={`${CONSTANTS.CURRENCY_SYMBOL}${pricePerMonth}/month`}
          tag="h6"
          containerProps={{ className: styles.billingAmount }}
        />
        <Text
          children={t(`${translationKey}.billed_annually`)}
          tag="p"
          containerProps={{
            className: styles.billingPeriod,
          }}
        />
      </div>
      <Text
        children={`${t(`${translationKey}.next_billing_date`)}: ${nextBillingDate}`}
        tag="p"
        containerProps={{
          className: styles.billingPeriod,
        }}
      />

      <section className={styles.includeSection}>
        <Text
          tag="p"
          containerProps={{
            className: styles.includeHeading,
          }}
        >
          {t(`${translationKey}.includes`)}
        </Text>
        <div className={styles.renderIncludes}>
          {includes.map((item, index) => {
            return (
              <div className={styles.includeRow} key={`${index}+${item}`}>
                <Image
                  imageProps={{
                    src: ASSET_PATHS.SVGS.CHECKED_ICON,
                    className: styles.checkIcon,
                  }}
                />
                <Text
                  tag="p"
                  containerProps={{
                    className: styles.includeRowText,
                  }}
                >
                  {item}
                </Text>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
