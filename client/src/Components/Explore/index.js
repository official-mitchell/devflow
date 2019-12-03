import React from "react";
import { Row, Col } from "reactstrap";

import ExploreCard from "./Card";

import ButtonBlue from "../Utilities/ButtonBlue/ButtonBlue.jsx";

import styles from "./explore.scss";

const Explore = () => {
  return (
    <div className="explore_bg">
      <div className="container text-center">
        <h2 className="header pt-5">Figure out how to build what you want</h2>
        <p className="header">Figure out how to build what you want</p>
        <Row className="py-3 text-center justify-content-center">
          <Col xs="6">
            <Row>
              <Col xs="4">
                <ButtonBlue text="See All" />
              </Col>
              <Col xs="4">
                <ButtonBlue text="See Libraries" />
              </Col>
              <Col xs="4">
                <ButtonBlue text="See Tools" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </Row>
      </div>
    </div>
  );
};

export default Explore;
