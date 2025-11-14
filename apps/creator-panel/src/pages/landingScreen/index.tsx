import { ADMIN_SIDEBAR_TABS } from "@/layout/sideBar/tabsLinks";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import classes from "./style.module.css";

const LandingScreen = () => {
  // Hooks
  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    const firstTab = ADMIN_SIDEBAR_TABS[0];
    navigate(firstTab.link);
  }, []);

  return <div className={classes.landingScreen}>Loading...</div>;
};

export default LandingScreen;
