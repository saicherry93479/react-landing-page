import React from "react";
import "./ScreenFive.css";
import twitterIcon from "../Images/twitterIcon.png";
import facebookIcon from "../Images/facebookIcon.png";
import instagramIcon from "../Images/instagramIcon.png";

const ScreenFive = () => {
  return (
    <div className="top five">
      <div className="screenFiveTop">
        <h1>
          need a design? Let’s help transform your way of style.We’d love to
          hear from you
        </h1>
        <button className="screenFiveButton">Let's Talk</button>
      </div>
      <div className="screenFiveBottom">
        <div className="screenFiveBottomTop">
          <div className="screenFiveBottomLeft">
            <div>
              <h1 className="footerHeader firstHeader">Explore</h1>
              <h1 className="footerSub">who we are</h1>
              <h1 className="footerSub">About us</h1>
              <h1 className="footerSub">how we process</h1>
            </div>
            <div className="second">
              <h1 className="footerHeader">Address</h1>
              <h1 className="footerSub">Chennai</h1>
              <h1 className="footerSub">Hyderabad</h1>
              <h1 className="footerSub">Delhi</h1>
            </div>
          </div>
          <div className="screenFiveBottomRight">
            <h1 className="footerHeader">Connect with us </h1>
            <div>
              <img src={twitterIcon}></img>
              <img src={facebookIcon}></img>
              <img src={instagramIcon}></img>
            </div>
            <div>
              <input placeholder="News Letter"></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="screenFiveBottomBottom">
          <h1>MODRENSS</h1>
          <p>@saicherry</p>
        </div>
      </div>
    </div>
  );
};

export default ScreenFive;
