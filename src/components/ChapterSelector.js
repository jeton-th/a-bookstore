import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateBookProgress from '../redux/actions/updateBookProgress';

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
    progress: 0,
  }

  handleUpdate = () => {
    const { id, updateBookProgress } = this.props;
    const { chapter, progress } = this.state;
    updateBookProgress(id, { chapter, progress });
    this.setState({ chapter: null, progress: 0 });
  };

  handleChange = (e) => {
    const chapter = e.target.value.split(' ')[1];
    this.setState({
      chapter: +chapter,
      progress: +chapter * 5,
    });
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
  updateBookProgress: PropTypes.func.isRequired,
};

export default connect(null, { updateBookProgress })(ChapterSelector);
