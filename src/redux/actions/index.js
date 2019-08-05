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

// const addBook = book => ({
//   type: 'CREATE_BOOK',
//   book,
// });

// const removeBook = id => ({
//   type: 'REMOVE_BOOK',
//   id,
// });

const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});

export {
  // addBook,
  // removeBook,
  changeFilter,
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError,
};
