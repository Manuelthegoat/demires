import React from "react";
import food from "../Assets/food.png";

const IsiEwu = () => {
  return (
    <>
      <div className="isiewu">
        <img src={food} alt="" />
        <p className="isiewutitle">Ways to Enjoy our African Isi Ewu</p>
        <p className="isiewutext">
          Indulge in the tantalizing allure of Isi Ewu at De Mires, where
          succulent goat head, steeped in fragrant spices, promises a culinary
          journey through the heart of Igbo tradition.
        </p>
        <p className="isiewulearn">Learn More</p>
        <div className="hr"></div>
      </div>
    </>
  );
};

export default IsiEwu;
