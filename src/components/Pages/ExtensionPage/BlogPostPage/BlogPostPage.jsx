import React from "react";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { Row, Form, Card, Button, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./BlogPostPage.scss";
import { FormTextEditor } from "../../../../Data/Pages/Forms/DataFormEditor";
import { FileuploadCustomised } from "../../../../Data/Pages/Forms/FormAdvanceData/DataFormAdvanced";
import { ProfessionalWriters, RecentPost, Tech } from "./Mock";

const BlogPostPage = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Blog Post" active="Blog Post" items={["Pages"]} />

        {/* <!-- Row --> */}

        <Row>
          <Col xl={12}>
            <Card>
              <Card.Header>
                <Card.Title>Add New Post</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row className="mb-4">
                  <Form.Label className="col-md-3">Post Title :</Form.Label>
                  <div className="">
                    <Form.Control type="text" defaultValue="Typing....." />
                  </div>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-md-3">Categories :</Form.Label>
                  <div className="">
                    <Select
                      classNamePrefix="Select"
                      options={Tech}
                      placeholder="Technology"
                    />
                  </div>
                </Row>

                {/* <!-- Row --> */}
                <Row>
                  <Form.Label className="col-md-3 mb-4">
                    Post Description :
                  </Form.Label>
                  <div className="border mb-4">
                    {/* <textarea className="content" name="example"></textarea> */}
                    <FormTextEditor />
                  </div>
                </Row>

                {/* <!--End Row--> */}

                <Form.Group className="mb-0">
                  <Form.Label className="col-md-3 mb-4">
                    File Upload :
                  </Form.Label>
                  {/* <input id="demo" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple /> */}
                  <FileuploadCustomised />
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Post</Button>
                <Button variant="default" className="float-end">
                  Discard
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={12}>
            <Card>
              <Card.Header>
                <Card.Title>Recent Posts</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  {RecentPost.map((val, index) => {
                    return (
                      <Col xl={6} key={index}>
                        <div className="d-flex overflow-visible mt-5">
                          <img
                            className="card-aside-column br-5 cover-image"
                            alt="media19"
                            src={val.img}
                          />
                          <div className="ps-3 flex-column">
                            {val.badge ? (
                              <Badge bg="danger" className="me-1 mb-1 mt-1">
                                {val.badge}
                              </Badge>
                            ) : null}
                            <h4>
                              <Link
                                to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}
                              >
                                {val.title}
                              </Link>
                            </h4>
                            <div className="text-muted">{val.details}</div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12}>
            <Card>
              <Card.Header>
                <Card.Title>Professional Blog Writers</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  {ProfessionalWriters.map((val, index) => {
                    return (
                      <Col xl={6} key={index}>
                        <div className="d-flex overflow-visible mt-5">
                          <img
                            className="avatar bradius avatar-xl me-3"
                            src={val.img}
                            alt="avatar-img"
                          />
                          <div className="media-body valign-middle">
                            <Link
                              to={`${process.env.PUBLIC_URL}/pages/profile`}
                              className="fw-semibold text-dark"
                            >
                              {val.name}
                            </Link>
                            <p className="text-muted mb-0">{val.text}</p>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default BlogPostPage;
