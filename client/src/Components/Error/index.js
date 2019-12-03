import React from "react";

import ButtonBlue from "../Utilities/ButtonBlue/ButtonBlue.jsx";

import styles from "../HomePage/Hero/hero.scss";

const Error = props => {
  console.log(props);
  return (
    <div className="hero_bg">
      <div className="container text-center">
        <h2 className="header text-white pt-5">ERROR</h2>
        <a href="/">
          <ButtonBlue text="GO BACK HOME" />
        </a>
      </div>
      //{" "}
    </div>
  );
};

export default Error;
