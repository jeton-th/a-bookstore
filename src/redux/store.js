import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default configureStore;
