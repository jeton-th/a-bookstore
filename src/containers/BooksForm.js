import React from 'react';
import { connect } from 'react-redux';
import store from '../reducers/index';
import { addBook } from '../actions/index';

const BOOK_CATEGORIES = [
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
    category: '',
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
    store.dispatch(addBook(this.state));
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input onChange={this.handleChange} value={title} />
        <select onChange={this.handleChange} value={category}>
          {
            BOOK_CATEGORIES.map(c => (
              <option
                key={c}
              >
                {c}
              </option>
            ))
          }
        </select>
        <button type="button" onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: () => (dispatch(addBook())),
});

export default connect(null, mapDispatchToProps)(BooksForm);
