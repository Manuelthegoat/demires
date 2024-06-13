import React from "react";
import image from "../Assets/image.png";

const Events = () => {
  return (
    <>
      <div className="events">
        <div className="eventtitle">
          <p className="eventstitle">Upcoming Events</p>
        </div>
        <div className="events-card">
          <img src={image} alt="" />
          <div className="eventstextdiv">
            <p className="event-text">Chrismas Special</p>
          </div>
        </div>
        <div className="eventbtn">
          <button className="bookevent">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default Events;
