import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { BasicCandlestickChart, CustomisedCombo } from "../../../../Data/DataChart/DataApexChart";
import "./CandleStick.scss";

const CandleStick = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="CandleStick Chart"
          active="CandleStick Chart"
          items={["Charts"]}
        />

        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Line and Column Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicCandlestickChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Multiple series – Group row</Card.Title>
              </Card.Header>
              <Card.Body>
                <CustomisedCombo />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default CandleStick;
