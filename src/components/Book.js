import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { title, category, id } }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
