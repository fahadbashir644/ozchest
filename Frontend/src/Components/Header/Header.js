import { React, useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/Logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/fontawesome-free-solid";

function Header(params) {
  function openCartScreen() {
    document.getElementById("cart").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("cart").classList.add("cart-size");
  }
  function handleChange() {
    const curr = document.getElementById("currentcurrency").value;
    params.updatecurrency(curr);
  }
  function openPayment() {
    var display = document.getElementById("payment").style.display;
    if (display === "none") {
      document.getElementById("payment").style.setProperty("display", "flex");
    } else {
      document.getElementById("payment").style.setProperty("display", "none");
    }
  }
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });
  return (
    <div
      className={darkMode ? "dark-header-container" : "header-container"}
      id="header-container"
    >
      <div className="header-box">
        <div className="header-logo">
          <img src={logo} width="100" height="30"></img>
        </div>
        <div className="header-options">
          <div
            className={
              darkMode
                ? "header-money dark-header-money mr-4"
                : "header-money mr-4"
            }
            id="header-money"
          >
            <a onClick={openPayment}>
              <FontAwesomeIcon className="wallet-icon" icon={faWallet} />
              <span id="money">$ 0.00</span>
              <span id="addmoney">+</span>
            </a>
          </div>
          <div className="header-currency mr-4">
            <select
              className={
                darkMode ? "currency-btn dark-currency-btn" : "currency-btn"
              }
              onChange={handleChange}
              name="category"
              id="currentcurrency"
            >
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
          </div>

          <div className="header-cart">
            <button
              className={darkMode ? "cart-btn dark-cart-btn" : "cart-btn"}
              onClick={openCartScreen}
            >
              <i className="cart-icon fa fa-shopping-cart mr-2"></i>
              <span className="cart-text" id="cart-text">
                shopping cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
