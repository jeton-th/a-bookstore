import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../redux/actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books,
  removeABook,
  filterBooks,
  category,
}) => {
  const handleRemoveBook = (book) => {
    removeABook(book);
  };

  const handleFilterChange = (filter) => {
    filterBooks(filter);
  };

  const allBooks = books.map(book => (
    <Book key={book.id} book={book} clickHandler={handleRemoveBook} />
  ));

  return (
    <div>
      <CategoryFilter filterHandler={handleFilterChange} />
      <table>
        <tbody>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {
            category !== 'All'
              ? allBooks.filter(book => book.props.book.category === category)
              : allBooks
          }
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  removeABook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  category: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeABook: book => (dispatch(removeBook(book))),
  filterBooks: filter => (dispatch(changeFilter(filter))),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
