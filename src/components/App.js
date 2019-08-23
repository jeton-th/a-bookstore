import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="main">
    <header>Bookstore CMS</header>
    <Router history={history}>
      <Switch>
        <Route path="/" component={BooksList} />
      </Switch>
    </Router>
  </div>
);


export default App;
