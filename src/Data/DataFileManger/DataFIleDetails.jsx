import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Slider from "react-slick";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { images, imagesDetails } from "./Mock";

export const LightGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Row className="masonry">
        {images.map((item, index) => {
          return (
            <Col xs={6} sm={4} md={4} xl={4} className="brick" key={index}>
              <img
                src={item}
                alt="media1"
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
              />
            </Col>
          );
        })}
      </Row>
      {isOpen && images[photoIndex] && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setIsOpen(false);
          }}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % images.length);
          }}
        />
      )}
    </div>
  );
};

export const RecentFolder = () => {
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
                <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}>
                  <img src={val.img} alt="img" height="124" className="w-100" />
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
};

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
