import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { GroupSeries, MultiSeries } from "../../../../Data/DataChart/DataApexChart";

const Timeline = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Timeline Chart"
          active="Timeline Chart"
          items={["Charts"]}
        />
        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Line and Column Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <MultiSeries />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Multiple series – Group row</Card.Title>
              </Card.Header>
              <Card.Body>
                <GroupSeries />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Timeline;
