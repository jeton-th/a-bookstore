import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeABook }) => {
  const handleRemoveBook = (book) => {
    removeABook(book);
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
  removeABook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  removeABook: book => (dispatch(removeBook(book))),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
