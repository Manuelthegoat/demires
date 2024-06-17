import React from "react";
import Food2 from "../Assets/food2.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menutitle">
        <p className="menttitle1">Menu</p>
        <p className="menttitle2">Our Special Meals</p>
      </div>
      <div className="swipers">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="menucontent"
      >
        <SwiperSlide className="rrr">
          <div className="carimg">
            <img src={Food2} alt="Jollof Rice" />
          </div>
          <div className="cardname">
            <p>Jollof Rice</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rrr">
          <div className="carimg">
            <img src={Food2} alt="Jollof Rice" />
          </div>
          <div className="cardname">
            <p>Jollof Rice</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Menu;
