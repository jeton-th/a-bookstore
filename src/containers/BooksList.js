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
  width: 1200,
  margin: 'auto',
  fontSize: 22,
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
        <table style={styles} cellSpacing="0">
          <tbody>
            <tr style={{ height: 85, color: '#09f' }}>
              <th>Book ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
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
  pending: false,
  books: [],
};

const mapStateToProps = state => ({
  error: state.error,
  books: state.books.books.filter(book => (
    state.filter === 'All' ? true : book.category === state.filter
  )),
  pending: state.pending,
});

export default connect(
  mapStateToProps,
  { fetchBooks, removeBook, changeFilter },
)(BooksList);
