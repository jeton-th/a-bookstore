import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, clickHandler }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button
        type="button"
        onClick={() => clickHandler(book)}
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
