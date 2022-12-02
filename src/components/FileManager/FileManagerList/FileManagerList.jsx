import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import { Card, Col, Row } from 'react-bootstrap';
import "./FileManagerList.scss";

const FileManagerList = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="File Manager List"
          active="File Manager List"
          items={["Componets"]}
        />
        {/* <!-- Row --> */}
        <Row className="row-sm">
          <Col lg={12} xl={12}>
            <Row className="row-sm">
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={require("../../../assets/images/media/files/03.jpg")}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          image2.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">66 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/files/pdf.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          file.pdf
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">32 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={require("../../../assets/images/media/files/07.jpg")}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          image1.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">76 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/files/excel.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          excel.xls
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">34 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={require("../../../assets/images/media/files/06.jpg")}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          nature.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">66 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/files/ppt1.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          demo.ppt
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">67 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={require("../../../assets/images/media/files/02.jpg")}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="d-flex">
                        <h5 className="mb-0 fw-semibold text-break">
                          image1.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">76 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/file-video.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          video.mp4
                        </h5>
                      </div>
                      <div className="ms-auto my-auto mt-3">
                        <span className="text-muted mb-0">320 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/files/word.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          word.doc
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">320 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={require("../../../assets/images/media/files/01.jpg")}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          mountain.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">320 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/files/pdf.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          file.pdf
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">32 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/files/excel.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          excel.xls
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">34 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/files/ppt1.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          profile.ppt
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">67 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={require("../../../assets/images/media/files/04.jpg")}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          nature.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">66 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a
                    href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}
                    className="mx-auto my-3"
                  >
                    <img
                      src={require("../../../assets/images/media/files/zip1.png")}
                      alt="img"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">exe.zip</h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">320 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* <!-- End Row --> */}
        </Row>
        {/* <!-- End Row --> */}
      </div>
    </React.Fragment>
  );
};

export default FileManagerList;
