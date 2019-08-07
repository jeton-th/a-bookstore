import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const styles = {
  maxWidth: 1600,
  backgroundColor: '#f5f6fa',
  margin: 'auto',
  paddingTop: 20,
  fontFamily: 'Arial',
};

const headerStyles = {
  maxWidth: 1400,
  backgroundColor: '#fff',
  color: '#09f',
  margin: 'auto',
  padding: 29,
  boxSizing: 'border-box',
  fontSize: 30,
};

const App = () => (
  <div style={styles}>
    <header style={headerStyles}>Bookstore CMS</header>
    <BooksList />
    <BooksForm />
  </div>
);


export default App;
