import React from "react";
import "../scss/comp/About.scss";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const About = () => {
  return (
    <div id="about">
      <div className="about-main">
        <div className="left">
          <h1>About Us</h1>
          <p>
            We are a team of passionate developers who are dedicated to
            providing the best possible experience for our customers.
          </p>
          <button>Contact Us</button>
        </div>
        <div className="right">
          <div className="img">
            <FaFacebookF />
            <FiTwitter />
            <SiGmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
