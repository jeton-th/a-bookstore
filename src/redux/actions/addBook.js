import {
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError,
} from './index';

const addBook = book => (
  (dispatch) => {
    dispatch(fetchBooksPending());
    fetch('https://rails-bookstore-api.herokuapp.com/books', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(book),
    })
      .then(res => res.json())
      .then((res) => {
        if (res.error) throw (res.error);
        dispatch(fetchBooksSuccess(res.books));
        return res.books;
      })
      .catch((error) => {
        dispatch(fetchBooksError(error));
      });
  }
);

export default addBook;
