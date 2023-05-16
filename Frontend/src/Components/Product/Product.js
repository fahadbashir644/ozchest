import { React, useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import { useAlert } from "react-alert";

function ItemScreen(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  const [Card, setCard] = useState(params.Item);
  const [Countries, setCountries] = useState(params.country);
  const [Curr, setCurr] = useState(params.curr ? params.curr : {});
  const [Stock, setStock] = useState(params.stock ? params.stock : {});
  const [price, setPrice] = useState(params.usd);
  const [fee, setFee] = useState(params.usd);
  const alert = useAlert();
  useEffect(() => {
    setDarkMode(params.Mode);
    setCountries(params.country);
    setStock(params.stock);
    setCurr(params.curr);
    var temp = params.usd * Number(document.getElementById("amount1").value);
    var f = temp * 0.02;
    setFee(f + temp);
    setPrice(temp);
  });

  function handleAmount() {
    var temp = params.usd * Number(document.getElementById("amount").value);
    var f = temp * 0.02;
    setFee(f + temp);
    setPrice(temp);
  }
  useEffect(() => {
    setCard(params.Item);
  }, [params.Item]);

  function handleChange() {
    params.updateprice(Card.Brand);
    // params.updatestock(Card.Brand, Curr.code, 2);
  }

  useEffect(() => {
    if (Curr) params.updatestock(Card.Brand, Curr.code, 1);
    // setStock(params.stock);
  }, [params.curr]);

  function handleChange1() {
    params.updatestock(Card.Brand, params.curr.code, 2);
  }
  function openCartScreen() {
    document.getElementById("cart").style.setProperty("width", "60%");
    document.getElementById("cart").classList.add("cart-size");
  }
  function closeItemScreen() {
    document
      .getElementById("item-screen")
      .style.setProperty("width", "0%", "important");
    document.getElementById("grid-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-money").style.backgroundColor = "white";
    document.getElementById("dispatch").style.setProperty("display", "none");
    document.getElementById("item-screen").classList.remove("itemscreen-size");
    document.getElementById("country").selectedIndex = 0;
    document.getElementById("amount1").selectedIndex = 0;
    document.getElementById("price").selectedIndex = 0;
  }
  function handleCart() {
    if (params.Item.Brand === "Crypto Voucher") {
      var price1 = Number(document.getElementById("cp-amount").value);
      var temp;
      if (price1 !== "" || price1 !== null) {
        var item = {
          image: params.Item.imageUrl,
          brand: params.Item.Brand,
          price: price1,
          code: "Eur",
          sale: price1,
          purchase: price1,
          sku: "",
          type: "",
          amount: price1,
        };
        params.setCart(item, price, "Eur", 1, Stock);
        alert.success("Item successfully added to cart");
      } else {
        alert.error("Please enter an amount");
      }
    } else {
      var price1 = document.getElementById("price").value;
      var amount1 = document.getElementById("amount").value;
      var temp = Number(document.getElementById("amount1").value);
      if (temp <= Stock.quantity) {
        var data2 = {
          from: params.current ? params.current : "EUR",
          to: "EUR",
          amount: params.usd,
          value: 6,
        };

        axios.post("https://ozchest.com/convert", data2).then((response2) => {
          var item = {
            image: params.Item.imageUrl,
            brand: params.Item.Brand,
            price: price1,
            code: Curr.code,
            sale: response2.data.cur,
            purchase: params.purchase,
            sku: Stock.product,
            type: Stock.type,
            amount: amount1,
          };
          params.setCart(item, price, params.curr.code, temp, Stock);
          alert.success("Item successfully added to cart");
        });
      } else {
        alert.error("Item out of stock");
      }
    }
  }
  return (
    <div
      className={
        darkMode
          ? "product-container dark-product-container"
          : "product-container"
      }
      id="item-screen"
    >
      <div
        className={
          darkMode
            ? "backbtn-box dark-backbtn-box mt-3 mb-3 p-2 ml-2"
            : "backbtn-box mt-3 mb-3 p-2 ml-2"
        }
      >
        <button onClick={closeItemScreen}>Back</button>
        <div className="header-cart">
          <button className="cart-btn" onClick={openCartScreen}>
            <i className="cart-icon fa fa-shopping-cart mr-2"></i>
            <span className="cart-text">shopping cart</span>
          </button>
        </div>
      </div>
      <div className="itemdetails-container mt-3">
        <div className="itemdetails-box">
          <div className="item-image">
            <img src={Card.imageUrl}></img>
          </div>
          <div className="item-details">
            <div className="item-title mb-2">
              <h1>{Card.Brand} Cards</h1>
            </div>
            <div className="item-desc">
              <div className="itemdesc-row mb-2">
                <p>
                  {Card.Desc ? Card.Desc[0] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[1] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[2] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[3] : ""}
                </p>
              </div>
            </div>
            <div
              className={
                darkMode
                  ? "checkout-container dark-checkout-container"
                  : "checkout-container"
              }
            >
              <div className="checkout-box m-4">
                <div className="checkout-row1 mb-3">
                  <div className="region-box2" id="input-div">
                    <div className="region-title mb-3">
                      <span>Enter amount in EUR</span>
                    </div>
                    <input id="cp-amount"></input>
                  </div>

                  <div className="region-box" id="region-div">
                    <div className="region-title mb-3">
                      <span>Choose your region</span>
                    </div>
                    <div className="categories1">
                      <select
                        className="country-btn p-2"
                        name="category1"
                        id="country"
                        onChange={handleChange}
                      >
                        {Countries.map((item, index) => (
                          <option key={index}>{item}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="amount-box" id="amount-div">
                    <div className="amount-title mb-3">
                      <span>Select Amount</span>
                    </div>
                    <div className="categories1">
                      <select
                        className="country-btn p-2"
                        name="category"
                        id="amount1"
                        onChange={handleAmount}
                      >
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="checkout-row2 mb-3" id="country-div">
                  <div className="amount-title mb-3">
                    <span>Select Amount ({Stock ? Stock.quantity : ""})</span>
                  </div>
                  <div className="categories1">
                    <span className="code-span" id="code">
                      {Curr ? Curr.code : ""}
                    </span>
                    <select
                      className="country-btn p-2"
                      id="price"
                      onChange={handleChange1}
                    >
                      {!Curr
                        ? ""
                        : !Curr.price
                        ? []
                        : Curr.price.map((item, index) => (
                            <option key={index}> {item}</option>
                          ))}
                    </select>
                  </div>
                </div>
                <div className="checkout-row mb-3">
                  <button
                    onClick={handleCart}
                    className={
                      darkMode
                        ? "checkcart-btn dark-checkcart-btn p-2"
                        : "checkcart-btn p-2"
                    }
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="checkout-row">
                  <button className="checkout-btn p-2">
                    Checkout(
                    <span>
                      {params.current ? params.current : "Eur"} {price}
                    </span>
                    )
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="item-desc1">
              <div className="item-title mb-2 mt-2">
                <h1>Description</h1>
              </div>
              <div className="itemdesc-row mb-2">
                <p>
                  {Card.Desc ? Card.Desc[0] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[1] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[2] : ""}
                  <br />
                  <br />
                  {Card.Desc ? Card.Desc[3] : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemScreen;
