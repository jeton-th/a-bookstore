import fetchData from '../utils/api';
import fetching from './fetching';
import setErrors from './setErrors';
import {
  fetchBooks,
  addBook,
  removeBook,
  updateBookProgress,
} from './books';

export const fetchBooksFromDatabase = page => async (dispatch) => {
  const path = page ? `/v1/books.json?page=${page}` : '/v1/books.json';
  dispatch(fetching(true));
  try {
    const res = await fetchData('get', path);
    const books = res.data;
    dispatch(fetching(false));
    dispatch(fetchBooks(books));
    return books;
  } catch (err) {
    dispatch(setErrors(err.message));
  }
  return false;
};

export const addBookToDatabase = bookData => async (dispatch) => {
  const path = '/v1/books.json';
  try {
    const res = await fetchData('post', path, bookData);
    if (res.data.error) {
      const error = JSON.stringify(res.data.error)
        .replace(/"|\[|\]|\{|\}/g, ' ')
        .replace(/\s:/g, ':')
        .replace(/,/g, '-');
      dispatch(setErrors(error));
    } else {
      const book = res.data;
      dispatch(addBook(book));
      return book;
    }
  } catch (err) {
    dispatch(setErrors(err.message));
  }
  return false;
};


export const removeBookFromDatabase = id => async (dispatch) => {
  const path = `/v1/books/${id}`;
  try {
    const res = await fetchData('delete', path);
    dispatch(removeBook(id));
    return res;
  } catch (err) {
    dispatch(setErrors(err.message));
  }
  return false;
};


export const updateBookProgressInDatabase = (id, chapter) => (
  async (dispatch) => {
    const path = `/v1/books/${id}`;
    try {
      const res = await fetchData('put', path, { chapter });
      if (res.data.error) {
        const error = JSON.stringify(res.data.error)
          .replace(/"|\[|\]|\{|\}/g, ' ')
          .replace(/\s:/g, ':')
          .replace(/,/g, '-');
        dispatch(setErrors(error));
      } else {
        const book = res.data;
        dispatch(updateBookProgress(id, book));
        return book;
      }
    } catch (err) {
      dispatch(setErrors(err.message));
    }
    return false;
  }
);
