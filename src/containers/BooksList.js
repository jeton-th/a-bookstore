import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  const allBooks = books.map(book => <Book key={book.id} book={book} />);

  return (
    <table>
      <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        { allBooks }
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, null)(BooksList);
