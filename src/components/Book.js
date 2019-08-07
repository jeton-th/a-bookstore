import React from 'react';
import PropTypes from 'prop-types';
import ChapterSelector from './ChapterSelector';
import '../css/book.css';

const styles = {
  height: 120,
  borderRadius: 4,
  border: '1px solid #eee',
  backgroundColor: '#fff',
};

const removeButton = {
  padding: '10px 5px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#09f',
};

class Book extends React.Component {
  state = {
    progress: 0,
  }

  updateProgress = (chapter) => {
    this.setState({ progress: chapter * 5 });
  };

  render() {
    const {
      book: {
        title, author, category, id,
      },
      clickHandler,
    } = this.props;

    const { progress } = this.state;

    return (
      <tr style={styles}>
        <td style={{ padding: 15 }}>
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <button
            type="button"
            style={removeButton}
            onClick={() => clickHandler(id)}
          >
            Remove book
          </button>
        </td>

        <td className="middleCol">
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
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <p>{`${progress}% completed`}</p>
        </td>

        <td style={{ padding: '0 15px' }}>
          <ChapterSelector updateHandler={this.updateProgress} />
        </td>
      </tr>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
