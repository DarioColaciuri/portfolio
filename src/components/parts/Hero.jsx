import React, { useEffect } from "react";
import "../css/hero.css";

const Hero = () => {
  useEffect(() => {
    const lights = ["luz1", "luz2", "luz3", "luz4"];

    lights.forEach((light, index) => {
      const element = document.getElementById(light);
      const toggleLight = () => {
        const randomOffTime = Math.floor(Math.random() * 5000) + 1000;
        const randomOnTime = Math.floor(Math.random() * 3000) + 4000;
        setTimeout(() => {
          element.classList.remove("hiddenLight");
          setTimeout(() => {
            element.classList.add("hiddenLight");
            toggleLight();
          }, randomOnTime);
        }, randomOffTime);
      };
      const initialDelay = index * 1000;
      setTimeout(toggleLight, initialDelay);
    });
  }, []);

  const handleClick = (event) => {
    const zombie = document.querySelector(".zombie");
    const zombieStop = document.querySelector(".zombieStop");
    const hand = document.querySelector(".hand");
    const puntito = document.querySelector(".puntito");

    const x = (event.clientX / window.innerWidth) * 100;
    const y = 70;

    zombie.style.animationPlayState = "paused";
    zombieStop.style.animationPlayState = "paused";
    puntito.style.animationPlayState = "paused";

    hand.style.left = `${x - 8}vw`;
    hand.style.top = `${y - 70}vh`;

    hand.classList.remove("hidden");
    hand.classList.add("smash");
    zombieStop.classList.remove("hidden");
    zombie.classList.add("hidden");
    puntito.classList.add("unClickable");

    setTimeout(() => {
      zombieStop.classList.add("hiddenLight");
    }, 1000);

    setTimeout(() => {
      hand.classList.remove("smash");
      hand.classList.add("unSmash");
      setTimeout(() => {
        hand.classList.add("hidden");
      }, 1300);
    }, 5000);
  };

  return (
    <>
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

        <img className="walker" src="walker.gif" alt="walker" />
        <img className="runner" src="runner1.gif" alt="runner" />
        <img className="zombie" src="zombie.gif" alt="walker" />
        <img className="zombieStop hidden" src="zombie1.png" alt="walker" />
        <div className="puntito" onClick={handleClick}></div>
        <img className="hand hidden" src="hand.png" alt="hand" />
        <img className="moto" src="moto.gif" alt="moto" />
        <img className="car" src="car.gif" alt="car" />
        <img className="background" src="front.png" alt="front" />
      </div>
    </>
  );
};

export default Hero;
