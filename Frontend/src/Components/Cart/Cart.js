import { React, useEffect, useState } from "react";
import CartProduct from "../Cart-Product/Cart-Product";
import "./Cart.css";
import axios from "axios";
import { useAlert } from "react-alert";

function Cart(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  const [Bill, setBill] = useState(params.total);
  const [CurrBill, setCurrBill] = useState();
  const [BillInEur, setBillInEur] = useState(params.total);
  const [Code, setCode] = useState(params.code);
  const [price, setPrice] = useState(params.price);
  const [TotalItems, setTotalItems] = useState(params.cart);
  const [Balance, setBalance] = useState(0);
  const [Fee, setFee] = useState(0);
  const [Discount, setDiscount] = useState(0);

  const alert = useAlert();

  useEffect(() => {
    setDarkMode(params.Mode);
    // setBill(params.total);
    setPrice(params.price);
    setCode(params.code);
    var temp = params.totalincurr;
    var f = temp * 0.02;
    var total = Math.round((f + Number.EPSILON) * 100) / 100;
    setBill(temp);
    setFee(total);
    setBillInEur(params.total);
  });
  useEffect(() => {
    const data1 = {
      user: localStorage.getItem("key"),
    };

    if (data1.user !== null) {
      axios.post("https://ozchest.com/balance", data1).then(async (data1) => {
        setBalance(data1.data.balance);
      });
    }
  }, [1]);

  function handleItems(items) {
    setTotalItems(items);
  }
  function handleDiscount() {
    const promo = document.getElementById("promocode").value;
    if (promo !== "") {
      const data = {
        code: promo,
      };
      axios
        .post("https://ozchest.com/getpromo", data)
        .then((data1) => {
          if (data1) {
            const discount = data1.data.discount;
            setDiscount(Bill * (discount / 100));
          }
        })
        .catch((error) => {
          alert.error("Invalid Promo Code");
        });
    }
  }
  async function handleCheckout() {
    if (document.getElementById("email").value !== "") {
      const data1 = {
        user: localStorage.getItem("key"),
      };
      var count = 0;

      const fee = Math.round((BillInEur + Number.EPSILON) * 100) / 100;
      if (Bill !== 0 && Balance >= BillInEur + fee - Discount) {
        await TotalItems.reduce(async (promise, item) => {
          await promise;
          count = count + 1;
          const res = await axios
            .post("https://ozchest.com/balance", data1)
            .then(async (data1) => {
              const balance = data1.data.balance;

              var data2;
              if (params.current !== undefined) {
                data2 = {
                  from: params.current,
                  to: "EUR",
                  amount: Bill + Fee - Discount,
                  value: 6,
                };
              } else {
                data2 = {
                  from: "EUR",
                  to: "EUR",
                  amount: Bill + Fee - Discount,
                  value: 6,
                };
              }
              const res3 = await axios
                .post("https://ozchest.com/convert", data2)
                .then(async (response2) => {
                  if (balance >= response2.data.cur) {
                    const data = {
                      brand: item.brand,
                      product: item.sku,
                      type: item.type,
                      price: item.purchase,
                      user: localStorage.getItem("key"),
                      apitoken: localStorage.getItem("apitoken"),
                      balance: balance,
                      total: response2.data.cur,
                      email: document.getElementById("email").value,
                      value: 7,
                    };
                    const res2 = await axios
                      .post("https://ozchest.com/order", data)
                      .then((response) => {
                        if (response) {
                          localStorage.setItem("balance", balance - price);
                        }
                      });
                  } else {
                    alert.error("Not enough balance");
                  }
                });
            });
        }, Promise.resolve());
        window.location = "/";
        alert.success("Thanks for buying");
      } else {
        alert.error("Not enough balance");
      }
    } else {
      alert.show("Please Enter Email");
    }
  }
  function closeCartScreen() {
    document
      .getElementById("cart")
      .style.setProperty("width", "0%", "important");
    document
      .getElementById("item-screen")
      .style.setProperty("width", "0%", "important");
    document.getElementById("dispatch").style.setProperty("display", "none");
    document.getElementById("cart").classList.remove("cart-size");
  }

  function updateBill(bill) {
    var data2;
    const cur = params.current;
    if (bill !== 0) {
      if (cur !== undefined) {
        data2 = {
          from: "EUR",
          to: cur,
          amount: bill,
          value: 6,
        };
      } else {
        data2 = {
          from: "EUR",
          to: "EUR",
          amount: bill,
          value: 6,
        };
      }
      axios.post("https://ozchest.com/convert", data2).then((response2) => {
        setBill(response2.data.cur);
        setCurrBill(cur);
      });
    } else {
      setBill(0);
      setCurrBill(cur);
    }
  }
  function updateCode(code) {
    setCode(code);
  }
  return (
    <div
      className={
        darkMode ? "cart-container dark-cart-container" : "cart-container"
      }
      id="cart"
    >
      <div
        className={
          darkMode
            ? "backbtn-box dark-backbtn-box mt-3 mb-3 p-2 ml-2"
            : "backbtn-box mt-3 mb-3 p-2 ml-2"
        }
      >
        <button onClick={closeCartScreen}>Back</button>
      </div>
      <div className="cartdetails-box p-3">
        <div className="cart-quantity mb-3 ml-2">
          <h5>
            Your cart has <span>{TotalItems ? TotalItems.length : 0} </span>{" "}
            items{" "}
          </h5>
        </div>
        <div className="order-container">
          <div className="cart-items">
            <CartProduct
              Mode={darkMode}
              cart={params.cart}
              setcart={params.setcart}
              setBill={updateBill}
              setItems={handleItems}
              total={params.total}
              items={params.items}
              code={Code}
              amount={params.amount}
              cuurent={params.current}
            ></CartProduct>
          </div>
          <div className="order-details">
            <div
              className={
                darkMode
                  ? "order-summary dark-order-summary p-3"
                  : "order-summary p-3"
              }
            >
              <div className="summary-title">
                <h4>Order Summary</h4>
              </div>
              <div className="summary-details">
                <h5>Total: </h5>
                <h5>
                  {params.current ? params.current : "Eur"}{" "}
                  <span>{params.totalincurr}</span>
                </h5>
              </div>
              <div className="summary-details">
                <h5>Fees: </h5>
                <h5>
                  {params.current ? params.current : "Eur"} <span>{Fee}</span>
                </h5>
              </div>
              <div className="summary-details">
                <h5>Discount: </h5>
                <h5>
                  -<span>{Discount}</span>
                </h5>
              </div>
              <div className="summary-details">
                <h4>Payable: </h4>
                <h4>
                  {params.current ? params.current : "Eur"}{" "}
                  <span>
                    {Math.round(
                      (params.totalincurr + Fee - Discount + Number.EPSILON) *
                        100
                    ) / 100}
                  </span>
                </h4>
              </div>
            </div>
            <div
              className={
                darkMode
                  ? "order-information dark-order-information mt-3 p-3"
                  : "order-information p-3 mt-3"
              }
            >
              <div className="order-options">
                <h4>Order Information</h4>
              </div>

              <div className="order-info1 mt-3">
                <h5>Your E-Mail</h5>
                <input
                  className="p-2"
                  placeholder="Your E-Mail"
                  id="email"
                ></input>
              </div>
              <div className="order-info2 mt-3">
                <h5>Promo Code</h5>
                <div className="promo-div">
                  <input
                    className="p-2"
                    placeholder="Promo"
                    id="promocode"
                  ></input>
                  <button className="promo-btn p-2" onClick={handleDiscount}>
                    Apply
                  </button>
                </div>
              </div>
              <div className="order-name mt-3">
                <button className="checkout-btn p-2" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
