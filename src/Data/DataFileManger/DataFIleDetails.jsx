import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Slider from "react-slick";

import img1 from "../../assets/images/LightBoxImages/Img1.jpg";
import img2 from "../../assets/images/LightBoxImages/Img2.jpg";
import img3 from "../../assets/images/LightBoxImages/Img3.jpg";
import img4 from "../../assets/images/LightBoxImages/Img4.jpg";
import img5 from "../../assets/images/LightBoxImages/Img5.jpg";
import img6 from "../../assets/images/LightBoxImages/Img6.jpg";
import img7 from "../../assets/images/LightBoxImages/Img7.jpg";
import img8 from "../../assets/images/LightBoxImages/Img8.jpg";
import img9 from "../../assets/images/LightBoxImages/Img9.jpg";
import DOC from "../../assets/images/FileImages/Document.png";
import XLS from "../../assets/images/FileImages/XLS.png";
import PNG from "../../assets/images/FileImages/PNG.png";
import PDF from "../../assets/images/FileImages/PDF.png";


import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export class LightGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <Row className="masonry">
          {images.map((item, index) => {
            return (
              <Col
                xs={6}
                sm={4}
                md={4}
                xl={4}
                key={index}
                className="mb-5  border-bottom-0"
                onClick={() => {
                  this.setState({ isOpen: true, photoIndex: index });
                }}
                data-sub-html=""
              >
                <Link to="">
                  <img
                    className="img-responsive br-5"
                    src={item}
                    alt="Thumb-1"
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }


const imagesDetails=[
  {
    img:img1,
    name:"Flower.jpg",
    size:"66 KB"
  },
  {
    img:PNG,
    name:"PNG.png",
    size:"66 KB"
  },
  {
    img:img9,
    name:"Bird.jpg",
    size:"60 KB"
  },
  {
    img:img3,
    name:"Desert.jpg",
    size:"50 KB"
  },
  {
    img:DOC,
    name:"Theme.doc",
    size:"2 MB"
  },
  {
    img:img8,
    name:"Laptop.jpg",
    size:"16 KB"
  },
  {
    img:img5,
    name:"Car.jpg",
    size:"1 MB"
  },
  {
    img:XLS,
    name:"Sheet.xls",
    size:"500 KB"
  },
  {
    img:PDF,
    name:"Theme.pdf",
    size:"20 MB"
  }
]

export class RecentFolder extends Component {
  render() {
    const settings = {
      className: "details",
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {imagesDetails.map((val, index) => {
            return (
              <div className="item p-2" key={index}>
                <Card className="overflow-hidden border p-0 mb-0 bg-white">
                  <Link
                    to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}
                  >
                    <img
                      src={val.img}
                      alt="img"
                      height="124"
                      className="w-100"
                    />
                  </Link>
                  <Card.Footer>
                    <div className="d-flex">
                      <div className="">
                        <h5 className="mb-0 fw-semibold text-break">
                          {val.name}
                        </h5>
                      </div>
                      <div className="ms-auto my-auto">
                        <span className="text-muted mb-0">{val.size}</span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

/*
<Slider {...settings}>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}>
                <img
                  src={require("../../assets/images/media/files/03.jpg")}
                  alt="img"
                  height="124"
                  className="w-100"
                />
              </Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">image2.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link
                to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}
                className="mx-auto my-3"
              >
                <img
                  src={require("../../assets/images/media/files/pdf.png")}
                  alt="img"
                />
              </Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">file.pdf</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">32 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}>
                <img
                  src={require("../../assets/images/media/files/07.jpg")}
                  alt="img"
                  height="124"
                  className="w-100"
                />
              </Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">76 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link
                to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}
                className="mx-auto my-3"
              >
                <img
                  src={require("../../assets/images/media/files/excel.png")}
                  alt="img"
                />
              </Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">excel.xls</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">34 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}>
                <img
                  src={require("../../assets/images/media/files/06.jpg")}
                  alt="img"
                  height="124"
                  className="w-100"
                />
              </Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">nature.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link
                to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}
                className="mx-auto my-3"
              >
                <img
                  src={require("../../assets/images/media/files/ppt1.png")}
                  alt="img"
                />
              </Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">demo.ppt</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">67 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}>
                <img
                  src={require("../../assets/images/media/files/02.jpg")}
                  alt="img"
                  height="124"
                  className="w-100"
                />
              </Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="d-flex">
                    <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">76 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Slider>
*/
