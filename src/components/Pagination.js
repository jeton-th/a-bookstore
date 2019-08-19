import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ pageCount, clickHandler }) => {
  const pages = [...Array(pageCount).keys()].map(num => (
    <button
      type="button"
      key={num + 1}
      className="page-button"
      onClick={() => clickHandler(num + 1)}
    >
      {num + 1}
    </button>
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
};

export default Pagination;
