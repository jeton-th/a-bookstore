import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchBooksFromDatabase,
  removeBookFromDatabase,
} from '../redux/actions/thunks';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import LoadingSpinner from '../components/LoadingSpinner';

const BooksList = ({
  fetching,
  error,
  books,
  fetchBooksFromDatabase,
  removeBookFromDatabase,
}) => {
  useEffect(() => {
    fetchBooksFromDatabase();
  }, [fetchBooksFromDatabase]);

  const shouldComponentRender = () => !fetching;

  if (!shouldComponentRender()) return <LoadingSpinner />;

  return (
    <div>
      <CategoryFilter />
      {
        error && <p className="error">{error}</p>
      }
      <div className="table-container">
        <table cellSpacing="0">
          <tbody>
            {
              books.map(book => (
                <Book
                  key={book.id}
                  book={book}
                  clickHandler={removeBookFromDatabase}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};


BooksList.propTypes = {
  books: PropTypes.array,
  fetchBooksFromDatabase: PropTypes.func.isRequired,
  fetching: PropTypes.bool,
  error: PropTypes.string,
  removeBookFromDatabase: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  error: null,
  books: [],
  fetching: false,
};

const mapStateToProps = state => ({
  fetching: state.fetching,
  error: state.error,
  books: state.books.filter(book => (
    state.filter === 'All' ? true : book.category === state.filter
  )),
});

export default connect(
  mapStateToProps,
  { fetchBooksFromDatabase, removeBookFromDatabase },
)(BooksList);
