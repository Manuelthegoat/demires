import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <Swiper
            modules={[Autoplay, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div>
                <p className="title">Our Tasty JOllof</p>
                <p className="text">Savor the essence of West Africa.</p>
                <button className="button">SEE MENU</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="title">Have An Upcoming Event?</p>
                <button className="button2">SEE MENU</button>
              </div>
            </SwiperSlide>
         
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
