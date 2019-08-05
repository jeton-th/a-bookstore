import {
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError,
} from 'actions';

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchBooksPending());
    fetch('https://exampleapi.com/products')
      .then(res => res.json())
      .then((res) => {
        if (res.error) throw (res.error);
        dispatch(fetchBooksSuccess(res.products));
        return res.products;
      })
      .catch((error) => {
        dispatch(fetchBooksError(error));
      });
  };
}

export default fetchProducts;
