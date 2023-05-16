import { React, useEffect, useState, createContext, useContext } from "react";
import "./Main.css";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import Cart from "../Cart/Cart";
import PaymentScreen from "../Payment/Payment";
import axios from "axios";

var temp = new Array();
function Main(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("items"))
  );
  const [price, setPrice] = useState();
  const [Code, setCode] = useState();
  const [Amount, setAmount] = useState();
  const [Stock, setStock] = useState();
  const [Total, setTotal] = useState(Number(localStorage.getItem("bill")));
  const [TotalInCurr, setTotalInCurr] = useState();
  const [TotalInEur, setTotalInEur] = useState();

  useEffect(() => {
    setDarkMode(params.Mode);
    updateBillInEur(Total);
  });

  useEffect(() => {
    updateBillInCurr(Total);
  }, [params.current]);

  function updateBillInCurr(total) {
    var cur = params.current;
    if (total !== 0) {
      if (cur !== undefined) {
        var data2;
        data2 = {
          from: "EUR",
          to: cur,
          amount: total,
          value: 6,
        };
      } else {
        data2 = {
          from: "EUR",
          to: "EUR",
          amount: total,
          value: 6,
        };
      }
      axios.post("https://ozchest.com/convert", data2).then((response2) => {
        setTotalInCurr(response2.data.cur);
      });
    } else {
      setTotalInCurr(0);
    }
  }

  function updateBillInEur(total) {
    if (total !== 0) {
      if (params.current !== undefined) {
        var data2;
        data2 = {
          from: params.current,
          to: "EUR",
          amount: total,
          value: 6,
        };

        axios.post("https://ozchest.com/convert", data2).then((response2) => {
          setTotalInEur(response2.data.cur);
        });
      }
    } else {
      setTotalInEur(0);
    }
  }

  function updateCart(items) {
    setCartItems(items);
    var total = 0;
    for (var i = 0; i < items.length; i++) {
      total = total + items[i].sale;
    }
    total = Math.round((total + Number.EPSILON) * 100) / 100;
    localStorage.setItem("items", JSON.stringify(temp));
    localStorage.setItem("bill", total);
    setTotal(total);
    updateBillInCurr(total);
    updateBillInEur(total);
  }

  function changeCart(cartitems, price, code, amount, stock) {
    var temp = cartItems ? cartItems : [];
    for (var i = 0; i < amount; i++) {
      temp.push(cartitems);
    }
    setCartItems(temp);
    setPrice(price);
    setCode(code);
    setAmount(amount);
    setStock(stock);
    localStorage.setItem("items", JSON.stringify(temp));

    var total = 0;
    for (var i = 0; i < temp.length; i++) {
      total = total + temp[i].sale;
    }
    total = Math.round((total + Number.EPSILON) * 100) / 100;
    localStorage.setItem("bill", total);
    setTotal(total);
    updateBillInCurr(total);
    updateBillInEur(total);
  }
  return (
    <div className="main-container" id="main-container">
      <div className="main-box">
        <PaymentScreen current={params.current}></PaymentScreen>
        <Banner Mode={darkMode}></Banner>
        <Cart
          Mode={darkMode}
          cart={cartItems}
          setcart={updateCart}
          total={Total}
          items={cartItems}
          price={price}
          code={Code}
          amount={Amount}
          stock={Stock}
          current={params.current}
          totalincurr={TotalInCurr}
          totalineur={TotalInEur}
        ></Cart>
        <Items
          Mode={darkMode}
          setCart={changeCart}
          current={params.current}
        ></Items>
      </div>
    </div>
  );
}

export default Main;
