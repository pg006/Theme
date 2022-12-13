import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import { Card, Col, Row } from "react-bootstrap";
import "./FileManagerList.scss";
import F1 from "../../../assets/images/FileImages/File7.jpg";
import F2 from "../../../assets/images/FileImages/File10.jpg";
import F3 from "../../../assets/images/FileImages/File11.jpg";
import F4 from "../../../assets/images/FileImages/File12.jpg";
import F5 from "../../../assets/images/FileImages/File8.jpg";
import F6 from "../../../assets/images/FileImages/File9.jpg";
import F7 from "../../../assets/images/FileImages/File13.jpg";
import F8 from "../../../assets/images/FileImages/File16.jpg";
import F9 from "../../../assets/images/FileImages/File15.jpg";
import F10 from "../../../assets/images/FileImages/File17.jpg";
import F11 from "../../../assets/images/FileImages/File18.jpg";
import F12 from "../../../assets/images/FileImages/File19.jpg";
import F13 from "../../../assets/images/FileImages/File20.jpg";
import PDF from "../../../assets/images/FileImages/SmallPngs/PDF.png";
import XLS from "../../../assets/images/FileImages/SmallPngs/Excel.png";
import ZIP from "../../../assets/images/FileImages/SmallPngs/ZIP.png";
import PPT from "../../../assets/images/FileImages/SmallPngs/PPT.png";
import DOC from "../../../assets/images/FileImages/SmallPngs/DOC.png";
import Video from "../../../assets/images/FileImages/SmallPngs/Video.png";
import Video2 from "../../../assets/images/FileImages/SmallPngs/Video2.png";

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
                      src={F1}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">Car.jpg</h5>
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
                    <img src={PDF} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Theme.pdf
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
                      src={F2}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Books.jpg
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
                    <img src={XLS} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Sheet.xls
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
                      src={F13}
                      alt="Stars"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Stars.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">16 KB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={F3}
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
                    <img src={PPT} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Plan.ppt
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
                      src={F4}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="d-flex">
                        <h5 className="mb-0 fw-semibold text-break">
                          Room.jpg
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
                    <img src={Video} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Video.mp4
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
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={F12}
                      alt="tree"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Tree.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">500 KB</span>
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
                    <img src={DOC} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Text.doc
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
                      src={F5}
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
                    <img src={PDF} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">New.pdf</h5>
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
                      src={F11}
                      alt="Scooter"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Scooter.jpg
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
                    <img src={XLS} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          MarkSheet.xls
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
                      src={F8}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">3D.jpg</h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">5 MB</span>
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
                    <img src={PPT} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          New_Plan.ppt
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
                      src={F6}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          City.jpg
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
                    <img src={ZIP} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">New.zip</h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">100 KB</span>
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
                    <img src={Video2} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Video2.mp4
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
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={F7}
                      alt="car"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Sport Car.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">1 MB</span>
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
                    <img src={ZIP} alt="img" />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Demo.zip
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
                      src={F9}
                      alt="Ocean"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Ocean.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">1 MB</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={3} md={4} sm={4} xxl={2}>
                <Card className="overflow-hidden">
                  <a href={`${process.env.PUBLIC_URL}/filemanager/filedetails`}>
                    <img
                      src={F10}
                      alt="img"
                      className="file-manager-list w-100"
                    />
                  </a>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          Leaf.jpg
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">105 KB</span>
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
