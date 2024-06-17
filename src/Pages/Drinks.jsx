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
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3971.5341604399164!2d7.041364224984623!3d5.487374094492439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s488%20Nwaturuocha%20avenue%20By%20Pacs%20Junction%20Mcc%20Road%20IKenegbu%20Layout%20Owerri!5e0!3m2!1sen!2sng!4v1718614688558!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{"border":"0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </>
  );
};

export default Drinks;
