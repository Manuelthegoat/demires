import React from "react";
import DrinkComponent from "../Components/DrinkComponent";
import Maps from "../Assets/map.png";

const Drinks = () => {
  return (
    <>
      <div className="drinks">
        <div className="drinknavigator">
            <p className="navtitle">Main Menu</p>
            <p className="navtitle">Food</p>
            <p className="navtitleactive">Drinks</p>
        </div>
        <DrinkComponent />
        <div className="findrest">
          <p>Find Our Restaurants</p>
          <img src={Maps} alt="" />
        </div>
      </div>
    </>
  );
};

export default Drinks;
