import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import "./Ribbons.scss";

const Ribbons = () => {
  return (
    <React.Fragment>
      <div>
        {/* <!-- CONTAINER --> */}  

        <PageHeader titles="Ribbons" active="Ribbons" items={["Componets"]} />

        <div className="main-container container-fluid">
          {/* <--<-- ROW START -->--> */}

          <Row>
            {/* <--<-- RIBBON STYLE 1 START -->--> */}
            <h5 className="fw-semibold mb-4">Ribbon Style 1</h5>
            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="power-ribbone power-ribbone-top-left text-warning">
                  <span className="bg-warning">
                    <i className="fa fa-bolt"></i>
                  </span>
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="power-ribbone power-ribbone-bottom-left text-secondary">
                  <span className="bg-secondary">
                    <i className="fa fa-bolt"></i>
                  </span>
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. some
                    quick example text to build on the card title.Some quick
                    example text to build on the card title. some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="power-ribbone power-ribbone-bottom-right text-success">
                  <span className="bg-success">
                    <i className="fa fa-bolt"></i>
                  </span>
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="power-ribbone power-ribbone-top-right text-danger">
                  <span className="bg-danger">
                    <i className="fa fa-bolt"></i>
                  </span>
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>
            {/* <--<-- RIBBON STYLE 1 END -->--> */}

            {/* <--<-- RIBBON STYLE 2 START -->--> */}
            <h5 className="fw-semibold mb-4">Ribbon Style 2</h5>
            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="ribbone ribbone-top-left text-primary">
                  <span className="bg-primary">sold out</span>
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="ribbone ribbone-bottom-left text-secondary">
                  <span className="bg-secondary">Update</span>
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold text-start">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card  sold-out">
                <div className="ribbone ribbone-bottom-right text-success">
                  <span className="bg-success">Open</span>
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card  sold-out">
                <div className="ribbone ribbone-top-right text-danger">
                  <span className="bg-danger">Offer</span>
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>
            {/* <--<-- RIBBON STYLE 2 END -->--> */}

            {/* <--<-- RIBBON STYLE 3 START -->--> */}
            <h5 className="fw-semibold mb-4">Ribbon Style 3</h5>
            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="arrow-ribbone-left bg-primary">Sale</div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="arrow-ribbone-bottom-left bg-secondary">
                  Price
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="arrow-ribbone-bottom-right bg-success">
                  Service
                </div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold text-start">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="ribbone-card">
                <div className="arrow-ribbone-right bg-danger">Offer</div>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>
            {/* <--<-- RIBBON STYLE 3 END -->--> */}

            {/* <--<-- RIBBON STYLE 4 START -->--> */}

            <h5 className="fw-semibold mb-4">Ribbon Style 4</h5>
            <Col xl={3} md={6}>
              <div className="card">
                <span className="ribbone-primary-left">
                  <span>
                    <i className="fe fe-zap"></i>
                  </span>
                </span>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </div>
            </Col>

            <Col xl={3} md={6}>
              <div className="card">
                <span className="ribbone-secondary-left-bottom">
                  <span>
                    <i className="fe fe-zap"></i>
                  </span>
                </span>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </div>
            </Col>

            <Col xl={3} md={6}>
              <div className="card">
                <span className="ribbone-success-right-bottom">
                  <span>
                    <i className="fe fe-zap"></i>
                  </span>
                </span>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </div>
            </Col>

            <Col xl={3} md={6}>
              <div className="card">
                <span className="ribbone-danger-right">
                  <span>
                    <i className="fe fe-zap"></i>
                  </span>
                </span>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </div>
            </Col>
            {/* <--<-- RIBBON STYLE 4 END -->--> */}

            {/* <--<-- RIBBON STYLE 5 START -->--> */}

            <h5 className="fw-semibold mb-4">Ribbon Style 5</h5>
            <Col xl={3} md={6}>
              <Card className="card">
                <span className="bookmark-ribbone-primary-left">
                  <span>Jul</span>
                </span>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card>
                <span className="bookmark-ribbone-secondary-left-bottom">
                  <span>Aug</span>
                </span>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card>
                <span className="bookmark-ribbone-success-right-bottom">
                  <span>Sept</span>
                </span>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold text-start">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card>
                <span className="bookmark-ribbone-danger-right">
                  <span>Oct</span>
                </span>
                <Card.Body className="p-6">
                  <h6 className="card-subtitle mb-2 text-dark fw-bold">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title. Some
                    quick example text to build on the card title. Some quick
                    example text to build on the card title. Some quick example
                    text to build on the card title
                  </p>
                </Card.Body>
              </Card>
            </Col>
            {/* <--<-- RIBBON STYLE 5 END -->--> */}

            {/* <--<-- RIBBON STYLE 6 START -->--> */}
            <h5 className="fw-semibold mb-4">Ribbon Style 6</h5>
            <Col xl={3} md={6}>
              <div className="px-6">
                <Card>
                  <span className="fullwidth-primary-ribbons">
                    <div className="bar">
                      CSS Ribbon
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </span>
                  <Card.Body className="p-6">
                    <h6 className="card-subtitle mb-2 text-dark fw-bold">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title. Some
                      quick example text to build on the card title. Some quick
                      example text to build on the card title. Some quick
                      example text to build on the card title
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={3} md={6}>
              <div className="px-6">
                <Card>
                  <span className="fullwidth-secondary-ribbons">
                    <div className="bar">
                      CSS Ribbon
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </span>
                  <Card.Body className="p-6">
                    <h6 className="card-subtitle mb-2 text-dark fw-bold">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title. Some
                      quick example text to build on the card title. Some quick
                      example text to build on the card title. Some quick
                      example text to build on the card title
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={3} md={6}>
              <div className="px-6">
                <Card>
                  <span className="fullwidth-arrow-success-ribbons">
                    <div className="bar">
                      CSS Ribbon
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </span>
                  <Card.Body className="p-6">
                    <h6 className="card-subtitle mb-2 text-dark fw-bold">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title. Some
                      quick example text to build on the card title. Some quick
                      example text to build on the card title. Some quick
                      example text to build on the card title
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={3} md={6}>
              <div className="px-6">
                <Card>
                  <span className="fullwidth-arrow-danger-ribbons-right">
                    <div className="bar">
                      CSS Ribbon
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </span>
                  <Card.Body className="p-6">
                    <h6 className="card-subtitle mb-2 text-dark fw-bold">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title. Some
                      quick example text to build on the card title. Some quick
                      example text to build on the card title. Some quick
                      example text to build on the card title
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* <--<-- RIBBON STYLE 6 END -->--> */}
          </Row>
          {/* <--<-- ROW END -->--> */}
        </div>
        {/* <!-- CONTAINER CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Ribbons;
