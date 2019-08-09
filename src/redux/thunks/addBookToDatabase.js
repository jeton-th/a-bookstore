import { postBook } from '../APICalls';
import setErrors from '../actions/error/setErrors';
import addBook from '../actions/books/addBook';

const addBookToDatabase = ({ title, author, category }) => (
  (dispatch) => {
    postBook({ title, author, category })
      .then((response) => {
        dispatch(addBook(response.data));
      })
      .catch((error) => {
        dispatch(setErrors(error.message));
      });
  }
);

export default addBookToDatabase;
