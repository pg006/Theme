import React, { useState } from "react";
import { Card, Row, Col, Form, Collapse } from "react-bootstrap";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import {
  CarouselwithBackgroundColorCaption,
  CarouselwithbottomLeftIndicator,
  CarouselwithbottomRightIndicator,
  CarouselwithCaption,
  CarouselwithControls,
  CarouselwithGradientBackgroundCaption,
  CarouselwithIndicator,
  CarouselwithTopIndicator,
  CarouselwithTopLeftIndicator,
  CarouselwithTopRightIndicator,
  DefaultCarousel,
} from "../../../Data/Boostrap/DataCarousels";
import "./Carousels.scss";

const Carousels = () => {
  const [Default, setDefault] = useState(false);
  const [Indicator, setIndicator] = useState(false);
  const [Arrow, setArrow] = useState(false);
  const [Bootstrap, setBootstrap] = useState(false);
  const [Top, setTop] = useState(false);
  const [TopRight, setTopRight] = useState(false);
  const [TopLeft, setTopLeft] = useState(false);
  const [BottomRight, setBottomRight] = useState(false);
  const [BottomLeft, setBottomLeft] = useState(false);
  const [BG, setBG] = useState(false);
  const [GradientBG, setGradientBG] = useState(false);
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Carousel"
          active="Carousel"
          items={["Advanced Elements"]}
        />
        {/* <!-- ROW-1 OPEN --> */}
        <Row>
          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Default Carousel</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setDefault(!Default)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <DefaultCarousel />
                <Collapse in={Default} className="mt-2">
                  <pre>
                    <code>
                      {`export const DefaultCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        <img
          className="d-block w-100 br-5"
          alt=""
          src={S1}
          data-bs-holder-rendered="true"
        />

        <img
          className="d-block w-100 br-5"
          alt=""
          src={S2}
          data-bs-holder-rendered="true"
        />

        <img
          className="d-block w-100 br-5"
          alt=""
          src={S3}
          data-bs-holder-rendered="true"
        />

        <img
          className="d-block w-100 br-5"
          alt=""
          src={S4}
          data-bs-holder-rendered="true"
        />

        <img
          className="d-block w-100 br-5"
          alt=""
          src={S5}
          data-bs-holder-rendered="true"
        />
      </Slider>
    </React.Fragment>
  );
};`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Carousel with controls</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setArrow(!Arrow)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <CarouselwithControls />
                <Collapse in={Arrow} className="mt-2">
                  <pre>
                    <code>
                      {`
                      export const CarouselwithControls = () => {
                        const settings = {
                          dots: false,
                          infinite: true,
                          speed: 500,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: true,
                          autoplay: false,
                          autoplaySpeed: 2000,
                          cssEase: "linear",
                        };
                        return (
                          <div>
                            <Slider {...settings}>
                              <img className="d-block w-100 br-5" alt="" src={S11} />
                      
                              <img className="d-block w-100 br-5" alt="" src={S12} />
                      
                              <img className="d-block w-100 br-5" alt="" src={S13} />
                      
                              <img className="d-block w-100 br-5" alt="" src={S14} />
                      
                              <img className="d-block w-100 br-5" alt="" src={S15} />
                            </Slider>
                          </div>
                        );
                      };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Carousel with captions</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setBootstrap(!Bootstrap)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <CarouselwithCaption />
                <Collapse in={Bootstrap} className="mt-2">
                  <pre>
                    <code>
                     {`
                     export const CarouselwithCaption = () => {
                      return (
                        <Carousel>
                          <Carousel.Item>
                            <img className="d-block w-100 br-5 active" src={S6} alt="First slide" />
                            <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>Secure other greater pleasures</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="d-block w-100 br-5" src={S7} alt="Second slide" />
                    
                            <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>Secure other greater pleasures</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="d-block w-100 br-5" src={S8} alt="Third slide" />
                    
                            <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>Secure other greater pleasures</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="d-block w-100 br-5" src={S9} alt="Third slide" />
                    
                            <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>Secure other greater pleasures</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="d-block w-100 br-5" src={S10} alt="Third slide" />
                    
                            <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>Secure other greater pleasures</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      );
                    };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Carousel with top-left indicators
                </Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setTopLeft(!TopLeft)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <div
                  id="carousel-indicators3"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <CarouselwithTopLeftIndicator />
                </div>
                <Collapse in={TopLeft} className="mt-2">
                  <pre>
                    <code>
                      {`
                      export const CarouselwithTopLeftIndicator = () => {
                        const settings = {
                          dots: true,
                          infinite: true,
                          speed: 500,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: false,
                          autoplay: true,
                          autoplaySpeed: 2000,
                          cssEase: "linear",
                        };
                        return (
                          <div className="Top-left">
                            <Slider {...settings}>
                              <img className="d-block w-100 br-5" alt="" src={L1} />
                    
                              <img className="d-block w-100 br-5" alt="" src={L2} />
                    
                              <img className="d-block w-100 br-5" alt="" src={L3} />
                    
                              <img className="d-block w-100 br-5" alt="" src={L4} />
                    
                              <img className="d-block w-100 br-5" alt="" src={L5} />
                            </Slider>
                          </div>
                        );
                      }`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Carousel with top indicators</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setTop(!Top)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <div
                  id="carousel-indicators1"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <CarouselwithTopIndicator />
                </div>
                <Collapse in={Top} className="mt-2">
                  <pre>
                    <code>
                     {`
                     export const CarouselwithTopIndicator = () => {
                      const settings = {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        cssEase: "linear",
                      };
                      return (
                        <div className="Top">
                          <Slider {...settings}>
                            <img className="d-block w-100 br-5" alt="" src={L6} />
                    
                            <img className="d-block w-100 br-5" alt="" src={L7} />
                    
                            <img className="d-block w-100 br-5" alt="" src={L8} />
                    
                            <img className="d-block w-100 br-5" alt="" src={L9} />
                    
                            <img className="d-block w-100 br-5" alt="" src={L10} />
                          </Slider>
                        </div>
                      );
                    };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Carousel with top-right indicators
                </Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setTopRight(!TopRight)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <div
                  id="carousel-indicators2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <CarouselwithTopRightIndicator />
                </div>
                <Collapse in={TopRight} className="mt-2">
                  <pre>
                    <code>
                      {`
                      export class CarouselwithbottomRightIndicator extends Component {
                        render() {
                          const settings = {
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 2000,
                            cssEase: "linear",
                          };
                          return (
                            <div className="bottom-right">
                              <Slider {...settings}>
                                <img className="d-block w-100 br-5" alt="" src={img4} />
                      
                                <img className="d-block w-100 br-5" alt="" src={img5} />
                      
                                <img className="d-block w-100 br-5" alt="" src={img6} />
                      
                                <img className="d-block w-100 br-5" alt="" src={img7} />
                      
                                <img className="d-block w-100 br-5" alt="" src={img8} />
                              </Slider>
                            </div>
                          );
                        }
                      }`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Carousel with bottom-left indicators
                </Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setBottomLeft(!BottomLeft)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <div
                  id="carousel-indicators5"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <CarouselwithbottomLeftIndicator />
                </div>
                <Collapse in={BottomLeft} className="mt-2">
                  <pre>
                    <code>
                      {`
                        export class CarouselwithbottomLeftIndicator extends Component {
                         render() {
                             const settings = {
                                 dots: true,
                                 infinite: true,
                                 speed: 500,
                                 slidesToShow: 1,
                                 slidesToScroll: 1,
                                 arrows: false,
                                 autoplay: true,
                                 autoplaySpeed: 2000,
                                 cssEase: "linear"
                             };
                             return (
                                 <div className="bottom-left">
                                     <Slider {...settings}>

                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/9.jpg")}/>

                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/10.jpg")}/>

                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/11.jpg")}/>

                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/12.jpg")}/>

                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/13.jpg")}/>
                                     </Slider>
                                 </div>
                             );
                         }
                        }`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Carousel with indicators</Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setIndicator(!Indicator)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <CarouselwithIndicator />

                <Collapse in={Indicator} className="mt-2">
                  <pre>
                    <code>
                      {`
                      export const CarouselwithIndicator = () => {
                        const settings = {
                          dots: true,
                          infinite: true,
                          speed: 500,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: false,
                          autoplay: true,
                          autoplaySpeed: 2000,
                          cssEase: "linear",
                        };
                        return (
                          <div>
                            <Slider {...settings}>
                              <img className="d-block w-100 br-5" alt="" src={S6} />
                      
                              <img className="d-block w-100 br-5" alt="" src={S7} />
                      
                              <img className="d-block w-100 br-5" alt="" src={S8} />
                      
                              <img className="d-block w-100 br-5" alt="" src={S9} />
                      
                              <img className="d-block w-100 br-5" alt="" src={S10} />
                            </Slider>
                          </div>
                        );
                      };`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Carousel with bottom-right indicators
                </Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setBottomRight(!BottomRight)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <div
                  id="carousel-indicators4"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <CarouselwithbottomRightIndicator />
                </div>
                <Collapse in={BottomRight} className="mt-2">
                  <pre>
                    <code>
                      {`
                        export class CarouselwithbottomRightIndicator extends Component {
                         render() {
                             const settings = {
                                 dots: true,
                                 infinite: true,
                                 speed: 500,
                                 slidesToShow: 1,
                                 slidesToScroll: 1,
                                 arrows: false,
                                 autoplay: true,
                                 autoplaySpeed: 2000,
                                 cssEase: "linear"
                             };
                             return (
                                 <div className="bottom-right">
                                     <Slider {...settings}>
                              
                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/4.jpg")}/>
                              
                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/5.jpg")}/>
                              
                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/6.jpg")}/>
                              
                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/7.jpg")}/>
                              
                                                 <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/8.jpg")}/>
                                     </Slider>
                                 </div>
                             );
`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          {/* <!-- COL-END --> */}
          <div className="col-md-12 col-lg-6">
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Carousel with Background color captions
                </Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setBG(!BG)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <CarouselwithBackgroundColorCaption />
                <Collapse in={BG} className="mt-2">
                  <pre>
                    <code>
                      {`
                        export function CarouselwithBackgroundColorCaption() {
                        
                          return (
                        <Carousel>
                          <Carousel.Item>
                              <img
                                  className="d-block w-100 br-5 active"
                                  src={require("../../assets/images/media/red.jpg")}
                                  alt="First slide"
                              />
                              <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                              </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                              <img
                                  className="d-block w-100 br-5"
                                  src={require("../../assets/images/media/blue.jpg")}
                                  alt="Second slide"
                              />
                          
                              <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                              </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                              <img
                                  className="d-block w-100 br-5"
                                  src={require("../../assets/images/media/green.jpg")}
                                  alt="Third slide"
                              />

                              <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                              </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                        )
                        }`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </div>
          {/* <!-- COL-END --> */}
          <div className="col-md-12 col-lg-6">
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Carousel with GradientBackground caption
                </Card.Title>
                <Form className="ms-auto">
                  <Form.Check
                    type="switch"
                    label="Show Code"
                    id="custom-switch"
                    onClick={() => setGradientBG(!GradientBG)}
                    className="showcode d-flex ms-auto mx-2"
                  />
                </Form>
              </Card.Header>
              <Card.Body className="h-100">
                <CarouselwithGradientBackgroundCaption />
                <Collapse in={GradientBG} className="mt-2">
                  <pre>
                    <code>
                      {`
                        export function CarouselwithGradientBackgroundCaption() {

                        return (
                        <Carousel>
                          <Carousel.Item>
                            <img
                                className="d-block w-100 br-5 active"
                                src={require("../../assets/images/media/gradient1.jpg")}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                              <img
                                  className="d-block w-100 br-5"
                                  src={require("../../assets/images/media/gradient2.jpg")}
                                  alt="Second slide"
                              />

                            <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                              <img
                                  className="d-block w-100 br-5"
                                  src={require("../../assets/images/media/gradient3.jpg")}
                                  alt="Third slide"
                              />
      
                          <Carousel.Caption>
                              <h3>Slide label</h3>
                              <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>)}`}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </div>
          {/* <!-- COL-END --> */}
        </Row>
        {/* <!-- ROW-2 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default Carousels;
