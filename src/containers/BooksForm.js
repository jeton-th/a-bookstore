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

const styles = {
  width: 1200,
  margin: '29px auto',
  paddingTop: 29,
  borderTop: '1px solid #ddd',
  fontSize: 20,
};

const inputStyles = {
  width: 664,
  height: 45,
  borderRadius: 4,
  border: '1px solid #eee',
  fontSize: 22,
  marginTop: 29,
  marginRight: 34,
};

const selectStyles = {
  width: 285,
  height: 45,
  borderRadius: 4,
  border: '1px solid #eee',
  backgroundColor: '#fff',
  fontSize: 16,
};

const buttonStyles = {
  width: 184,
  height: 45,
  border: 'none',
  borderRadius: 4,
  color: '#fff',
  backgroundColor: '#09f',
  fontSize: 16,
  marginLeft: 30,
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
