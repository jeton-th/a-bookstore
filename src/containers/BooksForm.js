import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addBookToDatabase from '../redux/thunks/addBookToDatabase';
import BOOK_CATEGORIES from '../bookCategories';

class BooksForm extends React.Component {
  state = {
    title: '',
    author: '',
    category: 'Action',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addBookToDatabase } = this.props;
    const { title, author, category } = this.state;
    addBookToDatabase({ title, author, category });
    this.setState({
      title: '',
      author: '',
      category: 'Action',
    });
  }

  render() {
    const { title, author, category } = this.state;
    return (
      <form className="add-book">
        ADD NEW BOOK
        <br />
        <input
          name="title"
          value={title}
          className="text-input"
          placeholder="Book title"
          onChange={this.handleChange}
        />
        <input
          name="author"
          value={author}
          className="text-input"
          placeholder="Book author"
          onChange={this.handleChange}
        />
        <select
          name="category"
          value={category}
          className="select-category"
          onChange={this.handleChange}
        >
          {
            BOOK_CATEGORIES.map(c => (<option key={c}>{c}</option>))
          }
        </select>
        <button
          className="button"
          type="button"
          onClick={this.handleSubmit}
        >
          ADD BOOK
        </button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBookToDatabase: PropTypes.func.isRequired,
};

export default connect(null, { addBookToDatabase })(BooksForm);
