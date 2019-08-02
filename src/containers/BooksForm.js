import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions';

export const BOOK_CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  state = {
    title: '',
    category: 'Action',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addBook } = this.props;
    const { title, category } = this.state;
    addBook({ title, category });
    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input name="title" value={title} onChange={this.handleChange} />
        <select name="category" value={category} onChange={this.handleChange}>
          {
            BOOK_CATEGORIES.map(c => (<option key={c}>{c}</option>))
          }
        </select>
        <button type="button" onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BooksForm);
