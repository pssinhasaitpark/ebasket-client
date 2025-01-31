import React from 'react';

function Success() {
  return (
    <div className="container mt-5 border h-100">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center fw-bolder fs-1">Krishna Chouhan, Your order has been successful</h2>
              <p className="card-text text-center">
                Check your order status in <a href="#" className='text-decoration-none text-success fw-bold '>My Orders</a> about next steps information.
              </p>
              <div className="text-center">
                {/* <img src="https://www.flaticon.com/free-icons/party-hat" alt="Party Hat" width="100" height="100" /> */}
                🎉
              </div>
              <h4 className="card-title text-center mt-3">Preparing your order</h4>
              <p className="card-text text-center">
                Your order will be prepared and will come soon
              </p>
              <div className="text-center mt-3">
                <button className="btn btn-success w-100 p-3">View Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
