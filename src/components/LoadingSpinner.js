import React from 'react';
import spinner from '../assets/spinner/spinner.gif';

const LoadingSpinner = () => (
  <div style={{ marginTop: 20, textAlign: 'center' }}>
    <img style={{ width: 80 }} src={spinner} alt="spinner" />
  </div>
);

export default LoadingSpinner;
