import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "../../assets/images/LightBoxImages/Img1.jpg";
import img2 from "../../assets/images/LightBoxImages/Img2.jpg";
import img3 from "../../assets/images/LightBoxImages/Img3.jpg";
import img4 from "../../assets/images/LightBoxImages/Img4.jpg";
import img5 from "../../assets/images/LightBoxImages/Img5.jpg";
import img6 from "../../assets/images/LightBoxImages/Img6.jpg";
import img7 from "../../assets/images/LightBoxImages/Img7.jpg";
import img8 from "../../assets/images/LightBoxImages/Img8.jpg";
import { Col, Row } from "react-bootstrap";

// Circle Progressbar START****

// Total Revenue

export const TotalRevenue = () => {
  const series = [
    {
      data: [30, 70, 30, 100, 50, 130, 100, 140],
      color: "#05c3fb",
    },
  ];
  const options = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  return (
    <div id="chart-1">
      <ReactApexChart
        className="areaChart chart-dropshadow-primary mx-5"
        options={options}
        series={series}
        type="line"
        height={120}
      />
    </div>
  );
};

// Support Cost

export const SupportCost = () => {
  const series = [
    {
      data: [24, 18, 28, 21, 32, 28, 30],
      color: "#e82646",
    },
  ];
  const options = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  return (
    <div id="chart-1">
      <ReactApexChart
        className="areaChart chart-dropshadow-danger mx-5"
        options={options}
        series={series}
        type="line"
        height={120}
      />
    </div>
  );
};

// Total Requests

export const TotalRequest = () => {
  const series = [
    {
      data: [24, 18, 28, 21, 32, 28, 30],
      color: "#09ad95",
    },
  ];
  const options = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  return (
    <div id="chart-1">
      <ReactApexChart
        className="areaChart chart-dropshadow-success mx-5"
        options={options}
        series={series}
        type="line"
        height={120}
      />
    </div>
  );
};

// Requests Answered

export const RequestsAnswered = () => {
  const series = [
    {
      data: [24, 18, 28, 21, 32, 28, 30],
      color: "#f7b731",
    },
  ];
  const options = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  return (
    <div id="chart-1">
      <ReactApexChart
        className="areaChart chart-dropshadow-warning mx-5"
        options={options}
        series={series}
        type="line"
        height={120}
      />
    </div>
  );
};

// Circle Progressbar END****

// Light Gallery START*****

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div>
      <Row className="masonry row">
        {images.map((val, index) => {
          return (
            <Col
              xs={6}
              sm={6}
              md={3}
              lg={3}
              xl={3}
              className="brick "
              key={index}
            >
              <img
                src={val}
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
      {isOpen && (
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

// Light Gallery END*****
