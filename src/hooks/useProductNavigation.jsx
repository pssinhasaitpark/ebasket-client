import { useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const useProductNavigation = () => {
  const navigate = useNavigate();

  const handleCardClick = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/items/itembyid/${id}`);
      const productDetails = await response.json();
      navigate(`/productDetail/${id}`, { state: { productDetails } });
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return handleCardClick;
};

export default useProductNavigation;