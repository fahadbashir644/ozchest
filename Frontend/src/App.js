import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Main from "./Components/Main/Main";
import { useState, useEffect } from "react";
//import fetch from "node-fetch";
import axios from "axios";
function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [Token, setToken] = useState();
  const [currentCurrency, setCurrentCurrency] = useState();

  useEffect(() => {
    setDarkMode(getInitialMode());
  });

  function changeCurrency(curr) {
    setCurrentCurrency(curr);
  }
  async function changeMode(mode) {
    setDarkMode(mode);
    /* axios
      .get("http://128.199.17.136/products", {
        header: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });

    /* axios
      .get("http://128.199.17.136/", {
        header: { "Content-Type": "application/json" },
        data: {
          apiToken: Token,
        },
      })
      .then((response) => {
        console.log("get method");
        console.log(response.status);
        console.log(response.data);
      });*/
    /* axios
      .post("https://api.prepaidforge.com/v1/1.0/signInWithApi", {
        header: { "Content-Type": "application/json" },
        data: {
          email: "Worldofprodiverse@gmail.com",
          password: "Bravo1?@1",
        },
      })
      .then((response) => {
        console.log("front");
        console.log(response.status);
        console.log(response);
        console.log("bund hoi pri hain jnaab");
      });*/
  }
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  return (
    <div
      className={darkMode ? "dark-grid-container" : "grid-container"}
      id="grid-container"
    >
      <div className="grid-header">
        <Header Mode={darkMode} updatecurrency={changeCurrency}></Header>
      </div>
      <div className="dispatch" id="dispatch"></div>

      <div className="grid-main" id="grid-main">
        <Main Mode={darkMode} current={currentCurrency}></Main>
      </div>
      <div className="grid-footer">
        <Footer setMode={changeMode}></Footer>
      </div>
    </div>
  );
}

export default App;
