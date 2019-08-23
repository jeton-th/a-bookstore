const fetchBooks = books => ({
  type: 'FETCH_BOOKS',
  books,
});

const addBook = book => ({
  type: 'ADD_BOOK',
  book,
});

const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

const updateBookProgress = (id, book) => ({
  type: 'UPDATE_BOOK_PROGRESS',
  id,
  book,
});

export {
  fetchBooks,
  addBook,
  removeBook,
  updateBookProgress,
};
