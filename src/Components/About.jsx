import React from "react";
import Aboutimg from "../Assets/about.png";

const About = () => {
  return (
    <>
      <div className="aboutdiv">
        <div className="left">
          <img src={Aboutimg} alt="" />
        </div>
        <div className="right">
          <p className="abouttitle">About Us</p>
          <p className="abouttext">
            "Welcome to De Mires, A cozy haven where memories thrive. In our
            lounge and bar, laughter fills the air, Where every sip and bite is
            crafted with care."
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
