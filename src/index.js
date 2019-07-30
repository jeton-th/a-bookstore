import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const state = [
  {
    id: Math.random(),
    title: 'The count of Montecristo',
    category: 'Action',
  },
  {
    id: Math.random(),
    title: 'Brave New World',
    category: 'Sci-Fi',
  },
  {
    id: Math.random(),
    title: 'The Lion King',
    category: 'Kids',
  },
];

ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
