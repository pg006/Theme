import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import {
  BarNagetiveValue,
  BasicBarChart,
  GroupedBarChart,
  StackedBar,
} from "../../../../Data/DataChart/DataApexChart";
import './Bar.scss'

const Bar = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Bar Chart" active="Bar Chart" items={["Charts"]} />

        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Basic Bar chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicBarChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Grouped Bar Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <GroupedBarChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Stacked Bar chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <StackedBar />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Bar with Negative Values</Card.Title>
              </Card.Header>
              <Card.Body>
                <BarNagetiveValue />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-2 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Bar;
