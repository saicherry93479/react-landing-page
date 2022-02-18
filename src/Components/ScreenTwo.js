import React from "react";
import "./ScreenTwo.css";
import screenTwoHeroImage from "../Images/screenTwoHero.png";

const ScreenTwo = () => {
  return (
    <div className="top two">
      <div className="info">
        <h1 className="infoTop">Who we are and why we are awesome</h1>
        <h1 className="infoDown">
          a startup botique which was passinoate about the designs and new
          trends, which creates new trends in the designs in the market
        </h1>
        <button className="infoButton">About us</button>
      </div>
      <img src={screenTwoHeroImage} className="screenTwoImage"></img>
    </div>
  );
};

export default ScreenTwo;
