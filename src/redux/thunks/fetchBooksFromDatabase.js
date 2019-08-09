import { getBooks } from '../APICalls';
import fetching from '../actions/fetching/fetching';
import setErrors from '../actions/error/setErrors';
import fetchBooks from '../actions/books/fetchBooks';

const fetchBooksFromDatabase = () => (
  (dispatch) => {
    dispatch(fetching(true));
    getBooks()
      .then((response) => {
        dispatch(fetching(false));
        dispatch(fetchBooks(response.data));
      })
      .catch((error) => {
        dispatch(fetching(false));
        dispatch(setErrors(error.message));
      });
  }
);

export default fetchBooksFromDatabase;
