import generateId from '../../services/generateId';

const INITIAL_STATE = [
  {
    id: generateId(),
    title: 'The count of Montecristo',
    author: 'Alexandre Dumas',
    category: 'Action',
  },
  {
    id: generateId(),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    category: 'Sci-Fi',
  },
  {
    id: generateId(),
    title: 'The Lion King',
    author: 'Disney',
    category: 'Kids',
  },
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        { ...action.book, id: generateId() },
      ];
    case 'REMOVE_BOOK':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
