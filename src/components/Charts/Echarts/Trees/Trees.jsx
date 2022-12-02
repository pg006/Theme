import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { BasicTreeChart } from "../../../../Data/DataChart/DataEchart";
import "./Trees.scss";

const Trees = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Tree Chart"
          active="Tree Chart"
          items={["Charts"]}
        />
        <Row>
          <Col lg={12} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Line chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicTreeChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Trees;
