import generateId from '../../services/generateId';

const INITIAL_STATE = [
  {
    id: generateId(),
    title: 'The count of Montecristo',
    category: 'Action',
  },
  {
    id: generateId(),
    title: 'Brave New World',
    category: 'Sci-Fi',
  },
  {
    id: generateId(),
    title: 'The Lion King',
    category: 'Kids',
  },
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.book,
      ];
    case 'REMOVE_BOOK':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
