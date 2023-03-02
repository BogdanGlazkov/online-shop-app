import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video from "../VideoOne.mp4";

AOS.init({
  duration: 1200,
});

const About = () => {
  return (
    <div>
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="aboutLines">
        <p className="par" data-aos="fade-up">
          DIGITAL SHOP
        </p>
        <p className="par" data-aos="fade-up">
          Your favourite gadgets
        </p>
        <p className="par italic" data-aos="fade-up">
          Since 2020
        </p>
      </div>
    </div>
  );
};

export default About;
