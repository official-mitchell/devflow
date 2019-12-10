import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
// import { alignments as align } from "../../Constants/alignments"; <<< notice this didn't work
import * as align from "../../Constants/alignments";
import cn from "classnames";
import ExploreCard from "./Card";
import Pagination from "./Paginate";
import CardList from "./CardList";
import exploreArray from "./exploreArray";

import ButtonBlue from "../Utilities/ButtonBlue/ButtonBlue.jsx";

import styles from "./explore.scss";

const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await exploreArray;
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  const res = exploreArray;
  console.log(res);
  setPosts(res);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  console.log(indexOfLastPost);
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log(indexOfFirstPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
          <CardList posts={currentPosts} loading={loading} />
        </Row>
        <Row>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </Row>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Explore;

//  useEffect(() => {
//   const fetchPosts = async () => {
//     setLoading(true);
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     setPosts(res.data);
//     setLoading(false);
//   };

//   fetchPosts();
// }, []);
