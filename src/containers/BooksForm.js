import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBookToDatabase } from '../redux/actions/thunks';
import BOOK_CATEGORIES from '../bookCategories';

const BooksForm = ({ addBookToDatabase }) => {
  const initialState = {
    title: '',
    author: '',
    category: 'Action',
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const updatedValues = {
      [e.target.name]: e.target.value,
    };
    setState(prevState => ({ ...prevState, ...updatedValues }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookToDatabase(state);
    setState(initialState);
  };

  const { title, author, category } = state;

  return (
    <form className="add-book">
      ADD NEW BOOK
      <br />
      <input
        name="title"
        value={title}
        className="text-input"
        placeholder="Book title"
        onChange={handleChange}
      />
      <input
        name="author"
        value={author}
        className="text-input"
        placeholder="Book author"
        onChange={handleChange}
      />
      <select
        name="category"
        value={category}
        className="select-category"
        onChange={handleChange}
      >
        {
          BOOK_CATEGORIES.map(c => (<option key={c}>{c}</option>))
        }
      </select>
      <button
        className="button"
        type="button"
        onClick={handleSubmit}
      >
        ADD BOOK
      </button>
    </form>
  );
};

BooksForm.propTypes = {
  addBookToDatabase: PropTypes.func.isRequired,
};

export default connect(null, { addBookToDatabase })(BooksForm);
