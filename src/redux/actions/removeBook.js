import {
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError,
} from './index';

const removeBook = id => (
  (dispatch) => {
    dispatch(fetchBooksPending());
    fetch(`https://rails-bookstore-api.herokuapp.com/books/${id}`, {
      method: 'DELETE',
    })
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

export default removeBook;
