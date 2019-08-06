import React from 'react';
import PropTypes from 'prop-types';
import '../css/book.css';

const styles = {
  height: 120,
  borderRadius: 4,
  border: '1px solid #eee',
  backgroundColor: '#fff',
};

const buttonStyles = {
  padding: 10,
  backgroundColor: '#09f',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
};

const removeButton = {
  padding: '10px 5px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#09f',
};

const Book = ({
  book: {
    title, author, category, id,
  },
  clickHandler,
}) => (
  <tr style={styles}>
    <td style={{ padding: 20 }}>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        type="button"
        style={removeButton}
        onClick={() => clickHandler(id)}
      >
        Remove book
      </button>
    </td>

    <td>
      64%
    </td>

    <td style={{ padding: '0 20px' }}>
      <p>Current chapter</p>
      <p>Chapter Nth</p>
      <button type="button" style={buttonStyles}>UPDATE PROGRESS</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
