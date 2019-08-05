import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../redux/actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books,
  removeBook,
  changeFilter,
}) => {
  const handleRemoveBook = (id) => {
    removeBook(id);
  };

  return (
    <div>
      <CategoryFilter filterHandler={changeFilter} />
      <table>
        <tbody>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {
            books.map(book => (
              <Book
                key={book.id}
                book={book}
                clickHandler={handleRemoveBook}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books.filter(book => (
    state.filter === 'All' ? true : book.category === state.filter
  )),
});

export default connect(
  mapStateToProps,
  { removeBook, changeFilter },
)(BooksList);
