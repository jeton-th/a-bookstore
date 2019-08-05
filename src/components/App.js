import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const styles = {
  width: 1600,
  backgroundColor: '#f5f6fa',
  margin: 'auto',
  paddingTop: 120,
  fontFamily: 'Arial',
};

const headerStyles = {
  width: 1400,
  height: 95,
  backgroundColor: '#fff',
  color: '#09f',
  margin: 'auto',
  padding: '29px 100px',
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
