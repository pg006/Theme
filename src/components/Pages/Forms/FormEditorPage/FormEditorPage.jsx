import React from "react";
import "./FormEditorPage.scss";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import {
  FormTextEditor,
  App,
  QuillEditor,
  ModalEditor,
} from "../../../../Data/Pages/Forms/DataFormEditor";

const FormEditorPage = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Form Editor Page"
          active="Form Editor"
          items={["Forms"]}
        />
        {/* <!-- Row --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Sun Form Editor</Card.Title>
              </Card.Header>
              <Card.Body>
                <FormTextEditor />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!--End Row--> */}

        {/* <!-- Row --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Quill Editor</Card.Title>
              </Card.Header>
              <Card.Body>
                <QuillEditor />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- /Row --> */}

        {/* <!-- Row --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title>Form Editor in Modal</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* <!-- pd-y-30 --> */}
                <div className="text-center p-4 bg-light border">
                  <ModalEditor />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- /Row --> */}

        {/* <!-- Row --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title>From Inline-Edit Editor</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="wd-xl-100p ht-350">
                  {/* <InlineEditor /> */}
                  <App />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- /Row --> */}
      </div>
    </React.Fragment>
  );
};

export default FormEditorPage;
