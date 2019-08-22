import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ pageCount, clickHandler, history }) => {
  const page = history.location.search.split('=')[1] || 1;

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
      {pages}
    </div>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Pagination;
