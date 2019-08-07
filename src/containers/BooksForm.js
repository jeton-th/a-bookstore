import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addBook from '../redux/actions/addBook';
import BOOK_CATEGORIES from '../bookCategories';
import '../css/booksForm.css';

const styles = {
  maxWidth: 1200,
  margin: '29px auto',
  padding: 20,
  borderTop: '1px solid #ddd',
  fontSize: 20,
};

const inputStyles = {
  width: '50%',
  height: 45,
  borderRadius: 4,
  border: '1px solid #eee',
  fontSize: 22,
  marginTop: 29,
  marginRight: '3%',
};

const selectStyles = {
  width: '30%',
  height: 45,
  borderRadius: 4,
  border: '1px solid #eee',
  backgroundColor: '#fff',
  fontSize: 16,
  marginRight: '3%',
};

const buttonStyles = {
  width: '10%',
  height: 45,
  border: 'none',
  borderRadius: 4,
  color: '#fff',
  backgroundColor: '#09f',
  fontSize: 16,
};

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
      <form style={styles}>
        ADD NEW BOOK
        <br />
        <input
          name="title"
          value={title}
          style={inputStyles}
          placeholder="Book title"
          onChange={this.handleChange}
        />
        <select
          name="category"
          value={category}
          style={selectStyles}
          onChange={this.handleChange}
        >
          {
            BOOK_CATEGORIES.map(c => (<option key={c}>{c}</option>))
          }
        </select>
        <button
          style={buttonStyles}
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
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BooksForm);
