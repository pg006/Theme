import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import { Crypto } from "../../../Data/App/DataCryptoCurrency";
import "./Cryptocurrencies.scss";

const Cryptocurrencies = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Crypto-currencies"
          active="Crypto-currencies"
          items={["Apps"]}
        />
        {/* <!-- ROW OPEN --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Crypto Currencies</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Crypto />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <!-- ROW CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Cryptocurrencies;
