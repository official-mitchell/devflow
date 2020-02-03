import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import * as align from "../../Constants/alignments";
import cn from "classnames";
import CardList from "./CardList";
import exploreDetailsArray from "./exploreDetailsArray";

function createExploreDetails(exploreDetails) {
  return (
    <ExploreDetails
      key={exploreDetails.id}
      title={exploreDetails.title}
      why={exploreDetails.why}
      what={exploreDetails.what}
      how={exploreDetails.how}
      features={exploreDetails.features}
      resources={exploreDetails.resources}
    />
  );
}

// Where we left off February 3rd
// const ExloreDetailsRoute = ({match}) => {
//   const category = categories.find(category => {
//     return parseInt(match.params.catId) === category.id;
//   });

//   return(
//     <Switch>
//     <Route path={`${match.path}/:catId`} component={Category} />
//   </Switch>
//   )
// }

const ExploreDetails = ({ match }) => {
  return (
    <div>
      <div className="container">
        <h1 className="header pt-5">Library / Tool Name {match.params.id}</h1>
        <hr />
        <Row>
          <Col xs="7">
            <Row>
              <h2>What it Does</h2>
              {/* <p>{props.what}</p> */}
            </Row>
            <Row>
              <h2>Why it Was Made</h2>
              {/* <p>{props.why}</p> */}
            </Row>
          </Col>
          <Col xs="5">
            <Row>
              <div className="card_img_temp">
                <p className="card_img_text pl-1">Sample Image here</p>
              </div>
              <h3>Feature_1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </Row>
            <Row>
              <div className="card_img_temp">
                <p className="card_img_text pl-1">Sample Image here</p>
              </div>
              <h3>Feature_2</h3>
              <p>
                Mi ipsum faucibus vitae aliquet nec. Egestas tellus rutrum
                tellus pellentesque eu tincidunt tortor.
              </p>
            </Row>
          </Col>
        </Row>
        <hr></hr>
        <div>
          <h2>How to Use It</h2>
          <p className="header">Figure out how to build what you want</p>
          <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
            <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
              <div
                className={cn(align.full, align.allCenter, align.noMarginPad)}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
              </div>
            </Col>
            <CardList />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;
