import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ASSET_PATHS } from "@repo/assets";
import { Text } from "@repo/ui";
import { CONSTANTS } from "@repo/utilities";
import clsx from "clsx";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { shallowEqual } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import styles from "./style.module.css";
import { Tab } from "./tab";
import { ADMIN_SIDEBAR_TABS } from "./tabsLinks";
import { toggleSideBarMode } from "@/redux/slice/otherSlices/sideBarModeSlice";
import { useWindowSize } from "@uidotdev/usehooks";

export const SideBar = () => {
  // Hooks
  const { t } = useTranslation("sideBar");
  const tabGroupRef = useRef<HTMLUListElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();

  // Global States
  const { sideBarMode } = useAppSelector(
    (state) => ({
      sideBarMode: state?.sideBarMode.sideBarMode,
    }),
    shallowEqual
  );

  // Variables
  const pageName = location?.pathname?.split("/");
  const isMobile = width && width <= 768;
  const isForMenuWithLogo = isMobile && sideBarMode === "expanded";

  // Functions
  // const toggleSideBarDrawer = () => {
  //   dispatch(closeDrawer());
  // };

  const handleSideBarScroll = (tabId: string) => {
    const tab = document?.getElementById(tabId);
    if (tab && tabGroupRef?.current) {
      tabGroupRef?.current.scrollTo({
        top: tab?.offsetTop - tabGroupRef?.current?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={clsx(styles.sidebar, styles[`${sideBarMode}_sidebar`])}
      style={{
        width:
          sideBarMode === "expanded"
            ? "var(--side-bar-expanded-width)"
            : "var(--side-bar-collapsed-width)",
        padding: sideBarMode === "expanded" ? "2rem" : "2rem 1rem",
      }}
    >
      <div
        className={clsx(
          styles.logoAndMenuIcon,
          isForMenuWithLogo && styles.logoWithMenu
        )}
      >
        <div
          className={`${styles.iconContainer} ${sideBarMode === "expanded" ? "" : styles.expanded}`}
        >
          <img
            src={ASSET_PATHS.ICONS.LOGO}
            alt="app logo"
            className={styles.appLogo}
          />
          <Text
            tag="h1"
            containerProps={{
              className: styles.appTitle,
            }}
          >
            {CONSTANTS.ADMIN_PANEL_NAME}
          </Text>
        </div>

        {isForMenuWithLogo ? (
          <div className={styles.menuIconContainer}>
            <img
              src={ASSET_PATHS.SVGS.MENU}
              alt="menu icon"
              className={styles.menuIcon}
              onClick={() => dispatch(toggleSideBarMode())}
            />
          </div>
        ) : null}
      </div>

      <ul className={styles.sectionsContainer} ref={tabGroupRef}>
        {ADMIN_SIDEBAR_TABS.map((item, index) => {
          const link = item.link.split("/");
          const isActive = `/${link[1]}` === `/${pageName[1]}`;

          return (
            <li key={index}>
              <Tab
                icon={isActive ? item?.active_icon : item?.icon}
                label={t(item?.label)}
                isActive={isActive}
                id={item?.label}
                onClick={() => {
                  handleSideBarScroll(item?.label);
                  navigate(item.link);
                }}
              />
            </li>
          );
        })}
      </ul>

      {/* <ul className={styles.bottomSection} ref={tabGroupRef}>
        {ADMIN_SIDEBAR_TABS?.slice(4)?.map((item, index) => {
          const link = item.link.split("/");
          const isActive = `/${link[2]}` === `/${pageName[2]}`;

          return (
            <li key={index}>
              <Tab
                icon={isActive ? item?.active_icon : item?.icon}
                label={t(item?.label)}
                isActive={isActive}
                id={item?.label}
                onClick={() => {
                  handleSideBarScroll(item?.label);
                  navigate(item.link);
                }}
              />
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};
