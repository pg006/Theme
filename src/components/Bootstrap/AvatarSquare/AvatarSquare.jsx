import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import { Card, Col, Row } from 'react-bootstrap';
import "./AvatarSquare.scss";
import U1 from '../../../assets/images/UserImages/U1.jpg'
import U2 from '../../../assets/images/UserImages/U2.jpg'
import U3 from '../../../assets/images/UserImages/U3.jpg'
import U4 from '../../../assets/images/UserImages/U4.jpg'
import U5 from '../../../assets/images/UserImages/U5.jpg'
import U6 from '../../../assets/images/UserImages/U6.jpg'
import U7 from '../../../assets/images/UserImages/U7.jpg'
import U8 from '../../../assets/images/UserImages/U8.jpg'
import U9 from '../../../assets/images/UserImages/U9.jpg'
import U11 from '../../../assets/images/UserImages/U11.jpg'

const AvatarSquare = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Avatar-Square"
          active="Avatar-Square"
          items={["Componets"]}
        />
        {/* <!-- ROW-1 OPEN --> */}
        <Row>
          <Col md={12} lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Simple avatar</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <p>
                    Use classes
                    <code className="highlighter-rouge">.avatar</code>.
                  </p>
                  <div className="example">
                    <div className="avatar-list">
                      <img
                        className="avatar cover-image"
                        alt="user1"
                        src={U1}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user2"
                        src={U2}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user1"
                        src={U1}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user2"
                        src={U2}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user3"
                        src={U3}
                      />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col md={12} lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Avatars list</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <p>
                    Use classes{" "}
                    <code className="highlighter-rouge">.avatar-list </code> and{" "}
                    <code className="highlighter-rouge">
                      .avatar-list-stacked
                    </code>
                    .
                  </p>
                  <div className="example">
                    <div className="avatar-list avatar-list-stacked">
                      <img
                        className="avatar cover-image"
                        alt="user21"
                        src={U9}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user21"
                        src={U9}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user9"
                        src={U8}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user21"
                        src={U9}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user11"
                        src={U11}
                      />
                      <span className="avatar bg-primary">+8</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}

        {/* <!-- ROW-2 OPEN --> */}
        <Row>
          <Col md={12} lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Avatar status</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <p>
                    Use classes{" "}
                    <code className="highlighter-rouge">.avatar-status</code> .
                  </p>
                  <div className="example">
                    <div className="avatar-list avatarstatus">
                      <img
                        className="avatar cover-image"
                        alt="user21"
                        src={U9}
                      />

                      <div className="avatar bradius cover-image">
                        <img
                          className="avatar cover-image"
                          alt="user5"
                          src={U5}
                        />
                        <span className="avatar-status bg-primary"></span>
                      </div>

                      <div className="avatar bradius cover-image">
                        <img
                          className="avatar cover-image"
                          alt="user9"
                          src={U8}
                        />
                        <span className="avatar-status bg-red"></span>
                      </div>

                      <div className="avatar bradius cover-image">
                        <img
                          className="avatar cover-image"
                          alt="user6"
                          src={U6}
                        />
                        <span className="avatar-status bg-green"></span>
                      </div>

                      <div className="avatar bradius cover-image">
                        <img
                          className="avatar cover-image"
                          alt="user7"
                          src={U7}
                        />
                        <span className="avatar-status bg-yellow"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col md={12} lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Avatar with Badges</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <p>
                    Use classes{" "}
                    <code className="highlighter-rouge">.avatar-badges</code> .
                  </p>
                  <div className="example">
                    <div className="avatar-list">
                      <div className="  avatar avatar-md bradius cover-image">
                        <img
                          className="avatar avatar-md cover-image"
                          alt="user5"
                          src={U5}
                        />
                        <span className="badge rounded-pill avatar-badges bg-primary fs-10">
                          3
                        </span>
                      </div>

                      <div className="  avatar avatar-md bradius cover-image">
                        <img
                          className="avatar avatar-md cover-image"
                          alt="user5"
                          src={U5}
                        />
                        <span className="badge rounded-pill avatar-badges bg-secondary fs-10">
                          1
                        </span>
                      </div>

                      <div className="  avatar avatar-md bradius cover-image">
                        <img
                          className="avatar avatar-md cover-image"
                          alt="user9"
                          src={U8}
                        />
                        <span className="badge rounded-pill avatar-badges bg-red fs-10">
                          4
                        </span>
                      </div>

                      <div className="  avatar avatar-md bradius cover-image">
                        <img
                          className="avatar avatar-md cover-image"
                          alt="user6"
                          src={U6}
                        />
                        <span className="badge rounded-pill avatar-badges bg-green fs-10">
                          6
                        </span>
                      </div>

                      <div className="  avatar avatar-md bradius cover-image">
                        <img
                          className="avatar avatar-md cover-image"
                          alt="user7"
                          src={U7}
                        />
                        <span className="badge rounded-pill avatar-badges bg-yellow  fs-10">
                          4
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-2 CLOSED --> */}

        {/* <!-- ROW-3 OPEN --> */}
        <Row>
          {/* <!-- COL END --> */}
          <Col md={12} lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Avatar with icons</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <p>
                    Use classes{" "}
                    <code className="highlighter-rouge">.avatar-icons</code> .
                  </p>
                  <div className="example">
                    <div className="avatar-list">
                      <div className="avatar avatar-xl cover-image">
                        <img
                          className="cover-image"
                          alt="user21"
                          src={U9}
                        />
                        <span className="badge rounded-pill avatar-icons bg-primary">
                          <i className="fe fe-edit fs-12"></i>
                        </span>
                      </div>

                      <div className="avatar avatar-xl cover-image">
                        <img
                          className="cover-image"
                          alt="user5"
                          src={U5}
                        />
                        <span className="badge rounded-pill avatar-icons bg-secondary">
                          <i className="fe fe-arrow-down fs-12"></i>
                        </span>
                      </div>

                      <div className="avatar avatar-xl cover-image">
                        <img
                          className="cover-image"
                          alt="user9"
                          src={U8}
                        />
                        <span className="badge rounded-pill avatar-icons bg-red">
                          <i className="fe fe-lock fs-12"></i>
                        </span>
                      </div>

                      <div className="avatar avatar-xl cover-image">
                        <img
                          className="cover-image"
                          alt="user6"
                          src={U6}
                        />
                        <span className="badge rounded-pill avatar-icons bg-green">
                          <i className="fe fe-camera fs-12"></i>
                        </span>
                      </div>

                      <div className="avatar avatar-xl cover-image">
                        <img
                          className="cover-image"
                          alt="user7"
                          src={U7}
                        />
                        <span className="badge rounded-pill avatar-icons bg-green">
                          <i className="fe fe-bell fs-12"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col md={12} lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Avatar size</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <p>
                      Use classes{" "}
                      <code className="highlighter-rouge">.avatar-sm</code> ,{" "}
                      <code className="highlighter-rouge">.avatar-md</code> ,{" "}
                      <code className="highlighter-rouge">.avatar-lg</code> ,{" "}
                      <code className="highlighter-rouge">.avatar-xl</code> ,{" "}
                      <code className="highlighter-rouge">.avatar-xxl</code> .
                    </p>
                    <div className="avatar-list">
                      <img
                        className="avatar avatar-sm cover-image"
                        alt="user4"
                        src={U4}
                      />
                      <img
                        className="avatar cover-image"
                        alt="user3"
                        src={U3}
                      />
                      <img
                        className="avatar avatar-md cover-image"
                        alt="user5"
                        src={U5}
                      />
                      <img
                        className="avatar avatar-lg cover-image"
                        alt="user6"
                        src={U6}
                      />
                      <img
                        className="avatar avatar-xl cover-image"
                        alt="user4"
                        src={U4}
                      />
                      <img
                        className="avatar avatar-xxl cover-image"
                        alt="user7"
                        src={U7}
                      />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col md={12} lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Avatar initials with colors</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-wrap">
                  <div className="example">
                    <p>
                      Use classes{" "}
                      <code className="highlighter-rouge">.avatar-sm</code> ,{" "}
                      <code className="highlighter-rouge">.avatar-md</code> ,{" "}
                      <code className="highlighter-rouge">.avatar-lg</code> ,{" "}
                      <code className="highlighter-rouge">.avatar-xl</code> ,{" "}
                      <code className="highlighter-rouge">.avatar-xxl</code> .
                    </p>
                    <div className="avatar-list">
                      <span className="avatar avatar-sm bg-success">A</span>
                      <span className="avatar bg-warning">B</span>
                      <span className="avatar avatar-md bg-danger">C</span>
                      <span className="avatar avatar-lg bg-info">D</span>
                      <span className="avatar avatar-xl bg-secondary">GE</span>
                      <span className="avatar avatar-xxl bg-primary">A.N</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <!-- ROW-3 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default AvatarSquare;
