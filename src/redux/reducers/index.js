import { combineReducers } from 'redux';
import fetching from './fetching';
import error from './error';
import books from './books';
import filter from './filter';

const rootReducer = combineReducers({
  fetching,
  error,
  books,
  filter,
});

export default rootReducer;
