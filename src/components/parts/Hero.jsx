import React, { useEffect } from "react";
import "../css/hero.css";
import Navbar from "../ui/Navbar";

const Hero = () => {
  useEffect(() => {
    const lights = ["luz1", "luz2", "luz3", "luz4"];

    lights.forEach((light, index) => {
      const element = document.getElementById(light);
      const toggleLight = () => {
        const randomOffTime = Math.floor(Math.random() * 5000) + 1000;
        const randomOnTime = Math.floor(Math.random() * 3000) + 4000;
        setTimeout(() => {
          element.classList.remove("hidden");
          setTimeout(() => {
            element.classList.add("hidden");
            toggleLight();
          }, randomOnTime);
        }, randomOffTime);
      };
      const initialDelay = index * 1000;
      setTimeout(toggleLight, initialDelay);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div id="hero" className="hero">
        <img className="background" src="background.png" alt="background" />
        <img className="background" src="houses.png" alt="houses" />
        <img className="background" src="luzfija.png" alt="luzfija" />
        <img className="background" src="road.png" alt="road" />

        <img
          id="luz1"
          className="background hidden"
          src="luz1.png"
          alt="luz1"
        />
        <img
          id="luz2"
          className="background hidden"
          src="luz2.png"
          alt="luz2"
        />
        <img
          id="luz3"
          className="background hidden"
          src="luz3.png"
          alt="luz3"
        />
        <img
          id="luz4"
          className="background hidden"
          src="luz4.png"
          alt="luz4"
        />

        <div className="walker-container">
          <img className="walker" src="walker2.png" alt="walker" />
        </div>

        <img className="background" src="front.png" alt="front" />
      </div>
    </>
  );
};

export default Hero;
