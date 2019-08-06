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
  const styles = {
    width: '100%',
    borderSpacing: '0 15px',
  };

  const handleRemoveBook = (id) => {
    removeBook(id);
  };

  return (
    <div>
      <CategoryFilter filterHandler={changeFilter} />
      <div style={{ margin: 'auto', maxWidth: 1200, overflowX: 'auto' }}>
        <table style={styles} cellSpacing="0">
          <tbody>
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
