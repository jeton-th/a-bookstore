import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ pageCount, clickHandler }) => {
  const page = window.location.href.split('=')[1] || 1;

  const pages = [...Array(pageCount).keys()].map(num => (
    <Link
      key={num + 1}
      to={`/books?page=${num + 1}`}
    >
      <button
        type="button"
        className={`page-button ${+page === num + 1 && 'selected'}`}
        onClick={() => clickHandler(num + 1)}
      >
        {num + 1}
      </button>
    </Link>
  ));

  return (
    <div className="page-container">
      <span>Page </span>
      <Router>
        <Redirect exact from="/" to={`/books?page=${page}`} />
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
