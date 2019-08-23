export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return action.books;
    case 'ADD_BOOK':
      return [
        action.book,
        ...state,
      ];
    case 'REMOVE_BOOK':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_BOOK_PROGRESS':
      return state.map((book) => {
        if (book.id === action.id) return action.book;
        return book;
      });
    default:
      return state;
  }
};
