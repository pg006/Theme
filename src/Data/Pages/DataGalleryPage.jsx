import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import img1 from "../../assets/images/media/1.jpg";
import img2 from "../../assets/images/media/2.jpg";
import img3 from "../../assets/images/media/3.jpg";
import img4 from "../../assets/images/media/4.jpg";
import img5 from "../../assets/images/media/5.jpg";
import img6 from "../../assets/images/media/6.jpg";
import img7 from "../../assets/images/media/7.jpg";
import img8 from "../../assets/images/media/8.jpg";
import img9 from "../../assets/images/media/9.jpg";
import img10 from "../../assets/images/media/10.jpg";
import img11 from "../../assets/images/media/11.jpg";
import { Col, Row } from "react-bootstrap";

export const LightGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

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
                  setPhotoIndex(index)
                }}
              />
            </Col>
          );
        })}
      </Row>
      {console.log(photoIndex,"photoIndex")}
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
