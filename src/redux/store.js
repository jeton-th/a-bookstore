import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const middleWares = process.env.NODE_ENV === 'development'
  ? composeEnhancers(applyMiddleware(thunk))
  : compose(applyMiddleware(thunk));

export default () => createStore(
  rootReducer,
  middleWares,
);
