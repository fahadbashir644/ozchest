import { React, useEffect, useState } from "react";
import "./Policy.css";

function Policy(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });

  function closePolicyScreen() {
    document
      .getElementById("policy")
      .style.setProperty("width", "0%", "important");
    document.getElementById("grid-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-money").style.backgroundColor = "white";
    document.getElementById("dispatch").style.setProperty("display", "none");
    document.getElementById("policy").classList.remove("policy-size");
  }
  return (
    <div
      className={
        darkMode ? "policy-container dark-policy-container" : "policy-container"
      }
      id="policy"
    >
      <div
        className={
          darkMode
            ? "backbtn-box dark-backbtn-box mt-3 mb-3 p-2 ml-2"
            : "backbtn-box mt-3 mb-3 p-2 ml-2"
        }
      >
        <button onClick={closePolicyScreen}>Back</button>
      </div>
      <div className="discdetails-container mt-3">
        <div className="discdetails-box">
          <div className="item-title mb-2 mt-2">
            <h1>Privacy Policy</h1>
          </div>
          <div className="itemdesc-row mb-2 ">
            <p>
              The protection of your personal data is very important to
              OzChest(US). In this Privacy Statement, we intend to give clear
              and transparent information about how we treat your personal data.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We will do everything to safeguard your privacy and treat your
              personal data with care. In any case, OzChest (US) will comply
              with the applicable laws and regulations, including the General
              Data Protection Regulation. This entails that we will at least:
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Process your personal data in accordance with the purpose for
              which you submitted them. These purposes and types of personal
              data are described in this Privacy Statement;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Limit the processing of your personal data to those data that are
              strictly necessary for the purposes for which they are processed;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Ask your explicit permission if we need this to process your
              personal data.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Take appropriate technical and organisational measures to
              safeguard the protection of your personal data.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Refrain from passing personal data on to third parties, unless
              this is necessary for the performance of the purposes for which
              they were submitted;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Be aware of your rights regarding your personal data, inform you
              about them, and respect them.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              OzChest (US) is responsible for processing your personal data. In
              case you have any questions about our Privacy Statement after
              reading it, or you wish to contact us about it, please do not
              hesitate to do so using the contact details at the bottom of this
              document.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Purposes:</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              OzChest (US) processes personal data of customers and suppliers
              for the following purposes:
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              To execute the Purchase Agreement, the delivery and the payment;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Administrative Purposes:</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Verification purposes for the prevention of theft, fraud, money
              laundering, and terrorist financing, and for the security of
              OzChest (US)'s systems;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              To send newsletters to purchasers and other interested persons;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>To gather website statistics;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>To improve the website's ease of use;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              To optimize customer satisfaction and the 'shopping experience';
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Market analysis and target audience analysis;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Targeted advertising and to make personalized offers.</p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Grounds :</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>The personal data are processed on the following grounds:</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Processing is necessary for the execution of the agreement, that
              is the Purchase agreement with the client;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Processing is necessary to comply with a legal obligation, e.g.
              for a customer research under the Dutch money laundering and
              terrorist financing prevention act (Wet ter voorkoming van
              witwassen en financieren van terrorisme or WWFT);
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Processing is necessary to promote OzChest (US)'s justified
              interests, to wit sending newsletters to customers and to gather
              website statistics;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              The data subject has given their consent. This is the case, for
              instance, when they sign up for newsletters;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              The data subject has given their consent for placing Google
              Analytics' (tracking) cookies referred to in the cookie bar.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Nature of personal data :</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              OzChest (US) may process the following personal data for the
              aforementioned purposes:
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Contact's name;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Contact's phone number;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Contact's email address;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>IP address and MAC address;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Copy of passport or ID card;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Copy of a bankstatement;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Banking and/or credit card information.</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Additionally, but only after obtaining your permission, we may use
              Google Analytics to collect information about sex, age, interests,
              web pages visited or to be visited, peripheral equipment used,
              software settings, and referrer URL.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Retaining period :</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              OzChest (US) will retain your personal data for the aforementioned
              processing for the following periods:
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>For 5 years after closing the Purchase Agreement;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              For 7 years after execution of the Purchase agreement - for the
              sole purpose of financial administration;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>For as long as legally required;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              For as long as the interested person remains signed up for the
              newsletter;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              For 6 months after the most recent Purchase Agreement with respect
              to the newsletter; or
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              For 5 months if it concerns information obtained through
              (tracking) cookies from Google Analytics.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Disclosure to third parties :</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              The data you provided to us may be disclosed to third parties if
              this is necessary for the purposes described above.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>For instance, we hire third parties for:</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>For closing and executing Purchase agreements;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>The delivery of digital products;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Payment processing;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>The (financial) administration;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>Editing/delivery of the newsletter;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>To detect and prevent fraudulent activity.</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We will only disclose personal information to third parties with
              whom we have signed a processing agreement. Of course, the
              processing agreement contains the necessary arrangements to
              safeguard the security of your personal data. Other than this, we
              will not disclose the personal data you provided us with to third
              parties, unless this is legally required and allowed. An example
              of this is that the police ask us for (personal) data within the
              framework of an investigation. In such event, we are required to
              cooperate and to surrender these data. We may also share personal
              data with third parties if you give us your written permission for
              this.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We use the personal information we collect in connection with
              providing you our services to detect and prevent fraudulent
              activity. We share this information with Sift, a third-party
              service provider to assist us with this effort. To learn more
              about Sift, please see their Service Privacy Notice.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We collect data with the help of Google Analytics' (tracking)
              cookies and share them with third parties. More information about
              this is provided at policies.google.com/privacy.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Within the EU/EEA</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We provide personal details to parties within the European
              Economic Area (EEA) or in countries, sectors, and/or regions of
              countries for which the European Commission has taken an adequacy
              decision. In such decision, the European Commission determines if
              the country in question offers an appropriate level of data
              protection. An adequacy decision has also been taken with regard
              to the United States, but only insofar as the receiving party has
              committed themselves to compliance with the principles provided in
              this decision, also called the Privacy Shield.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              All countries with an adequacy decision are listed at the website
              of the European Commission.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We collect data with the help of Google Analytics' (tracking)
              cookies and transfer them to the United States.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Minors</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We only process personal data of minors (persons under the age of
              16) if a parent, guardian, or legal representative has given
              written permission for this.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Security</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We have taken appropriate technical and organisational measures to
              protect your personal data against unlawful processing. These
              measures include the following:
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              All persons who have access to your personal data on behalf of
              OzChest (US) are sworn to secrecy;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Our systems are protected by a user name and a complex password
              policy;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              We make backups to be able to recover data in case of physical or
              technical incidents;
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>We regularly test and evaluate our systems and measures;</p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Our employees are informed about the importance of the protection
              of personal data.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Rights regarding your data</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              You have the right to inspect the personal data we received from
              you and to have them rectified or erased. You may also object
              against the processing of your personal data (or part thereof) by
              us or by one of our employees. You also have the right to 'be
              forgotten' and to have the data you provided transferred to you or
              directly to a third party of your choice. You also have the right
              to refuse to be subject to automated individual decision-making,
              including profiling. You have the right of limitation and the
              right to object. For further explanation, please contact us or
              refer to the Data Protection Authority
              www.autoriteitpersoonsgegevens.nl for information. We may ask you
              to identify yourself before granting your request.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              If we are processing your personal data based on your permission,
              you have the right to withdraw that permission at all times.
            </p>
          </div>
          <div className="itemdesc-row mb-2">
            <h3>Complaints</h3>
          </div>
          <div className="itemdesc-row mb-2">
            <p>
              Should you have any complaint about the processing of your
              personal data, please contact us directly. If we are unable to
              reach a mutual agreement, that is, of course, most regrettable.
              You always have the right to file a complaint with the Data
              Protection Authority. This is the supervisory authority in the
              field of privacy protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
