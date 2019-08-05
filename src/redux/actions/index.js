const addBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});

export { addBook, removeBook, changeFilter };
