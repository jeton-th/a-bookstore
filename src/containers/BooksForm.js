import React from 'react';

const BOOK_CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <input />
    <select>
      {
        BOOK_CATEGORIES.map(category => (
          <option
            key={category}
          >
            {category}
          </option>
        ))
      }
    </select>
    <button type="button">Add</button>
  </form>
);

export default BooksForm;
