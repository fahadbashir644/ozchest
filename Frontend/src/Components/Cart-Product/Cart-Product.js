import { React, useEffect, useState } from "react";
import "./Cart-Product.css";

function CartProduct(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  const [cartItem, setCartItem] = useState([]);
  const [Total, setTotal] = useState(params.total);

  useEffect(() => {
    setDarkMode(params.Mode);
    params.setItems(cartItem);
  });

  useEffect(() => {
    var total = 0;
    cartItem.forEach((item) => {
      total = total + item.sale;
    });
    total = Math.round((total + Number.EPSILON) * 100) / 100;
    params.setBill(total);
  }, [params.current]);

  useEffect(() => {
    setCartItem(params.cart);
    localStorage.setItem("cart", JSON.stringify(params.cart));
  }, [params.cart]);

  function deleteItem(index) {
    var temp = cartItem;
    if (index > -1) {
      temp.splice(index, 1);
    }
    var total = 0;
    temp.forEach((item) => {
      total = total + item.sale;
    });
    total = Math.round((total + Number.EPSILON) * 100) / 100;

    params.setBill(total);
    params.setItems(temp);
    setCartItem(temp);
    params.setcart(temp);
    localStorage.setItem("cart", JSON.stringify(params.cart));
  }
  return (
    <div className="cartproduct-container">
      {!cartItem
        ? []
        : cartItem.map((item, index) => (
            <div className="cartproduct-box mb-3 mr-4" key={index}>
              <div className="cartproduct-img">
                <img src={item.image}></img>
              </div>
              <div
                className={
                  darkMode
                    ? "cartproduct-details dark-cartproduct-details p-3"
                    : "cartproduct-details p-4"
                }
              >
                <div className="cartproduct-name">
                  <div className="cartproduct-title">
                    <h4>{item.brand}</h4>
                  </div>
                  <div className="cartproduct-price">
                    <h4>
                      <span>{item.price}</span>
                    </h4>
                  </div>
                </div>
                <div className="cartproduct-quantity">
                  <h5>
                    <span>{item.code}</span> <span>{item.price}</span>
                  </h5>
                </div>
                <div className="cartproduct-region">
                  <h6>
                    Product Region <span>{item.amount}</span>
                  </h6>
                </div>
              </div>
              <div className="minus-sign">
                <button onClick={() => deleteItem(index)}>
                  <i
                    className="fa fa-minus-circle"
                    style={{ color: "red" }}
                  ></i>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default CartProduct;
