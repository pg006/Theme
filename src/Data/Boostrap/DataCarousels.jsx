import React, { Component } from "react";
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

import img1 from "../../assets/images/FileImages/File6.jpg";
import img2 from "../../assets/images/FileImages/File6.jpg";
import img3 from "../../assets/images/FileImages/File6.jpg";
import img4 from "../../assets/images/FileImages/File6.jpg";
import img5 from "../../assets/images/FileImages/File6.jpg";
import img6 from "../../assets/images/FileImages/File6.jpg";
import img7 from "../../assets/images/FileImages/File7.jpg";
import img8 from "../../assets/images/FileImages/File8.jpg";
import img9 from "../../assets/images/FileImages/File9.jpg";
import img10 from "../../assets/images/FileImages/File10.jpg";
import img11 from "../../assets/images/FileImages/File11.jpg";
import img12 from "../../assets/images/FileImages/File12.jpg";
import img13 from "../../assets/images/FileImages/File13.jpg";
import img14 from "../../assets/images/FileImages/File14.jpg";
import img15 from "../../assets/images/FileImages/File15.jpg";
import img16 from "../../assets/images/FileImages/File16.jpg";
import img17 from "../../assets/images/FileImages/File17.jpg";
import img18 from "../../assets/images/FileImages/File18.jpg";
import img19 from "../../assets/images/FileImages/File19.jpg";
import img20 from "../../assets/images/FileImages/File20.jpg";
import img21 from "../../assets/images/FileImages/File21.jpg";
import img22 from "../../assets/images/FileImages/File22.jpg";
import img23 from "../../assets/images/FileImages/File23.jpg";
import img24 from "../../assets/images/FileImages/File24.jpg";
import img25 from "../../assets/images/FileImages/File25.jpg";
import red from "../../assets/images/FileImages/File25.jpg";
import blue from "../../assets/images/FileImages/File25.jpg";
import green from "../../assets/images/FileImages/File25.jpg";
import gradient1 from "../../assets/images/FileImages/File25.jpg";
import gradient2 from "../../assets/images/FileImages/File25.jpg";
import gradient3 from "../../assets/images/FileImages/File25.jpg";

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
        <img className="d-block w-100 br-5" alt="" src={S6} />

        <img className="d-block w-100 br-5" alt="" src={S7} />

        <img className="d-block w-100 br-5" alt="" src={S8} />

        <img className="d-block w-100 br-5" alt="" src={S9} />

        <img className="d-block w-100 br-5" alt="" src={S10} />
      </Slider>
    </div>
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
}

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
  }

// Carousel with bottom-right indicators

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
}

// Carousel with bottom-left indicators

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
      cssEase: "linear",
    };
    return (
      <div className="bottom-left">
        <Slider {...settings}>
          <img className="d-block w-100 br-5" alt="" src={img9} />

          <img className="d-block w-100 br-5" alt="" src={img10} />

          <img className="d-block w-100 br-5" alt="" src={img11} />

          <img className="d-block w-100 br-5" alt="" src={img12} />

          <img className="d-block w-100 br-5" alt="" src={img13} />
        </Slider>
      </div>
    );
  }
}

// Carousel with Background color captions

export function CarouselwithBackgroundColorCaption() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 br-5 active"
          src={red}
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
        <img className="d-block w-100 br-5" src={blue} alt="Second slide" />

        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection he rejects pleasures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 br-5" src={green} alt="Third slide" />

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

export function CarouselwithGradientBackgroundCaption() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 br-5 active"
          src={gradient1}
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
          src={gradient2}
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
        <img className="d-block w-100 br-5" src={gradient3} alt="Third slide" />

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
