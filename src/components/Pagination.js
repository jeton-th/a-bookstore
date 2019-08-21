import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ pageCount, clickHandler }) => {
  const [page, setPage] = useState(1);

  const handleClick = (num) => {
    setPage(num);
    clickHandler(num);
  };

  const pages = [...Array(pageCount).keys()].map(num => (
    <Link
      key={num + 1}
      to={`/${num + 1}`}
    >
      <button
        type="button"
        data-key={num + 1}
        className={`page-button ${page === num + 1 ? 'selected' : ''}`}
        onClick={() => handleClick(num + 1)}
      >
        {num + 1}
      </button>
    </Link>
  ));

  return (
    <div className="page-container">
      <span>Page </span>
      <Router>
        {pages}
      </Router>
    </div>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Pagination;
