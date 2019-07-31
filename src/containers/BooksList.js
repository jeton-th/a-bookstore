import React from 'react';
import Book from '../components/Book';
import store from '../reducers/index';

const BooksList = () => {
  const { books } = store.getState();
  const allBooks = books.map(book => <Book key={book.id} book={book} />);

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

export default BooksList;
