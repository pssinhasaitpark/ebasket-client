import React from 'react';
import spinner from '../assests/images/spinner.gif'; 
import './LoadingSpiner.css'; 
import './AddressLoader.css';
import addspinner from '../asset/images/address-loading-loader.gif'

 export const LoadingSpinner = () => {
  return (
    <div className="overlay">
    <div className="spinner-container">
      <img src={spinner} alt="Loading..." className="spinner" />
    </div>
    </div>
  );
};


export const AddressLoader = () => {
  return (
    <div>
 <div className="overlay">
    <div className="spinner-container">
      <img src={addspinner} alt="Loading..." className="spinner" />
      <p>Processing...</p>
    </div>
    </div>

    </div>
  )
}

// export AddressLoaderLoadingSpinner ;
