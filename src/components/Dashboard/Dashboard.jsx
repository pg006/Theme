import React from "react";
import {
  Card,
  Col,
  OverlayTrigger,
  ProgressBar,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../commonComponents/PageHeader/PageHeader";
import { RecentOrder, Worldmap } from "../../Data/DataDashboard/DataDashboard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { DashboardChart } from "../../Data/DataChart/DataApexChart";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Dashboard" active="Dashboard" items={["Home"]} />
        {/* <--<-- ROW START -->--> */}
        <Row>
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="text-center">
                  <small className="text-muted">New users</small>
                  <h2 className="mb-2 mt-0">6,997</h2>
                  <CircularProgressbar
                    className="mt-3 mb-3 chart-dropshadow-secondary w-25"
                    value={65}
                    styles={buildStyles({ pathColor: "#05c3fb" })}
                  />
                  <div className="chart-circle-value-3 text-secondary fs-20 mt-4">
                    <i className="icon icon-user-follow"></i>
                  </div>
                  <p className="mb-0 text-start">
                    <span className="dot-label bg-secondary me-2"></span>Monthly
                    users <span className="float-end">65%</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="widget text-center">
                  <small className="text-muted">Total Tax</small>
                  <h2 className="mb-2 mt-0">$10,993</h2>
                  <CircularProgressbar
                    className="mt-3 mb-3 chart-dropshadow-success w-25"
                    value={55}
                    styles={buildStyles({ pathColor: "#09ad95" })}
                  />
                  <div className="chart-circle-value-3 text-success fs-20">
                    <i className="icon icon-briefcase mt-4"></i>
                  </div>
                  <p className="mb-0 text-start">
                    <span className="dot-label bg-success me-2"></span>Monthly
                    Income <span className="float-end">$11,998</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="widget text-center">
                  <small className="text-muted">Total Profit</small>
                  <h2 className="mb-2 mt-0">$29,998</h2>
                  <CircularProgressbar
                    className="mt-3 mb-3 chart-dropshadow-warning w-25"
                    value={85}
                    styles={buildStyles({ pathColor: "#f7b731" })}
                  />
                  <div className="chart-circle-value-3 text-warning fs-20">
                    <i className="icon icon-chart mt-4"></i>
                  </div>
                  <p className="mb-0 text-start">
                    <span className="dot-label bg-warning me-2"></span>Monthly
                    Profit <span className="float-end">$5,588</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <-- COL END --> */}
          <Col sm={6} md={6} lg={6} xl={3}>
            <Card>
              <Card.Body>
                <div className="widget text-center">
                  <small className="text-muted">Total Sales</small>
                  <h2 className="mb-2 mt-0">$58,599</h2>
                  <CircularProgressbar
                    className="mt-3 mb-3 chart-dropshadow-danger w-25"
                    value={65}
                    styles={buildStyles({ pathColor: "#e82646" })}
                  />
                  <div className="chart-circle-value-3 text-danger fs-20">
                    <i className="icon icon-basket mt-4"></i>
                  </div>
                  <p className="mb-0 text-start">
                    <span className="dot-label bg-danger me-2"></span>Monthly
                    Sales <span className="float-end">$15,197</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <-- COL END --> */}
        </Row>
        {/* <--<-- ROW END -->--> */}

        {/* <--<-- ROW START -->--> */}
        <Row>
          <Col sm={12} md={12} lg={12} xl={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Sales Analytics</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="chartjs-wrapper-demo myChartSaah">
                  <DashboardChart />
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- COL END --> */}
          <Col md={12} sm={12} lg={12} xl={6}>
            <Card className="overflow-hidden">
              <Card.Body className="pb-0 bg-recentorder">
                <Card.Title as="h3" className="text-white">
                  Recent Orders
                </Card.Title>
                <div className="chartjs-wrapper-demo">
                  <RecentOrder />
                </div>
              </Card.Body>
              <div id="flotback-chart" className="flot-background"></div>
              <Card.Body>
                <div className="d-flex mb-4 mt-3">
                  <div className="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3">
                    <i className="fe fe-check"></i>
                  </div>
                  <div className="">
                    <h6 className="mb-1 fw-semibold">Received Orders</h6>
                    <p className="fw-normal fs-12">
                      <span className="text-success me-1">9.5%</span>
                      increased
                    </p>
                  </div>
                  <div className=" ms-auto my-auto">
                    <p className="fw-bold fs-20"> 9,768 </p>
                  </div>
                </div>
                <div className="d-flex mb-4 mt-3">
                  <div className="avatar avatar-md bg-pink-transparent text-pink bradius me-3">
                    <i className="fe fe-truck"></i>
                  </div>
                  <div className="">
                    <h6 className="mb-1 fw-semibold">Delivered Orders</h6>
                    <p className="fw-normal fs-12">
                      <span className="text-success me-1">3.5%</span>
                      increased
                    </p>
                  </div>
                  <div className=" ms-auto my-auto">
                    <p className="fw-bold fs-20"> 1,768 </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="avatar  avatar-md bg-primary-transparent text-primary bradius me-3">
                    <i className="fe fe-x"></i>
                  </div>
                  <div className="">
                    <h6 className="mb-1 fw-semibold">Cancelled Orders</h6>
                    <p className="fw-normal fs-12">
                      <span className="text-success me-1">1.2%</span>
                      increased
                    </p>
                  </div>
                  <div className=" ms-auto my-auto">
                    <p className="fw-bold fs-20 mb-0"> 3,675 </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} md={12} sm={12} lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3" className="fw-semibold">
                  Browser Usage
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="browser-stats">
                  <Row className="mb-4">
                    <Col sm={2} lg={1} md={1} xl={2} className="mb-sm-0 mb-3">
                      <img
                        src={
                          require("../../assets/images/browsers/chrome.svg")
                            .default
                        }
                        className="img-fluid"
                        alt="img"
                      />
                    </Col>
                    <Col sm={10} lg={11} md={11} xl={10} className="ps-sm-0">
                      <div className="d-flex align-items-end justify-content-between mb-1">
                        <h6 className="mb-1">Chrome</h6>
                        <h6 className="fw-semibold mb-1">
                          45,555
                          <span className="text-success fs-11">
                            (<i className="fe fe-arrow-up"></i>15.55%)
                          </span>
                        </h6>
                      </div>
                      <ProgressBar
                        variant="pink"
                        className="h-2 mb-3 "
                        now={80}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={2} lg={1} md={1} xl={2} className="mb-sm-0 mb-3">
                      <img
                        src={
                          require("../../assets/images/browsers/firefox.svg")
                            .default
                        }
                        className="img-fluid"
                        alt="img"
                      />
                    </Col>
                    <Col sm={10} lg={11} md={11} xl={10} className="ps-sm-0">
                      <div className="d-flex align-items-end justify-content-between mb-1">
                        <h6 className="mb-1">Firefox</h6>
                        <h6 className="fw-semibold mb-1">
                          24,635
                          <span className="text-danger fs-11">
                            (<i className="fe fe-arrow-down"></i>11.63%)
                          </span>
                        </h6>
                      </div>
                      <ProgressBar
                        variant="danger"
                        className="h-2 mb-3 "
                        now={60}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={2} lg={1} md={1} xl={2} className="mb-sm-0 mb-3">
                      <img
                        src={
                          require("../../assets/images/browsers/safari.svg")
                            .default
                        }
                        className="img-fluid"
                        alt="img"
                      />
                    </Col>
                    <Col sm={10} lg={11} md={11} xl={10} className="ps-sm-0">
                      <div className="d-flex align-items-end justify-content-between mb-1">
                        <h6 className="mb-1">Safari</h6>
                        <h6 className="fw-semibold mb-1">
                          20,054
                          <span className="text-success fs-11">
                            (<i className="fe fe-arrow-up"></i>21.99%)
                          </span>
                        </h6>
                      </div>
                      <ProgressBar
                        variant="info"
                        className="h-2 mb-3 "
                        now={45}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={2} lg={1} md={1} xl={2} className="mb-sm-0 mb-3">
                      <img
                        src={
                          require("../../assets/images/browsers/uc-browser.svg")
                            .default
                        }
                        className="img-fluid"
                        alt="img"
                      />
                    </Col>
                    <Col sm={10} lg={11} md={11} xl={10} className="ps-sm-0">
                      <div className="d-flex align-items-end justify-content-between mb-1">
                        <h6 className="mb-1">UC</h6>
                        <h6 className="fw-semibold mb-1">
                          15,364
                          <span className="text-success fs-11">
                            (<i className="fe fe-arrow-down"></i>14.37%)
                          </span>
                        </h6>
                      </div>
                      <ProgressBar
                        variant="success"
                        className="h-2 mb-3 "
                        now={40}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={2} lg={1} md={1} xl={2} className="mb-sm-0 mb-3">
                      <img
                        src={
                          require("../../assets/images/browsers/opera.svg")
                            .default
                        }
                        className="img-fluid"
                        alt="img"
                      />
                    </Col>
                    <Col sm={10} lg={11} md={11} xl={10} className="ps-sm-0">
                      <div className="d-flex align-items-end justify-content-between mb-1">
                        <h6 className="mb-1">Opera</h6>
                        <h6 className="fw-semibold mb-1">
                          10,963
                          <span className="text-danger fs-11">
                            (<i className="fe fe-arrow-down"></i>25.02%)
                          </span>
                        </h6>
                      </div>
                      <ProgressBar
                        variant="secondary"
                        className="h-2 mb-3 "
                        now={30}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={2} lg={1} md={1} xl={2} className="mb-sm-0 mb-3">
                      <img
                        src={
                          require("../../assets/images/browsers/netscape.svg")
                            .default
                        }
                        className="img-fluid"
                        alt="img"
                      />
                    </Col>
                    <Col sm={10} lg={11} md={11} xl={10} className="ps-sm-0">
                      <div className="d-flex align-items-end justify-content-between mb-1">
                        <h6 className="mb-1">Netscape</h6>
                        <h6 className="fw-semibold mb-1">
                          15,502
                          <span className="text-success fs-11">
                            (<i className="fe fe-arrow-up"></i>12.75%)
                          </span>
                        </h6>
                      </div>
                      <ProgressBar
                        variant="green"
                        className="h-2 mb-3 "
                        now={10}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={2} lg={1} md={1} xl={2} className="mb-sm-0 mb-3">
                      <img
                        src={
                          require("../../assets/images/browsers/edge.svg")
                            .default
                        }
                        className="img-fluid"
                        alt="img"
                      />
                    </Col>
                    <Col sm={10} lg={11} md={11} xl={10} className="ps-sm-0">
                      <div className="d-flex align-items-end justify-content-between mb-1">
                        <h6 className="mb-1">Edge</h6>
                        <h6 className="fw-semibold mb-1">
                          5,453
                          <span className="text-danger fs-11">
                            (<i className="fe fe-arrow-down"></i>33.33%)
                          </span>
                        </h6>
                      </div>
                      <ProgressBar
                        variant="warning"
                        className="h-2 mb-3 "
                        now={5}
                      />
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} md={12} sm={12} lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h4" className="fw-semibold">
                  Daily Activity
                </Card.Title>
              </Card.Header>
              <Card.Body className="pb-0">
                <ul className="task-list">
                  <li className="d-sm-flex">
                    <div>
                      <i className="task-icon bg-primary"></i>
                      <h6 className="fw-semibold">
                        Task Finished
                        <span className="text-muted fs-11 ms-2 fw-normal">
                          09 July 2021
                        </span>
                      </h6>
                      <p className="text-muted fs-12">
                        Adam Berry finished task on
                        <Link to="#" className="fw-semibold">
                          Project Management
                        </Link>
                      </p>
                    </div>
                    <div className="ms-auto d-md-flex">
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit</Tooltip>}
                        >
                          <span className="fe fe-edit me-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Delete</Tooltip>}
                        >
                          <span className="fe fe-trash-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                    </div>
                  </li>
                  <li className="d-sm-flex">
                    <div>
                      <i className="task-icon bg-secondary"></i>
                      <h6 className="fw-semibold">
                        New Comment
                        <span className="text-muted fs-11 ms-2 fw-normal">
                          05 July 2021
                        </span>
                      </h6>
                      <p className="text-muted fs-12">
                        Victoria commented on Project
                        <Link to="#" className="fw-semibold">
                          AngularJS Template
                        </Link>
                      </p>
                    </div>
                    <div className="ms-auto d-md-flex">
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit</Tooltip>}
                        >
                          <span className="fe fe-edit me-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Delete</Tooltip>}
                        >
                          <span className="fe fe-trash-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                    </div>
                  </li>
                  <li className="d-sm-flex">
                    <div>
                      <i className="task-icon bg-success"></i>
                      <h6 className="fw-semibold">
                        New Comment
                        <span className="text-muted fs-11 ms-2 fw-normal">
                          25 June 2021
                        </span>
                      </h6>
                      <p className="text-muted fs-12">
                        Victoria commented on Project
                        <Link to="#" className="fw-semibold">
                          AngularJS Template
                        </Link>
                      </p>
                    </div>
                    <div className="ms-auto d-md-flex">
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit</Tooltip>}
                        >
                          <span className="fe fe-edit me-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Delete</Tooltip>}
                        >
                          <span className="fe fe-trash-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                    </div>
                  </li>
                  <li className="d-sm-flex">
                    <div>
                      <i className="task-icon bg-warning"></i>
                      <h6 className="fw-semibold">
                        Task Overdue
                        <span className="text-muted fs-11 ms-2 fw-normal">
                          14 June 2021
                        </span>
                      </h6>
                      <p className="text-muted mb-0 fs-12">
                        Petey Cruiser finished task
                        <Link to="#" className="fw-semibold">
                          Integrated management
                        </Link>
                      </p>
                    </div>
                    <div className="ms-auto d-md-flex">
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit</Tooltip>}
                        >
                          <span className="fe fe-edit me-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Delete</Tooltip>}
                        >
                          <span className="fe fe-trash-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                    </div>
                  </li>
                  <li className="d-sm-flex">
                    <div>
                      <i className="task-icon bg-danger"></i>
                      <h6 className="fw-semibold">
                        Task Overdue
                        <span className="text-muted fs-11 ms-2 fw-normal">
                          29 June 2021
                        </span>
                      </h6>
                      <p className="text-muted mb-0 fs-12">
                        Petey Cruiser finished task
                        <Link to="#" className="fw-semibold">
                          Integrated management
                        </Link>
                      </p>
                    </div>
                    <div className="ms-auto d-md-flex">
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit</Tooltip>}
                        >
                          <span className="fe fe-edit me-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Delete</Tooltip>}
                        >
                          <span className="fe fe-trash-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                    </div>
                  </li>
                  <li className="d-sm-flex">
                    <div>
                      <i className="task-icon bg-info"></i>
                      <h6 className="fw-semibold">
                        Task Finished
                        <span className="text-muted fs-11 ms-2 fw-normal">
                          09 July 2021
                        </span>
                      </h6>
                      <p className="text-muted fs-12">
                        Adam Berry finished task on
                        <Link to="#" className="fw-semibold">
                          Project Management
                        </Link>
                      </p>
                    </div>
                    <div className="ms-auto d-md-flex">
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit</Tooltip>}
                        >
                          <span className="fe fe-edit me-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                      <Link to="#">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Delete</Tooltip>}
                        >
                          <span className="fe fe-trash-2 text-muted"></span>
                        </OverlayTrigger>
                      </Link>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} md={12} sm={12} lg={12}>
            <Card className="overflow-hidden">
              <Card.Header>
                <div>
                  <Card.Title as="h3">
                    Sales Report by Locations with Devices
                  </Card.Title>
                </div>
              </Card.Header>
              <Card.Body className="p-0 mt-2">
                <div className="text-center">
                  <Worldmap />
                </div>
                <div className="table-responsive mt-2 text-center">
                  <Table className="text-nowrap border-dashed mb-0">
                    <thead>
                      <tr>
                        <th className="text-start">Device</th>
                        <th className="">USA</th>
                        <th className="">India</th>
                        <th className="">Bahrain</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-start p-4">
                          <span className="sales-icon text-primary mx-2 brround bg-primary-transparent p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="bi
                                    bi-phone"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                          </span>
                          <span className="mobile">Mobiles</span>
                        </td>
                        <td className="p-4">17%</td>
                        <td className="p-4">22%</td>
                        <td className="p-4">11%</td>
                      </tr>
                      <tr>
                        <td className="text-start p-4">
                          <span className="sales-icon text-secondary mx-2 brround bg-secondary-transparent p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor
                                "
                              className="bi bi-display"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46
                                    0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757
                                    0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"
                              />
                            </svg>
                          </span>
                          Desktops
                        </td>
                        <td className="p-4">34%</td>
                        <td className="p-4">76%</td>
                        <td className="p-4">58%</td>
                      </tr>
                      <tr>
                        <td className="text-start p-4">
                          <span className="sales-icon text-danger mx-2 brround bg-danger-transparent p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="bi bi-tablet
                                "
                              viewBox="0 0 16 16"
                            >
                              <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                          </span>
                          Tablets
                        </td>
                        <td className="p-4">56%</td>
                        <td className="p-4">83%</td>
                        <td className="p-4">66%</td>
                      </tr>
                    </tbody>
                  </Table>
                  {/* <!--end /table--> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <--<-- ROW END -->--> */}

       {/* <--<-- ROW START -->--> */}
        {/* <Row>
          <Col sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3" className="mb-0">
                  Product Sales
                </Card.Title>
              </Card.Header>
              <Card.Body className="pt-4">
                <div className="grid-margin">
                  <div className="">
                    <div className="panel panel-primary">
                      <div className="tabs-menu-body pt-0">
                        <div className="tab-content p-0">
                          <div className="tab-pane active">
                            <div className="table-responsive">
                              <Tab.Container
                                id="left-tabs-example table-bordered"
                                defaultActiveKey="AllProducts"
                              >
                                <Nav variant="pills" className="product-sale">
                                  <Nav.Item>
                                    <Nav.Link
                                      eventKey="AllProducts"
                                      className="text-dark"
                                    >
                                      All Products
                                    </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link
                                      eventKey="Shipped"
                                      className="text-dark"
                                    >
                                      Shipped
                                    </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link
                                      eventKey="Pending"
                                      className="text-dark"
                                    >
                                      Pending
                                    </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link
                                      eventKey="Cancelled"
                                      className="text-dark"
                                    >
                                      Cancelled
                                    </Nav.Link>
                                  </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                  <Tab.Pane eventKey="AllProducts">
                                    <AllProduct />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="Shipped">
                                    <Shipped />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="Pending">
                                    <Pending />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="Cancelled">
                                    <Cancelled />
                                  </Tab.Pane>
                                </Tab.Content>
                              </Tab.Container>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
        {/* <--<-- ROW END -->--> */}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
