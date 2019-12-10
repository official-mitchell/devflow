import React from "react";
import { Row, Col } from "reactstrap";
import cn from "classnames";
import { alignments as align } from "../../../Constants/alignments";

import Card from "../Card";
import exploreArray from "../exploreArray";

function createCard(explore) {
  return (
    <Card
      key={explore.id}
      title={explore.title}
      description={explore.description}
    />
  );
}

const CardList = loading => {
  //   if (loading) {
  //     return <h2>Loading...</h2>;
  //   }

  return <React.Fragment>{exploreArray.map(createCard)}</React.Fragment>;
};

export default CardList;

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);
