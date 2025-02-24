import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createorders } from '../store/slices/orderSlice';

const useCreateOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createOrder = () => {
    const orderData = JSON.parse(localStorage.getItem("orderData"));

    if (orderData) {
      dispatch(createorders(orderData)) 
        .then(() => {
          localStorage.removeItem('cart'); 
          localStorage.removeItem('orderData');
          navigate('/success'); 
        })
        .catch((err) => {
          console.error('Error creating order:', err);
        });
    } else {
      alert('No order data found in localStorage!');
    }
  };

  return { createOrder };
};

export default useCreateOrder;
