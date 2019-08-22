import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchBooksFromDatabase,
  removeBookFromDatabase,
} from '../redux/actions/thunks';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';

const BooksList = ({
  fetching,
  error,
  books,
  fetchBooksFromDatabase,
  removeBookFromDatabase,
}) => {
  const page = +window.location.href.split('=')[1] || 1;

  useEffect(() => {
    fetchBooksFromDatabase(page);
  }, [fetchBooksFromDatabase, page]);

  if (fetching) return <LoadingSpinner />;

  return (
    <div>
      <CategoryFilter />
      {
        error && <p className="error">{error}</p>
      }
      <div className="table-container">
        <table>
          <tbody>
            {
              books
                .filter(book => typeof book === 'object')
                .map(book => (
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
      {
        books.length > 0
        && (
          <Pagination
            pageCount={books[books.length - 1]}
            clickHandler={fetchBooksFromDatabase}
          />
        )
      }
    </div>
  );
};


BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  fetchBooksFromDatabase: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  removeBookFromDatabase: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  error: null,
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
