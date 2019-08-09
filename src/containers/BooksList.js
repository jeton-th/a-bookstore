import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import removeBookFromDatabase from '../redux/thunks/removeBookFromDatabase';
import fetchBooksFromDatabase from '../redux/thunks/fetchBooksFromDatabase';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import LoadingSpinner from '../components/LoadingSpinner';

class BooksList extends React.Component {
  componentDidMount() {
    const { fetchBooksFromDatabase } = this.props;
    fetchBooksFromDatabase();
  }

  handleRemoveBook = (id) => {
    const { removeBookFromDatabase } = this.props;
    removeBookFromDatabase(id);
  };

  shouldComponentRender = () => {
    const { fetching } = this.props;
    return !fetching;
  }

  render() {
    const {
      books,
      error,
    } = this.props;

    if (!this.shouldComponentRender()) return <LoadingSpinner />;

    return (
      <div>
        <CategoryFilter />
        {
          error && (
            <p className="error">
              {error}
            </p>
          )
        }
        <div className="table-container">
          <table cellSpacing="0">
            <tbody>
              {
                books.map(book => (
                  <Book
                    key={book.id}
                    book={book}
                    clickHandler={this.handleRemoveBook}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

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
