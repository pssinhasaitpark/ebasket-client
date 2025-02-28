import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../asset/images/icons8-party-popper-96.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function Success() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.auth.username);
  const [countdown, setCountdown] = useState(5); 
  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1); 
      } else {
        navigate('/my-order'); 
      }
    }, 1000);
    if (countdown === 5) {
      toast.info(`Redirecting to My Orders in ${countdown} seconds...`);
    }
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <>
      <div className="container mt-5 border h-100">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="shadow-sm">
              <div className="card-body" style={{ padding: "60px " }}>
                <h2 className="card-title text-center fw-bolder fs-1">
                  {username || 'Guest'}, Your order has been successful
                </h2>
                <p className="card-text text-center">
                  Check your order status in <Link to="/my-order" className='text-decoration-none text-success fw-bold '>My Orders</Link> for next steps.
                </p>
                <div className="text-center">
                  <img src={icon} alt="Party Hat" width="100" height="100" />
                </div>
                <h4 className="card-title text-center mt-3">Preparing your order</h4>
                <p className="card-text text-center">
                  Your order will be prepared and will come soon.
                </p>
                <div className="text-center mt-3">
                  <a href="/my-order">
                    <button className="btn btn-success w-100 p-3">View Order</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Success;
