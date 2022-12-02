import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import {
  BarChartwithNegativeValue,
  BarRace,
  BarwithBackground,
  StackedColumnChart,
} from "../../../../Data/DataChart/DataEchart";
import "./Bars.scss";

export const Bars = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Bars Chart"
          active="Bars Chart"
          items={["Charts"]}
        />

        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Bar with Background</Card.Title>
              </Card.Header>
              <Card.Body>
                <BarwithBackground />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Stacked Column Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <StackedColumnChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Bar Chart with Negative Value</Card.Title>
              </Card.Header>
              <Card.Body>
                <BarChartwithNegativeValue />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Dynamic Bar Race</Card.Title>
              </Card.Header>
              <Card.Body>
                <BarRace />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
