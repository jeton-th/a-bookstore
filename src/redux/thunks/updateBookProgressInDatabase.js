import { updateBook } from '../APICalls';
import setErrors from '../actions/error/setErrors';
import updateBookProgress from '../actions/books/updateBookProgress';

const updateBookProgressInDatabase = (id, { chapter }) => (
  (dispatch) => {
    updateBook(id, { chapter })
      .then((response) => {
        dispatch(updateBookProgress(id, response.data));
      })
      .catch((error) => {
        dispatch(setErrors(error.message));
      });
  }
);

export default updateBookProgressInDatabase;
