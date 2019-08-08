import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/actions';
import removeBook from '../redux/actions/removeBook';
import fetchBooks from '../redux/actions/fetchBooks';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import LoadingSpinner from '../components/LoadingSpinner';

const styles = {
  width: '100%',
  borderSpacing: '0 15px',
};

class BooksList extends React.Component {
  componentWillMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  handleRemoveBook = (id) => {
    const { removeBook } = this.props;
    removeBook(id);
  };

  shouldComponentRender = () => {
    const { pending } = this.props;
    return !pending;
  }

  render() {
    const {
      books,
      error,
      changeFilter,
    } = this.props;

    if (!this.shouldComponentRender()) return <LoadingSpinner />;

    return (
      <div>
        <CategoryFilter filterHandler={changeFilter} />
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <div style={{ margin: 'auto', maxWidth: 1200, overflowX: 'auto' }}>
          <table style={styles} cellSpacing="0">
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
  fetchBooks: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  error: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  error: null,
  books: [],
  pending: false,
};

const mapStateToProps = state => ({
  error: state.books.error,
  books: state.books.books.filter(book => (
    state.filter === 'All' ? true : book.category === state.filter
  )),
  pending: state.books.pending,
});

export default connect(
  mapStateToProps,
  { fetchBooks, removeBook, changeFilter },
)(BooksList);
