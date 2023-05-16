import { React, useEffect, useState } from "react";
import "./Banner.css";
import BannerImg from "../../Assets/Banner.PNG";
function Banner(params) {
  const [darkMode, setDarkMode] = useState(params.Mode);
  useEffect(() => {
    setDarkMode(params.Mode);
  });

  return (
    <div className="banner-container mt-5">
      <div
        className={
          darkMode ? "banner-box dark-banner-box mb-4" : "banner-box mb-4"
        }
      >
        <div className="banner-title mb-2">
          <h2 id="banner-title">
            Your one
            <span
              className={
                darkMode ? "banner-title1 dark-banner-title1" : "banner-title1"
              }
              id="banner-title"
            >
              {" "}
              stop{" "}
            </span>
            to an almost{" "}
            <span
              className={
                darkMode
                  ? "banner-title12 dark-banner-title12"
                  : "banner-title12"
              }
              id="banner-title"
            >
              {" "}
              magical{" "}
            </span>
            supply of
          </h2>
        </div>
        <div className="banner-title2 mb-3">
          <h2 id="banner-title">Gift Cards </h2>
        </div>
      </div>
      <div className="banner-img">
        <img src={BannerImg}></img>
      </div>
    </div>
  );
}

export default Banner;
