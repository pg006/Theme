import React from "react";
import { Link } from "react-router-dom";

const PageHeader = (props) => {
  return (
    <React.Fragment>
      <div className="page-header-bg px-3">
        {/* <!-- PAGE-HEADER --> */}
        <div className="page-header">
          <h1 className="page-title">{props.titles}</h1>
          <div>
            <ol className="breadcrumb">
              {props.items.map((value, index) => {
                return (
                  <li key={index} className="breadcrumb-item">
                    <Link to="#">{value}</Link>
                  </li>
                );
              })}
              <li className="breadcrumb-item active" aria-current="page">
                {props.active}
              </li>
            </ol>
          </div>
        </div>
        {/* <!-- PAGE-HEADER END --> */}
      </div>
    </React.Fragment>
  );
};

export default PageHeader;
