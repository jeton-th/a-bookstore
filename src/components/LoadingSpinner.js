import React from 'react';
import spinner from '../assets/spinner/spinner.gif';

const LoadingSpinner = () => (
  <div style={{ textAlign: 'center' }}>
    <img style={{ width: 100 }} src={spinner} alt="spinner" />
  </div>
);

export default LoadingSpinner;
