import React from "react";
import "./ScreenOneHero.css";
import heroimage from "../Images/heroImage.png";
const ScreenOneHero = () => {
  return (
    <div className="screenOneHero">
      <div className="screenOneHeroLeft">
        <h1 className="top">Designing to fit your needs</h1>
        <h1 className="down">
          A startup botique which was passinoate about the designs and new
          trends, which creates new trends in the designs in the market
        </h1>
      </div>
      <div className="screenOneHeroRight">
        <div className="circle circleOne"></div>
        <div className="circle circleTwo"></div>
        <div className="circle circleThree"></div>
        <img src={heroimage} className="heroImage"></img>
      </div>
    </div>
  );
};

export default ScreenOneHero;
