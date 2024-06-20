import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Pic from "../Assets/pic1.png";

import "swiper/css";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallerytitle">Our Gallery</div>

        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="galleryslider"
        >
          <SwiperSlide className="swiperslide">
            <div>
              <img src={Pic} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <div>
              <img src={Pic} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <div className="swiperinside">
              <img src={Pic} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <a href="" className="gallerylink">See More</a>
      </div>
    </>
  );
};

export default Gallery;
