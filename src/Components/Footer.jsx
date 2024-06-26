import React from "react";
import one from "../Assets/ig.png";
import two from "../Assets/fb.png";
import three from "../Assets/twitter.png";
import four from "../Assets/yt.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="input">
          <input type="text" name="" id="" placeholder="Email Address" />
          <button className="accept">(""")</button>
        </div>
        <div className="footlinks">
          <div className="footleft">
            <p className="foottitle">ABOUT DE MIRES</p>
            <div className="footerlinks">
              <p>Contact us</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Our Story</p>
              <p>Terms and Condition</p>
            </div>
          </div>
          <div className="footright">
            <p className="foottitle">MENU</p>
            <div className="footerlinks">
              <p>Drinks</p>
              <p>Our Food</p>
            </div>
          </div>
        </div>
        <div className="footlinks">
          <div className="footleft">
            <p className="foottitle">Our Lounge</p>
            <div className="footerlinks">
              <p>DE MIRES Location </p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="footright">
            <p className="foottitle">MENU</p>
            <div className="footerlinks">
              <p>DE MIRES Location </p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="connect">
          <p className="connecttitle">CONNECT WITH US</p>
          <div className="icons">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
