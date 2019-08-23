import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateBookProgressInDatabase } from '../redux/actions/thunks';

const chapters = [...Array(20).keys()].map(num => (
  <option key={num + 1}>{`Chapter ${num + 1}`}</option>
));

const ChapterSelector = ({
  id,
  currentChapter,
  updateBookProgressInDatabase,
}) => {
  const [chapter, setChapter] = useState(currentChapter);

  const handleUpdate = () => {
    updateBookProgressInDatabase(id, chapter);
  };

  const handleChange = (e) => {
    setChapter(+e.target.value.split(' ')[1]);
  };

  return (
    <div className="selector-container">
      <p>CURRENT CHAPTER:</p>
      <select
        className="chapter-select"
        value={`Chapter ${chapter}`}
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
