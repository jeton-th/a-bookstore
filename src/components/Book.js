import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  height: 170,
  borderRadius: 4,
  border: '1px solid #eee',
  backgroundColor: '#fff',
  textAlign: 'center',
};

const buttonStyles = {
  padding: 10,
  backgroundColor: '#09f',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
};

const Book = ({ book: { title, category, id }, clickHandler }) => (
  <tr style={styles}>
    <td>{id}</td>
    <td style={{ fontSize: 24, fontWeight: 700 }}>{title}</td>
    <td>{category}</td>
    <td>
      <button
        type="button"
        style={buttonStyles}
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
