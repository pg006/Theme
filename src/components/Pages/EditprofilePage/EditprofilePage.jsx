import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form, InputGroup, ListGroup } from "react-bootstrap";
import Select from "react-select";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import "./EditprofilePage.scss";
import { Current } from "../../../Data/Pages/DataEditProfilePages";
import U7 from "../../../assets/images/UserImages/U7.jpg";
import { DOBdata, DOMdata, DOYdata } from "./Mock";

const EditprofilePage = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Edit Profile"
          active="Edit Profile"
          items={["Pages"]}
        />
        {/* <!-- ROW-1 OPEN --> */}
        <Row>
          <Col xl={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg={6} md={12}>
                    <Form.Group>
                      <Form.Label htmlFor="exampleInputname">
                        First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="exampleInputname"
                        placeholder="First Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={12}>
                    <Form.Group>
                      <Form.Label htmlFor="exampleInputname1">
                        Last Name
                      </Form.Label>

                      <Form.Control
                        type="text"
                        id="exampleInputname1"
                        placeholder="Enter Last Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={12}>
                    <Form.Group>
                      <Form.Label htmlFor="exampleInputEmail1">
                        Email address
                      </Form.Label>

                      <Form.Control
                        type="email"
                        id="exampleInputEmail1"
                        placeholder="Email address"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={12}>
                    <Form.Group>
                      <Form.Label htmlFor="exampleInputnumber">
                        Contact Number
                      </Form.Label>

                      <Form.Control
                        type="number"
                        id="exampleInputnumber"
                        placeholder="Contact number"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>About Me</Form.Label>
                  <Form.Control
                    as="textarea"
                    className="form-control"
                    defaultValue="My bio........."
                    rows={6}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Website</Form.Label>
                  <Form.Control placeholder="http://splink.com" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date Of Birth</Form.Label>
                  <Row>
                    <Col md={4} className="mb-2">
                      <Select
                        classNamePrefix="Select"
                        options={DOBdata}
                        placeholder="Date"
                      />
                    </Col>
                    <Col md={4} className="mb-2">
                      <Select
                        classNamePrefix="Select"
                        options={DOMdata}
                        placeholder="Date"
                      />
                    </Col>
                    <Col md={4} className="mb-2">
                      <Select
                        classNamePrefix="Select"
                        options={DOYdata}
                        placeholder="Year"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Card.Body>
              <Card.Footer className="text-end">
                <Link to="#" className="btn btn-success me-2">
                  Save
                </Link>
                <Link to="#" className="btn btn-danger me-2">
                  Cancel
                </Link>
              </Card.Footer>
            </Card>
            <Row>
              <Col lg={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Notifications</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form.Group className="mg-b-10 ">
                      <Form.Check
                        label="Updates Automatically"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                        defaultChecked
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Allow Location Map"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Show Contacts"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                        defaultChecked
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Show Notfication"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                        defaultChecked
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Show Tasks Statistics"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Show Email Notification"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                        defaultChecked
                      ></Form.Check>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Col>
              <div className="col-lg-6">
                <Card>
                  <Card.Header>
                    <div className="card-title">Privacy and Security</div>
                  </Card.Header>
                  <Card.Body>
                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Allow Others to see my profile"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                        defaultChecked
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Make my profile Public"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Security Alert"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Passcode and Face ID"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                        defaultChecked
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Two Step Verification"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                      ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mg-b-10">
                      <Form.Check
                        label="Always Sign In"
                        type="switch"
                        className="custom-switch ps-0 mg-b-10"
                        defaultChecked
                      ></Form.Check>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </div>
            </Row>
            <Card>
              <Card.Header>
                <Card.Title>Delete Account</Card.Title>
              </Card.Header>
              <Card.Body>
                <p>
                  Its Advisable for you to request your data to be sent to your
                  Email.
                </p>
                <Form.Label className="custom-control custom-checkbox mb-0">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    Yes, Send my data to my Email.
                  </span>
                </Form.Label>
              </Card.Body>
              <Card.Footer className="text-end">
                <Link to="#" className="btn btn-primary my-1 me-2">
                  Deactivate
                </Link>
                <Link to="#" className="btn btn-danger my-1 me-2">
                  Delete Account
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={12}>
            <Card>
              <Card.Header>
                <Card.Title>Edit Password</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg={3} md={12} sm={12}>
                    <div className="text-center chat-image">
                      <div className="avatar avatar-xxl chat-profile mb-3 brround">
                        <Link
                          className=""
                          to={`${process.env.PUBLIC_URL}/pages/profile`}
                        >
                          <img alt="avatar" src={U7} className="brround" />
                        </Link>
                      </div>
                      <div className="main-chat-msg-name">
                        <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                          <h5 className="mb-1 text-dark fw-semibold">
                            Olivia Smith
                          </h5>
                        </Link>
                        <p className="text-muted mt-0 mb-0 pt-0 fs-13">
                          Web Designer
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Current />
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Form.Group>
                      <Form.Label>New Password</Form.Label>
                      <InputGroup
                        className="wrap-input100 validate-input"
                        id="Password-toggle1"
                      >
                        <Link
                          to="#"
                          className="input-group-text bg-white text-muted"
                        >
                          <i
                            className="zmdi zmdi-eye text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <Form.Control
                          className="input100"
                          type="password"
                          placeholder="New Password"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>
                      <InputGroup
                        className="wrap-input100 validate-input"
                        id="Password-toggle2"
                      >
                        <Link
                          to="#"
                          className="input-group-text bg-white text-muted"
                        >
                          <i
                            className="zmdi zmdi-eye text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <Form.Control
                          className="input100"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-end">
                <Link to="#" className="btn btn-primary me-2">
                  Update
                </Link>
                <Link to="#" className="btn btn-danger me-2">
                  Cancel
                </Link>
              </Card.Footer>
            </Card>
            <Card className="panel-theme">
              <Card.Header>
                <div className="float-start">
                  <Card.Title as="h3">Contact</Card.Title>
                </div>
                <div className="clearfix"></div>
              </Card.Header>
              <Card.Body className="no-padding">
                <ListGroup className="no-margin d-flex">
                  <ListGroup.Item className="d-flex ps-3">
                    <div className="social social-profile-buttons me-2">
                      <Link className="social-icon text-primary" to="">
                        <i className="fe fe-mail"></i>
                      </Link>
                    </div>
                    <span className="my-auto">support@demo.com</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex ps-3">
                    <div className="social social-profile-buttons me-2">
                      <Link className="social-icon text-primary" to="#">
                        <i className="fe fe-globe"></i>
                      </Link>
                    </div>
                    <span className="my-auto">www.abcd.com</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex ps-3">
                    <div className="social social-profile-buttons me-2">
                      <Link className="social-icon text-primary" to="#">
                        <i className="fe fe-phone"></i>
                      </Link>
                    </div>
                    <span className="my-auto">+125 5826 3658</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default EditprofilePage;
