import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import ChapterSelector from './ChapterSelector';

const Book = ({
  book: {
    id, title, author, category, chapter,
  },
  clickHandler,
}) => (
  <tr>
    <td>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        type="button"
        className="remove-button"
        onClick={() => clickHandler(id)}
      >
        Remove book
      </button>
    </td>

    <td>
      <ProgressBar chapter={chapter} />
    </td>

    <td>
      <ChapterSelector currentChapter={chapter} id={id} />
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
