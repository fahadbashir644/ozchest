import { React, useEffect, useState } from "react";
import "./Payment.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Key(params) {
  const [buyer, setBuyer] = useState(params.user);
  useEffect(() => {
    if (buyer != undefined || buyer != {}) {
    }
  }, [buyer]);

  function handleSubmit1() {
    params.update({
      key: uuidv4(),
      balance: "",
    });
  }

  function handleSubmit2() {
    if (buyer.key != "") {
      const user = {
        buyer: buyer,
        value: 2,
      };
      axios.post("http://localhost:8000", user).then((result) => {
        if (result) {
          console.log("successfully login");
          setBuyer({
            key: buyer.key,
            balance: buyer.balance,
          });
        }
      });
    }
  }

  function copy() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }

  return (
    <div>
      <h1>Get/Put Your Key</h1>
      <div>
        <input name="key" id="myInput" type="text" placeholder="key" />

        <button className="ml-4 refill-btn1" onClick={copy}>
          C
        </button>
      </div>

      <button className="mr-4 mt-4 refill-btn" onClick={handleSubmit1}>
        Generate
      </button>
      <button className=" mt-4 refill-btn" onClick={handleSubmit2}>
        Connect
      </button>

      <p className="mt-4"> balance = {buyer.balance}</p>
    </div>
  );
}

export default Key;
