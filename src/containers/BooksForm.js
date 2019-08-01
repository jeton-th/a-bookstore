import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions';
import generateId from '../services/generateId';

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
    id: generateId(),
    title: '',
    category: 'Action',
  };

  handleChange = (event) => {
    if (event.target.nodeName === 'INPUT') {
      this.setState({
        title: event.target.value,
      });
    } else {
      this.setState({
        category: event.target.value,
      });
    }
  };

  handleSubmit = () => {
    const { submitNewBook } = this.props;
    submitNewBook(this.state);
    this.setState({
      id: generateId(),
      title: '',
      category: 'Action',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input onChange={this.handleChange} value={title} />
        <select onChange={this.handleChange} value={category}>
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
  submitNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submitNewBook: book => (dispatch(addBook(book))),
});

export default connect(null, mapDispatchToProps)(BooksForm);
