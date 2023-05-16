import { React, useEffect, useState } from "react";
import "./Items.css";
import axios from "axios";
import ItemScreen from "../Product/Product";
const jsonData = require("./Brands.json");
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
></link>;

function Items(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  const [Products, setProducts] = useState([]);
  const [Filter, setFiltered] = useState(jsonData);
  const [Searched, setSearched] = useState(jsonData);
  const [Brand, setBrand] = useState({});
  const [countries, setCountries] = useState([]);
  const [Curr, setCurr] = useState([]);
  const [Stock, setStock] = useState({});
  const [USDPrice, setUSDPrice] = useState();
  const [PurchasePrice, setPurchasePrice] = useState();

  useEffect(() => {
    axios.get("https://ozchest.com/apitoken").then((result) => {
      if (result) {
        localStorage.setItem("apitoken", result.data.apiToken); // decode your token here
      }
    });
  }, [1]);

  function changeCart(item, price, code, temp, stock) {
    params.setCart(item, price, code, temp, stock);
  }
  useEffect(() => {
    setDarkMode(params.Mode);
    setProducts(jsonData);
  });

  var Screen;

  function updatePrice(brand) {
    var value = document.getElementById("country").value;
    const data = {
      brand: brand,
      country: value,
      value: 4,
    };
    axios.post("https://ozchest.com/pricelist", data).then((response) => {
      setCurr(response.data);
    });
  }

  function updateStock(brand1, code1, v) {
    var value = document.getElementById("country").value;
    var value1 = document.getElementById("price").value;

    let data;
    if (v === 1 && Curr) {
      data = {
        brand: brand1,
        country: value,
        code: Curr.code,
        price: Number(Curr.price ? Curr.price[0] : 0),
        apitoken: localStorage.getItem("apitoken"),
        value: 5,
      };
    } else if (v === 2 && Curr) {
      data = {
        brand: brand1,
        country: value,
        code: Curr.code,
        price: Number(value1),
        apitoken: localStorage.getItem("apitoken"),
        value: 5,
      };
    }
    if (brand1 !== undefined && code1 !== undefined) {
      axios.post("https://ozchest.com/stocks", data).then((response) => {
        if (response.data) {
          if (v === 1) {
            document.getElementById("price").value = Curr.price
              ? Curr.price[0]
              : 0;
          }
          setStock(response.data);
          updateFee(data.code, data.price, response.data.purchasePrice);
        }
      });
    }
  }

  function updateFee(from1, amount, price) {
    var data;
    if (params.current === undefined) {
      data = {
        from: from1,
        to: "EUR",
        amount: amount,
        value: 6,
      };
    } else {
      data = {
        from: from1,
        to: params.current,
        amount: amount,
        value: 6,
      };
    }
    axios.post("https://ozchest.com/convert", data).then((response2) => {
      setPurchasePrice(price);
      setUSDPrice(response2.data.cur);
      /* if (price < response2.data.cur) {
        setFee(0);
        console.log("fee" + 0);
      } else if (price > response2.data.cur && response2.data.cur < 50) {
        setFee(2.3);
        console.log("fee" + 2.3);
      } else if (price > response2.data.cur && response2.data.cur > 50) {
        setFee(3.4);
        console.log("fee" + 3.3);
      }*/
    });
  }
  function handleFilter(event) {
    if (event.target.value === "All" || event.target.value === "Gift Card") {
      setFiltered(Products);
      setSearched(Products);
    } else {
      const filtered = Products.filter(
        (item) => item.Category === event.target.value
      );
      setFiltered(filtered);
      setSearched(filtered);
    }
  }
  function handleSearch(e) {
    const filtered = Filter.filter((item) =>
      item.Brand.includes(e.target.value)
    );
    setSearched(filtered);
  }
  function openItemScreen(index) {
    if (Searched[index].Brand === "Crypto Voucher") {
      document
        .getElementById("input-div")
        .style.setProperty("display", "block");
      document
        .getElementById("region-div")
        .style.setProperty("display", "none");
      document
        .getElementById("country-div")
        .style.setProperty("display", "none");
      document
        .getElementById("amount-div")
        .style.setProperty("display", "none");
      setBrand(Searched[index]);
      setUSDPrice("");
    } else {
      document.getElementById("input-div").style.setProperty("display", "none");
      document
        .getElementById("region-div")
        .style.setProperty("display", "block");
      document
        .getElementById("country-div")
        .style.setProperty("display", "block");
      document
        .getElementById("amount-div")
        .style.setProperty("display", "block");
      setBrand(Searched[index]);
      const data = {
        brand: Searched[index].Brand,
        amount: 20,
        currency: "GBP",
        value: 3,
      };
      /* axios
        .post("http://localhost:8000/savecurrency", data)
        .then((response1) => {
          console.log("success");
        });*/
      axios.post("https://ozchest.com/getcurrencies", data).then((response) => {
        if (response.data) {
          setCountries(response.data.countries);
          setCurr(response.data.curr);
          const data = {
            brand: Searched[index].Brand,
            country: response.data.countries[0],
            code: response.data.curr.code,
            price: Number(response.data.curr.price[0]),
            apitoken: localStorage.getItem("apitoken"),
            value: 5,
          };

          axios.post("https://ozchest.com/stocks", data).then((response1) => {
            setStock(response1.data);
            updateFee(data.code, data.price, response1.data.purchasePrice);
          });
        }
      });
    }
    document.getElementById("item-screen").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("item-screen").classList.add("itemscreen-size");
  }
  return (
    <div className="items-outercontainer">
      <div className="items-container mt-5">
        <div className="categories mr-4">
          <div className="categories1" id="categories1">
            <select
              className={
                darkMode
                  ? "country-btn dark-country-btn p-2"
                  : "country-btn p-2"
              }
              name="category"
              id="category"
            >
              <option id="cat-option">United States</option>
              <option id="cat-option">United States</option>
              <option id="cat-option">United Kingdom</option>
              <option id="cat-option">France</option>
              <option id="cat-option">Australia</option>
            </select>
          </div>
          <div
            className={
              darkMode
                ? "categories2 dark-categories2 mt-5 p-3"
                : "categories2 mt-5 p-3"
            }
            id="categories2"
          >
            <h3 className="cat-box">Categories</h3>
            <div onChange={handleFilter}>
              <div className="radios">
                <input
                  className="mr-2"
                  type="radio"
                  id="filter"
                  name="categories"
                  value="All"
                ></input>
                <label htmlFor="all">All</label>
              </div>
              <div className="radios">
                <input
                  className="mr-2"
                  type="radio"
                  id="filter"
                  name="categories"
                  value="Games"
                ></input>
                <label htmlFor="gaming">Gaming</label>
              </div>
              <div className="radios">
                <input
                  className="mr-2"
                  type="radio"
                  id="filter"
                  name="categories"
                  value="Games"
                ></input>
                <label htmlFor="fashion">Mobile recharge</label>
              </div>
              <div className="radios">
                <input
                  className="mr-2"
                  type="radio"
                  id="filter"
                  name="categories"
                  value="Food & Drinks"
                ></input>
                <label htmlFor="fooddrinks">Food & Drinks</label>
              </div>
              <div className="radios">
                <input
                  className="mr-2"
                  type="radio"
                  id="filter"
                  name="categories"
                  value="Gift Card"
                ></input>
                <label htmlFor="entertainment">Gift cards</label>
              </div>
              <div className="radios">
                <input
                  className="mr-2"
                  type="radio"
                  id="filter"
                  name="categories"
                  value="hotels"
                ></input>
                <label htmlFor="hotels">Shopping</label>
              </div>
              <div className="radios">
                <input
                  className="mr-2"
                  type="radio"
                  id="filter"
                  name="categories"
                  value="Payment Card"
                ></input>
                <label htmlFor="onlinepayments">Payment cards</label>
              </div>
              <div className="radios">
                <input
                  className="mr-2"
                  type="radio"
                  id="filter"
                  name="categories"
                  value="Entertainment"
                ></input>
                <label htmlFor="onlinepayments">Entertainment</label>
              </div>
            </div>
          </div>
        </div>
        <div className="search_list">
          <div className="search">
            <div
              className={
                darkMode ? "searching dark-searching p-2" : "searching p-2"
              }
            >
              <div className="search-box ml-3">
                <div className="search_symbol">
                  <i className="fa fa-search"></i>
                </div>
                <div className="search-input">
                  <input
                    className="input1"
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Start searching your gift card....."
                    onChange={handleSearch}
                  ></input>
                </div>
              </div>
              <button
                className={
                  darkMode
                    ? "search_button dark-search_button mr-5"
                    : "search_button mr-5 "
                }
              >
                Search
              </button>
            </div>
            <div className="sorting" id="sorting">
              <select
                className={
                  darkMode
                    ? "country-btn dark-country-btn p-2"
                    : "country-btn p-2"
                }
                name="category"
                id="category1"
              >
                <optgroup className="grp">
                  <option id="cat-option">Popularity:High to Low</option>
                  <option id="cat-option">Popularity:High to Low</option>
                  <option id="cat-option">Name:A to Z</option>
                  <option id="cat-option">Name:Z to A</option>
                  <option id="cat-option">Date:Oldest to Latest</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="list mt-5">
            <div
              className={
                darkMode
                  ? "grid-container1 dark-grid-container1"
                  : "grid-container1"
              }
            >
              {Searched.map((item, index) => (
                <div className="grid-item card-p" key={index}>
                  <a onClick={() => openItemScreen(index)}>
                    <img
                      className="card"
                      src={item.imageUrl}
                      alt="Card image cap"
                    />
                  </a>
                  {Screen}
                  <div className="card-body">
                    <h6
                      className={
                        darkMode ? "card-text dark-card-text" : "card-text"
                      }
                      id="card-subtitle"
                    >
                      {item.Brand}
                    </h6>
                  </div>
                </div>
              ))}
              <ItemScreen
                Mode={darkMode}
                Item={Brand}
                setCart={changeCart}
                country={countries}
                curr={Curr}
                stock={Stock}
                updateprice={updatePrice}
                updatestock={updateStock}
                usd={USDPrice}
                current={params.current}
                purchase={PurchasePrice}
              ></ItemScreen>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
export default Items;
