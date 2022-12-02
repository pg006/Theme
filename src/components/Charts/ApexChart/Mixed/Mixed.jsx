import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import {
  LineandAreaChart,
  LineColumn,
  LineColumnArea,
  MultipleSeries,
} from "../../../../Data/DataChart/DataApexChart";
import "./Mixed.scss";

const Mixed = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Mixed Chart"
          active="Mixed Chart"
          items={["Charts"]}
        />
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Line and area Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <LineandAreaChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Line , Column and area Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <LineColumnArea />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Line and Column Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <LineColumn />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Multiple Y-axis Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <MultipleSeries />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-2 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Mixed;
