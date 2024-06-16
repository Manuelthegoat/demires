import React from "react";
import Pic from "../Assets/pic1.png";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallerytitle">Our Gallery</div>

        <div className="galleryslider">
          <div className="swiperslide">
            <img src={Pic} alt="" />
          </div>
          <div className="swiperslide">
            <img src={Pic} alt="" />
          </div>
        </div>
        <a href="">See More</a>
      </div>
    </>
  );
};

export default Gallery;
