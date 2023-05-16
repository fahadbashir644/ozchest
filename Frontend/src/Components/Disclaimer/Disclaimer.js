import { React, useEffect, useState } from "react";
import "./Disclaimer.css";

function Disclaimer(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });

  function closeDiscScreen() {
    document
      .getElementById("disclaimer")
      .style.setProperty("width", "0%", "important");
    document.getElementById("grid-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-money").style.backgroundColor = "white";
    document.getElementById("dispatch").style.setProperty("display", "none");
    document.getElementById("disclaimer").classList.remove("disclaimer-size");
  }
  return (
    <div
      className={
        darkMode
          ? "disclaimer-container dark-disclaimer-container"
          : "disclaimer-container"
      }
      id="disclaimer"
    >
      <div
        className={
          darkMode
            ? "backbtn-box dark-backbtn-box mt-3 mb-3 p-2 ml-2"
            : "backbtn-box mt-3 mb-3 p-2 ml-2"
        }
      >
        <button onClick={closeDiscScreen}>Back</button>
      </div>
      <div className="discdetails-container mt-3">
        <div className="discdetails-box">
          <div className="item-title mb-2 mt-2">
            <h1>Disclaimer</h1>
          </div>
          <div className="itemdesc-row mb-2 ">
            <p>
              1. In this disclaimer, the following terms shall have the
              following meanings:
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              * The web page: every web page in which the publisher includes a
              hyperlink to this disclaimer with the intention of making this
              disclaimer applicable to it;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              * The publisher: the authorised publisher of the web page, being
              eChiefs LLC based in United States of America;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              * Use(s): including loading, logging in, requesting, consulting,
              reading, viewing, listening, editing, filling in (forms), sending,
              (temporarily) copying, storing, forwarding, distributing, making
              use of services, committing legal acts (e.g. buying, renting);
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              * You: the natural or legal person, whether or not represented,
              who uses the web page;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              * The content: including texts, images, hyperlinks, sound and/or
              video fragments and/or other objects;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              * Damage: direct or indirect damage of any nature whatsoever,
              including lost data and business, lost turnover, profit or other
              economic disadvantage.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              2. The following applies to this web page. By using this web page
              you agree with this disclaimer.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              3. The publisher makes every effort to regularly update and/or
              supplement the content of the web page. Despite this care and
              attention, it is possible that the content is incomplete and/or
              incorrect.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              4. The publisher provides the content of the web page in the state
              in which it actually is, without warranty or guarantee regarding
              the soundness, suitability for a particular purpose or otherwise.
              The content is experimental and intended for private use.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              5. The publisher is not liable for damage that has been or
              threatens to be inflicted and results from or in any way related
              to the use of the web page or to the inability to consult the web
              page.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              6. The publisher may change or terminate the web page (or have it
              changed) at his own discretion and at any time he wishes, with or
              without prior notice. The publisher is not liable for the
              consequences of the change or termination.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              7. Subject to this disclaimer, the publisher is not responsible
              for files of third parties that are clearly linked to the web
              page. Linking does not imply ratification of those files.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              8. Unauthorised or improper use of the web page or its content may
              result in an infringement of intellectual property rights,
              regulations regarding privacy, publication and/or communication in
              the broadest sense of the word. You are responsible for everything
              you send from the web page.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              9. The publisher reserves the right to deny you permission to use
              the web page and/or certain services offered on the web page. In
              addition, the publisher can monitor access to the web page. See
              also your cookie policy as part of our Privacy Policy.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              10. You will protect and indemnify the publisher, its employees,
              representatives, licensees, trading partners and the author of
              this disclaimer against judicial and extrajudicial measures,
              convictions, etc., including the costs for legal assistance,
              accountants, etc. that are instituted by third parties as a result
              of or related to your use of the web page, your violation of any
              statutory regulation or the rights of third party.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
