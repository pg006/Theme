import React from "react";
import { Tooltip, OverlayTrigger, Button, Table } from "react-bootstrap";
import { CartData } from "./Mock";

export const Cart = () => {

  const [cartDataList, setCartDataList] = React.useState(CartData);
  const deleteProduct = (id) => {
    const newList = cartDataList.filter((idx) => idx.id !== id);
    setCartDataList(newList);
  };

  function dec(el) {
    let unit = el.currentTarget.parentElement.querySelector("input").value;

    if (Number(unit) === 0) {
      return false;
    } else {
      el.currentTarget.parentElement.querySelector("input").value--;
    }
  }
  function inc(el) {
    el.currentTarget.parentElement.querySelector("input").value++;
  }
  return (
    <Table className="table-bordered table-vcenter">
      <thead>
        <tr className="border-top">
          <th>Product</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartDataList.map((list, index) => {
          return (
            <tr key={index}>
              <td>
                <div className="text-center">
                  <img
                    src={list.img}
                    alt="img"
                    className="cart-img text-center"
                  />
                </div>
              </td>
              <td>{list.productName}</td>
              <td className="fw-bold">${list.price}</td>
              <td>
                <div className="handle-counter ms-2" id="handleCounter4">
                  <Button
                    variant="default"
                    className="counter-minus lh-2 shadow-none"
                    onClick={dec}
                  >
                    <i className="fa fa-minus text-muted"></i>
                  </Button>
                  <input
                    type="text"
                    defaultValue={list.quantity}
                    className="qty"
                  />
                  <Button
                    variant="default"
                    className="counter-plus lh-2 shadow-none"
                    onClick={inc}
                  >
                    <i className="fa fa-plus text-muted"></i>
                  </Button>
                </div>
              </td>
              <td>${list.price * list.quantity}</td>

              <td className="text-center">
                <div className=" d-flex g-2 justify-content-around">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Wishlist</Tooltip>}
                  >
                    <div className="text-secondary bg-secondary-transparent btn-icon py-1 me-2">
                      <i className="bi bi-heart fs-16"></i>
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Delete</Tooltip>}
                  >
                    <div
                      className="text-danger bg-danger-transparent btn-icon py-1"
                      onClick={() => {
                        deleteProduct(list.id);
                      }}
                    >
                      <i className="bi bi-trash fs-16"></i>
                    </div>
                  </OverlayTrigger>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
