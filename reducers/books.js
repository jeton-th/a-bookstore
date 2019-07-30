const createBooks = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.book,
      ];
    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      ];
    default:
      return state;
  }
};

export default createBooks;
