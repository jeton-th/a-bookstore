import {
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError,
} from './index';

const updateBookProgress = (id, data) => (
  (dispatch) => {
    dispatch(fetchBooksPending());
    fetch(`https://rails-bookstore-api.herokuapp.com/books/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(data),
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

export default updateBookProgress;
