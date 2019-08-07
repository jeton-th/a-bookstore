import React from 'react';
import PropTypes from 'prop-types';

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
    chapter: 1,
  }

  handleChange = (e) => {
    const chapter = e.target.value.split(' ')[1];
    this.setState({ chapter: +chapter });
  };

  render() {
    const { chapter } = this.state;
    const { updateHandler } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Current chapter</p>
        <select
          value={`Chapter ${chapter}`}
          onChange={this.handleChange}
        >
          {chapters}
        </select>
        <br />
        <button
          type="button"
          style={buttonStyles}
          onClick={() => updateHandler(chapter)}
        >
          UPDATE PROGRESS
        </button>
      </div>
    );
  }
}

ChapterSelector.propTypes = {
  updateHandler: PropTypes.func.isRequired,
};

export default ChapterSelector;
