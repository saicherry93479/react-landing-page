import React from "react";
import "./ScreenFour.css";
import fourMiddle from "../Images/fourMiddle.png";
import fourRight from "../Images/fourRight.png";

const ScreenFour = () => {
  return (
    <div className="top four">
      <div className="fourLeft">
        <h1 className="fourLeftTop">Latest designs that we delivered</h1>
        <h1 className="fourLeftBottom">
          a startup botique which was passinoate about the designs and new
          trends, which creates new trends in the designs in the market
        </h1>
        <button className="screenFourButton left">More Designs</button>
      </div>
      <div className="fourMiddle imageFour">
        <div className="imageWrapper">
          <img src={fourMiddle} className="screenFourImage"></img>
        </div>
        <h1>We Designed a design inspired by the all the gen..</h1>
        <button className="screenFourButton imageButton">Let's see</button>
      </div>
      <div className="fourRight imageFour">
        <div className="imageWrapper">
          <img src={fourRight} className="screenFourIamge"></img>
        </div>
        <h1>We Designed a design inspired by the all the gen..</h1>
        <button className="screenFourButton imageButton">Let's see</button>
      </div>
    </div>
  );
};

export default ScreenFour;
