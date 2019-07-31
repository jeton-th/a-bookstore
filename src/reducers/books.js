const INITIAL_STATE = [
  {
    id: Math.random(),
    title: 'The count of Montecristo',
    category: 'Action',
  },
  {
    id: Math.random(),
    title: 'Brave New World',
    category: 'Sci-Fi',
  },
  {
    id: Math.random(),
    title: 'The Lion King',
    category: 'Kids',
  },
];

const createBooks = (state = INITIAL_STATE, action) => {
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
