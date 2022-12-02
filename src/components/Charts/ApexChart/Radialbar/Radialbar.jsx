import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import {
  BasicRadialChart,
  CustomAngleCircle,
  MultipleRadialbar,
  StrokedGauge,
} from "../../../../Data/DataChart/DataApexChart";
import "./Radialbar.scss";

const Radialbar = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Radialbar Chart"
          active="Radialbar Chart"
          items={["Charts"]}
        />
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Basic Radial Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicRadialChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Multiple Radialbars</Card.Title>
              </Card.Header>
              <Card.Body>
                <MultipleRadialbar />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}

        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Custom Angle Circle Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <CustomAngleCircle />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Stroked Gauge</Card.Title>
              </Card.Header>
              <Card.Body>
                <StrokedGauge />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-2 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Radialbar;
