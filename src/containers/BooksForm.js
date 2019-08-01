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
      <form style={styles}>
        ADD NEW BOOK
        <br />
        <input style={inputStyles} onChange={this.handleChange} value={title} />
        <select
          style={selectStyles}
          onChange={this.handleChange}
          value={category}
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
  submitNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submitNewBook: book => (dispatch(addBook(book))),
});

export default connect(null, mapDispatchToProps)(BooksForm);
