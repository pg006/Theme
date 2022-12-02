import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const itemData = [
  {
    id: "1",
    img: require("../../assets/images/pngs/8.jpg"),
    heading: "Stylish Rockerz 255 Ear Pods",
    price1: "$16,599",
    price2: "$19,799",
    status: "In Stock",
    bg: "success",
  },
  {
    id: "2",
    img: require("../../assets/images/pngs/9.jpg"),
    heading: "Candy Pure Rose Water",
    price1: "$599",
    price2: "$799",
    status: "In Stock",
    bg: "success",
  },
  {
    id: "3",
    img: require("../../assets/images/pngs/10.jpg"),
    heading: "White Tshirt for Men",
    price1: "$1,399",
    price2: "$1,599",
    status: "Out Of Stock",
    bg: "danger",
  },
  {
    id: "4",
    img: require("../../assets/images/pngs/4.jpg"),
    heading: "Flower Pot for Home Decor",
    price1: "$1,299",
    price2: "$1,899",
    status: "In Stock",
    bg: "success",
  },
  {
    id: "5",
    img: require("../../assets/images/pngs/1.jpg"),
    heading: "Women Party Wear Dress",
    price1: "$2,299",
    price2: "$1,599",
    status: "Out Of Stock",
    bg: "danger",
  },
  {
    id: "6",
    img: require("../../assets/images/pngs/3.jpg"),
    heading: "Running Shoes for men",
    price1: "$6,599",
    price2: "$9,799",
    status: "In Stock",
    bg: "success",
  },
  {
    id: "7",
    img: require("../../assets/images/pngs/6.jpg"),
    heading: "Black Digital Camera",
    price1: "$56,599",
    price2: "$59,799",
    status: "Out Of Stock",
    bg: "danger",
  },
  {
    id: "8",
    img: require("../../assets/images/pngs/5.jpg"),
    heading: "Men shirt for party wear",
    price1: "$3,599",
    price2: "$3,799",
    status: "In Stock",
    bg: "success",
  },
];
export function DataWishlist() {
  const [idx, setidx] = React.useState(itemData);
  function handleRemove(id) {
    const newList = idx.filter((idx) => idx.id !== id);
    setidx(newList);
  }
  return (
    <Row>
      {idx.map((item) => (
        <Col sm={6} md={6} xl={3} className="alert" key={item.id}>
          <Card>
            <div className="product-grid6">
              <div className="product-image6 p-5">
                <ul className="icons-wishlist">
                  <li>
                    <Link
                      to="#"
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-danger"
                    >
                      <i className="fe fe-heart"></i>
                    </Link>
                  </li>
                </ul>
                <Link
                  to={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`}
                  className="bg-light"
                >
                  <img
                    className="img-fluid br-7 w-100"
                    src={item.img}
                    alt="img"
                  />
                </Link>
              </div>
              <Card.Body className="pt-0">
                <div className="product-content text-center">
                  <h1 className="title fw-bold fs-20">
                    <Link
                      to={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`}
                    >
                      {item.heading}
                    </Link>
                  </h1>
                  <div className="mb-2 text-warning">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star-half-o text-warning"></i>
                    <i className="fa fa-star-o text-warning"></i>
                  </div>
                  <div className="price mb-2">
                    {item.price1}
                    <span className="ms-4">{item.price2}</span>
                  </div>
                  <span className={`text-${item.bg} fs-18 fw-semibold`}>
                    {item.status}
                  </span>
                </div>
              </Card.Body>
              <Card.Footer className="text-center">
                <Link
                  to={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`}
                  className="btn btn-primary ms-2 mb-1"
                >
                  <i className="fe fe-shopping-cart me-2"></i>Add to cart
                </Link>
                <Link to="#" className="btn btn-light ms-2 mb-1">
                  <i className="fe fe-share-2 me-2 text-dark"></i>Share
                </Link>
              </Card.Footer>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
