import React from 'react';
import spinner from '../asset/images/spinner.gif'; 

import './spinner.css';
import addspinner from '../asset/images/address-loading-loader.gif'

 export const LoadingSpinner = () => {
  return (
    <div className="loading overlay">
    <div className="loading spinner-container">
      <img src={spinner} alt="Loading..." className="spinner" />
    </div>
    </div>
  );
};


export const AddressLoader = () => {
  return (
    <div>
 <div className="address overlay">
    <div className="address spinner-container">
      <img src={addspinner} alt="Loading..." className="spinner" />
      <p>Processing...</p>
    </div>
    </div>

    </div>
  )
}

// export AddressLoaderLoadingSpinner ;
