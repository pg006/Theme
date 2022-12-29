import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import { Card, Col, Row } from "react-bootstrap";
import "./MediaObject.scss";

// Default Media Object
import img1 from "../../../assets/images/CarouselImages/LandscapeImages/L1.jpg";
import img2 from "../../../assets/images/CarouselImages/LandscapeImages/L2.jpg";
import img3 from "../../../assets/images/CarouselImages/LandscapeImages/L3.jpg";

// List Media Object
import img4 from "../../../assets/images/CarouselImages/LandscapeImages/L6.jpg";
import img5 from "../../../assets/images/CarouselImages/LandscapeImages/L7.jpg";
import img6 from "../../../assets/images/CarouselImages/LandscapeImages/L8.jpg";
import img7 from "../../../assets/images/CarouselImages/LandscapeImages/L9.jpg";
import img8 from "../../../assets/images/CarouselImages/LandscapeImages/L10.jpg";

// Alignments Media Object
import img9 from "../../../assets/images/CarouselImages/LandscapeImages/L16.jpg";
import img10 from "../../../assets/images/CarouselImages/LandscapeImages/L17.jpg";
import img11 from "../../../assets/images/CarouselImages/LandscapeImages/L18.jpg";
import img12 from "../../../assets/images/CarouselImages/LandscapeImages/L19.jpg";
import img13 from "../../../assets/images/CarouselImages/LandscapeImages/L20.jpg";

// Nesting Media Object
import img14 from "../../../assets/images/CarouselImages/LandscapeImages/L4.jpg";
import img15 from "../../../assets/images/CarouselImages/LandscapeImages/L11.jpg";
import img16 from "../../../assets/images/CarouselImages/LandscapeImages/L12.jpg";
import img17 from "../../../assets/images/CarouselImages/LandscapeImages/L13.jpg";
import img18 from "../../../assets/images/CarouselImages/LandscapeImages/L21.jpg";
import img19 from "../../../assets/images/CarouselImages/LandscapeImages/L22.jpg";
import img20 from "../../../assets/images/CarouselImages/LandscapeImages/L23.jpg";
import img21 from "../../../assets/images/CarouselImages/LandscapeImages/L24.jpg";
import img22 from "../../../assets/images/CarouselImages/LandscapeImages/L28.jpg";
import img23 from "../../../assets/images/CarouselImages/LandscapeImages/L29.jpg";

// Order Media Object
import img24 from "../../../assets/images/CarouselImages/LandscapeImages/L5.jpg";

