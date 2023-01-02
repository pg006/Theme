import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import "./Tags.scss";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import U1 from "../../../assets/images/UserImages/U1.jpg";
import U4 from "../../../assets/images/UserImages/U4.jpg";
import U7 from "../../../assets/images/UserImages/U7.jpg";
import U6 from "../../../assets/images/UserImages/U6.jpg";
import U11 from "../../../assets/images/UserImages/U11.jpg";
import U16 from "../../../assets/images/UserImages/U16.jpg";
import U17 from "../../../assets/images/UserImages/U17.jpg";
import U18 from "../../../assets/images/UserImages/U18.jpg";

const Tags = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Tags" active="Tags" items={["Componets"]} />
        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Default tag</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <span className="tag me-4 px-4 py-2 fs-13">
                        First tag
                      </span>
                      <span className="tag me-4 px-4 py-2 fs-13">
                        Second tag
                      </span>
                      <span className="tag me-4 px-4 py-2 fs-13">
                        Third tag
                      </span>
                      <span className="tag me-4 px-4 py-2 fs-13">
                        Forth tag
                      </span>
                      <span className="tag me-4 px-4 py-2 fs-13">
                        Fifth tag
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Link tag</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <Link to="#" className="tag me-4 px-4 py-2 fs-13">
                        First tag
                      </Link>
                      <Link to="#" className="tag me-4 px-4 py-2 fs-13">
                        Second tag
                      </Link>
                      <Link to="#" className="tag me-4 px-4 py-2 fs-13">
                        Third tag
                      </Link>
                      <Link to="#" className="tag me-4 px-4 py-2 fs-13">
                        Forth tag
                      </Link>
                      <Link to="#" className="tag me-4 px-4 py-2 fs-13">
                        Fifth tag
                      </Link>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}
          
          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Color tag</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <span className="tag me-4 px-4 py-1 fs-13 tag-blue">
                        Blue tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-azure">
                        Azure tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-indigo">
                        Indigo tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-purple">
                        Purple tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-pink">
                        Pink tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-red">
                        Red tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-orange">
                        Orange tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-yellow">
                        Yellow tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-lime">
                        Lime tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-green">
                        Green tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-teal">
                        Teal tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-cyan">
                        Cyan tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-gray">
                        Gray tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 tag-gray-dark">
                        Dark gray tag
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Rounded tag Style</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <span className="tag tag-radius tag-round tag-primary me-4 px-3 py-1 fs-13">
                        First tag
                      </span>
                      <span className="tag tag-radius tag-round tag-orange me-4 px-3 py-1 fs-13">
                        Second tag
                      </span>
                      <span className="tag tag-radius tag-round tag-teal me-4 px-3 py-1 fs-13">
                        Third tag
                      </span>
                      <span className="tag tag-radius tag-round tag-pink me-4 px-3 py-1 fs-13">
                        Forth tag
                      </span>
                      <span className="tag tag-radius tag-round tag-danger me-4 px-3 py-1 fs-13">
                        Fifth tag
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Rounded tag Style</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <span className="tag tag-radius tag-round tag-outline-primary me-4 px-3 py-1 fs-13">
                        First tag
                      </span>
                      <span className="tag tag-radius tag-round tag-outline-secondary me-4 px-3 py-1 fs-13">
                        Second tag
                      </span>
                      <span className="tag tag-radius tag-round tag-outline-danger me-4 px-3 py-1 fs-13">
                        Third tag
                      </span>
                      <span className="tag tag-radius tag-round tag-outline-warning me-4 px-3 py-1 fs-13">
                        Forth tag
                      </span>
                      <span className="tag tag-radius tag-round tag-outline-danger me-4 px-3 py-1 fs-13">
                        Fifth tag
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Rounded tag with icon</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <span className="tag tag-rounded tag-icon tag-red me-4 px-3 py-1 fs-13">
                        <i className="fe fe-map-pin"></i>First tag
                        <Link
                          to="#"
                          className="tag-addon tag-addon-cross tag-red"
                        >
                          <i className="fe fe-x text-white m-1"></i>
                        </Link>
                      </span>
                      <span className="tag tag-rounded tag-icon tag-green me-4 px-3 py-1 fs-13">
                        <i className="fe fe-calendar"></i>Second tag
                        <Link
                          to="#"
                          className="tag-addon tag-addon-cross tag-green"
                        >
                          <i className="fe fe-x text-white m-1"></i>
                        </Link>
                      </span>
                      <span className="tag tag-rounded tag-icon tag-orange me-4 px-3 py-1 fs-13">
                        <i className="fe fe-bell"></i>Third tag
                        <Link
                          to="#"
                          className="tag-addon tag-addon-cross tag-orange"
                        >
                          <i className="fe fe-x text-white m-1"></i>
                        </Link>
                      </span>
                      <span className="tag tag-rounded tag-icon tag-pink me-4 px-3 py-1 fs-13">
                        <i className="fe fe-filter"></i>Forth tag
                        <Link
                          to="#"
                          className="tag-addon tag-addon-cross tag-pink"
                        >
                          <i className="fe fe-x text-white m-1"></i>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Rounded tag</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <span className="tag tag-rounded me-4 px-4 py-1 fs-13 ">
                        First tag
                      </span>
                      <span className="tag tag-rounded me-4 px-4 py-1 fs-13 ">
                        Second tag
                      </span>
                      <span className="tag tag-rounded me-4 px-4 py-1 fs-13 ">
                        Third tag
                      </span>
                      <span className="tag tag-rounded me-4 px-4 py-1 fs-13 ">
                        Forth tag
                      </span>
                      <span className="tag tag-rounded me-4 px-4 py-1 fs-13 ">
                        Fifth tag
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col md={12} xl={12}>
            <Card>
              <Card.Header>
                <Card.Title>Tag remove</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <span className="tag me-4 px-4 py-1 fs-13">
                        One
                        <Link to="#" className="tag-addon">
                          <i className="fe fe-x"></i>
                        </Link>
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13">
                        Two
                        <Link to="#" className="tag-addon">
                          <i className="fe fe-x"></i>
                        </Link>
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13">
                        Three
                        <Link to="#" className="tag-addon">
                          <i className="fe fe-x"></i>
                        </Link>
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13">
                        Four
                        <Link to="#" className="tag-addon">
                          <i className="fe fe-x"></i>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col md={12} xl={12}>
            <Card>
              <Card.Header>
                <Card.Title>Tag addons</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <div className="tag me-4 px-4 py-1 fs-13">
                        npx
                        <Link to="#" className="tag-addon">
                          <i className="fe fe-x"></i>
                        </Link>
                      </div>
                      <div className="tag tag-danger me-4 px-4 py-1 fs-13">
                        npm
                        <span className="tag-addon">
                          <i className="fe fe-activity"></i>
                        </span>
                      </div>
                      <div className="tag me-4 fs-13">
                        <span className="py-1 fs-13">bundle</span>
                        <span className="tag-addon tag-success py-1 fs-13">
                          passing
                        </span>
                      </div>
                      <span className="tag tag-dark">
                        <span className="py-1 fs-13">CSS gzip size</span>
                        <span className="tag-addon tag-warning py-1 fs-13">
                          20.9 kB
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Avatar tag</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <div className="tags">
                      <span className="tag me-4">
                        <img
                          className="tag-avatar avatar cover-image"
                          alt="user11"
                          src={U11}
                        />
                        <span className="me-4 px-4 py-2 fs-13">Victoria</span>
                      </span>
                      <span className="tag me-4">
                        <img
                          className="tag-avatar avatar cover-image"
                          alt="user4"
                          src={U4}
                        />
                        <span className="me-4 px-4 py-2 fs-13">Nathan</span>
                      </span>
                      <span className="tag me-4">
                        <img
                          className="tag-avatar avatar cover-image"
                          alt="user1"
                          src={U1}
                        />
                        <span className="me-4 px-4 py-2 fs-13">Alice</span>
                      </span>
                      <span className="tag me-4">
                        <img
                          className="tag-avatar avatar cover-image"
                          alt="user18"
                          src={U18}
                        />
                        <span className="me-4 px-4 py-2 fs-13">Rose</span>
                      </span>
                      <span className="tag me-4">
                        <img
                          className="tag-avatar avatar cover-image"
                          alt="user16"
                          src={U16}
                        />
                        <span className="me-4 px-4 py-2 fs-13">Peter</span>
                      </span>
                      <span className="tag me-4">
                        <img
                          className="tag-avatar avatar cover-image"
                          alt="user6"
                          src={U6}
                        />
                        <span className="me-4 px-4 py-2 fs-13">Wayne</span>
                      </span>
                      <span className="tag me-4">
                        <img
                          className="tag-avatar avatar cover-image"
                          alt="user7"
                          src={U7}
                        />
                        <span className="me-4 px-4 py-2 fs-13">Michelle</span>
                      </span>
                      <span className="tag me-4">
                        <img
                          className="tag-avatar avatar cover-image"
                          alt="user17"
                          src={U17}
                        />
                        <span className="me-4 px-4 py-2 fs-13">Debra</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}

          <Col xl={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>List of tags</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <p>
                    You can create a list of tags with the
                    <code className="highlighter-rouge">.tags</code> container.
                  </p>
                  <div className="example">
                    <div className="tags">
                      <span className="tag me-4 px-4 py-1 fs-13 ">
                        First tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">
                        Second tag
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">
                        Third tag
                      </span>
                    </div>
                  </div>
                  <p className="mt-4">
                    If the list is very long, it will automatically wrap on
                    multiple lines, while keeping all tags evenly spaced.
                  </p>
                  <div className="example">
                    <div className="tags">
                      <span className="tag me-4 px-4 py-1 fs-13 ">One</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Two</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Three</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Four</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Five</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Six</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Seven</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Eight</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Nine</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Ten</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Eleven</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Twelve</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">
                        Thirteen
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">
                        Fourteen
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Fifteen</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Sixteen</span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">
                        Seventeen
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">
                        Eighteen
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">
                        Nineteen
                      </span>
                      <span className="tag me-4 px-4 py-1 fs-13 ">Twenty</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<- COL END ->--> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}
      </div>
    </React.Fragment>
  );
};

export default Tags;
