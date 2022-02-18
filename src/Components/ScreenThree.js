import React from "react";
import "./ScreenThree.css";
import itemThree from "../Images/itemThree.png";
import itemOne from "../Images/itemOne.png";
import itemTwo from "../Images/itemTwo.png";
import collectIcon from "../Images/collectionIcon.png";
import handOverIcon from "../Images/handOver.png";
import secureIcon from "../Images/secureIcon.png";

const ScreenThree = () => {
  return (
    <div className="top three">
      <div className="threeTop">
        <div className="threeTopItem itemOne">
          <div className="itemInfo">
            <h1 className="itemInfoTop">Collections</h1>
            <h1 className="itemInfoDown">
              our latest collection was inspired by you our latest collection
              was inspired by you
            </h1>
          </div>
          <div className="itemImages">
            <img src={itemOne}></img>
            <img src={collectIcon} className="itemicon"></img>
          </div>
        </div>
        <div className="threeTopItem itemTwo">
          <div className="itemInfo">
            <h1 className="itemInfoTop">Hand over</h1>
            <h1 className="itemInfoDown">
              our latest collection was inspired by you our latest collection
              was inspired by you
            </h1>
          </div>
          <div className="itemImages">
            <img src={itemTwo}></img>
            <img src={handOverIcon} className="itemicon"></img>
          </div>
        </div>
        <div className="threeTopItem itemThree">
          <div className="itemInfo">
            <h1 className="itemInfoTop">Secure</h1>
            <h1 className="itemInfoDown">
              our latest collection was inspired by you our latest collection
              was inspired by you
            </h1>
          </div>
          <div className="itemImages">
            <img src={itemThree}></img>
            <img src={secureIcon} className="itemicon"></img>
          </div>
        </div>
      </div>
      <div className="threeBottom">
        <h1 className="threeBottomTop">Give order and trust with excellence</h1>
        <h1 className="threeBottomBottom">
          a startup botique which was passinoate about the designs and new
          trends, which creates new trends in the designs in the market a
          startup botique which was passinoate about the designs and new trends,
          which creates new trends in the designs in the market
        </h1>
      </div>
      <div className="threeDown"></div>
    </div>
  );
};

export default ScreenThree;
