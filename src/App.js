import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import BacktoTop from "./commonComponents/Backtotop/Backtotop";
import Footer from "./commonComponents/Footer/Footer";
import Header from "./commonComponents/Header/Header";
import Rightside from "./commonComponents/Rightside/Rightside";
import { Sidebar } from "./commonComponents/Sidebar/Sidebar";
import Switcher from "./commonComponents/Switcher/Switcher";
import * as  SwitcherData from "./Data/Pages/SwitcherData/SwitcherData"


const App = () => {
  document
    .querySelector("body")
    ?.classList.remove("login-img", "landing-page", "horizontal");
  document
    .querySelector("body")
    ?.classList.add("app", "sidebar-mini", "ltr", "light-mode");
  return (
    <React.Fragment>
      <div className="horizontalMenucontainer">
        <Switcher />
        <div className="page">
          <div className="page-main">
            <Header />
            <div className="sticky" style={{ paddingTop: "-74px" }}>
              <Sidebar />
            </div>
            <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
            <div
              className="main-content app-content mt-0"
              onClick={() => SwitcherData.responsiveSidebarclose()}
            >
              <div className="side-app">
                <div className="main-container container-fluid">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <Rightside />
        <BacktoTop />
      </div>
    </React.Fragment>
  );
}

export default App;
