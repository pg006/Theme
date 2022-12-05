import React from "react";
import BacktoTop from "../commonComponents/Backtotop/Backtotop";
import LandingSwitcher from "../commonComponents/Switcher/LandingSwitcher";
import LandingPage from "./LandingPage/LandingPage";

const Landing = () => {
  document.querySelector("body")?.classList.add("landing-page", "horizontal");
  document
    .querySelector("body")
    ?.classList.remove("sidebar-mini", "transparent-mode", "layout-boxed");
  return (
    <React.Fragment>
      <LandingSwitcher />
      <LandingPage />
      <BacktoTop />
    </React.Fragment>
  );
};

export default Landing;
