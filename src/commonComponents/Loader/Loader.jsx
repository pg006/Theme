import React from "react";

const Loader = () => {
  return (
    <React.Fragment>
      <div>
        <div id="global-loader">
          <img
            src={require("../../assets/images/loader.svg").default}
            className="loader-img"
            alt="Loading...."
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
