const updateBookProgress = (id, book) => ({
  type: 'UPDATE_BOOK_PROGRESS',
  id,
  book,
});

export default updateBookProgress;
