import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateBookProgressInDatabase } from '../redux/actions/thunks';

let chapters = [...Array(20).keys()].map(x => x + 1);

chapters = chapters.map(num => (
  <option key={num}>{`Chapter ${num}`}</option>
));

const ChapterSelector = ({
  id,
  currentChapter,
  updateBookProgressInDatabase,
}) => {
  const initialState = { chapter: null };

  const [state, setState] = useState(initialState);

  const { chapter } = state;

  const handleUpdate = () => {
    updateBookProgressInDatabase(id, { chapter: chapter || currentChapter });
  };

  const handleChange = (e) => {
    const chapter = +e.target.value.split(' ')[1];
    setState({ chapter });
  };

  return (
    <div className="selector-container">
      <p>CURRENT CHAPTER:</p>
      <select
        className="chapter-select"
        value={`Chapter ${chapter || currentChapter}`}
        onChange={handleChange}
      >
        {chapters}
      </select>
      <br />
      <button
        type="button"
        className="update-button"
        onClick={handleUpdate}
      >
        UPDATE PROGRESS
      </button>
    </div>
  );
};

ChapterSelector.propTypes = {
  currentChapter: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  updateBookProgressInDatabase: PropTypes.func.isRequired,
};

export default connect(null, { updateBookProgressInDatabase })(ChapterSelector);
