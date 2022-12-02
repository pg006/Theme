import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import {
  SimplePieChart,
  UpdateDonut,
} from "../../../../Data/DataChart/DataApexChart";
import "./Pie.scss";

const Pie = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Pie Chart" active="Pie Chart" items={["Charts"]} />
        <Row>
          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Simple Pie Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <SimplePieChart />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Donut Chart with update buttons</Card.Title>
              </Card.Header>
              <Card.Body>
                <UpdateDonut />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Pie;
