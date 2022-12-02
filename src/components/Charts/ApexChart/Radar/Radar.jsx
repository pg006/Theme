import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import {
  BasicRadarChart,
  RadarMultipleSeries,
} from "../../../../Data/DataChart/DataApexChart";

const Radar = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Radar Chart"
          active="Radar Chart"
          items={["Charts"]}
        />
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Basic Radar Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicRadarChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Radar – Multiple Series</Card.Title>
              </Card.Header>
              <Card.Body>
                <RadarMultipleSeries />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Radar;
