import React from "react";
import { Button, Card, Col, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  TotalRevenue,
  SupportCost,
  TotalRequest,
  RequestsAnswered,
  Gallery,
} from "../../../Data/App/DataWidgest";
import "react-circular-progressbar/dist/styles.css";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import "./Widgets.scss";
import U4 from "../../../assets/images/UserImages/U4.jpg";
import U18 from "../../../assets/images/UserImages/U18.jpg";
import U19 from "../../../assets/images/UserImages/U19.jpg";
import U20 from "../../../assets/images/UserImages/U20.jpg";

const Widgets = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Widgets" active="Widgets" items={["Home"]} />
        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="text-center">
                  <small className="text-muted">New users</small>
                  <h2 className="mb-2 mt-0">5,897</h2>
                  <CircularProgressbar
                    className="mt-3 mb-3 chart-dropshadow-secondary w-25"
                    value={70}
                    styles={buildStyles({ pathColor: "#05c3fb" })}
                  />
                  <div className="chart-circle-value-3 text-secondary fs-20 mt-4">
                    <i className="icon icon-user-follow"></i>
                  </div>
                  <p className="mb-0 text-start">
                    <span className="dot-label bg-secondary me-2"></span>Monthly
                    users <span className="float-end">70%</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="widget text-center">
                  <small className="text-muted">Total Tax</small>
                  <h2 className="mb-2 mt-0">$10,543</h2>
                  <CircularProgressbar
                    className="mt-3 mb-3 chart-dropshadow-success w-25"
                    value={85}
                    styles={buildStyles({ pathColor: "#09ad95" })}
                  />
                  <div className="chart-circle-value-3 text-success fs-20">
                    <i className="icon icon-briefcase mt-4"></i>
                  </div>
                  <p className="mb-0 text-start">
                    <span className="dot-label bg-success me-2"></span>Monthly
                    Income <span className="float-end">$15,998</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="widget text-center">
                  <small className="text-muted">Total Profit</small>
                  <h2 className="mb-2 mt-0">$8,468</h2>
                  <CircularProgressbar
                    className="mt-3 mb-3 chart-dropshadow-warning w-25"
                    value={65}
                    styles={buildStyles({ pathColor: "#f7b731" })}
                  />
                  <div className="chart-circle-value-3 text-warning fs-20">
                    <i className="icon icon-chart mt-4"></i>
                  </div>
                  <p className="mb-0 text-start">
                    <span className="dot-label bg-warning me-2"></span>Monthly
                    Profit <span className="float-end">$10,588</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="widget text-center">
                  <small className="text-muted">Total Sales</small>
                  <h2 className="mb-2 mt-0">$9,999</h2>
                  <CircularProgressbar
                    className="mt-3 mb-3 chart-dropshadow-danger w-25"
                    value={75}
                    styles={buildStyles({ pathColor: "#e82646" })}
                  />
                  <div className="chart-circle-value-3 text-danger fs-20">
                    <i className="icon icon-basket mt-4"></i>
                  </div>
                  <p className="mb-0 text-start">
                    <span className="dot-label bg-danger me-2"></span>Monthly
                    Sales <span className="float-end">$5,997</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}

        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card className="bg-secondary img-card box-secondary-shadow">
              <Card.Body>
                <div className="d-flex">
                  <div className="text-white">
                    <h2 className="mb-0 number-font">17,865</h2>
                    <p className="text-white mb-0">Total Followers </p>
                  </div>
                  <div className="ms-auto">
                    <i className="fa fa-user-o text-white fs-30 me-2 mt-2"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card className="bg-success img-card box-success-shadow">
              <Card.Body>
                <div className="d-flex">
                  <div className="text-white">
                    <h2 className="mb-0 number-font">99,909</h2>
                    <p className="text-white mb-0">Total Likes</p>
                  </div>
                  <div className="ms-auto">
                    <i className="fa fa-heart-o text-white fs-30 me-2 mt-2"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card className="bg-primary img-card box-primary-shadow">
              <Card.Body>
                <div className="d-flex">
                  <div className="text-white">
                    <h2 className="mb-0 number-font">777</h2>
                    <p className="text-white mb-0">Total Comments</p>
                  </div>
                  <div className="ms-auto">
                    <i className="fa fa-comment-o text-white fs-30 me-2 mt-2"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card className="bg-danger img-card box-danger-shadow">
              <Card.Body>
                <div className="d-flex">
                  <div className="text-white">
                    <h2 className="mb-0 number-font">999</h2>
                    <p className="text-white mb-0">Total Posts</p>
                  </div>
                  <div className="ms-auto">
                    <i className="fa fa-envelope-o text-white fs-30 me-2 mt-2"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}

        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={6} lg={6} md={12} xl={3}>
            <Card>
              <Row>
                <div className="col-4">
                  <div className="circle-icon bg-secondary text-center align-self-center box-secondary-shadow bradius overflow-hidden">
                    <img
                      src={
                        require("../../../assets/images/svgs/circle.svg")
                          .default
                      }
                      alt="img"
                      className="card-img-absolute"
                    />
                    <i className="lnr lnr-user fs-30  text-white mt-4"></i>
                  </div>
                </div>
                <div className="col-8">
                  <Card.Body className="p-4">
                    <h2 className="mb-2 fw-normal mt-2">11,128</h2>
                    <h5 className="fw-normal mb-0">Total Requests</h5>
                  </Card.Body>
                </div>
              </Row>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} lg={6} md={12} xl={3}>
            <Card>
              <Row>
                <div className="col-4">
                  <div className="card-img-absolute circle-icon bg-success align-items-center text-center box-success-shadow bradius overflow-hidden">
                    <img
                      src={
                        require("../../../assets/images/svgs/circle.svg")
                          .default
                      }
                      alt="img"
                      className="card-img-absolute"
                    />
                    <i className="lnr lnr-briefcase fs-30 text-white mt-4"></i>
                  </div>
                </div>
                <div className="col-8">
                  <Card.Body className="p-4">
                    <h2 className="mb-2 fw-normal mt-2">10,257</h2>
                    <h5 className="fw-normal mb-0">Total Revenue</h5>
                  </Card.Body>
                </div>
              </Row>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} lg={6} md={12} xl={3}>
            <Card>
              <Row>
                <div className="col-4">
                  <div className="card-img-absolute  circle-icon bg-primary align-items-center text-center box-primary-shadow bradius overflow-hidden">
                    <img
                      src={
                        require("../../../assets/images/svgs/circle.svg")
                          .default
                      }
                      alt="img"
                      className="card-img-absolute"
                    />
                    <i className="lnr lnr-gift fs-30 text-white mt-4"></i>
                  </div>
                </div>
                <div className="col-8">
                  <Card.Body className="p-4">
                    <h2 className="mb-2 fw-normal mt-2">$77,757</h2>
                    <h5 className="fw-normal mb-0">Total Profit</h5>
                  </Card.Body>
                </div>
              </Row>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} lg={6} md={12} xl={3}>
            <Card>
              <Row>
                <div className="col-4">
                  <div className="card-img-absolute circle-icon bg-danger align-items-center text-center box-danger-shadow bradius overflow-hidden">
                    <img
                      src={
                        require("../../../assets/images/svgs/circle.svg")
                          .default
                      }
                      alt="img"
                      className="card-img-absolute"
                    />
                    <i className=" lnr lnr-cart fs-30 text-white mt-4"></i>
                  </div>
                </div>
                <div className="col-8">
                  <Card.Body className="p-4">
                    <h2 className="mb-2 fw-normal mt-2">10,611</h2>
                    <h5 className="fw-normal mb-0">Total Sales</h5>
                  </Card.Body>
                </div>
              </Row>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}
        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card className="widgets-cards bg-secondary box-secondary-shadow">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <CircularProgressbar
                  className="chart-circle chart-circle-sm ms-3 mt-1"
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "#59d5fb",
                  })}
                  value={80}
                  text={`${80}%`}
                />

                <div className="wrp text-wrapper text-white p-3">
                  <p className="mt-0">$10,758</p>
                  <p className="mt-1 mb-0">This Week Orders</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card className="widgets-cards bg-success box-success-shadow">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <CircularProgressbar
                  className="chart-circle chart-circle-sm ms-3 mt-1"
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "#0e8c79",
                  })}
                  value={57}
                  text={`${57}%`}
                />

                <div className="wrp text-wrapper text-white p-3">
                  <p className="mt-0">9497</p>
                  <p className=" mt-1 mb-0">This Week Views</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card className="widgets-cards bg-warning box-warning-shadow">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <CircularProgressbar
                  className="chart-circle chart-circle-sm ms-3 mt-1"
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "#c68806",
                  })}
                  value={88}
                  text={`${88}%`}
                />
                <div className="wrp text-wrapper text-white p-3">
                  <p className="mt-0">$15,955</p>
                  <p className=" mt-1 mb-0">This Week Earnings</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={12} md={6} lg={6} xl={3}>
            <Card className="widgets-cards bg-danger box-danger-shadow">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <CircularProgressbar
                  className="chart-circle chart-circle-sm ms-3 mt-1"
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "#c21a1a",
                  })}
                  value={17}
                  text={`${17}%`}
                />
                <div className="wrp text-wrapper text-white p-3">
                  <p className="mt-0">155</p>
                  <p className=" mt-1 mb-0">This Week Comments</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}

        {/* <--<-- ROW OPEN -->--> */}
        <Row className="row-cards">
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Header className="pb-0 border-bottom-0">
                <Card.Title>Total Revenue</Card.Title>
                <div className="card-options">
                  <Link className="btn btn-sm btn-secondary" to="#">
                    <i className="fa fa-bar-chart mb-0"></i>
                  </Link>
                </div>
              </Card.Header>
              <Card.Body className="pt-0">
                <h3 className="d-inline-block mb-2">96,789</h3>
                <ProgressBar
                  className="h-2 mt-2 mb-2"
                  variant="secondary"
                  now={80}
                />
                <div className="float-start">
                  <div className="mt-2">
                    <i className="fa fa-caret-up text-secondary"></i>
                    <span className="mx-1">19% increase</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Header className="pb-0 border-bottom-0">
                <Card.Title>Total Requests</Card.Title>
                <div className="card-options">
                  <Link className="btn btn-sm btn-success" to="#">
                    <i className="fa fa-send-o mb-0"></i>
                  </Link>
                </div>
              </Card.Header>
              <Card.Body className="pt-0">
                <h3 className="d-inline-block mb-2">33,536</h3>
                <ProgressBar
                  className="h-2 mt-2 mb-2"
                  variant="success"
                  now={40}
                />
                <div className="float-start">
                  <div className="mt-2">
                    <i className="fa fa-caret-down text-success"></i>
                    <span className="mx-1">3.99% decrease</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Header className="pb-0 border-bottom-0">
                <Card.Title>Requests Answered</Card.Title>
                <div className="card-options">
                  <Link className="btn btn-sm btn-warning" to="#">
                    <i className="fa fa-mail-reply mb-0"></i>
                  </Link>
                </div>
              </Card.Header>
              <Card.Body className="pt-0">
                <h3 className="d-inline-block mb-2">52,784</h3>
                <ProgressBar
                  className="progress h-2 mt-2 mb-2"
                  variant="warning"
                  now={65}
                />
                <div className="float-start">
                  <div className="mt-2">
                    <i className="fa fa-caret-up text-warning"></i>
                    <span className="mx-1">15% increase</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Header className="pb-0 border-bottom-0">
                <Card.Title>Support Cost</Card.Title>
                <div className="card-options">
                  <Link className="btn btn-sm btn-danger" to="#">
                    <i className="fa fa-money mb-0"></i>
                  </Link>
                </div>
              </Card.Header>
              <Card.Body className="pt-0">
                <h3 className="d-inline-block mb-2">1563</h3>
                <ProgressBar
                  className="progress h-2 mt-2 mb-2"
                  variant="danger"
                  now={20}
                />
                <div className="float-start">
                  <div className="mt-2">
                    <i className="fa fa-caret-down text-danger"></i>
                    <span className="mx-1">5% decrease</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}

        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card className="overflow-hidden">
              <Card.Body className="pb-0">
                <div className="float-start">
                  <p className="mb-1">Total Revenue</p>
                  <h2 className="counter mb-0">12,765</h2>
                </div>
                <div className="float-end">
                  <span className="mini-stat-icon bg-secondary">
                    <i className="fa fa-bar-chart"></i>
                  </span>
                </div>
              </Card.Body>
              <Card.Body className="pt-0 pb-0 border-top-0 overflow-hidden">
                <div className="chart-wrapper overflow-hidden">
                  <TotalRevenue />
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body className="pb-0">
                <div className="float-start">
                  <p className="mb-1">Total Requests</p>
                  <h2 className="counter mb-0">5,678</h2>
                </div>
                <div className="float-end">
                  <span className="mini-stat-icon bg-success">
                    <i className="fa fa-send-o"></i>
                  </span>
                </div>
              </Card.Body>
              <Card.Body className="pt-0 pb-0 border-top-0 overflow-hidden">
                <div className="chart-wrapper">
                  <TotalRequest />
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body className="pb-0">
                <div className="float-start">
                  <p className="mb-1">Requests Answered</p>
                  <h2 className="counter mb-0">2,243</h2>
                </div>
                <div className="float-end">
                  <span className="mini-stat-icon bg-warning">
                    <i className="fa fa-mail-reply"></i>
                  </span>
                </div>
              </Card.Body>
              <Card.Body className="pt-0 pb-0 border-top-0 overflow-hidden">
                <div className="chart-wrapper">
                  <RequestsAnswered />
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body className="pb-0">
                <div className="float-start">
                  <p className="mb-1">Support Cost</p>
                  <h2 className="counter mb-0">9,999</h2>
                </div>
                <div className="float-end">
                  <span className="mini-stat-icon bg-danger">
                    <i className="fa fa-money"></i>
                  </span>
                </div>
              </Card.Body>
              <Card.Body className="pt-0 pb-0 border-top-0 overflow-hidden">
                <div className="chart-wrapper">
                  <SupportCost />
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}

        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body className="text-center">
                <i className="fa fa-dollar text-secondary fa-3x"></i>
                <h6 className="mt-4 mb-2">Cost per Click</h6>
                <h2 className="mb-2  number-font">$55,516</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis accusantium doloremque
                </p>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body className="text-center">
                <i className="fa fa-comment-o text-success fa-3x"></i>
                <h6 className="mt-4 mb-2">Investment</h6>
                <h2 className="mb-2 number-font">90%</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis accusantium doloremque
                </p>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body className="text-center">
                <i className="fa fa-firefox text-primary fa-3x"></i>
                <h6 className="mt-4 mb-2">Total Visit</h6>
                <h2 className="mb-2 number-font">999</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis accusantium doloremque
                </p>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body className="text-center">
                <i className="fa fa-pie-chart text-danger fa-3x"></i>
                <h6 className="mt-4 mb-2">Revenue</h6>
                <h2 className="mb-2  number-font">80k</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis accusantium doloremque
                </p>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}
        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="card-widget">
                  {/* <!-- <h6 className="mb-2">Total Tax</h6> --> */}
                  <h2 className="text-end">
                    <i className="mdi mdi-eye icon-size float-start text-secondary text-secondary-shadow border-solid border-secondary brround p-3"></i>
                    <span>1,299</span>
                  </h2>
                  <p className="mb-0 pt-5">
                    This Week Views<span className="float-end">35%</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="card-widget">
                  {/* <!-- <h6 className="mb-2">Total Sales</h6> --> */}
                  <h2 className="text-end">
                    <i className="mdi mdi-comment-account-outline icon-size float-start text-success text-success-shadow border-solid border-success brround p-3"></i>
                    <span>9,999</span>
                  </h2>
                  <p className="mb-0 pt-5">
                    This Week Comments<span className="float-end">789</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="card-widget">
                  {/* <!-- <h6 className="mb-2">Total Profit</h6> --> */}
                  <h2 className="text-end">
                    <i className="icon-size mdi mdi-currency-usd float-start text-primary text-primary-shadow border-solid border-primary brround p-3"></i>
                    <span>$12,987</span>
                  </h2>
                  <p className="mb-0 pt-5">
                    This Week Earnings<span className="float-end">74%</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="card-order">
                  {/* <!-- <h6 className="mb-2">Orders</h6> --> */}
                  <h2 className="text-end">
                    <i className="fa fa-cart-plus icon-size float-start text-danger text-danger-shadow border-danger brround p-3"></i>
                    <span>$27,543</span>
                  </h2>
                  <p className="mb-0 pt-5">
                    This Week Orders<span className="float-end">60%</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <!-- ROW END --> */}
        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={6} xl={3} md={6} lg={6}>
            <Card className="overflow-hidden">
              <Card.Body className="text-center">
                <h6 className="">
                  <span className="text-secondary">
                    <i className="fe fe-users mx-2 fs-20 text-secondary-shadow"></i>
                  </span>
                  Total Employees
                </h6>
                <h3 className="text-dark counter mt-0 mb-3 number-font">
                  2,897
                </h3>
                <ProgressBar
                  className="h-1 mt-0 mb-2"
                  variant="secondary"
                  now={50}
                />
                <Row className="mt-4">
                  <Col className="text-center">
                    <span className="text-muted">Male</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">378</h4>
                  </Col>
                  <Col className="text-center">
                    <span className="text-muted">Female</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">689</h4>
                  </Col>
                  <Col className="text-center">
                    <span className="text-muted">Total</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">1,069</h4>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={3} md={6} lg={6}>
            <Card className="overflow-hidden">
              <Card.Body className="text-center">
                <h6 className="">
                  <span className="text-success">
                    <i className="fe fe-award mx-2 fs-20 text-success-shadow"></i>
                  </span>
                  Ongoing Projects
                </h6>
                <h3 className="text-dark counter mt-0 mb-3 number-font">
                  1,567
                </h3>
                <ProgressBar
                  className="h-1 mt-0 mb-2"
                  variant="success"
                  now={60}
                />
                <Row className="mt-4">
                  <Col className="text-center">
                    <span className="text-muted">Weekly</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">5</h4>
                  </Col>
                  <Col className="text-center">
                    <span className="text-muted">Monthly</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">20</h4>
                  </Col>
                  <Col className="text-center">
                    <span className="text-muted">Total</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">25</h4>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={3} md={6} lg={6}>
            <Card>
              <Card.Body className="text-center">
                <h6 className="">
                  <span className="text-primary">
                    <i className="fe fe-file-text mx-2 fs-20 text-primary-shadow"></i>
                  </span>
                  Total Projects
                </h6>
                <h3 className="text-dark counter mt-0 mb-3 number-font">
                  7,896
                </h3>
                <ProgressBar
                  className="h-1 mt-0 mb-2"
                  variant="primary"
                  now={70}
                />
                <Row className="mt-4">
                  <Col className="text-center">
                    <span className="text-muted">Weekly</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">8</h4>
                  </Col>
                  <Col className="text-center">
                    <span className="text-muted">Monthly</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font2">23</h4>
                  </Col>
                  <Col className="text-center">
                    <span className="text-muted">Total</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font3">31</h4>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={3} md={6} lg={6}>
            <Card className="overflow-hidden">
              <Card.Body className="text-center">
                <h6 className="">
                  <span className="text-danger">
                    <i className="fe fe-tag mx-2 fs-20 text-danger-shadow"></i>
                  </span>
                  Total Tasks
                </h6>
                <h3 className="text-dark counter mt-0 mb-3 number-font">
                  4,293
                </h3>
                <ProgressBar
                  className="h-1 mt-0 mb-2"
                  variant="danger"
                  now={40}
                />
                <Row className="mt-4">
                  <Col className="text-center">
                    <span className="text-muted">Weekly</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">35</h4>
                  </Col>
                  <Col className="text-center">
                    <span className="text-muted">Monthly</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">56</h4>
                  </Col>
                  <Col className="text-center">
                    <span className="text-muted">Total</span>
                    <h4 className="fw-normal mt-2 mb-0 number-font1">91</h4>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}

        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={12} xl={6} md={12} lg={6} className="p-l-0 p-r-0">
            <Card>
              <Card.Header className="text-center">
                <Card.Title>Projects</Card.Title>
              </Card.Header>
              <Card.Body>
                <CircularProgressbar
                  className="mx-auto chart-circle chart-circle-md mt-3 mb-4 text-center"
                  styles={buildStyles({ pathColor: "#6c5ffc" })}
                  value={70}
                />
                <div className="text-center mt-3">
                  <h3>Average Sales</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam velit quisquam veniam excepturi.
                  </p>
                  <Col className="p-1 mt-2">
                    <div className="float-start">
                      <h3 className="ms-5">
                        <i className="fa fa-caret-up fa-1x text-primary me-1"></i>
                        $3.2
                      </h3>
                      <h6 className="ms-5 pb-0 mb-0">last month</h6>
                    </div>
                    <div className="float-end">
                      <h3 className="me-5">
                        <i className="fa fa-caret-up fa-1x text-primary me-1"></i>
                        $2.4
                      </h3>
                      <h6 className="me-5 mt-0 mb-0">last year</h6>
                    </div>
                  </Col>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={12} xl={6} md={12} lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Visitors</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="media mb-5 mt-0">
                  <div className="d-flex me-3">
                    <Link to="#">
                      <img
                        className="media-object rounded-circle thumb-sm"
                        alt="64x64"
                        src={U18}
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <Link to="#" className="text-dark">
                      Nathaniel Bustos
                    </Link>
                    <div className="text-muted small">Manager</div>
                  </div>
                  <Button variant="primary" className="btn-sm d-block">
                    Follow
                  </Button>
                </div>
                <div className="media mb-5">
                  <div className="d-flex me-3">
                    <Link to="#">
                      <img
                        className="media-object rounded-circle thumb-sm"
                        alt="64x64"
                        src={U4}
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <Link to="#" className="text-dark">
                      Latanya Kinard
                    </Link>
                    <div className="text-muted small">Web Designer</div>
                  </div>
                  <Button variant="blue" className="btn-sm d-block">
                    Follow
                  </Button>
                </div>
                <div className="media mb-5">
                  <div className="d-flex me-3">
                    <Link to="#">
                      <img
                        className="media-object rounded-circle thumb-sm"
                        alt="64x64"
                        src={U20}
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <Link to="#" className="text-dark">
                      George Lujan
                    </Link>
                    <div className="text-muted small">Founder</div>
                  </div>
                  <Button variant="warning" className="btn-sm d-block">
                    Follow
                  </Button>
                </div>
                <div className="media mb-5">
                  <div className="d-flex me-3">
                    <Link to="#">
                      <img
                        className="media-object rounded-circle thumb-sm"
                        alt="64x64"
                        src={U4}
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <Link to="#" className="text-dark">
                      Rose Bush
                    </Link>
                    <div className="text-muted small">Web Designer</div>
                  </div>
                  <Button variant="secondary" className="btn-sm d-block">
                    Follow
                  </Button>
                </div>
                <div className="media mb-0">
                  <div className="d-flex me-3">
                    <Link to="#">
                      <img
                        className="media-object rounded-circle thumb-sm"
                        alt="64x64"
                        src={U19}
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <Link to="#" className="text-dark">
                      Samantha
                    </Link>
                    <div className="text-muted small">Manager</div>
                  </div>
                  <Button variant="danger" className="btn-sm d-block">
                    Follow
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={12} xl={6} md={12} lg={6} className="col-lg-4 col-md-4">
            <Card>
              <Card.Header>
                <Card.Title>Skill Set</Card.Title>
              </Card.Header>
              <Card.Body className="mt-0">
                <div className="chats-wrap media-list">
                  <div className="chat-details mb-1 p-3">
                    <h4 className="mb-0">
                      <span className="h5 fw-normal">Html</span>
                      <span className="float-end p-1  btn btn-sm text-default">
                        <b>85</b>%
                      </span>
                    </h4>
                    <ProgressBar
                      className="progress-sm mt-3"
                      variant="primary"
                      now={80}
                    />
                  </div>
                  <div className="chat-details mb-1 p-3">
                    <h4 className="mb-0">
                      <span className="h5 fw-normal"> Wordpress</span>
                      <span className="float-end p-1  btn btn-sm text-default">
                        <b>46</b>%
                      </span>
                    </h4>
                    <ProgressBar
                      className="progress-sm mt-3"
                      striped
                      variant="success"
                      now={45}
                    />
                  </div>
                  <div className="chat-details mb-1 p-3">
                    <h4 className="mb-0">
                      <span className="h5 fw-normal"> jQuery</span>
                      <span className="float-end p-1  btn btn-sm text-default">
                        <b>56</b>%
                      </span>
                    </h4>
                    <ProgressBar
                      className="progress-sm mt-3"
                      striped
                      variant="warning"
                      now={65}
                    />
                  </div>
                  <div className="chat-details mb-1 p-3">
                    <h4 className="mb-0">
                      <span className="h5 fw-normal"> Photoshop</span>
                      <span className="float-end p-1  btn btn-sm text-default">
                        <b>90</b>%
                      </span>
                    </h4>
                    <ProgressBar
                      className="progress-sm mt-3"
                      striped
                      variant="danger"
                      now={75}
                    />
                  </div>
                  <div className="chat-details mb-0 p-3">
                    <h4 className="mb-0">
                      <span className="h5 fw-normal">Angular js</span>
                      <span className="float-end p-1  btn btn-sm text-default">
                        <b>30</b>%
                      </span>
                    </h4>
                    <ProgressBar
                      className="progress-sm mt-3"
                      striped
                      variant="info"
                      now={35}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col sm={12} xl={6} md={12} lg={6}>
            <Card>
              <Card.Header className="border-bottom">
                <Card.Title as="h5">Sales Summary</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row className="clearfix mb-4">
                  <Col>
                    <div className="float-start">
                      <h5 className="mb-0">
                        <strong>Total Revenue</strong>
                      </h5>
                      <small className="text-muted">weekly profit</small>
                    </div>
                  </Col>
                  <Col>
                    <div className="float-end">
                      <h4 className="fw-bold mb-0 mt-2 text-blue">$15300</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="clearfix mb-4">
                  <Col>
                    <div className="float-start">
                      <h5 className="mb-0">
                        <strong>Total Tax</strong>
                      </h5>
                      <small className="text-muted">weekly profit</small>
                    </div>
                  </Col>
                  <Col>
                    <div className="float-end">
                      <h4 className="fw-bold mt-2 mb-0 text-success">$1625</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="clearfix mb-4">
                  <Col>
                    <div className="float-start">
                      <h5 className="mb-0">
                        <strong>Total Income</strong>
                      </h5>
                      <small className="text-muted">weekly profit</small>
                    </div>
                  </Col>
                  <Col>
                    <div className="float-end">
                      <h4 className="fw-bold mt-2 mb-0 text-warning">70%</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="clearfix mb-4">
                  <Col>
                    <div className="float-start">
                      <h5 className="mb-0">
                        <strong>Total Income</strong>
                      </h5>
                      <small className="text-muted">weekly profit</small>
                    </div>
                  </Col>
                  <Col>
                    <div className="float-end">
                      <h4 className="fw-bold mt-2 mb-0 text-danger">50%</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="clearfix mb-4">
                  <Col>
                    <div className="float-start">
                      <h5 className="mb-0">
                        <strong>Total Loss</strong>
                      </h5>
                      <small className="text-muted">weekly profit</small>
                    </div>
                  </Col>
                  <Col>
                    <div className="float-end">
                      <h4 className="fw-bold mt-2 mb-0 text-info">30%</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="clearfix mb-5">
                  <Col>
                    <div className="float-start">
                      <h5 className="mb-0">
                        <strong>Total Loss</strong>
                      </h5>
                      <small className="text-muted">weekly profit</small>
                    </div>
                  </Col>
                  <Col>
                    <div className="float-end">
                      <h4 className="fw-bold mt-2 mb-0 text-info">30%</h4>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}

        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col sm={12} xl={12} md={12} lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>Best Pictures for Today</Card.Title>
              </Card.Header>
              <Card.Body className="p-2">
                <div>
                  {/* <!-- GALLERY DEMO OPEN --> */}
                  <Gallery />
                  {/* <!-- GALLERY DEMO CLOSED --> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}
      </div>
    </React.Fragment>
  );
};

export default Widgets;
