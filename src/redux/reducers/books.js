const INITIAL_STATE = {
  pending: false,
  books: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        pending: false,
        books: action.books,
      };
    case 'FETCH_BOOKS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
