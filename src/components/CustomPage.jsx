import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const CustomPage = () => (
  <Fragment>
    <div className="">
      <Outlet />
    </div>
  </Fragment>
);

export default CustomPage;
