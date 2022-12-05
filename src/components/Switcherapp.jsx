import React, { Fragment } from "react";
import Footer from "../commonComponents/Footer/Footer";
import Header from "../commonComponents/Header/Header";
import Rightside from "../commonComponents/Rightside/Rightside";
import { Sidebar } from "../commonComponents/Sidebar/Sidebar";
import SwitcherStyle from "./Pages/Switcher/SwitcherStyle";
import * as  SwitcherData from "../Data/Pages/SwitcherData/SwitcherData";

const Switcherapp = () => {
  return (
    <Fragment>
      <div className="horizontalMenucontainer">
        <div className="page">
          <div className="page-main">
            <Header />
            <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
            <Sidebar />
            <div
              className="main-content app-content mt-0"
              onClick={() => SwitcherData.responsiveSidebarcloseHeader()}
            >
              <div className="side-app">
                <div className="main-container container-fluid">
                  <SwitcherStyle />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        <Rightside />
        {/* <Backtotop /> */}
      </div>
    </Fragment>
  );
};

export default Switcherapp;
