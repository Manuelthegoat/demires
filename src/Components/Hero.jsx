import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <div>
            <p className="title">Our Tasty JOllof</p>
            <p className="text">Savor the essence of West Africa.</p>
            <button className="button">SEE MENU</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
