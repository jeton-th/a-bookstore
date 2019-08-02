import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../redux/actions';
import Book from '../components/Book';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (id) => {
    removeBook(id);
  };

  const allBooks = books.map(book => (
    <Book key={book.id} book={book} clickHandler={handleRemoveBook} />
  ));

  return (
    <table>
      <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {allBooks}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, { removeBook })(BooksList);