const MediaObject = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Media Object"
          active="Mediaobject"
          items={["Advanced Elements"]}
        />
        {/* <--<-- ROW OPEN -->--> */}
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Card className="Relatedpost nested-media">
              <Card.Header>
                <Card.Title>Default Media Object</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="example">
                  <div className="media media-lg mt-0">
                    <img
                      className="avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img1}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Media Title 1</h4>
                      <p className="text-muted mb-0 fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="media media-lg mt-0">
                    <img
                      className="avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img2}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Media Title 2</h4>
                      <p className="text-muted mb-0 fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="media media-lg mt-0">
                    <img
                      className="avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img3}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Media Title 3</h4>
                      <p className="text-muted mb-0 fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<-- COL END -->--> */}

          <Col lg={12} md={12} sm={12}>
            <Card className="Relatedpost nested-media">
              <Card.Header>
                <Card.Title>List Media Object</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="example">
                  <ul className="list-unstyled">
                    <li className="media media-lg mt-0 border-bottom-0">
                      <img
                        className="avatar avatar-xl bradius me-3 mb-4 media-img"
                        src={img4}
                        alt="Generic placeholder"
                      />
                      <div className="media-body">
                        <h4 className="mt-0 mb-1">Media Title 01</h4>
                        <p className="text-muted mb-0 fs-14">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </li>
                    <li className="media media-lg my-4 border-bottom-0">
                      <img
                        className="avatar avatar-xl bradius me-3 mb-4 media-img"
                        src={img5}
                        alt="Generic placeholder"
                      />
                      <div className="media-body">
                        <h4 className="mt-0 mb-1">Media Title 02</h4>
                        <p className="text-muted mb-0 fs-14">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </li>
                    <li className="media media-lg border-bottom-0">
                      <img
                        className="avatar avatar-xl bradius me-3 mb-4 media-img"
                        src={img6}
                        alt="Generic placeholder"
                      />
                      <div className="media-body">
                        <h4 className="mt-0 mb-1">Media Title 03</h4>
                        <p className="text-muted mb-0 fs-14">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </li>
                    <li className="media media-lg border-bottom-0">
                      <img
                        className="avatar avatar-xl bradius me-3 mb-4 media-img"
                        src={img7}
                        alt="Generic placeholder"
                      />
                      <div className="media-body">
                        <h4 className="mt-0 mb-1">Media Title 04</h4>
                        <p className="text-muted mb-0 fs-14">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </li>
                    <li className="media media-lg border-bottom-0">
                      <img
                        className="avatar avatar-xl bradius me-3 mb-4 media-img"
                        src={img8}
                        alt="Generic placeholder"
                      />
                      <div className="media-body">
                        <h4 className="mt-0 mb-1">Media Title 05</h4>
                        <p className="text-muted mb-0 fs-14">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<-- COL END -->--> */}

          <Col lg={12} md={12} sm={12}>
            <Card className="Relatedpost nested-media">
              <Card.Header>
                <Card.Title>Alignments Media Object</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="example">
                  <div className="media media-lg mt-0">
                    <img
                      className="align-self-start avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img9}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Top-aligned media</h4>
                      <p className="text-muted fs-14">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                      <p className="text-muted fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="media media-lg">
                    <img
                      className="align-self-center avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img10}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Second-aligned media</h4>
                      <p className="text-muted fs-14">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                      <p className="text-muted fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="media media-lg">
                    <img
                      className="align-self-end avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img11}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Center-aligned media</h4>
                      <p className="text-muted fs-14">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                      <p className="text-muted fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="media media-lg">
                    <img
                      className="align-self-end avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img12}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Second-Last-aligned media</h4>
                      <p className="text-muted fs-14">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                      <p className="text-muted fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="media media-lg">
                    <img
                      className="align-self-end avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img13}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Bottom-aligned media</h4>
                      <p className="text-muted fs-14">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                      <p className="text-muted fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<-- COL END -->--> */}

          <Col lg={12} md={12} sm={12}>
            <Card className="Relatedpost nested-media overflow-hidden">
              <Card.Header>
                <Card.Title>Nesting Media Object</Card.Title>
              </Card.Header>
              <Card.Body className="overflow-hidden">
                <div className="example">
                  <div className="media media-lg mt-0">
                    <img
                      className="avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img14}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Media Title 1</h4>
                      <p className="text-muted mb-0 fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="media media-lg mt-0">
                    <img
                      className="avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img22}
                      alt="Generic placeholder"
                    />
                    <div className="media-body">
                      <h4 className="mt-0">Media Title 2</h4>
                      <p className="text-muted mb-0 fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <div className="media media-lg mt-0">
                        <img
                          className="avatar avatar-xl bradius me-3 mb-4 media-img"
                          src={img23}
                          alt="Generic placeholder"
                        />
                        <div className="media-body">
                          <h4 className="mt-0">Media Title 2.1</h4>
                          <p className="text-muted mb-0 fs-14">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media media-lg mt-0">
                    <img
                      className="avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img15}
                      alt="Generic placeholder"
                    />
                    <div className="media-body overflow-hidden">
                      <h4 className="mt-0">Media Title 3</h4>
                      <p className="text-muted mb-0 fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <div className="media media-lg mt-3">
                        <img
                          className="avatar avatar-xl bradius me-3 mb-4 media-img"
                          src={img16}
                          alt="Generic placeholder"
                        />
                        <div className="media-body overflow-hidden">
                          <h4 className="mt-0">Media Title 3.1</h4>
                          <p className="text-muted mb-0 fs-14">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                        </div>
                      </div>
                      <div className="media media-lg mt-3">
                        <img
                          className="avatar avatar-xl bradius me-3 mb-4 media-img"
                          src={img17}
                          alt="Generic placeholder"
                        />
                        <div className="media-body overflow-hidden">
                          <h4 className="mt-0">Media Title 3.2</h4>
                          <p className="text-muted mb-0 fs-14">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media media-lg mt-0">
                    <img
                      className="avatar avatar-xl bradius me-3 mb-4 media-img"
                      src={img18}
                      alt="Generic placeholder"
                    />
                    <div className="media-body overflow-hidden">
                      <h4 className="mt-0">Media Title 4</h4>
                      <p className="text-muted mb-0 fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <div className="media media-lg mt-3">
                        <img
                          className="avatar avatar-xl bradius me-3 mb-4 media-img"
                          src={img19}
                          alt="Generic placeholder"
                        />
                        <div className="media-body overflow-hidden">
                          <h4 className="mt-0">Media Title 4.1</h4>
                          <p className="text-muted mb-0 fs-14">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                          <div className="media media-lg mt-3">
                            <img
                              className="avatar avatar-xl bradius me-3 mb-4 media-img"
                              src={img20}
                              alt="Generic placeholder"
                            />
                            <div className="media-body overflow-hidden">
                              <h4 className="mt-0">Media Title 4.1.1</h4>
                              <p className="text-muted mb-0 fs-14">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="media media-lg mt-0">
                        <img
                          className="avatar avatar-xl bradius me-3 mb-4 media-img"
                          src={img21}
                          alt="Generic placeholder"
                        />
                        <div className="media-body">
                          <h4 className="mt-0">Media Title 4.2</h4>
                          <p className="text-muted mb-0 fs-14">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<-- COL END -->--> */}

          <Col lg={12} md={12} sm={12}>
            <Card className="Relatedpost nested-media ">
              <Card.Header>
                <Card.Title>Order Media Object</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="example">
                  <div className="media media-lg mt-0">
                    <div className="media-body mt-0">
                      <h4 className="mt-0 mb-4">Media object</h4>
                      <p className="text-muted mb-0 fs-14">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <img
                      className="ms-2 mt-3 mb-3 bradius media-img"
                      src={img24}
                      alt="Generic placeholder"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <--<-- COL END -->--> */}
        </Row>
        {/* <--<-- ROW CLOSE -->--> */}
      </div>
    </React.Fragment>
  );
};

export default MediaObject;
