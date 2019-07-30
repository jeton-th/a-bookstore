import React from 'react';

const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default class BooksForm extends React.Component {
  render() {
    return (
      <form>
        <input />
        <select>
          {BOOK_CATEGORIES.map(category => (<option>{category}</option>))}
        </select>
        <button type="button">Add</button>
      </form>
    );
  }
}
