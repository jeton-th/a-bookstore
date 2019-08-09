import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateBookProgressInDatabase from
  '../redux/thunks/updateBookProgressInDatabase';

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
      <div className="selector-container">
        <p>CURRENT CHAPTER:</p>
        <select
          className="chapter-select"
          value={`Chapter ${chapter || currentChapter}`}
          onChange={this.handleChange}
        >
          {chapters}
        </select>
        <br />
        <button
          type="button"
          className="update-button"
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
