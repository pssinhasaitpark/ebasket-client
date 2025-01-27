import React from 'react';
import spinner from '../assests/images/spinner.gif'; 
import './LoadingSpiner.css'; 

const LoadingSpinner = () => {
  return (
    <div className="overlay">
    <div className="spinner-container">
      <img src={spinner} alt="Loading..." className="spinner" />
    </div>
    </div>
  );
};

export default LoadingSpinner;
