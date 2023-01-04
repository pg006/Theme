import React, { useState } from "react";
import { Card, Row, Col, Form, Collapse } from "react-bootstrap";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import {
  Basictoast,
  Colourtoast,
  CustomContenttoast,
  PlacementToast,
  StackingToast,
  Translucenttoast,
} from "../../../Data/Boostrap/ToastData";
import "./Toast.scss";

const Toast = () => {
  const [Basic, setBasic] = useState(false);
  const [Translucent, setTranslucent] = useState(false);
  const [Custom, setCustom] = useState(false);
  const [Color, setColor] = useState(false);
  const [Stacking, setStacking] = useState(false);
  const [Placement, setPlacement] = useState(false);

  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Toasts" active="Toasts" items={["Componets"]} />
        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Basic Toasts</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setBasic(!Basic)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body>
                <div className="p-4">
                  <Row>
                    <Basictoast />
                  </Row>
                </div>
                <Collapse in={Basic} className="mt-2">
                  <pre>
                    <code>
                      {`
                      export const Basictoast = () => {
                        const [show, setShow] = useState(false);
                      
                        return (
                          <div>
                            <Toast
                              show={show}
                              onClose={() => {
                                setShow(false);
                              }}
                            >
                              <Toast.Header>
                                <img src={logo} alt="" className="me-2" height="18" />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                              </Toast.Header>
                              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                            <Col md={12} className="mt-2 mt-md-0">
                              <Button
                                variant="primary"
                                className="mt-5"
                                onClick={() => {
                                  setShow(true);
                                }}
                              >
                                Show live toast
                              </Button>
                            </Col>
                          </div>
                        );
                      };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          {/* <--- COL END ---> */}

          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Translucent Toasts</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setTranslucent(!Translucent)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body>
                <div className="p-4 bg-light border">
                  <Translucenttoast />
                </div>
                <Collapse in={Translucent} className="mt-2">
                  <pre>
                    <code>
                      {`
                      export const Translucenttoast = () => {
                        const [show, setShow] = useState(true);
                      
                        return (
                          <div>
                            <Toast
                              show={show}
                              onClose={() => {
                                setShow(false);
                              }}
                            >
                              <Toast.Header>
                                <img src={logo} alt="" className="me-2" height="18" />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                              </Toast.Header>
                              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                          </div>
                        );
                      };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          {/* <--- COL END ---> */}

          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Custom content Toasts</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setCustom(!Custom)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body>
                <CustomContenttoast />
                <Collapse in={Custom} className="mt-2">
                  <pre>
                    <code>
                      {`
                     export const CustomContenttoast = () => {
                      const [show, setShow] = useState(true);
                      const [showA, setShowA] = useState(true);
                    
                      return (
                        <React.Fragment>
                          <Row>
                            <Col md={12} xl={6} className="mt-1">
                              <Toast
                                show={show}
                                onClose={() => {
                                  setShow(false);
                                }}
                              >
                                <Toast.Header className="border-bottom-0">
                                  <strong className="me-auto">
                                    Hello, world! This is a toast message.
                                  </strong>
                                </Toast.Header>
                              </Toast>
                            </Col>
                    
                            <Col md={12} xl={6} className="mt-1">
                              <Toast
                                show={showA}
                                onClose={() => {
                                  setShowA(false);
                                }}
                              >
                                <ToastHeader className="justify-content-between">
                                  Hello, world! This is a toast message.
                                </ToastHeader>
                                <Toast.Body className="mt-2 pt-2">
                                  <Button size="sm" variant="primary me-1">
                                    Take Action
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="secondary"
                                    onClick={() => setShowA(!showA)}
                                  >
                                    Close
                                  </Button>
                                </Toast.Body>
                              </Toast>
                            </Col>
                          </Row>
                        </React.Fragment>
                      );
                    };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          {/* <--- COL END ---> */}

          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Color Toasts</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setColor(!Color)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body>
                <Colourtoast />
                <Collapse in={Color} className="mt-2">
                  <pre>
                    <code>
                      {`
                     export const Colourtoast = () => {
                      const [show, setShow] = useState(true);
                      const [showA, setShowA] = useState(true);
                      const [showB, setShowB] = useState(true);
                      const [showC, setShowC] = useState(true);
                    
                      return (
                        <React.Fragment>
                          <Row>
                            <Col md={6} className="mt-2 mt-md-0">
                              <div className="toast align-items-center text-white bg-danger border-0 show">
                                <div>
                                  <Toast
                                    show={show}
                                    onClose={() => {
                                      setShow(false);
                                    }}
                                  >
                                    <Toast.Header className="bg-primary text-white colorToster">
                                      <strong className="me-auto">This is a toast message.</strong>
                                    </Toast.Header>
                                  </Toast>
                                </div>
                              </div>
                            </Col>
                            <Col md={6} className="mt-2 mt-md-0">
                              <div className="toast align-items-center text-white bg-danger border-0 show">
                                <Toast
                                  show={showA}
                                  onClose={() => {
                                    setShowA(false);
                                  }}
                                >
                                  <Toast.Header className="bg-secondary text-white colorToster">
                                    <strong className="me-auto">This is a toast message.</strong>
                                  </Toast.Header>
                                </Toast>
                              </div>
                            </Col>
                            <Col md={6} className="mt-2">
                              <div className="toast align-items-center text-white bg-danger border-0 show">
                                <Toast
                                  show={showB}
                                  onClose={() => {
                                    setShowB(false);
                                  }}
                                >
                                  <Toast.Header className="bg-success text-white colorToster">
                                    <strong className="me-auto">This is a toast message.</strong>
                                  </Toast.Header>
                                </Toast>
                              </div>
                            </Col>
                            <Col md={6} className="mt-2">
                              <div className="toast align-items-center text-white bg-danger border-0 show">
                                <Toast
                                  show={showC}
                                  onClose={() => {
                                    setShowC(false);
                                  }}
                                >
                                  <Toast.Header className="bg-danger text-white colorToster">
                                    <strong className="me-auto">This is a toast message.</strong>
                                  </Toast.Header>
                                </Toast>
                              </div>
                            </Col>
                          </Row>
                        </React.Fragment>
                      );
                    };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          {/* <--- COL END ---> */}

          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Stacking Toasts</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setStacking(!Stacking)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body>
                <div className="p-4 bg-light border">
                    <StackingToast />
                </div>
                <Collapse in={Stacking} className="mt-2">
                  <pre>
                    <code>
                      {`
                      export const StackingToast = () => {
                        const [show, setShow] = useState(true);
                        const [showA, setShowA] = useState(true);
                      
                        return (
                          <React.Fragment>
                            <div>
                              <Toast
                                show={show}
                                onClose={() => {
                                  setShow(false);
                                }}
                              >
                                <Toast.Header>
                                  <img src={logo} alt="" className="me-2" height="18" />
                                  <strong className="me-auto">Bootstrap</strong>
                                  <small className="text-muted">just now</small>
                                </Toast.Header>
                                <Toast.Body>See? Just like this.</Toast.Body>
                              </Toast>
                            </div>
                            <div>
                              <Toast
                                show={showA}
                                onClose={() => {
                                  setShowA(false);
                                }}
                              >
                                <Toast.Header>
                                  <img src={logo} alt="" className="me-2" height="18" />
                                  <strong className="me-auto">Bootstrap</strong>
                                  <small className="text-muted">2 seconds ago</small>
                                </Toast.Header>
                                <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                              </Toast>
                            </div>
                          </React.Fragment>
                        );
                      };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          {/* <--- COL END ---> */}

          <Col xl={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title className="w-100 w-sm-auto">
                  Placement Toast
                </Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setPlacement(!Placement)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body>
                <div className="p-4 bg-light border">
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="d-flex justify-content-center align-items-center w-100 h-180"
                  >
                    <PlacementToast />
                  </div>
                </div>
                <Collapse in={Placement} className="mt-2">
                  <pre>
                    <code>
                      {`
                      export const PlacementToast = () => {
                        const [show, setShow] = useState(true);
                      
                        return (
                          <div>
                            <Toast
                              className="w-100"
                              show={show}
                              onClose={() => {
                                setShow(false);
                              }}
                            >
                              <Toast.Header>
                                <img src={logo} alt="" className="me-2" height="18" />
                                <strong className="me-auto">Bootstrap</strong>
                                <small className="text-muted">11 mins ago</small>
                              </Toast.Header>
                              <Toast.Body>This is a toast message.</Toast.Body>
                            </Toast>
                          </div>
                        );
                      };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          {/* <--- COL END ---> */}
        </Row>
        {/* <--<-- ROW CLOSED -->--> */}
      </div>
    </React.Fragment>
  );
};

export default Toast;
