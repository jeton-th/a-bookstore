import { deleteBook } from '../APICalls';
import setErrors from '../actions/error/setErrors';
import removeBook from '../actions/books/removeBook';

const removeBookFromDatabase = id => (
  (dispatch) => {
    deleteBook(id)
      .catch((error) => {
        dispatch(setErrors(error.message));
      });
    dispatch(removeBook(id));
  }
);

export default removeBookFromDatabase;
