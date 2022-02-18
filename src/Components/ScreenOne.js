import React from "react";
import "./ScreenOne.css";
import ScreenOneHeader from "./ScreenOneHeader";
import ScreenOneHero from "./ScreenOneHero";
const ScreenOne = () => {
  return (
    <div className="top one">
      <ScreenOneHeader />
      <ScreenOneHero />
    </div>
  );
};

export default ScreenOne;
