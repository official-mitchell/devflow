import React from "react";
import { Row, Col } from "reactstrap";
import cn from "classnames";
import { alignments as align } from "../../../Constants/alignments";

import Card from "../Card";
import detailsArray from "../detailsArray";

function createCard(explore) {
  return (
    <Card
      key={explore.id}
      title={explore.title}
      description={explore.description}
    />
  );
}

const CardDetailList = loading => {
  //   if (loading) {
  //     return <h2>Loading...</h2>;
  //   }

  return <React.Fragment>{detailsArray.map(createCard)}</React.Fragment>;
};

export default CardDetailList;

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);
