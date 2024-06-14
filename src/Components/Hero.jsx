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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="content"
        >
          <SwiperSlide>
            <p className="title">Our Tasty JOllof</p>
            <p className="text">Savor the essence of West Africa.</p>
            <button className="button">SEE MENU</button>
          </SwiperSlide>
          <SwiperSlide>
            <p className="title">Have An Upcoming Event?</p>
            <button className="button2">SEE MENU</button>
          </SwiperSlide>
          <SwiperSlide>
            <p className="title">Our Tasty JOllof</p>
            <p className="text">Savor the essence of West Africa.</p>
            <button className="button">SEE MENU</button>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
