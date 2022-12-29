import React from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";

// Default Carousel
import S1 from "../../assets/images/CarouselImages/SquareImages/S1.jpg";
import S2 from "../../assets/images/CarouselImages/SquareImages/S2.jpg";
import S3 from "../../assets/images/CarouselImages/SquareImages/S3.jpg";
import S4 from "../../assets/images/CarouselImages/SquareImages/S4.jpg";
import S5 from "../../assets/images/CarouselImages/SquareImages/S5.jpg";

// Carousel with controls
import S11 from "../../assets/images/CarouselImages/SquareImages/S11.jpg";
import S12 from "../../assets/images/CarouselImages/SquareImages/S12.jpg";
import S13 from "../../assets/images/CarouselImages/SquareImages/S13.jpg";
import S14 from "../../assets/images/CarouselImages/SquareImages/S14.jpg";
import S15 from "../../assets/images/CarouselImages/SquareImages/S15.jpg";

//  Carousel with captions
import S6 from "../../assets/images/CarouselImages/SquareImages/S6.jpg";
import S7 from "../../assets/images/CarouselImages/SquareImages/S7.jpg";
import S8 from "../../assets/images/CarouselImages/SquareImages/S8.jpg";
import S9 from "../../assets/images/CarouselImages/SquareImages/S9.jpg";
import S10 from "../../assets/images/CarouselImages/SquareImages/S10.jpg";

// Carousel with top-left indicators
import L1 from "../../assets/images/CarouselImages/LandscapeImages/L1.jpg";
import L2 from "../../assets/images/CarouselImages/LandscapeImages/L2.jpg";
import L3 from "../../assets/images/CarouselImages/LandscapeImages/L3.jpg";
import L4 from "../../assets/images/CarouselImages/LandscapeImages/L4.jpg";
import L5 from "../../assets/images/CarouselImages/LandscapeImages/L5.jpg";

// Carousel with top indicators
import L6 from "../../assets/images/CarouselImages/LandscapeImages/L6.jpg";
import L7 from "../../assets/images/CarouselImages/LandscapeImages/L7.jpg";
import L8 from "../../assets/images/CarouselImages/LandscapeImages/L8.jpg";
import L9 from "../../assets/images/CarouselImages/LandscapeImages/L9.jpg";
import L10 from "../../assets/images/CarouselImages/LandscapeImages/L10.jpg";

// Carousel with top-right indicators
import L11 from "../../assets/images/CarouselImages/LandscapeImages/L11.jpg";
import L12 from "../../assets/images/CarouselImages/LandscapeImages/L12.jpg";
import L13 from "../../assets/images/CarouselImages/LandscapeImages/L13.jpg";
import L14 from "../../assets/images/CarouselImages/LandscapeImages/L14.jpg";
import L15 from "../../assets/images/CarouselImages/LandscapeImages/L15.jpg";

// Carousel with bottom-left indicators
import L16 from "../../assets/images/CarouselImages/LandscapeImages/L16.jpg";
import L17 from "../../assets/images/CarouselImages/LandscapeImages/L17.jpg";
import L18 from "../../assets/images/CarouselImages/LandscapeImages/L18.jpg";
import L19 from "../../assets/images/CarouselImages/LandscapeImages/L19.jpg";
import L20 from "../../assets/images/CarouselImages/LandscapeImages/L20.jpg";

// Carousel with indicators
import L21 from "../../assets/images/CarouselImages/LandscapeImages/L21.jpg";
import L22 from "../../assets/images/CarouselImages/LandscapeImages/L22.jpg";
import L23 from "../../assets/images/CarouselImages/LandscapeImages/L23.jpg";
import L24 from "../../assets/images/CarouselImages/LandscapeImages/L24.jpg";
import L25 from "../../assets/images/CarouselImages/LandscapeImages/L25.jpg";

