import React from 'react';
import PropTypes from 'prop-types';
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
      <svg className="circular-chart" viewBox="0 0 36 36">
        <path
          x="50%"
          y="50%"
          className="circle-shadow"
          stroke="100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          x="50%"
          y="50%"
          className="circle"
          strokeDasharray={`${chapter * 5}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <p>{`${chapter * 5}% completed`}</p>
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
