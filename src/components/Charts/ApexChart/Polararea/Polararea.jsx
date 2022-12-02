import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { BasicPolarChart, PolarMonochrome } from "../../../../Data/DataChart/DataApexChart";
import './Polararea.scss'

const Polararea = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Polar-Area Chart"
          active="Polar-Area Chart"
          items={["Charts"]}
        />
        <Row>
          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Basic Polar Area Charts</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicPolarChart />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Polar Area Monochrome Charts</Card.Title>
              </Card.Header>
              <Card.Body>
                <PolarMonochrome />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Polararea;
