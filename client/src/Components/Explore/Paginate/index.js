import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  //   Replace with Reacstrap paginate buttons

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

{
  /* <ul className="pagination-lg">
  <li className="page-item">
    <a className="page-link">1</a>
  </li>
  <li className="page-item">
    <a className="page-link">2</a>
  </li>
</ul>; */
}
