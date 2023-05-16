import { React, useEffect, useState } from "react";
import "./Payment.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import lock from "../../Assets/lock.PNG";
import { useAlert } from "react-alert";

function PaymentScreen(params) {
  const [generate, setGenerate] = useState(false);
  const [change, setChange] = useState(false);
  const alert = useAlert();
  const [buyer, setBuyer] = useState(
    localStorage.getItem("token")
      ? localStorage.getItem("key")
      : {
          key: uuidv4(),
          balance: 0,
        }
  );
  useEffect(() => {
    if (localStorage.getItem("token")) {
      document
        .getElementById("payment-div1")
        .style.setProperty("display", "none");
      document
        .getElementById("payment-div2")
        .style.setProperty("display", "none");
      document
        .getElementById("payment-div3")
        .style.setProperty("display", "flex");
      document.getElementById("payment").style.setProperty("height", "32rem");
    }
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const data1 = {
        user: localStorage.getItem("key"),
      };
    }
  }, [1]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const data1 = {
        user: localStorage.getItem("key"),
      };
      axios.post("https://ozchest.com/balance", data1).then((data) => {
        if (params.current && data.data.balance !== 0) {
          const data2 = {
            from: "EUR",
            to: params.current,
            amount: data.data.balance,
            value: 6,
          };
          axios.post("https://ozchest.com/convert", data2).then((response2) => {
            setBuyer({
              key: localStorage.getItem("key"),
              balance: response2.data.cur,
            });
          });
        } else {
          setBuyer({
            key: localStorage.getItem("key"),
            balance: data.data.balance,
          });
        }
      });
    }
  }, [params.current]);

  function handleSubmit1() {
    const email = document.getElementById("email1").value;
    const name = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const country = document.getElementById("country1").value;
    const city = document.getElementById("city").value;
    const street = document.getElementById("street").value;
    const zip = document.getElementById("zip-code").value;
    if (
      email !== "" &&
      name !== "" &&
      name2 !== "" &&
      buyer.key !== "" &&
      country !== "" &&
      city !== "" &&
      street !== "" &&
      zip !== ""
    ) {
      setGenerate(true);
      const user = {
        buyer: buyer,
        email: email,
        name: name + " " + name2,
        address: street + "," + city + "," + country,
        zip: zip,
        value: 1,
      };

      axios
        .post("https://ozchest.com/generate", user)
        .then((result) => {
          if (result) {
            alert.success("Successfully registered");
            document.getElementById("email1").value = "";
            document.getElementById("name1").value = "";
            document.getElementById("name2").value = "";
            document.getElementById("country1").value = "";
            document.getElementById("city").value = "";
            document.getElementById("street").value = "";
            document.getElementById("zip-code").value = "";
            handleSubmit2();
          }
        })
        .catch((error) => {
          alert.error("Email already registered");
        });
    } else alert.error("Please enter all fields");
  }

  function handleSubmit2() {
    if (buyer.key != "") {
      if (buyer.key === "f927ce6f-643a-4d62-869a-0a595f555555") {
        document
          .getElementById("payment-div1")
          .style.setProperty("display", "none");
        document
          .getElementById("payment-div2")
          .style.setProperty("display", "none");
        document
          .getElementById("payment-div3")
          .style.setProperty("display", "none");

        document
          .getElementById("payment-div4")
          .style.setProperty("display", "flex");
      } else {
        const user = {
          buyer: buyer,
          value: 2,
        };
        axios
          .post("https://ozchest.com/connect", user)
          .then((result) => {
            if (result) {
              alert.success("Login successful");
              setBuyer({
                key: buyer.key,
                balance: result.data.BuyerExist.balance,
              });

              document
                .getElementById("payment-div1")
                .style.setProperty("display", "none");
              document
                .getElementById("payment-div2")
                .style.setProperty("display", "none");
              document
                .getElementById("payment-div3")
                .style.setProperty("display", "flex");

              var name = result.data.BuyerExist.name.split(" ");
              document.getElementById("name11").value = name[0];
              document.getElementById("name22").value = name[1];
              document.getElementById("email11").value =
                result.data.BuyerExist.email;

              localStorage.setItem("token", result.data.token); // decode your token here
              localStorage.setItem("key", result.data.BuyerExist.key);
              localStorage.setItem("balance", result.data.BuyerExist.balance);
              localStorage.setItem("email", result.data.BuyerExist.email);
              localStorage.setItem("fname", name[0]);
              localStorage.setItem("lname", name[1]);

              document
                .getElementById("payment")
                .style.setProperty("height", "32rem");
            }
          })
          .catch((error) => {
            alert.error("Invalid key");
          });
      }
    }
  }
  function copy() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert.show("Copied the text: " + copyText.value);
  }

  function handleSignOut() {
    const token = localStorage.getItem("apitoken");
    localStorage.clear();
    localStorage.setItem("apitoken", token);
    setBuyer({
      key: "",
      balance: 0,
    });

    document
      .getElementById("payment-div1")
      .style.setProperty("display", "flex");
    document
      .getElementById("payment-div2")
      .style.setProperty("display", "none");
    document
      .getElementById("payment-div3")
      .style.setProperty("display", "none");
    handleConnect();
    document
      .getElementById("payment-div4")
      .style.setProperty("display", "none");
  }
  function handleChange(event) {
    setChange(true);
    const { name, value } = event.target;
    setBuyer((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleRegister() {
    document
      .getElementById("payment-div1")
      .style.setProperty("display", "none");
    document
      .getElementById("payment-div2")
      .style.setProperty("display", "block");
    document
      .getElementById("payment-div3")
      .style.setProperty("display", "none");
  }

  function handleConnect() {
    document
      .getElementById("payment-div1")
      .style.setProperty("display", "flex");
    document
      .getElementById("payment-div2")
      .style.setProperty("display", "none");
    document
      .getElementById("payment-div3")
      .style.setProperty("display", "none");
  }
  function handlePromo() {
    var code = document.getElementById("code").value;
    var discount = Number(document.getElementById("discount").value);
    const data2 = {
      code: code,
      discount: discount,
    };
    axios
      .post("https://ozchest.com/createpromo", data2)
      .then((response2) => {
        if (response2) {
          alert.success("Promo code successfully created");
        }
      })
      .catch((error) => {
        alert.error("Something went wrong");
      });
  }

  function handleRefill() {
    var amount = Number(document.getElementById("amount").value);
    var markup = amount * 0.02;
    var method = document.getElementById("method").value;
    var curr = document.getElementById("refillcurrency").value;

    const data2 = {
      from: curr,
      to: "USD",
      amount: amount,
      value: 6,
    };
    axios.post("https://ozchest.com/convert", data2).then((response2) => {
      var data = JSON.stringify({
        price_amount: response2.data.cur,
        price_currency: "usd",
        order_id: localStorage.getItem("key"),
        order_description: "Ozchest reload",
        ipn_callback_url: "https://ozchest.com/ipn",
        success_url: "https://ozchest.com",
        cancel_url: "https://google.com",
      });

      var config = {
        method: "post",
        url: "http://api.nowpayments.io/v1/invoice",
        headers: {
          "x-api-key": "535HF7P-YHW4KWY-NC8VTAW-931RC7Q",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response) {
            let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
  width=500,height=500`;
            window.open(response.data.invoice_url, "test", params);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }
  return (
    <div className="payment-container" id="payment">
      <div className="payment-div1" id="payment-div1">
        <div className="logo" id="logo">
          <img src={lock} width="100" height="100"></img>
        </div>
        <div className="order-name mt-1">
          <input
            name="key"
            id="myInput"
            type="text"
            placeholder="key"
            onChange={handleChange}
            value={
              localStorage.getItem("token")
                ? localStorage.getItem("key")
                : generate
                ? buyer.key
                : change
                ? buyer.key
                : ""
            }
          />
        </div>
        <div className="btn-div">
          <button
            id="connect1"
            className="connect-btn mt-4 pt-1 pb-1"
            onClick={handleSubmit2}
          >
            Connect
          </button>
        </div>
        <p className="para mt-4" id="para">
          Dont have an account?
          <button onClick={handleRegister}> Register</button>
        </p>
      </div>
      <div className="payment-div2" id="payment-div2">
        <div className="payment-innerbox" id="inner-div">
          <h2 className="head2 ml-2" id="head2">
            Get Your Key
          </h2>

          <div className="order-name1 mt-1 ml-2 mr-2">
            <input
              className="email-input"
              placeholder="First Name"
              id="name1"
            ></input>
          </div>
          <div className="order-name1 mt-1 ml-2 mr-2">
            <input
              className="email-input"
              placeholder="Last Name"
              id="name2"
            ></input>
          </div>
          <div className="order-name1 mt-1 ml-2 mr-2">
            <input
              className="email-input"
              placeholder="Your E-Mail"
              id="email1"
            ></input>
          </div>
          <div className="order-name2 mt-1 ml-2 mr-2">
            <input
              className="email-input"
              placeholder="Country"
              id="country1"
            ></input>
            <input className="email-input" placeholder="City" id="city"></input>
          </div>
          <div className="order-name2 mt-1 ml-2 mr-2">
            <input
              className="email-input"
              placeholder="Street"
              id="street"
            ></input>
            <input
              className="email-input"
              placeholder="Zip Code"
              id="zip-code"
            ></input>
          </div>
        </div>
        <div className="btn-div">
          <button
            id="connect"
            className="generate-btn pt-1 pb-1"
            onClick={handleSubmit1}
          >
            Generate
          </button>
        </div>
        <p className="para1 mt-4" id="para1">
          Already have an account!
          <button onClick={handleConnect}> Connect</button>
        </p>
      </div>
      <div className="payment-div3" id="payment-div3">
        <h2 className="head3" id="head3">
          Welcome{" "}
        </h2>
        <div className="name-div mt-1">
          <div className="name-box">
            <span>First Name</span>
            <input
              id="name11"
              value={
                localStorage.getItem("token")
                  ? localStorage.getItem("fname")
                  : ""
              }
            ></input>
          </div>
          <div className="name-box">
            <span>Last Name</span>
            <input
              id="name22"
              value={
                localStorage.getItem("token")
                  ? localStorage.getItem("lname")
                  : ""
              }
            ></input>{" "}
          </div>
        </div>

        <div className="order-name11 mt-2">
          <div className="name-box2">
            <span>Email</span>
            <input
              id="email11"
              value={
                localStorage.getItem("token")
                  ? localStorage.getItem("email")
                  : ""
              }
            ></input>
          </div>
        </div>
        <div className="order-name11 mt-2">
          <div className="name-box2">
            <span>Radeem Code</span>
            <input
              name="key"
              id="myInput2"
              type="text"
              onChange={handleChange}
              value={
                localStorage.getItem("token")
                  ? localStorage.getItem("key")
                  : generate
                  ? buyer.key
                  : change
                  ? buyer.key
                  : ""
              }
            />
          </div>
        </div>
        <div className="btn-div">
          <button
            id="signout"
            className=" mt-4 mb-2 refill-btn"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
        <p className="bal mt-4" id="bal">
          {" "}
          Balance = {buyer.balance}
        </p>
        <div className="payment-box" id="payment-box">
          <div className="payment-bar">
            <input id="amount"></input>
            <select id="refillcurrency">
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
              <option value="AED">AED</option>
              <option value="AFN">AFN</option>
              <option value="ALL">ALL</option>
              <option value="AMD">AMD</option>
              <option value="ARD">ARD</option>
              <option value="AUD">AUD</option>
              <option value="AZN">AZN</option>
              <option value="BAM">BAM</option>
              <option value="BDT">BDT</option>
              <option value="BGN">BGN</option>
              <option value="BHD">BHD</option>
              <option value="BIF">BIF</option>
              <option value="BND">BND</option>
              <option value="BOB">BOB</option>
              <option value="BRL">BRL</option>
              <option value="BWP">BWP</option>
              <option value="BYN">BYN</option>
              <option value="BZD">BZD</option>
              <option value="CDF">CDF</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="COP">COP</option>
              <option value="CRC">CRC</option>
              <option value="CVE">CVE</option>
              <option value="CZK">CZK</option>
              <option value="DJF">DJF</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="DZD">DZD</option>
              <option value="CVE">CVE</option>
              <option value="EEK">EEK</option>
              <option value="EGP">EGP</option>
              <option value="ERN">ERN</option>
              <option value="ETB">ETB</option>
              <option value="GBP">GBP</option>
              <option value="GEL">GEL</option>
              <option value="GHS">GHS</option>
              <option value="GNF">GNF</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HNL">HNL</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="IQD">IQD</option>
              <option value="IRR">IRR</option>
              <option value="ISK">ISK</option>
              <option value="JMD">JMD</option>
              <option value="JOD">JOD</option>
              <option value="JPY">JPY</option>
              <option value="KES">KES</option>
              <option value="KHR">KHR</option>
              <option value="KMF">KMF</option>
              <option value="KRW">KRW</option>
              <option value="KWD">KWD</option>
              <option value="KZT">KZT</option>
              <option value="LBP">LBP</option>
              <option value="LKR">LKR</option>
              <option value="LTL">LTL</option>
              <option value="LVL">LVL</option>
              <option value="LYD">LYD</option>
              <option value="MAD">MAD</option>
              <option value="MDL">MDL</option>
              <option value="MGA">MGA</option>
              <option value="MKD">MKD</option>
              <option value="MMK">MMK</option>
              <option value="MOP">MOP</option>
              <option value="MUR">MUR</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="MZN">MZN</option>
              <option value="NAD">NAD</option>
              <option value="NGN">NGN</option>
              <option value="NIO">NIO</option>
              <option value="NOK">NOK</option>
              <option value="NPR">NPR</option>
              <option value="NZD">NZD</option>
              <option value="OMR">OMR</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="QAR">QAR</option>
              <option value="RON">RON</option>
              <option value="RSD">RSD</option>
              <option value="RUB">RUB</option>
              <option value="RWF">RWF</option>
              <option value="SAR">SAR</option>
              <option value="SDG">SDG</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="SOS">SOS</option>
              <option value="SYP">SYP</option>
              <option value="THB">THB</option>
              <option value="TND">TND</option>
              <option value="TOP">TOP</option>
              <option value="TRY">TRY</option>
              <option value="TTD">TTD</option>
              <option value="TWD">TWD</option>
              <option value="TZS">TZS</option>
              <option value="UAH">UAH</option>
              <option value="UGX">UGX</option>
              <option value="UYU">UYU</option>
              <option value="UZS">UZS</option>
              <option value="VEF">VEF</option>
              <option value="VND">VND</option>
              <option value="XAF">XAF</option>
              <option value="XOF">XOF</option>
              <option value="YER">YER</option>
              <option value="ZAR">ZAR</option>
              <option value="ZMK">ZMK</option>
              <option value="ZWL">ZWL</option>
            </select>
            <select name="method" id="method">
              <option>Crypto</option>
            </select>
          </div>
          <button className="refill-btn2 mt-4" onClick={handleRefill}>
            Refill
          </button>
        </div>
      </div>
      <div className="payment-div4" id="payment-div4">
        <h5>Create Promo Code</h5>
        <input
          className="email-input1 mt-2"
          placeholder="Code"
          id="code"
        ></input>
        <input
          className="email-input1 mt-3"
          placeholder="Discount%"
          id="discount"
        ></input>

        <div className="btn-div">
          <button
            id="promo-btn"
            className=" mt-3 mb-2 refill-btn"
            onClick={handlePromo}
          >
            Create
          </button>
        </div>
        <div className="btn-div">
          <button
            id="signout2"
            className=" mt-2 mb-2 refill-btn"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentScreen;
