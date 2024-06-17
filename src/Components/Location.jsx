import React from "react";
import map from "../Assets/map.png";

const Location = () => {
  return (
    <>
      <div className="locationmaindiv">
        <div className="location">
          <div className="localeft">
            <p className="locatitle">Discover Our Shop Location</p>
            <p className="locatext">
              488 Nwaturuocha avenue By Pacs Junction Mcc Road IKenegbu Layout Owerri
            </p>
          </div>
          <div className="locaright">
            <img src={map} alt="" />
          </div>
        </div>
        <button className="locationbtn">
        DE MIRES on Google Maps
        </button>
        <br/>
        <div className="hr"></div>
      </div>
    </>
  );
};

export default Location;
