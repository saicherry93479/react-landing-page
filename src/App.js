import React from "react";
import "./App.css";
import ScreenFive from "./Components/ScreenFive";
import ScreenFour from "./Components/ScreenFour";
import ScreenOne from "./Components/ScreenOne";
import ScreenThree from "./Components/ScreenThree";
import ScreenTwo from "./Components/ScreenTwo";

const App = () => {
  return (
    <>
      <div className="smallDevices">
        <h1>This page will work only in desktops more than 1250px</h1>
      </div>
      <div className="largeDevices">
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
        <ScreenFour />
        <ScreenFive />
      </div>
    </>
  );
};

export default App;
