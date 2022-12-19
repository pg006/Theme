import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BacktoTop = () => {
  const [BacktoTop, setBacktopTop] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktopTop("d-block");
      } else setBacktopTop("");
    });
  }, []);

  const screenup = () => {
    window.scrollTo({
      top: 10,
      behavior: "auto",
      //   smooth
    });
  };
  return (
    <div className={`${BacktoTop}`} style={{display:"none"}}>
      <div className="top-btn">
        <Link
          to="#"
          id="back-to-top"
          onClick={screenup}
          className={`${BacktoTop}`}
        >
          <i className="fe fe-chevrons-up"></i>
        </Link>
      </div>
    </div>
  );
};

BacktoTop.propTypes = {};

BacktoTop.defaultProps = {};

export default BacktoTop;
