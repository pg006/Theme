import React from "react";
import "./DataTablePage.scss";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { BasicDataTable, DataTabless, ResponsiveDataTable } from "../../../../Data/Pages/TablesData/TableData";

const DataTablePage = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Data Table Page"
          active="Data Table"
          items={["Tables"]}
        />
        {/* <!-- Row --> */}
        <Row className="row-sm">
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Basic Datatable</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicDataTable />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- End Row --> */}

        {/* <!-- Row --> */}
        <Row className="row-sm">
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Responsive DataTable</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <ResponsiveDataTable />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- End Row --> */}

        {/* <!-- Row --> */}
        <Row className="row-sm">
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Deleted Row DataTable</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <DataTabless />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- End Row --> */}
      </div>
    </React.Fragment>
  );
};

export default DataTablePage;
