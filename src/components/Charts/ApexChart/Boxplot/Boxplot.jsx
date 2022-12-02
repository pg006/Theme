import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import {
  BoxplotScatterChart,
  HorizontalBoxPlot,
} from "../../../../Data/DataChart/DataApexChart";
import "./Boxplot.scss";

const Boxplot = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Boxplot Chart"
          active="Boxplot Chart"
          items={["Charts"]}
        />
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Box & Whisker Charts </Card.Title>
              </Card.Header>
              <Card.Body>
                <BoxplotScatterChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Horizontal BoxPlot</Card.Title>
              </Card.Header>
              <Card.Body>
                <HorizontalBoxPlot />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Boxplot;
