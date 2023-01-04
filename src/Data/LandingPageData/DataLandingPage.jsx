import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import { landingData } from "./Mock";

export const Features = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          speed: 3000,
          autoplay: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          speed: 3000,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          speed: 3000,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className="indicator">
      <Slider {...settings}>
        {landingData.map((val, index) => {
          return (
            <div className="" key={index}>
              <img src={val.img} alt="web-1" />
              <h5 className="mt-3 text-white">{val.name}</h5>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="text-center">
          <Row>
            <Col xl={8} md={12} className="d-block mx-auto">
              <div className="testimonia">
                <p className="text-white-80">
                  <i className="fa fa-quote-left fs-20 text-white-80"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum
                  accusamus eveniet molestias voluptatum inventore laboriosam
                  labore sit, aspernatur praesentium iste impedit quidem dolor
                  veniam.
                </p>
                <h3 className="title">Elizabeth</h3>
                <span className="post">Web Developer</span>
                <div
                  className="rating-stars block my-rating-5 mb-5"
                  data-rating="4"
                ></div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="text-center">
          <div className="row">
            <div className="col-xl-8 col-md-12 d-block mx-auto">
              <div className="testimonia">
                <p className="text-white-80">
                  <i className="fa fa-quote-left fs-20"></i> Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore.
                </p>
                <div className="testimonia-data">
                  <h3 className="title">williamson</h3>
                  <span className="post">Web Developer</span>
                  <div className="rating-stars">
                    <div
                      className="rating-stars block my-rating-5 mb-5"
                      data-rating="5"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="row">
            <div className="col-xl-8 col-md-12 d-block mx-auto">
              <div className="testimonia">
                <p className="text-white-80">
                  <i className="fa fa-quote-left fs-20"></i> Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum. Sed ut perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium.
                </p>
                <div className="testimonia-data">
                  <h3 className="title">Sophie Carr</h3>
                  <span className="post">Web Developer</span>
                  <div className="rating-stars">
                    <div
                      className="rating-stars block my-rating-5 mb-5"
                      data-rating="5"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
