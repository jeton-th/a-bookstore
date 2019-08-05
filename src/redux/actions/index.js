const fetchBooksPending = () => ({
  type: 'FETCH_BOOKS_PENDING',
});

const fetchBooksSuccess = books => ({
  type: 'FETCH_BOOKS_SUCCESS',
  books,
});

const fetchBooksError = error => ({
  type: 'FETCH_BOOKS_ERROR',
  error,
});

const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});

export {
  changeFilter,
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError,
};
