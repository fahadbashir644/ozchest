import { React, useEffect, useState } from "react";
import "./Refund.css";

function Refund(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });
  function closeRefundScreen() {
    document
      .getElementById("refund")
      .style.setProperty("width", "0%", "important");
    document.getElementById("grid-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-money").style.backgroundColor = "white";
    document.getElementById("dispatch").style.setProperty("display", "none");
    document.getElementById("refund").classList.remove("refund-size");
  }
  return (
    <div
      className={
        darkMode ? "refund-container dark-refund-container" : "refund-container"
      }
      id="refund"
    >
      <div
        className={
          darkMode
            ? "backbtn-box dark-backbtn-box mt-3 mb-3 p-2 ml-2"
            : "backbtn-box mt-3 mb-3 p-2 ml-2"
        }
      >
        <button onClick={closeRefundScreen}>Back</button>
      </div>
      <div className="discdetails-container mt-3">
        <div className="discdetails-box">
          <div className="item-title mb-2 mt-2">
            <h1>Refund Policy</h1>
          </div>
          <div className="itemdesc-row mb-2 ">
            <p>
              Please be aware that our products are digital gift card codes
              that, once bought and delivered, cannot be returned, nor refunded.
              So please make sure to select the right product, with the right
              country code and / or in the right currency before you purchase
              it, as we cannot take products back, nor refund or exchange
              products that have already been paid and delivered. The reason for
              this is that we have no guarantee that a code, which is
              immediately delivered after the purchase, is still unused. Thank
              you for your understanding!
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We do however give warranty on the redeemability of the digital
              codes we deliver. In case the delivered code is not working, we
              will do everything to help you solve that problem. Our customer
              service can be reached either through mail to support@ozchest.com
              or by chat on our website.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              More information about our return policy can be found in our terms
              of agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refund;
