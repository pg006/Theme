import React from "react";
import {
  Breadcrumb,
  Row,
  Col,
  Card,
  Pagination,
  FormControl,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogsPage.scss";
import { RecentPost, blogData } from "./Mock";

const BlogsPage = () => {
  return (
    <React.Fragment>
      <div className="page-header-bg px-3">
        {/* <!-- PAGE-HEADER --> */}
        <div className="page-header">
          <h1 className="page-title">Blog Page</h1>
          <div>
            <Breadcrumb>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/extension/blogpost`}
                className="btn btn-primary"
              >
                <i className="fa fa-plus-square me-2"></i>Add Post
              </Link>
            </Breadcrumb>
          </div>
        </div>
      </div>
      {/* <!-- PAGE-HEADER END --> */}

      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        {blogData.map((val, index) => {
          return (
            <Col sm={12} md={12} lg={6} xl={4} key={index}>
              <Card>
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}
                >
                  <img
                    className="card-img-top"
                    src={val.img}
                    alt="And this isn't my nose. This is a false one."
                  />
                </Link>
                <Card.Body className="d-flex flex-column">
                  <h3>
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`}
                    >
                      {val.title}
                    </Link>
                  </h3>
                  <div className="text-muted">
                    To take a trivial example, which of us ever undertakes
                    laborious physical exerciser , except to obtain some
                    advantage from it...
                  </div>
                  <div className="d-flex align-items-center pt-5 mt-auto">
                    <img
                      className="avatar brround avatar-md me-3 cover-image"
                      alt="user 18"
                      src={val.profile}
                    />
                    <div>
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/profile`}
                        className="text-default"
                      >
                        {val.name}
                      </Link>
                      <small className="d-block text-muted">{val.time}</small>
                    </div>
                    <div className="ms-auto">
                      <Link
                        to="#"
                        className="icon d-none d-md-inline-block text-muted me-2"
                      >
                        <i className="fe fe-heart me-1 border brround"></i>
                      </Link>
                      <Link
                        to="#"
                        className="icon d-none d-md-inline-block text-muted"
                      >
                        <i className="fa fa-thumbs-o-up border brround"></i>
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <div className="mb-9">
          <div className="float-end">
            <Pagination>
              <Pagination.Item disabled>Prev</Pagination.Item>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
          </div>
        </div>
      </Row>
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Recent Posts</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                {RecentPost?.map((val, index) => {
                  return (
                    <Col sm={12} md={12} lg={6} xl={4} key={index}>
                      <div className="d-block d-sm-flex overflow-visible mt-5">
                        <img
                          className="card-aside-column br-5 cover-image w-100"
                          alt="media 19"
                          src={val.img}
                        />
                        <div className="ps-3 flex-column">
                          {val.badge && val.bg ? (
                            <Badge bg={val.bg} className="me-1 mb-1 mt-1">
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

          <Card>
            <Card.Body>
              <h4 className="fw-bold">NEVER MISS A POST !</h4>
              <p>Signup for free to get the latest posts.</p>
              <FormControl placeholder="Enter your name *" type="text" />
              <Button variant="danger" className="mt-5">
                Subscribe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}
    </React.Fragment>
  );
};

export default BlogsPage;
