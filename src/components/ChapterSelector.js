import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateBookProgressInDatabase from
  '../redux/thunks/updateBookProgressInDatabase';

const styles = {
  backgroundColor: '#fff',
  borderRadius: 4,
  border: '1px solid #ddd',
};

const buttonStyles = {
  padding: '5px 10px',
  backgroundColor: '#09f',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  marginTop: 10,
  cursor: 'pointer',
};

let chapters = [...Array(20).keys()].map(x => x + 1);

chapters = chapters.map(num => (
  <option key={num}>{`Chapter ${num}`}</option>
));

class ChapterSelector extends React.Component {
  state = {
    chapter: null,
  }

  handleUpdate = () => {
    const { id, currentChapter, updateBookProgressInDatabase } = this.props;
    const { chapter } = this.state;
    updateBookProgressInDatabase(id, { chapter: chapter || currentChapter });
  };

  handleChange = (e) => {
    const chapter = +e.target.value.split(' ')[1];
    this.setState({ chapter });
  };

  render() {
    const { chapter } = this.state;
    const { currentChapter } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <p>CURRENT CHAPTER:</p>
        <select
          style={styles}
          value={`Chapter ${chapter || currentChapter}`}
          onChange={this.handleChange}
        >
          {chapters}
        </select>
        <br />
        <button
          type="button"
          style={buttonStyles}
          onClick={this.handleUpdate}
        >
          UPDATE PROGRESS
        </button>
      </div>
    );
  }
}

ChapterSelector.propTypes = {
  currentChapter: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  updateBookProgressInDatabase: PropTypes.func.isRequired,
};

// ChapterSelector.defaultProps = {
//   currentChapter: null,
// };

export default connect(null, { updateBookProgressInDatabase })(ChapterSelector);
