import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { title, category, id }, clickHandler }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button
        type="button"
        onClick={() => clickHandler({ title, category, id })}
      >
        Remove book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
