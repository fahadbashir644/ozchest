import { React, useEffect, useState } from "react";
import "./ToS.css";

function ToS(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });
  function closeToSScreen() {
    document
      .getElementById("tos")
      .style.setProperty("width", "0%", "important");
    document.getElementById("grid-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-container").style.backgroundColor =
      "rgb(236, 245, 254)";
    document.getElementById("header-money").style.backgroundColor = "white";
    document.getElementById("dispatch").style.setProperty("display", "none");
    document.getElementById("tos").classList.remove("tos-size");
  }
  return (
    <div
      className={
        darkMode ? "tos-container dark-tos-container" : "tos-container"
      }
      id="tos"
    >
      <div
        className={
          darkMode
            ? "backbtn-box dark-backbtn-box mt-3 mb-3 p-2 ml-2"
            : "backbtn-box mt-3 mb-3 p-2 ml-2"
        }
      >
        <button onClick={closeToSScreen}>Back</button>
      </div>
      <div className="discdetails-container mt-3">
        <div className="discdetails-box">
          <div className="item-title mb-2 mt-2">
            <h1>ToS</h1>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row ">
              <h3 className="mb-0">Article 1. Definitions</h3>
            </div>
            <div className="itemdesc-row ">
              <p>
                In these general terms and conditions, the following terms shall
                have the following meanings:
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. Contractor: eChiefs LLC, acting on behalf of OzChest (US),
                with registered office and place of business in Wyoming, 30
                north gould street, USA.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. Client: the party that enters into an agreement with the
                contractor, places an order with the contractor or to whom the
                contractor has submitted an offer to which these general terms
                and conditions apply. The client may be a consumer (a natural
                person not acting in the course of a profession or business) or
                a business customer (business2business client: ''b2b'').
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                3. Products and Activities: all activities or products for which
                an order has been given or which are performed or delivered by
                the contractor on another account with regard to the agreement
                or quotation.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                4. Documents: all items made available to the contractor by the
                client, including: documents, information, materials or data
                carriers, as well as all items, including documents, produced by
                the contractor in the context of the execution of the order.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                5. General terms and conditions: the terms and conditions which
                all agreements between customer and contractor are based on.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                6. Agreement or order: any agreement between the client and the
                contractor, in accordance with the provisions of the agreement
                and/or order confirmation.
              </p>
            </div>
            <div className="itemdesc-row">
              <p>7. Parties: eChiefs (US) and customer together.</p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 2. Applicability</h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. These terms and conditions will apply to all quotations,
                offers, activities, orders, agreements and deliveries of
                services or products by or on behalf of eChiefs (US).
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. Deviations from these general terms and conditions are only
                valid if both parties expressly agreed upon it in writing. Any
                general terms and conditions or other terms and conditions of
                the client are not valid. The applicability thereof is expressly
                rejected by the contractor.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                3. If any provision of these general terms and conditions is
                null and void or annulled, the other provisions of these general
                terms and conditions shall remain in full force and the
                contractor and the client shall consult with each other with a
                view to agreeing on new provisions to replace the provisions
                that are null and void or annulled, whereby the purpose and
                purport of the provision that is null and void or annulled, as
                the case may be, shall be respected as much as possible. If the
                interpretation or content of one or more provisions of these
                general terms and conditions is unclear, they must be
                interpreted 'in the spirit' of these general terms and
                conditions. Situations that are not regulated in these general
                terms and conditions must be assessed 'in the spirit' of these
                general terms and conditions.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                4. If the contractor does not always require strict compliance
                with these general terms and conditions, this does not mean that
                the provisions of these general terms and conditions do not
                apply, or that the contractor would lose the right to demand
                strict compliance with the provisions of these general terms and
                conditions in other cases to any degree.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                5. The contractor is entitled to amend or supplement these
                general terms and conditions. Minor changes may be made at any
                time. Major substantive changes shall be discussed (upfront)
                with the client.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                6. The agreement is valid as soon as the client’s acceptance of
                the offer has reached the contractor. By accepting the offer,
                the client declares that he agrees with the applicable statement
                of these general terms and conditions and, if necessary, waives
                an applicable statement of his own general terms and conditions.
                Acceptance shall be effected after payment for the product(s) in
                question.
              </p>
            </div>
            <div className="itemdesc-row">
              <p>
                7.If the acceptance is subject to reservations or changes with
                respect to the offer or quotation, contrary to the provisions of
                the previous paragraph, the agreement will only be concluded if
                the contractor has notified the client that it agrees to these
                deviations from the quotation.{" "}
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 3. Activities</h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. The contractor sells digital products via the Internet: such
                as, but not limited to, codes to top up credit in, for example,
                Google Play, Spotify or iTunes. After payment, the customer
                immediately receives a code that can be redeemed at the service
                in question.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 4. Discounts and offers</h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. The contractor may make use of discounts and offers, in which
                case the period of validity shall always be stated. This may
                include so-called 'discount codes' (paid or unpaid). These
                discount codes are specifically valid for a period of one year;
                if they are not used within the specified period, the
                redeemability and validity of the code lapses.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 5. Agreement </h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. The agreement becomes effective after payment by the client.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. The agreement is entered into per payment.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                3. If a term has been agreed or specified for the execution of
                certain work or for the delivery of certain products, this is
                never a strict deadline. If a term is exceeded, the client must
                give the contractor written notice of default. The contractor
                must be given a reasonable period in which to still execute the
                agreement.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">
                Article 6. Confirmation and acceptance of the order
              </h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. The agreement is concluded as soon as the customer has paid
                the contractor (in advance from private individuals), or as soon
                as the customer has ordered products via the webshop, whereby
                payment can be made in arrears (b2b customers).
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. The contractor reserves the right, without giving reasons, to
                reject an agreement.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                3. Any notice given under or pursuant to the agreed agreement
                will be made available in writing by email to the other party at
                the address stated on the order.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                4. The contractor is not bound to verbal agreements if these
                have not been confirmed by the contractor in writing.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 7. Modification of the order</h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. If, during the execution of the agreement, it appears that it
                is necessary to amend or supplement the agreement, the parties
                will proceed to amend the agreement in good time and in mutual
                consultation.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. Without being in default, the contractor may refuse a request
                for amendment, supplementation or withdrawal of the agreement,
                if this could have consequences in qualitative and/or
                quantitative terms, for example for the products to be delivered
                in that context.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">
                Article 8. Reflection period and right of withdrawal
              </h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. An already placed order cannot be cancelled. The reflection
                period and revocation period of 14 days is not applicable in
                view of the digital nature of the products to be delivered.
                Thus, there is no reflection period and revocation period. The
                client therefore agrees to a direct delivery of the product
                after payment (both before and after) and explicitly renounces
                the reflection period and the right of revocation.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. The reason for deviating from the right of withdrawal is that
                a product cannot be returned because it cannot be ascertained
                whether the product has already been used. After all, it
                concerns digital products of which the seal is broken
                immediately after delivery. The nature of digital products makes
                any reflection period and the right of withdrawal impossible,
                except in case of delayed payment. In that case, the code has
                not yet been sent by the client nor received by the contractor
                and the product could still be revoked. For this, it is the
                customer who bears the burden of proof.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 9. Delivery of orders</h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. Under no circumstances will the contractor be liable for any
                delay in the delivery of products, except in the event of intent
                or gross negligence. Contractor guarantees to deliver a working
                product code, in the absence of which a new code will be
                delivered (free of charge). Evidence for the malfunctioning of
                the code lies with the customer.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 10. Suspension and dissolution</h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. The contractor has the right to declare every agreement with
                the customer dissolved without judicial intervention, if:- the
                customer is declared bankrupt;- the customer applies for a
                provisional suspension of payments; - a request by the customer,
                a natural person, to declare the statutory debt rescheduling
                applicable is granted by the court;- if the customer loses the
                right to dispose of his assets or parts of them by attachment,
                placement under guardianship or in any other way; - or if the
                customer is manifestly unable to fulfil his financial
                obligations.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. As a result of the dissolution, the mutual claims become
                immediately due and payable. The customer is liable for the
                damage suffered by the contractor.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                3. If the contractor has reason to doubt the payment capacity of
                the customer, the contractor is entitled to postpone the
                delivery of products until the customer has provided security
                for the payment. The customer is liable for the direct and
                indirect damage to be suffered by the contractor for this
                delayed delivery.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">
                Article 11. Payment and collection costs{" "}
              </h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. Unless explicitly agreed otherwise, payment can be made by
                any of the payment methods offered on eChiefs LLC (US).
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. Every financial transaction can be detained if there is a
                suspicion of a financial risk. If no claim is made by the buyer
                within 30 days, this transaction will be considered to be
                overdue. A claim on the transaction can be made from the buyer
                via support@ozchest.com.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                3. Also, if explicitly agreed (b2b), an invoice can be paid (in
                arrears) with a payment term of 7 days.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                4. If payment is not made within the set term of payment, or if
                the collection is cancelled without valid reason and not paid
                within 7 days, the customer will be in default by operation of
                law and will owe statutory interest on the outstanding invoice,
                without any reminder or notice of default being required,
                without prejudice to the right of the contractor to demand
                immediate payment of the amount due together with interest and
                the costs of extrajudicial or judicial collection. The costs of
                extrajudicial collection shall be determined between the parties
                by means of the Decree on compensation for extrajudicial
                collection costs, which took effect on 1 July 2012.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 12. Complaints procedure</h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. Complaints about the work performed must be made known to the
                contractor, stating the reasons, within 7 days after the
                complaint arose, or within 7 days after delivery of the
                products, via the email address support@ozchest.com, whereby an
                attempt will be made to give a response within 48 hours (on
                working days). After expiry of the aforementioned periods, the
                customer will be deemed to have accepted the work performed.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. If a complaint is well-founded, the contractor has the option
                of repairing the defect in the work. If this is not possible,
                the contractor must change the amount paid in proportion to the
                complaint.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 13. Confidentiality </h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. The contractor is obliged to keep any information concerning
                the client confidential.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 14. Force majeure </h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. The contractor is not obliged to fulfil any obligation
                towards the client if he is hindered to do so as a result of a
                circumstance that cannot be attributed to any fault, and for
                which he is not responsible by virtue of the law, a legal act or
                generally accepted practice.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. In these general terms and conditions, force majeure is
                understood to mean, in addition to what is understood in this
                respect by law and jurisprudence, all external causes, foreseen
                or unforeseen, over which the contractor has no influence, but
                as a result of which the contractor is unable to fulfil his
                obligations (e.g. internet failures, interruptions in the
                payment service, etc.).
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                3. In the event of force majeure, the customer shall immediately
                notify the contractor in writing, stating the cause of the force
                majeure.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                4. The contractor has the right to invoke force majeure if the
                circumstances that prevent (further) performance of the
                agreement occur after the contractor should have performed his
                obligation.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                5. The contractor has the right to suspend his obligations under
                the agreement during the period that the force majeure lasts.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                6. Following notification of force majeure on the part of the
                contractor, the customer has the right to cancel the order in
                writing.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">Article 15. Liability </h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. The contractor's liability shall be limited to the damage
                that can be regarded as an immediate and obvious consequence of
                the fulfilment or faulty fulfilment, all this limited to the
                amount covered by the contractor's insurance policy. If in any
                case the insurance company does not pay out or the damage is not
                covered by the insurance company, the liability will be limited
                to the amount relating to the invoice amount or the period of
                the invoice amount to which the damage relates.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                2. Contractor is never liable for indirect damage. Indirect
                damage is understood to mean: consequential damage; loss of
                profit; missed savings; damage due to business or other types of
                stagnation.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                3. Contractor shall never be liable for damage as a result of
                failure to perform work carried out by third parties or goods
                delivered by third parties.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                4. The limitations of liability contained in these terms and
                conditions do not apply if the damage is due to intent or gross
                negligence on the part of the contractor and/or its
                subordinates.
              </p>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                5. The contractor is never liable if the client's website goes
                offline for any reason whatsoever or if something happens to the
                website that causes damage to the client.
              </p>
            </div>
          </div>
          <div className="itemdesc-row mb-2 ">
            <div className="itemdesc-row mb-2 ">
              <h3 className="mb-0">
                Article 16. Applicable law and choice of court
              </h3>
            </div>
            <div className="itemdesc-row">
              <p className="mb-0">
                1. These general terms and conditions are governed by USA law.
                Disputes arising from the agreement will be submitted to the
                competent court in Amsterdam, unless mandatory rules of law
                dictate otherwise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToS;
