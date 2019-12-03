import React from "react";
import { Col, Row } from "reactstrap";

import ButtonBlue from "../../Utilities/ButtonBlue/ButtonBlue.jsx";

import image from "../../../Images/overviewgroup.png";
import styles from "./overview.scss";

const Overview = () => {
  return (
    <div className="overview_bg">
      <div className="container text-center mt-5 overview_padding">
        <Row>
          <Col className="text-left" xs="12" md="6">
            <p className="overview_section_h">
              Get a roadmap to develop anything
            </p>
            <p className="overview_section_p">
              Don't spend your time decoding code, spend your time coding code.
              Work from frontend functionality to backend.
            </p>
          </Col>
          <Col className="text-left" xs="12" md="6">
            <Col xs="12">
              <img className="overview_img" src={image} />
            </Col>
          </Col>
        </Row>
        <ButtonBlue text="BUILD IT TOO" />
      </div>
    </div>
  );
};

export default Overview;
