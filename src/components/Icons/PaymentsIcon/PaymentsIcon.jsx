import React from "react";
import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";

const PaymentsIcon = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Payment Icons"
          active="Payment Icons"
          items={["Icons"]}
        />
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Payments Icons</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg={12} sm={12}>
                    <p>
                      For more info <Link to="#">click here</Link>.
                    </p>
                    <p>
                      <code>
                        &lt;i className="payment
                        payment-ICON_NAME"&gt;&lt;/i&gt;
                      </code>
                    </p>
                  </Col>
                  <Col lg={12} sm={12}>
                    <div className="icons-list-wrap">
                      <ul className="icons-list">
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-2checkout</Tooltip>
                            }
                          >
                            <i className="payment payment-2checkout"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-alipay</Tooltip>}
                          >
                            <i className="payment payment-alipay"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-amazon</Tooltip>}
                          >
                            <i className="payment payment-amazon"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-americanexpress</Tooltip>
                            }
                          >
                            <i className="payment payment-americanexpress"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-applepay</Tooltip>
                            }
                          >
                            <i className="payment payment-applepay"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-bancontact</Tooltip>
                            }
                          >
                            <i className="payment payment-bancontact"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-bitcoin</Tooltip>}
                          >
                            <i className="payment payment-bitcoin"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-bitpay</Tooltip>}
                          >
                            <i className="payment payment-bitpay"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-cirrus</Tooltip>}
                          >
                            <i className="payment payment-cirrus"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-clickandbuy</Tooltip>
                            }
                          >
                            <i className="payment payment-clickandbuy"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-coinkite</Tooltip>
                            }
                          >
                            <i className="payment payment-coinkite"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-dinersclub</Tooltip>
                            }
                          >
                            <i className="payment payment-dinersclub"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-directdebit</Tooltip>
                            }
                          >
                            <i className="payment payment-directdebit"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-discover</Tooltip>
                            }
                          >
                            <i className="payment payment-discover"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-dwolla</Tooltip>}
                          >
                            <i className="payment payment-dwolla"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-ebay</Tooltip>}
                          >
                            <i className="payment payment-ebay"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-eway</Tooltip>}
                          >
                            <i className="payment payment-eway"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-giropay</Tooltip>}
                          >
                            <i className="payment payment-giropay"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-googlewallet</Tooltip>
                            }
                          >
                            <i className="payment payment-googlewallet"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-ingenico</Tooltip>
                            }
                          >
                            <i className="payment payment-ingenico"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-jcb</Tooltip>}
                          >
                            <i className="payment payment-jcb"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-klarna</Tooltip>}
                          >
                            <i className="payment payment-klarna"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-laser</Tooltip>}
                          >
                            <i className="payment payment-laser"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-maestro</Tooltip>}
                          >
                            <i className="payment payment-maestro"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-mastercard</Tooltip>
                            }
                          >
                            <i className="payment payment-mastercard"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-monerol</Tooltip>}
                          >
                            <i className="payment payment-monero"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-neteller</Tooltip>
                            }
                          >
                            <i className="payment payment-neteller"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-ogone</Tooltip>}
                          >
                            <i className="payment payment-ogone"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-okpay</Tooltip>}
                          >
                            <i className="payment payment-okpay"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-paybox</Tooltip>}
                          >
                            <i className="payment payment-paybox"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-paymill</Tooltip>}
                          >
                            <i className="payment payment-paymill"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-payone</Tooltip>}
                          >
                            <i className="payment payment-payone"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-payoneer</Tooltip>
                            }
                          >
                            <i className="payment payment-payoneer"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-paypal</Tooltip>}
                          >
                            <i className="payment payment-paypal"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-paysafecard</Tooltip>
                            }
                          >
                            <i className="payment payment-paysafecard"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-payu</Tooltip>}
                          >
                            <i className="payment payment-payu"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-payza</Tooltip>}
                          >
                            <i className="payment payment-payza"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-ripple</Tooltip>}
                          >
                            <i className="payment payment-ripple"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-sage</Tooltip>}
                          >
                            <i className="payment payment-sage"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-sepa</Tooltip>}
                          >
                            <i className="payment payment-sepa"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-shopify</Tooltip>}
                          >
                            <i className="payment payment-shopify"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-skrill</Tooltip>}
                          >
                            <i className="payment payment-skrill"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-solo</Tooltip>}
                          >
                            <i className="payment payment-solo"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-square</Tooltip>}
                          >
                            <i className="payment payment-square"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-stripe</Tooltip>}
                          >
                            <i className="payment payment-stripe"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-switch</Tooltip>}
                          >
                            <i className="payment payment-switch"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-ukash</Tooltip>}
                          >
                            <i className="payment payment-ukash"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-unionpay</Tooltip>
                            }
                          >
                            <i className="payment payment-unionpay"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-verifone</Tooltip>
                            }
                          >
                            <i className="payment payment-verifone"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-verisign</Tooltip>
                            }
                          >
                            <i className="payment payment-verisign"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>payment payment-visa</Tooltip>}
                          >
                            <i className="payment payment-visa"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-webmoney</Tooltip>
                            }
                          >
                            <i className="payment payment-webmoney"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-westernunion</Tooltip>
                            }
                          >
                            <i className="payment payment-westernunion"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-worldpay</Tooltip>
                            }
                          >
                            <i className="payment payment-worldpay"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-2checkout-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-2checkout-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-alipay-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-alipay-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-amazon-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-amazon-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                payment payment-americanexpress-dark
                              </Tooltip>
                            }
                          >
                            <i className="payment payment-americanexpress-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-applepay-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-applepay-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-bancontact-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-bancontact-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-bitcoin-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-bitcoin-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-bitpay-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-bitpay-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-cirrus-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-cirrus-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                payment payment-clickandbuy-dark
                              </Tooltip>
                            }
                          >
                            <i className="payment payment-clickandbuy-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-coinkite-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-coinkite-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-dinersclub-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-dinersclub-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                payment payment-directdebit-dark
                              </Tooltip>
                            }
                          >
                            <i className="payment payment-directdebit-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-discover-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-discover-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-dwolla-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-dwolla-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-ebay-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-ebay-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-eway-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-eway-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-giropay-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-giropay-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                payment payment-googlewallet-dark
                              </Tooltip>
                            }
                          >
                            <i className="payment payment-googlewallet-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-ingenico-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-ingenico-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-jcb-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-jcb-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-klarna-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-klarna-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-laser-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-laser-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-maestro-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-maestro-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-mastercard-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-mastercard-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-monero-dark-</Tooltip>
                            }
                          >
                            <i className="payment payment-monero-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-neteller-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-neteller-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-ogone-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-ogone-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-okpay-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-okpay-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-paybox-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-paybox-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-paymill-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-paymill-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-payone-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-payone-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-payoneer-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-payoneer-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-paypal-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-paypal-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                payment payment-paysafecard-dark
                              </Tooltip>
                            }
                          >
                            <i className="payment payment-paysafecard-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-payu-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-payu-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-payza-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-payza-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-ripple-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-ripple-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-sage-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-sage-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-sepa-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-sepa-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-shopify-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-shopify-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-skrill-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-skrill-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-solo-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-solo-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-square-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-square-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-stripe-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-stripe-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-switch-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-switch-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-ukash-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-ukash-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-unionpay-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-unionpay-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-verifone-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-verifone-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-verisign-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-verisign-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-visa-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-visa-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-webmoney-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-webmoney-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                payment payment-westernunion-dark
                              </Tooltip>
                            }
                          >
                            <i className="payment payment-westernunion-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>payment payment-worldpay-dark</Tooltip>
                            }
                          >
                            <i className="payment payment-worldpay-dark"></i>
                          </OverlayTrigger>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default PaymentsIcon;
