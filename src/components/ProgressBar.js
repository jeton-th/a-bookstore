import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ chapter }) => (
  <div>
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
        key={chapter}
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
  </div>
);

ProgressBar.propTypes = {
  chapter: PropTypes.number.isRequired,
};

export default ProgressBar;
