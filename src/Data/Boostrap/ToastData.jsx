import React, { useState } from "react";
import { Toast, Button, ToastHeader, Col, Row } from "react-bootstrap";
import logo from "../../assets/images/Logo/logo2.png";

// BasicToast START
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
        <Toast.Body>This is a toast message.</Toast.Body>
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
};

// Translucent Toasts START
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
        <Toast.Body>This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
};

// Custom content Toasts START
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
              <strong className="me-auto">This is a toast message.</strong>
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
              This is a toast message.
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
};

// ColourA Toasts START
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
};

// StackingA Toasts START
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
};

// Placement Toasts START
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
};
