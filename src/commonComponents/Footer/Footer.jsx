import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer mt-3  ">
        <div className="container">
          <Row className="align-items-center flex-row-reverse">
            <Col md={12} sm={12} className="text-center">
              Copyright © 2022 <Link to="#">theme</Link>. Designed with
              <span className="fa fa-heart text-danger"></span> by
              <Link to="#"> Spruko </Link> All rights reserved.
            </Col>
          </Row>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
