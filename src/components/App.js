import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="main">
    <header>
      <h1>A-bookstore</h1>
      <p>
        <span>Your favorite books that begin with </span>
        <q>A</q>
      </p>
    </header>
    <Router history={history}>
      <Switch>
        <Route path="/" component={BooksList} />
      </Switch>
    </Router>
  </div>
);


export default App;
