import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Thumbnails.scss";

// Custom content Thumbnails
import Thumb1 from "../../../assets/images/CarouselImages/LandscapeImages/L6.jpg";
import Thumb2 from "../../../assets/images/CarouselImages/LandscapeImages/L1.jpg";
import Thumb3 from "../../../assets/images/CarouselImages/LandscapeImages/L26.jpg";
import Thumb4 from "../../../assets/images/CarouselImages/LandscapeImages/L20.jpg";
import Thumb5 from "../../../assets/images/CarouselImages/LandscapeImages/L25.jpg";
import Thumb6 from "../../../assets/images/CarouselImages/LandscapeImages/L5.jpg";

// Basic Thumbnails
import B1 from "../../../assets/images/CarouselImages/LandscapeImages/L2.jpg";
import B2 from "../../../assets/images/CarouselImages/LandscapeImages/L12.jpg";
import B3 from "../../../assets/images/CarouselImages/LandscapeImages/L22.jpg";
import B4 from "../../../assets/images/CarouselImages/LandscapeImages/L8.jpg";
import B5 from "../../../assets/images/CarouselImages/LandscapeImages/L18.jpg";
import B6 from "../../../assets/images/CarouselImages/LandscapeImages/L28.jpg";
import B7 from "../../../assets/images/CarouselImages/LandscapeImages/L4.jpg";
import B8 from "../../../assets/images/CarouselImages/LandscapeImages/L24.jpg";

// Custom Thumbnails Bottom Content
import C1 from "../../../assets/images/CarouselImages/LandscapeImages/L23.jpg";
import C2 from "../../../assets/images/CarouselImages/LandscapeImages/L3.jpg";
import C3 from "../../../assets/images/CarouselImages/LandscapeImages/L13.jpg";
import C4 from "../../../assets/images/CarouselImages/LandscapeImages/L27.jpg";

// Custom Thumbnails Top Content
import C5 from "../../../assets/images/CarouselImages/LandscapeImages/L7.jpg";
import C6 from "../../../assets/images/CarouselImages/LandscapeImages/L17.jpg";
import C7 from "../../../assets/images/CarouselImages/LandscapeImages/L9.jpg";
import C8 from "../../../assets/images/CarouselImages/LandscapeImages/L29.jpg";

const Thumbnails = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Thumbnails"
          active="Thumbnails"
          items={["Componets"]}
        />
        {/* <!-- ROW OPEN --> */}
        <Row>
          <Col md={12} lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>Custom content Thumbnails</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <Row>
                    <Col sm={12} md={6} xl={4}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={Thumb1} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail Title</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                          <p className="d-flex justify-content-between">
                            <Link
                              to="#"
                              className="btn btn-primary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-secondary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} xl={4}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={Thumb2} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail Title</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                          <p className="d-flex justify-content-between">
                            <Link
                              to="#"
                              className="btn btn-primary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-secondary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} xl={4}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={Thumb3} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail Title</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                          <p className="d-flex justify-content-between">
                            <Link
                              to="#"
                              className="btn btn-primary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-secondary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} xl={4}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={Thumb4} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail Title</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                          <p className="d-flex justify-content-between">
                            <Link
                              to="#"
                              className="btn btn-primary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-secondary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} xl={4}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={Thumb5} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail Title</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                          <p className="d-flex justify-content-between">
                            <Link
                              to="#"
                              className="btn btn-primary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-secondary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} xl={4}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={Thumb6} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail Title</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                          <p className="d-flex justify-content-between">
                            <Link
                              to="#"
                              className="btn btn-primary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-secondary me-2"
                              role="button"
                            >
                              Button
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL CUSTOM CONTENT THUMBNAILS END ->--> */}

          <Col md={12} lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>Basic Thumbnails</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <Row>
                    <Col md={6} xl={3}>
                      <Link to="#" className="thumbnail ">
                        <img src={B1} alt="thumb1" className="basicthumbimg" />
                      </Link>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col md={6} xl={3}>
                      <Link to="#" className="thumbnail">
                        <img src={B2} alt="thumb1" className="basicthumbimg" />
                      </Link>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col md={6} xl={3}>
                      <Link to="#" className="thumbnail">
                        <img src={B3} alt="thumb1" className="basicthumbimg" />
                      </Link>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col md={6} xl={3}>
                      <Link to="#" className="thumbnail">
                        <img src={B4} alt="thumb1" className="basicthumbimg" />
                      </Link>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col md={6} xl={3}>
                      <Link to="#" className="thumbnail ">
                        <img src={B5} alt="thumb1" className="basicthumbimg" />
                      </Link>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col md={6} xl={3}>
                      <Link to="#" className="thumbnail">
                        <img src={B6} alt="thumb1" className="basicthumbimg" />
                      </Link>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col md={6} xl={3}>
                      <Link to="#" className="thumbnail">
                        <img src={B7} alt="thumb1" className="basicthumbimg" />
                      </Link>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col md={6} xl={3}>
                      <Link to="#" className="thumbnail">
                        <img src={B8} alt="thumb1" className="basicthumbimg" />
                      </Link>
                    </Col>
                    {/* <--<- COL END ->--> */}
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL BASIC THUMBNAILS END ->--> */}

          <Col md={12} lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>Custom Thumbnails Bottom Content</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <Row>
                    <Col sm={12} md={6} lg={6} xl={3}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={C1} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail label</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incidi dunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} lg={6} xl={3}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={C2} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail label</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incidi dunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} lg={6} xl={3}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={C3} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail label</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incidi dunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} lg={6} xl={3}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img src={C4} alt="thumb1" className="thumbimg" />
                        </Link>
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail label</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incidi dunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL CUSTOM THUMBNAILS BOTTOM CONTENT END ->--> */}

          <Col md={12} lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>Custom Thumbnails Top Content</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <Row>
                    <Col sm={12} md={6} lg={6} xl={3}>
                      <div className="thumbnail">
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail label</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incidi dunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                        <Link to="#">
                          <img
                            src={C5}
                            alt="thumb1"
                            className="thumbimgbuttom"
                          />
                        </Link>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} lg={6} xl={3}>
                      <div className="thumbnail">
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail label</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incidi dunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                        <Link to="#">
                          <img
                            src={C6}
                            alt="thumb1"
                            className="thumbimgbuttom"
                          />
                        </Link>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} lg={6} xl={3}>
                      <div className="thumbnail">
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail label</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incidi dunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                        <Link to="#">
                          <img
                            src={C7}
                            alt="thumb1"
                            className="thumbimgbuttom"
                          />
                        </Link>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}

                    <Col sm={12} md={6} lg={6} xl={3}>
                      <div className="thumbnail">
                        <div className="caption">
                          <h4>
                            <strong>Thumbnail label</strong>
                          </h4>
                          <p>
                            sed do eiusmod tempor incidi dunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                        <Link to="#">
                          <img
                            src={C8}
                            alt="thumb1"
                            className="thumbimgbuttom"
                          />
                        </Link>
                      </div>
                    </Col>
                    {/* <--<- COL END ->--> */}
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL CUSTOM THUMBNAILS TOP CONTENT END ->--> */}
        </Row>
        {/* <!-- ROW CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Thumbnails;
