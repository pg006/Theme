import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { Annotation, BasicChart, Dashedline, Stepline } from "../../../../Data/DataChart/DataApexChart";
import "./Line.scss";

const Line = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Line Chart"
          active="Line Chart"
          items={["Charts"]}
        />

        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Basic Line chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Step line Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <Stepline />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Dashed line Chart with Gradient color
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Dashedline />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Line with Annotation Charts</Card.Title>
              </Card.Header>
              <Card.Body>
                <Annotation />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-2 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Line;
