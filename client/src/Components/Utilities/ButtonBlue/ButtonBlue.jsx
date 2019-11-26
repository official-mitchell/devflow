import React from "react";

import styles from "./buttonblue.scss";

const ButtonBlue = props => {
  return (
    <div className="buttonblue_div">
      <p className="buttonblue_p">{props.text}</p>
    </div>
  );
};

export default ButtonBlue;
