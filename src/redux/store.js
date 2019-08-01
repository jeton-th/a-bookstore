import { createStore } from 'redux';
import rootReducer from './reducers/index';

const configureStore = () => createStore(rootReducer);

export default configureStore;
