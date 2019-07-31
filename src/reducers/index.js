import { combineReducers, createStore } from 'redux';
import createBooks from './books';

const rootReducer = combineReducers({
  books: createBooks,
});

const store = createStore(rootReducer);

export default store;
