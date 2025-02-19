import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createorders } from '../store/slices/orderSlice';

const useCreateOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createOrder = (cart) => {
    if (cart && cart.length > 0) {
      dispatch(createorders({ items: cart }))
        .then(() => {
          localStorage.removeItem('cart'); //Clear the cart after placing the order
          navigate('/success');
        })
        .catch((err) => {
          console.error('Error creating order:', err);
        });
    } else {
      alert('Your cart is empty!');
    }
  };

  
  
  return { createOrder };
};

export default useCreateOrder;
