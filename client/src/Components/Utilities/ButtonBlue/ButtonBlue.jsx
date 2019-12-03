import React from "react";

// import { allCenter, vCenter as align } from "../../../Constants/alignments";
import cn from "classnames";
import styles from "./buttonblue.scss";

const ButtonBlue = props => {
  return (
    <div className="buttonblue_div">
      <div className="buttonblue_internal">
        <p className="buttonblue_p">{props.text}</p>
      </div>
    </div>
  );
};

export default ButtonBlue;
