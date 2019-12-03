import React from "react";
import { Row, Col } from "reactstrap";
import cn from "classnames";

import ButtonBlue from "../../Utilities/ButtonBlue/ButtonBlue.jsx";

import styles from "./explorecard.scss";

const ExploreCard = () => {
  return (
    <Col className="my-2" xs="6" sm="4" md="3">
      <div className={cn("card_wrapper py-1 text-left")}>
        <div className="container">
          <div className="card_img_temp">
            <p className="card_img_text pl-1">Sample Image here</p>
          </div>
          <p className="text-left">Title of the card</p>
          <hr />
          <p>Here's a paragraph describing the object.</p>
          <div className="card_link_right">
            <a href="/">
              <ButtonBlue text="More" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ExploreCard;