// Carousel with bottom-right indicators
import L26 from "../../assets/images/CarouselImages/LandscapeImages/L26.jpg";
import L27 from "../../assets/images/CarouselImages/LandscapeImages/L27.jpg";
import L28 from "../../assets/images/CarouselImages/LandscapeImages/L28.jpg";
import L29 from "../../assets/images/CarouselImages/LandscapeImages/L29.jpg";
import L30 from "../../assets/images/CarouselImages/LandscapeImages/L30.jpg";

// Carousel with GradientBackground caption
import G1 from '../../assets/images/CarouselImages/GradientImages/G1.jpg'
import G2 from '../../assets/images/CarouselImages/GradientImages/G2.jpg'
import G3 from '../../assets/images/CarouselImages/GradientImages/G3.jpg'
import G4 from '../../assets/images/CarouselImages/GradientImages/G4.jpg'
import G5 from '../../assets/images/CarouselImages/GradientImages/G5.jpg'

// Carousel with Background color captions
import C1 from '../../assets/images/CarouselImages/ColorImages/C1.jpg'
import C2 from '../../assets/images/CarouselImages/ColorImages/C2.jpg'
import C3 from '../../assets/images/CarouselImages/ColorImages/C3.jpg'
import C4 from '../../assets/images/CarouselImages/ColorImages/C4.jpg'

// Default Carousel
export const DefaultCarousel = () => {
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
};

//  Carousel with controls
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
};

//  Carousel with captions
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
};

// Carousel with top-left indicators

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
};

// Carousel with top indicators
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
};

// Carousel with top-right indicators

export const CarouselwithTopRightIndicator = () => {
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
    <div className="Top-right">
      <Slider {...settings}>
        <img className="d-block w-100 br-5" alt="" src={L11} />

        <img className="d-block w-100 br-5" alt="" src={L12} />

        <img className="d-block w-100 br-5" alt="" src={L13} />

        <img className="d-block w-100 br-5" alt="" src={L14} />

        <img className="d-block w-100 br-5" alt="" src={L15} />
      </Slider>
    </div>
  );
};

// Carousel with bottom-left indicators

export const CarouselwithbottomLeftIndicator = () => {
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
    <div className="bottom-left">
      <Slider {...settings}>
        <img className="d-block w-100 br-5" alt="" src={L16} />

        <img className="d-block w-100 br-5" alt="" src={L17} />

        <img className="d-block w-100 br-5" alt="" src={L18} />

        <img className="d-block w-100 br-5" alt="" src={L19} />

        <img className="d-block w-100 br-5" alt="" src={L20} />
      </Slider>
    </div>
  );
};

// Carousel with indicators
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
        <img className="d-block w-100 br-5" alt="" src={L21} />

        <img className="d-block w-100 br-5" alt="" src={L22} />

        <img className="d-block w-100 br-5" alt="" src={L23} />

        <img className="d-block w-100 br-5" alt="" src={L24} />

        <img className="d-block w-100 br-5" alt="" src={L25} />
      </Slider>
    </div>
  );
};

// Carousel with bottom-right indicators
export const CarouselwithbottomRightIndicator = () => {
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
        <img className="d-block w-100 br-5" alt="" src={L26} />

        <img className="d-block w-100 br-5" alt="" src={L27} />

        <img className="d-block w-100 br-5" alt="" src={L28} />

        <img className="d-block w-100 br-5" alt="" src={L29} />

        <img className="d-block w-100 br-5" alt="" src={L30} />
      </Slider>
    </div>
  );
};

// Carousel with Background color captions
export const CarouselwithBackgroundColorCaption = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 br-5 active"
          src={C1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 br-5" src={C2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 br-5" src={C3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 br-5 active"
          src={C4}
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// Carousel with GradientBackground caption
export const CarouselwithGradientBackgroundCaption = () =>{
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 br-5 active"
          src={G1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 br-5"
          src={G2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 br-5" src={G3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 br-5 active"
          src={G4}
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 br-5 active"
          src={G5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
