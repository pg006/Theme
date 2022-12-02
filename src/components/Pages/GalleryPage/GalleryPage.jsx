import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import { Col, Row, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { LightGallery } from "../../../Data/Pages/DataGalleryPage";
const GalleryPage = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Gallery" active="Gallery" items={["Pages"]} />
        {/* <!-- GALLERY DEMO OPEN --> */}
        <div className="demo-gallery card">
          <div className="card-header">
            <div className="card-title">Light Gallery</div>
          </div>
          <div className="card-body">
            <Link to="#">
              <LightGallery />
            </Link>
          </div>
        </div>
        {/* <!-- GALLERY DEMO CLOSED --> */}

        {/* <!-- PAGINATION OPEN --> */}
        <Row className="mb-5">
          <Col md={6} className="mt-1 d-none d-md-block">
            1 - 10 of 234 photos
          </Col>
          <Col md={6}>
            <div className=" float-end">
              <Pagination>
                <Pagination.Item disabled>Prev</Pagination.Item>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </div>
          </Col>
          {/* <!-- COL-END --> */}
        </Row>
        {/* <!-- PAGINATION CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default GalleryPage;
