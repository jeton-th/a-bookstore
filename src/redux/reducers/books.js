const INITIAL_STATE = {
  pending: false,
  books: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        pending: false,
        books: action.payload,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    // case 'CREATE_BOOK':
    //   return [
    //     ...state,
    //     { ...action.book, id: generateId() },
    //   ];
    // case 'REMOVE_BOOK':
    //   return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
