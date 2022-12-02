import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { BasicCandleChart, CandlestickBrush } from "../../../../Data/DataChart/DataEchart";
import "./CandleSticks.scss";

const CandleSticks = () => {
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
                <Card.Title as="h3">Basic Candlestick Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicCandleChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Combination of Line, Bar & Candle Chart
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <CandlestickBrush />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default CandleSticks;
