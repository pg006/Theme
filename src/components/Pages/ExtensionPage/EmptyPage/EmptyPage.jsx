import React from "react";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import "./EmptyPage.scss";

const EmptyPage = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Empty Page" active="Empty" items={["Pages"]} />
        <div className="row ">
          <div className="col-md-12"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmptyPage;
