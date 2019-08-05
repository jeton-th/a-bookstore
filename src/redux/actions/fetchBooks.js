import {
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError,
} from './index';

const fetchBooks = () => (
  (dispatch) => {
    dispatch(fetchBooksPending());
    fetch('https://rails-bookstore-api.herokuapp.com/books')
      .then(res => res.json())
      .then((res) => {
        if (res.error) throw (res.error);
        dispatch(fetchBooksSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchBooksError(error));
      });
  }
);

export default fetchBooks;
