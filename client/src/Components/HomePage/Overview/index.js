import React from "react";
import { Col, Row } from "reactstrap";

import ButtonBlue from "../../Utilities/ButtonBlue/ButtonBlue.jsx";

import styles from "./overview.scss";

const Overview = () => {
  return (
    <div className="overview_bg">
      <div className="container text-center mt-5">
        <Row>
          <Col className="text-left" xs="6">
            <p className="overview_section_h">
              Get a roadmap to develop anything
            </p>
            <p className="overview_section_p">
              Don't spend your time decoding code, spend your time coding code.
              Work from frontend functionality to backend.
            </p>
          </Col>
          <Col className="text-left" xs="6">
            <h2 className="header pt-5">
              Figure out how to build what you want
            </h2>
            <p className="header">Figure out how to build what you want</p>
          </Col>
        </Row>
        <ButtonBlue text="Get Started" />
      </div>
    </div>
  );
};

export default Overview;
