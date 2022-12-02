import React from "react";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import "./FormWizardPage.scss";
import { Row, Col, Card } from 'react-bootstrap';
import BasicFormWizard, { BasicContentFormWizard, BasicForm, ValidationForm, VerticalOrientationWizard } from "../../../../Data/Pages/Forms/DataFormWizard";


const FormWizardPage = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Form Wizard Page"
          active="Form-Wizard"
          items={["Forms"]}
        />
        {/* <!--Row open--> */}
        <Row>
          <Col>
            <Card>
              <Card.Header className="border-bottom-0">
                <Card.Title as="h3">Form Wizard</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!--row closed--> */}

        {/* <!--row open--> */}
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header className="border-bottom-0">
                <Card.Title as="h3">Accordion-Wizard-Form</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicFormWizard />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!--row closed--> */}
        {/* <!-- Row --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="border-bottom-0">
                <Card.Title>Basic Content Wizard</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicContentFormWizard />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!--/Row --> */}

        {/* <!--Row --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="border-bottom-0">
                <Card.Title>Basic Wizard With Validation</Card.Title>
              </Card.Header>
              <Card.Body>
                <ValidationForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!--/Row--> */}

        {/* <!--Row--> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="border-bottom-0">
                <Card.Title>Vertical Orientation Wizard</Card.Title>
              </Card.Header>
              <Card.Body>
                <VerticalOrientationWizard />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- /Row --> */}
      </div>
    </React.Fragment>
  );
};

export default FormWizardPage;
