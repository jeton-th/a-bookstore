import React from 'react';
import spinner from '../assets/spinner/spinner.gif';

const LoadingSpinner = () => (
  <div className="spinner-container" >
    <img src={spinner} alt="spinner" />
  </div>
);

export default LoadingSpinner;
