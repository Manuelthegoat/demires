import React from 'react'
import image from '../Assets/image.png'

const Events = () => {
  return (
    <>
        <div className="events">
            <p className="eventstitle">Upcoming Events</p>
            <div className="events-card">
                <img src={image} alt="" />
                <div className="eventstextdiv">

                <p className="event-text">Chrismas Special</p>
                </div>
            </div>
            <button className="bookevent">Book Now</button>
        </div>
    </>
  )
}

export default Events