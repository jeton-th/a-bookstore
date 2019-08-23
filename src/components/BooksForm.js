import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBookToDatabase } from '../redux/actions/thunks';
import setErrors from '../redux/actions/setErrors';
import BOOK_CATEGORIES from '../bookCategories';

const BooksForm = ({ addBookToDatabase, setErrors }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'author':
        setAuthor(e.target.value);
        break;
      default:
        setCategory(e.target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookToDatabase({ title, author, category });
    setTitle('');
    setAuthor('');
    setCategory('Action');
    setErrors(null);
  };

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
  setErrors: PropTypes.func.isRequired,
};

export default connect(null, { addBookToDatabase, setErrors })(BooksForm);
