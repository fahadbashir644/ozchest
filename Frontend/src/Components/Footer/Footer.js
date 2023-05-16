import { React, useState, useEffect } from "react";
import react from "react";
import "./Footer.css";
import paymentimg from "../../Assets/payment.png";
import paymentimg2 from "../../Assets/payment2.png";
import logo from "../../Assets/Logo.PNG";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import Disclaimer from "../Disclaimer/Disclaimer";
import Policy from "../Policy/Policy";
import Refund from "../Refund/Refund";
import ToS from "../ToS/ToS";

function Footer(params) {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
    params.setMode(darkMode);
  }, [darkMode]);
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }
  function openDiscScreen() {
    document.getElementById("disclaimer").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("disclaimer").classList.add("disclaimer-size");
  }
  function openPolicyScreen() {
    document.getElementById("policy").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("policy").classList.add("policy-size");
  }
  function openRefundScreen() {
    document.getElementById("refund").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("refund").classList.add("refund-size");
  }
  function openToSScreen() {
    document.getElementById("tos").style.setProperty("width", "60%");
    document.getElementById("dispatch").style.setProperty("display", "block");
    document.getElementById("tos").classList.add("tos-size");
  }
  return (
    <div
      className={
        darkMode ? "footer-container dark-footer-container" : "footer-container"
      }
    >
      <div className="footer-box pt-2">
        <div className="footer-review footer-elements">
          <div className="review-name">
            {" "}
            <img src={logo} width="100" height="30"></img>
          </div>
        </div>
        <div className="footer-links footer-elements">
          <div className="review-name">
            <span>Quick Links</span>
          </div>
          <div className="links">
            <button className="link-btn" onClick={openDiscScreen}>
              Disclaimer
            </button>
            <Disclaimer Mode={darkMode}></Disclaimer>
          </div>
          <div className="links">
            <button className="link-btn" onClick={openPolicyScreen}>
              Privacy Policy
            </button>
            <Policy Mode={darkMode}></Policy>
          </div>
          <div className="links">
            <button className="link-btn" onClick={openRefundScreen}>
              Refund Policy
            </button>
            <Refund Mode={darkMode}></Refund>
          </div>
          <div className="links">
            <button className="link-btn" onClick={openToSScreen}>
              ToS
            </button>
            <ToS Mode={darkMode}></ToS>
          </div>
        </div>

        <div className="footer-connect footer-elements">
          <div className="review-name">
            <span>Connect us with</span>
          </div>
          <div className="accounts">
            <div className="acc-img">
              <a target="_blank" href="https://www.instagram.com">
                <img className="account-img" src={instagram}></img>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <input
              type="checkbox"
              checked={!darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="a"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
