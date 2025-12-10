import { ASSET_PATHS } from "@repo/assets";
import { CONSTANTS } from "@repo/utilities";

export const ADMIN_SIDEBAR_TABS = [
  {
    key: "dashboard",
    label: "dashboard",
    link: CONSTANTS.VIDY_ADMIN_PATHS.DASHBOARD,
    icon: ASSET_PATHS.SVGS.HOME_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.HOME_FILLED,
  },
  {
    key: "users_and_accounts",
    label: "Users & Accounts",
    link: CONSTANTS.VIDY_ADMIN_PATHS.USERS_AND_ACCOUNTS,
    icon: ASSET_PATHS.SVGS.HOME_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.HOME_FILLED,
  },
];
