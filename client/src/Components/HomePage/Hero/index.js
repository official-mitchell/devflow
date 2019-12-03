import React from "react";

import ButtonBlue from "../../Utilities/ButtonBlue/ButtonBlue.jsx";

import styles from "./hero.scss";

const Hero = () => {
  return (
    <div className="hero_bg">
      <div className="container text-center">
        <h2 className="header text-white pt-5">
          Figure out how to build what you want
        </h2>
        <p className="header text-white">
          Figure out how to build what you want
        </p>
        <ButtonBlue text="GET STARTED FOR FREE" />
        <div className="hero_gif_bg">
          <p>Explainer GIF</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
